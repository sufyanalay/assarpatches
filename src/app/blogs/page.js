import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-950 text-white px-6 md:px-16 py-20">
      <div className="max-w-5xl mx-auto">
        <p className="text-amber-400 text-xs tracking-widest uppercase mb-3">Journal</p>
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">From the workshop</h1>
        <p className="text-neutral-400 max-w-xl mb-14">
          Guides, craft notes and updates on custom patches and embroidery — straight from the
          Assar Patches production floor.
        </p>

        {blogs.length === 0 && (
          <p className="text-neutral-500">Blog posts jald hi aa rahe hain.</p>
        )}

        <div className="grid md:grid-cols-2 gap-10">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="group block rounded-2xl overflow-hidden border border-neutral-800 hover:border-amber-400/50 transition"
            >
              {blog.coverImage?.url && (
                <div className="aspect-[16/9] overflow-hidden bg-neutral-900">
                  <img
                    src={blog.coverImage.url}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-medium mb-2 group-hover:text-amber-400 transition">
                  {blog.title}
                </h2>
                {blog.excerpt && (
                  <p className="text-neutral-400 text-sm line-clamp-2">{blog.excerpt}</p>
                )}
                <p className="text-neutral-600 text-xs mt-4">
                  {blog.author} ·{" "}
                  {blog.publishedAt
                    ? new Date(blog.publishedAt).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })
                    : ""}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      </main>
      <Footer />
    </>
  );
}