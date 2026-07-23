import BlogForm from "@/components/BlogForm";

export default function NewBlogPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white px-8 py-10">
      <h1 className="text-2xl font-semibold mb-8">New Blog Post</h1>
      <BlogForm />
    </div>
  );
}