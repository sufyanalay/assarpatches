import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";
import { notFound } from "next/navigation";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://assarpatches.com";

async function getBlog(slug) {
  await connectDB();
  const blog = await Blog.findOne({ slug, status: "published" }).lean();
  return blog;
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
    mainEntityOfPage: `${SITE_URL}/blogs/${blog.slug}`,
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-white px-6 md:px-16 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-3xl mx-auto">
        <p className="text-amber-400 text-xs tracking-widest uppercase mb-3">Journal</p>
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">{blog.title}</h1>
        <p className="text-neutral-500 text-sm mb-10">
          {blog.author} ·{" "}
          {blog.publishedAt
            ? new Date(blog.publishedAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })
            : ""}
        </p>

        {blog.coverImage?.url && (
          <img
            src={blog.coverImage.url}
            alt={blog.title}
            className="w-full rounded-2xl mb-10 border border-neutral-800"
          />
        )}

        <div
          className="prose prose-invert prose-amber max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </article>
    </main>
  );
}