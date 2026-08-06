"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SECTION_OPTIONS = [
  "PVC Patches",
  "Embroidered Patches",
  "Sublimation Patches",
  "Woven Patches",
  "Leather Patches",
  "Others",
];

export default function AdminDashboard() {
  const router = useRouter();
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ title: "", tagline: "", description: "" });
  const [customTitle, setCustomTitle] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);

  const usedTitles = sections.map((s) => s.title);
  const availableOptions = SECTION_OPTIONS.filter((opt) => !usedTitles.includes(opt));

  const load = async () => {
    const res = await fetch("/api/sections");
    const data = await res.json();
    if (data.ok) setSections(data.sections);
    setLoading(false);
  };
  useEffect(() => { load(); }, []);

  const pickImage = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    setImageFile(f);
    setImagePreview(URL.createObjectURL(f));
  };

  const addSection = async (e) => {
    e.preventDefault();
    const finalTitle = customTitle.trim() || form.title;
    if (!finalTitle) return alert("Please select a section or type a custom name");
    setSaving(true);

    let image = null;
    if (imageFile) {
      setUploading(true);
      const fd = new FormData();
      fd.append("file", imageFile);
      const up = await fetch("/api/upload", { method: "POST", body: fd });
      const upData = await up.json();
      setUploading(false);
      if (!upData.ok) { setSaving(false); return alert(upData.error); }
      image = { url: upData.url, publicId: upData.publicId };
    }

    const res = await fetch("/api/sections", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, title: finalTitle, image }),
    });
    const data = await res.json();
    setSaving(false);
    if (data.ok) {
      setForm({ title: "", tagline: "", description: "" });
      setCustomTitle("");
      setImageFile(null);
      setImagePreview("");
      load();
    }
    else alert(data.error);
  };

  const removeSection = async (id, title) => {
    if (!confirm('Delete "' + title + '" and all its images? This cannot be undone.')) return;
    const res = await fetch("/api/sections/" + id, { method: "DELETE" });
    const data = await res.json();
    if (data.ok) load(); else alert(data.error);
  };

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-cream p-6 sm:p-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between">
          <h1 className="font-serif text-3xl font-bold text-ink">Assar <span className="text-gold-dark">Admin</span></h1>
          <button onClick={logout} className="rounded-full bg-ink px-5 py-2 text-sm font-semibold text-cream hover:bg-ink-soft">Logout</button>
        </div>

        <form onSubmit={addSection} className="mt-8 rounded-2xl border border-ink/10 bg-white p-6">
          <h2 className="font-serif text-xl font-bold text-ink">Add New Section</h2>

          <div className="mt-4">
            <label className="mb-1.5 block text-sm text-neutral-600">Type a custom section name</label>
            <input
              placeholder="e.g. Chenille Patches, Rubber Badges..."
              value={customTitle}
              onChange={(e) => setCustomTitle(e.target.value)}
              className="w-full rounded-xl border border-ink/15 px-4 py-2.5 outline-none focus:border-gold"
            />
          </div>

          <p className="mt-3 text-center text-xs uppercase tracking-widest text-neutral-400">or pick from quick list</p>

          {availableOptions.length === 0 && (
            <p className="mt-2 text-sm text-neutral-500">
              Sab quick-list categories already add ho chuki hain — upar custom naam type kar sakte hain.
            </p>
          )}
          <div className="mt-2 grid gap-4 sm:grid-cols-2">
            <select value={form.title}
              onChange={(e) => { setForm({ ...form, title: e.target.value }); setCustomTitle(""); }}
              disabled={availableOptions.length === 0}
              className="rounded-xl border border-ink/15 px-4 py-2.5 outline-none focus:border-gold bg-white disabled:opacity-50">
              <option value="">— Select section —</option>
              {availableOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <input placeholder="Tagline (short)" value={form.tagline}
              onChange={(e) => setForm({ ...form, tagline: e.target.value })}
              className="rounded-xl border border-ink/15 px-4 py-2.5 outline-none focus:border-gold" />
          </div>
          <textarea placeholder="Description" value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })} rows={2}
            className="mt-4 w-full rounded-xl border border-ink/15 px-4 py-2.5 outline-none focus:border-gold" />

          <div className="mt-4">
            <label className="mb-1.5 block text-sm text-neutral-600">Category Image (shown on homepage card)</label>
            <input type="file" accept="image/*" onChange={pickImage}
              className="block w-full text-sm text-neutral-600 file:mr-3 file:rounded-full file:border-0 file:bg-ink file:px-4 file:py-2 file:text-sm file:font-semibold file:text-cream" />
            {imagePreview && (
              <img src={imagePreview} alt="preview" className="mt-3 h-28 w-28 rounded-lg object-cover border border-ink/10" />
            )}
          </div>

          <button disabled={saving} className="mt-4 rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-ink hover:bg-gold-dark disabled:opacity-60">
            {uploading ? "Uploading image..." : saving ? "Adding..." : "Add Section"}
          </button>
        </form>

        <h2 className="mt-10 font-serif text-2xl font-bold text-ink">Your Sections</h2>
        {loading ? (
          <p className="mt-4 text-neutral-500">Loading...</p>
        ) : sections.length === 0 ? (
          <p className="mt-4 rounded-xl border border-ink/10 bg-white p-6 text-neutral-500">No sections yet. Add your first one above.</p>
        ) : (
          <div className="mt-4 space-y-3">
            {sections.map((s) => (
              <div key={s._id} className="flex items-center justify-between rounded-2xl border border-ink/10 bg-white p-5">
                <div className="flex items-center gap-4">
                  {s.image?.url ? (
                    <img src={s.image.url} alt={s.title} className="h-14 w-14 rounded-lg object-cover border border-ink/10" />
                  ) : (
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-ink/5 font-serif text-lg text-ink/30">{s.title[0]}</div>
                  )}
                  <div>
                    <p className="font-serif text-lg font-bold text-ink">{s.title}</p>
                    <p className="text-sm text-neutral-500">{(s.tagline || "No tagline") + " · " + (s.subSections?.length || 0) + " sub-sections · " + (s.slides?.length || 0) + " images"}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link href={"/admin/sections/" + s._id} className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-cream hover:bg-ink-soft">Manage</Link>
                  <button onClick={() => removeSection(s._id, s.title)} className="rounded-full border border-red-300 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50">Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}