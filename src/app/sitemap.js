import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";
import Section from "@/models/Section";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://assarpatches.com";

export default async function sitemap() {
  await connectDB();

  const [blogs, sections] = await Promise.all([
    Blog.find({ status: "published" }).select("slug updatedAt").lean(),
    Section.find().select("slug updatedAt").lean(),
  ]);

  const staticRoutes = ["", "/blogs", "/contact"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogs.map((blog) => ({
    url: `${SITE_URL}/blogs/${blog.slug}`,
    lastModified: blog.updatedAt,
  }));

  const sectionRoutes = sections.map((section) => ({
    url: `${SITE_URL}/sections/${section.slug}`,
    lastModified: section.updatedAt,
  }));

  return [...staticRoutes, ...sectionRoutes, ...blogRoutes];
}