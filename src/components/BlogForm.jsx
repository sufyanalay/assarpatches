"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BlogForm({ initial, blogId }) {
  const router = useRouter();
  const [title, setTitle] = useState(initial?.title || "");
  const [slug, setSlug] = useState(initial?.slug || "");
  const [excerpt, setExcerpt] = useState(initial?.excerpt || "");
  const [content, setContent] = useState(initial?.content || "");
  const [metaTitle, setMetaTitle] = useState(initial?.metaTitle || "");
  const [metaDescription, setMetaDescription] = useState(initial?.metaDescription || "");
  const [keywords, setKeywords] = useState((initial?.keywords || []).join(", "));
  const [author, setAuthor] = useState(initial?.author || "Admin");
  const [status, setStatus] = useState(initial?.status || "draft");
  const [coverImage, setCoverImage] = useState(initial?.coverImage || { url: "", publicId: "" });
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function handleImageUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError("");
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok || data.error) throw new Error(data.error || "Upload failed");
      setCoverImage({ url: data.url, publicId: data.publicId });
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const payload = {
      title,
      slug,
      excerpt,
      content,
      metaTitle,
      metaDescription,
      keywords,
      author,
      status,
      coverImage,
    };

    try {
      const url = blogId ? `/api/admin/blogs/${blogId}` : "/api/admin/blogs";
      const method = blogId ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || "Save failed");
      router.push("/aqibpvcadmin321/blogs");
      router.refresh();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl space-y-6">
      {error && (
        <div className="rounded-lg bg-red-400/10 text-red-400 px-4 py-3 text-sm">{error}</div>
      )}

      <div>
        <label className="block text-sm text-neutral-400 mb-1">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full rounded-lg bg-neutral-900 border border-neutral-800 px-4 py-2.5 text-white focus:outline-none focus:border-amber-400"
        />
      </div>

      <div>
        <label className="block text-sm text-neutral-400 mb-1">
          Slug (URL) — khali chodein to title se auto-generate hoga
        </label>
        <input
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          placeholder="e.g. custom-embroidered-patches-guide"
          className="w-full rounded-lg bg-neutral-900 border border-neutral-800 px-4 py-2.5 text-white focus:outline-none focus:border-amber-400"
        />
      </div>

      <div>
        <label className="block text-sm text-neutral-400 mb-1">Cover Image</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} className="text-sm text-neutral-300" />
        {uploading && <p className="text-xs text-neutral-500 mt-1">Uploading...</p>}
        {coverImage?.url && (
          <img src={coverImage.url} alt="cover" className="mt-3 h-40 rounded-lg object-cover border border-neutral-800" />
        )}
      </div>

      <div>
        <label className="block text-sm text-neutral-400 mb-1">Excerpt (short summary)</label>
        <textarea
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          rows={2}
          className="w-full rounded-lg bg-neutral-900 border border-neutral-800 px-4 py-2.5 text-white focus:outline-none focus:border-amber-400"
        />
      </div>

      <div>
        <label className="block text-sm text-neutral-400 mb-1">Content (HTML)</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={16}
          className="w-full rounded-lg bg-neutral-900 border border-neutral-800 px-4 py-2.5 text-white font-mono text-sm focus:outline-none focus:border-amber-400"
        />
      </div>

      <div className="border-t border-neutral-800 pt-6 space-y-4">
        <h3 className="text-sm font-medium text-amber-400">SEO Settings</h3>

        <div>
          <label className="block text-sm text-neutral-400 mb-1">Meta Title</label>
          <input
            value={metaTitle}
            onChange={(e) => setMetaTitle(e.target.value)}
            placeholder="Google search results mein ye title dikhega"
            className="w-full rounded-lg bg-neutral-900 border border-neutral-800 px-4 py-2.5 text-white focus:outline-none focus:border-amber-400"
          />
        </div>

        <div>
          <label className="block text-sm text-neutral-400 mb-1">Meta Description</label>
          <textarea
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
            rows={2}
            placeholder="150-160 characters, search results ka summary"
            className="w-full rounded-lg bg-neutral-900 border border-neutral-800 px-4 py-2.5 text-white focus:outline-none focus:border-amber-400"
          />
        </div>

        <div>
          <label className="block text-sm text-neutral-400 mb-1">Keywords (comma separated)</label>
          <input
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="custom patches, embroidered patches pakistan, iron on patches"
            className="w-full rounded-lg bg-neutral-900 border border-neutral-800 px-4 py-2.5 text-white focus:outline-none focus:border-amber-400"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div>
          <label className="block text-sm text-neutral-400 mb-1">Author</label>
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="rounded-lg bg-neutral-900 border border-neutral-800 px-4 py-2.5 text-white focus:outline-none focus:border-amber-400"
          />
        </div>
        <div>
          <label className="block text-sm text-neutral-400 mb-1">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="rounded-lg bg-neutral-900 border border-neutral-800 px-4 py-2.5 text-white focus:outline-none focus:border-amber-400"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={saving || uploading}
        className="rounded-full bg-amber-400 px-6 py-2.5 text-sm font-medium text-neutral-900 hover:bg-amber-300 transition disabled:opacity-50"
      >
        {saving ? "Saving..." : blogId ? "Update Blog" : "Publish Blog"}
      </button>
    </form>
  );
}