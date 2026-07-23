"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function load() {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/blogs");
      const data = await res.json();
      if (data.ok) setBlogs(data.blogs);
      else setError(data.error || "Failed to load blogs");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function toggleStatus(blog) {
    const nextStatus = blog.status === "published" ? "draft" : "published";
    const res = await fetch(`/api/admin/blogs/${blog._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: nextStatus }),
    });
    const data = await res.json();
    if (data.ok) load();
    else alert(data.error || "Update failed");
  }

  async function remove(id) {
    if (!confirm("Ye blog post permanently delete karna hai?")) return;
    const res = await fetch(`/api/admin/blogs/${id}`, { method: "DELETE" });
    const data = await res.json();
    if (data.ok) load();
    else alert(data.error || "Delete failed");
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white px-8 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold">Blogs</h1>
        <Link
          href="/admin/blogs/new"
          className="rounded-full bg-amber-400 px-5 py-2 text-sm font-medium text-neutral-900 hover:bg-amber-300 transition"
        >
          + New Blog Post
        </Link>
      </div>

      {loading && <p className="text-neutral-400">Loading...</p>}
      {error && <p className="text-red-400">{error}</p>}

      {!loading && blogs.length === 0 && (
        <p className="text-neutral-400">
          Abhi tak koi blog post nahi hai. "New Blog Post" se pehla add karein.
        </p>
      )}

      {!loading && blogs.length > 0 && (
        <div className="overflow-x-auto rounded-xl border border-neutral-800">
          <table className="w-full text-sm">
            <thead className="bg-neutral-900 text-neutral-400 text-left">
              <tr>
                <th className="px-4 py-3 font-medium">Title</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Updated</th>
                <th className="px-4 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog._id} className="border-t border-neutral-800">
                  <td className="px-4 py-3">{blog.title}</td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => toggleStatus(blog)}
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        blog.status === "published"
                          ? "bg-emerald-400/10 text-emerald-400"
                          : "bg-neutral-400/10 text-neutral-300"
                      }`}
                    >
                      {blog.status}
                    </button>
                  </td>
                  <td className="px-4 py-3 text-neutral-400">
                    {new Date(blog.updatedAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 text-right space-x-3">
                    <Link
                      href={`/admin/blogs/${blog._id}`}
                      className="text-amber-400 hover:underline"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => remove(blog._id)}
                      className="text-red-400 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}