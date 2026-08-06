import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogListClient from "@/components/BlogListClient";

export const metadata = {
  title: "Blog | Assar Patches",
  description:
    "Insights, guides and behind-the-scenes on custom patches, embroidery and apparel manufacturing from Assar Patches.",
  alternates: { canonical: "/blogs" },
  openGraph: {
    title: "Blog | Assar Patches",
    description:
      "Insights, guides and behind-the-scenes on custom patches, embroidery and apparel manufacturing from Assar Patches.",
    type: "website",
  },
};

export const revalidate = 60;

export default async function BlogsPage() {
  await connectDB();
  const blogs = await Blog.find({ status: "published" })
    .sort({ publishedAt: -1 })
    .select("title slug excerpt coverImage author publishedAt")
    .lean();

  const plainBlogs = JSON.parse(JSON.stringify(blogs));

  return (
    <>
      <Navbar />
      <main className="bg-cream">
        {/* Banner header */}
        <div className="relative overflow-hidden bg-ink py-20 sm:py-24">
          <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative mx-auto max-w-5xl px-5 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Journal</p>
            <h1 className="mt-3 font-serif text-4xl font-bold text-cream sm:text-5xl lg:text-6xl">
              From the workshop
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-cream/60">
              Guides, craft notes and updates on custom patches and embroidery
              — straight from the Assar Patches production floor.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-5 py-16">
          <BlogListClient blogs={plainBlogs} />
        </div>
      </main>
      <Footer />
    </>
  );
}