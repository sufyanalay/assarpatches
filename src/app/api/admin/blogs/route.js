import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";
import { isAdmin } from "@/lib/checkAuth";

function slugify(str) {
  return (str || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function GET() {
  if (!(await isAdmin())) return Response.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  try {
    await connectDB();
    const blogs = await Blog.find().sort({ createdAt: -1 }).lean();
    return Response.json({ ok: true, blogs });
  } catch (err) {
    return Response.json({ ok: false, error: err.message }, { status: 500 });
  }
}

export async function POST(req) {
  if (!(await isAdmin())) return Response.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  try {
    await connectDB();
    const body = await req.json();

    const slug = slugify(body.slug || body.title);
    if (!body.title || !slug) {
      return Response.json({ ok: false, error: "Title required" }, { status: 400 });
    }
    if (!body.content) {
      return Response.json({ ok: false, error: "Content required" }, { status: 400 });
    }

    const exists = await Blog.findOne({ slug });
    if (exists) return Response.json({ ok: false, error: "Slug already exists" }, { status: 400 });

    const status = body.status === "published" ? "published" : "draft";

    const blog = await Blog.create({
      title: body.title,
      slug,
      excerpt: body.excerpt || "",
      content: body.content,
      coverImage: {
        url: body.coverImage?.url || "",
        publicId: body.coverImage?.publicId || "",
      },
      metaTitle: body.metaTitle || body.title,
      metaDescription: body.metaDescription || body.excerpt || "",
      keywords: Array.isArray(body.keywords)
        ? body.keywords
        : (body.keywords || "").split(",").map((k) => k.trim()).filter(Boolean),
      author: body.author || "Admin",
      status,
      publishedAt: status === "published" ? new Date() : null,
    });

    return Response.json({ ok: true, blog });
  } catch (err) {
    return Response.json({ ok: false, error: err.message }, { status: 500 });
  }
}