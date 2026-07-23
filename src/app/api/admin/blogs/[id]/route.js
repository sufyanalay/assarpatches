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

export async function GET(req, { params }) {
  if (!(await isAdmin())) return Response.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  try {
    await connectDB();
    const { id } = await params;
    const blog = await Blog.findById(id).lean();
    if (!blog) return Response.json({ ok: false, error: "Not found" }, { status: 404 });
    return Response.json({ ok: true, blog });
  } catch (err) {
    return Response.json({ ok: false, error: err.message }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  if (!(await isAdmin())) return Response.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  try {
    await connectDB();
    const { id } = await params;
    const body = await req.json();

    const update = {
      title: body.title,
      excerpt: body.excerpt || "",
      content: body.content,
      metaTitle: body.metaTitle || body.title,
      metaDescription: body.metaDescription || body.excerpt || "",
      keywords: Array.isArray(body.keywords)
        ? body.keywords
        : (body.keywords || "").split(",").map((k) => k.trim()).filter(Boolean),
      author: body.author || "Admin",
    };

    if (body.coverImage) {
      update.coverImage = {
        url: body.coverImage.url || "",
        publicId: body.coverImage.publicId || "",
      };
    }

    if (body.slug) {
      const slug = slugify(body.slug);
      const exists = await Blog.findOne({ slug, _id: { $ne: id } });
      if (exists) return Response.json({ ok: false, error: "Slug already exists" }, { status: 400 });
      update.slug = slug;
    }

    if (body.status && ["draft", "published"].includes(body.status)) {
      const current = await Blog.findById(id).lean();
      update.status = body.status;
      if (body.status === "published" && current?.status !== "published") {
        update.publishedAt = new Date();
      }
      if (body.status === "draft") {
        update.publishedAt = null;
      }
    }

    const blog = await Blog.findByIdAndUpdate(id, update, { new: true });
    if (!blog) return Response.json({ ok: false, error: "Not found" }, { status: 404 });
    return Response.json({ ok: true, blog });
  } catch (err) {
    return Response.json({ ok: false, error: err.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  if (!(await isAdmin())) return Response.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  try {
    await connectDB();
    const { id } = await params;
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) return Response.json({ ok: false, error: "Not found" }, { status: 404 });
    return Response.json({ ok: true });
  } catch (err) {
    return Response.json({ ok: false, error: err.message }, { status: 500 });
  }
}