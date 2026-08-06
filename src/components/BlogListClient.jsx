"use client";
import { useState, useMemo } from "react";
import Link from "next/link";

const PER_PAGE = 9;

export default function BlogListClient({ blogs }) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return blogs;
    return blogs.filter(
      (b) =>
        b.title?.toLowerCase().includes(q) ||
        b.excerpt?.toLowerCase().includes(q)
    );
  }, [blogs, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <div>
      {/* Search bar */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
          placeholder="Search for blogs..."
          className="w-full max-w-md rounded-full border border-ink/15 bg-white px-5 py-2.5 text-sm text-ink outline-none focus:border-gold-dark sm:w-80"
        />
      </div>

      {current.length === 0 ? (
        <p className="mt-16 text-center text-ink/40">No blog posts found.</p>
      ) : (
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {current.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="group block overflow-hidden rounded-2xl border border-ink/10 bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              {blog.coverImage?.url && (
                <div className="aspect-[16/10] overflow-hidden bg-ink/5">
                  <img
                    src={blog.coverImage.url}
                    alt={blog.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-5">
                <span className="inline-block rounded-full bg-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-gold-dark">
                  Blog
                </span>
                <h2 className="mt-3 font-serif text-lg font-bold leading-snug text-ink group-hover:text-gold-dark">
                  {blog.title}
                </h2>
                <span className="mt-3 inline-block text-xs font-semibold uppercase tracking-wide text-gold-dark">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-14 flex items-center justify-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="rounded-full border border-ink/15 px-4 py-2 text-sm font-medium text-ink/70 transition hover:border-gold-dark hover:text-gold-dark disabled:opacity-30"
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`h-9 w-9 rounded-full text-sm font-medium transition ${
                p === page
                  ? "bg-ink text-cream"
                  : "border border-ink/15 text-ink/70 hover:border-gold-dark hover:text-gold-dark"
              }`}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="rounded-full border border-ink/15 px-4 py-2 text-sm font-medium text-ink/70 transition hover:border-gold-dark hover:text-gold-dark disabled:opacity-30"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}