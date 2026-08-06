import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { notFound } from "next/navigation";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://assarpatches.com";

async function getBlog(slug) {
  await connectDB();
  const blog = await Blog.findOne({ slug, status: "published" }).lean();
  return blog;
}

async function getRecent(excludeSlug) {
  await connectDB();
  const blogs = await Blog.find({ status: "published", slug: { $ne: excludeSlug } })
    .sort({ publishedAt: -1 })
    .limit(3)
    .select("title slug coverImage")
    .lean();
  return blogs;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  if (!blog) return {};

  const title = blog.metaTitle || blog.title;
  const description = blog.metaDescription || blog.excerpt;

  return {
    title: `${title} | Assar Patches`,
    description,
    keywords: blog.keywords,
    alternates: { canonical: `/blogs/${blog.slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      url: `${SITE_URL}/blogs/${blog.slug}`,
      images: blog.coverImage?.url ? [{ url: blog.coverImage.url }] : [],
      publishedTime: blog.publishedAt,
      authors: [blog.author],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: blog.coverImage?.url ? [blog.coverImage.url] : [],
    },
  };
}

export const revalidate = 60;

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  if (!blog) notFound();

  const recent = JSON.parse(JSON.stringify(await getRecent(slug)));
  const pageUrl = `${SITE_URL}/blogs/${blog.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.excerpt,
    image: blog.coverImage?.url ? [blog.coverImage.url] : [],
    author: { "@type": "Organization", name: blog.author || "Assar Patches" },
    publisher: { "@type": "Organization", name: "Assar Patches" },
    datePublished: blog.publishedAt,
    dateModified: blog.updatedAt,
    mainEntityOfPage: pageUrl,
  };

  const dateLabel = blog.publishedAt
    ? new Date(blog.publishedAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
    : "";

  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="bg-cream">
        {/* Banner header */}
        <div className="relative overflow-hidden bg-ink py-20 sm:py-24">
          <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative mx-auto max-w-4xl px-5 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Journal</p>
            <h1 className="mt-3 font-serif text-3xl font-bold text-cream sm:text-4xl lg:text-5xl">
              {blog.title}
            </h1>
          </div>
        </div>

        <article className="mx-auto max-w-3xl px-5 py-14">
          {/* Meta + share row */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/10 pb-6">
            <p className="text-sm text-ink/50">
              {blog.author} · {dateLabel}
            </p>
            <div className="flex items-center gap-2">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 text-ink/60 transition hover:border-gold-dark hover:text-gold-dark"
              >
                <FaFacebookF size={14} />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(blog.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on X"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 text-ink/60 transition hover:border-gold-dark hover:text-gold-dark"
              >
                <FaTwitter size={14} />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 text-ink/60 transition hover:border-gold-dark hover:text-gold-dark"
              >
                <FaLinkedinIn size={14} />
              </a>
            </div>
          </div>

          {blog.coverImage?.url && (
            <img
              src={blog.coverImage.url}
              alt={blog.title}
              className="mt-8 w-full rounded-2xl border border-ink/10"
            />
          )}

          <div
            className="prose prose-neutral mt-8 max-w-none prose-headings:font-serif prose-headings:text-ink prose-p:text-ink/70 prose-a:text-gold-dark"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </article>

        {/* Read our recent articles */}
        {recent.length > 0 && (
          <div className="border-t border-ink/10 bg-white py-16">
            <div className="mx-auto max-w-6xl px-5">
              <h2 className="font-serif text-2xl font-bold text-ink sm:text-3xl">Read our recent articles</h2>
              <div className="mt-8 grid gap-8 sm:grid-cols-3">
                {recent.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blogs/${r.slug}`}
                    className="group block overflow-hidden rounded-2xl border border-ink/10 bg-cream transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    {r.coverImage?.url && (
                      <div className="aspect-[16/10] overflow-hidden bg-ink/5">
                        <img
                          src={r.coverImage.url}
                          alt={r.title}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="p-5">
                      <span className="inline-block rounded-full bg-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-gold-dark">
                        Blog
                      </span>
                      <h3 className="mt-3 font-serif text-base font-bold leading-snug text-ink group-hover:text-gold-dark">
                        {r.title}
                      </h3>
                      <span className="mt-3 inline-block text-xs font-semibold uppercase tracking-wide text-gold-dark">
                        Read More →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}