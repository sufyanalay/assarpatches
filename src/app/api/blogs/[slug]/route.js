import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";

export async function GET(req, { params }) {
  try {
    await connectDB();
    const { slug } = await params;
    const blog = await Blog.findOne({ slug, status: "published" }).lean();
    if (!blog) return Response.json({ ok: false, error: "Not found" }, { status: 404 });
    return Response.json({ ok: true, blog });
  } catch (err) {
    return Response.json({ ok: false, error: err.message }, { status: 500 });
  }
}