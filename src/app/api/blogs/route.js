import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";

export async function GET() {
  try {
    await connectDB();
    const blogs = await Blog.find({ status: "published" })
      .sort({ publishedAt: -1 })
      .select("title slug excerpt coverImage author publishedAt")
      .lean();
    return Response.json({ ok: true, blogs });
  } catch (err) {
    return Response.json({ ok: false, error: err.message }, { status: 500 });
  }
}