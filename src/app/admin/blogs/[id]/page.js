import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";
import BlogForm from "@/components/BlogForm";
import { notFound } from "next/navigation";

export default async function EditBlogPage({ params }) {
  const { id } = await params;
  await connectDB();
  const blog = await Blog.findById(id).lean();
  if (!blog) notFound();

  const initial = JSON.parse(JSON.stringify(blog));

  return (
    <div className="min-h-screen bg-neutral-950 text-white px-8 py-10">
      <h1 className="text-2xl font-semibold mb-8">Edit Blog Post</h1>
      <BlogForm initial={initial} blogId={id} />
    </div>
  );
}