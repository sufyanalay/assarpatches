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
  const [passwordForm, setPasswordForm] = useState({ currentPassword: "", newPassword: "", confirmPassword: "" });
  const [passwordStatus, setPasswordStatus] = useState({ error: "", success: "" });
  const [updatingPassword, setUpdatingPassword] = useState(false);

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

  const updatePassword = async (e) => {
    e.preventDefault();
    setPasswordStatus({ error: "", success: "" });

    if (!passwordForm.currentPassword || !passwordForm.newPassword || !passwordForm.confirmPassword) {
      setPasswordStatus({ error: "All password fields are required.", success: "" });
      return;
    }
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordStatus({ error: "New passwords do not match.", success: "" });
      return;
    }
    if (passwordForm.newPassword.length < 8) {
      setPasswordStatus({ error: "New password must be at least 8 characters.", success: "" });
      return;
    }

    setUpdatingPassword(true);
    const res = await fetch("/api/admin/change-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        currentPassword: passwordForm.currentPassword,
        newPassword: passwordForm.newPassword,
      }),
    });
    const data = await res.json();
    setUpdatingPassword(false);

    if (data.ok) {
      setPasswordStatus({ error: "", success: "Password updated successfully." });
      setPasswordForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
    } else {
      setPasswordStatus({ error: data.error || "Unable to update password.", success: "" });
    }
  };

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-cream p-4 sm:p-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="font-serif text-3xl font-bold text-ink">Assar <span className="text-gold-dark">Admin</span></h1>
            <p className="mt-2 text-sm text-neutral-600">Manage categories, sections, and secure admin access from here.</p>
          </div>
          <button onClick={logout} className="rounded-full bg-ink px-5 py-2 text-sm font-semibold text-cream hover:bg-ink-soft">Logout</button>
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-[1.3fr_0.9fr]">
          <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-xl font-bold text-ink">Add New Section</h2>
            <p className="mt-2 text-sm text-neutral-500">Use this panel to create a fresh section for the homepage quickly.</p>
            <form onSubmit={addSection} className="mt-6 space-y-4">
              <div>
                <label className="mb-1.5 block text-sm text-neutral-600">Type a custom section name</label>
                <input
                  placeholder="e.g. Chenille Patches, Rubber Badges..."
                  value={customTitle}
                  onChange={(e) => setCustomTitle(e.target.value)}
                  className="w-full rounded-xl border border-ink/15 px-4 py-2.5 outline-none focus:border-gold"
                />
              </div>

              <p className="text-center text-xs uppercase tracking-widest text-neutral-400">or pick from quick list</p>

              {availableOptions.length === 0 && (
                <p className="text-sm text-neutral-500">
                  All quick-list categories already added — type a custom name above.
                </p>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
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
                className="w-full rounded-xl border border-ink/15 px-4 py-2.5 outline-none focus:border-gold" />

              <div>
                <label className="mb-1.5 block text-sm text-neutral-600">Category Image (shown on homepage card)</label>
                <input type="file" accept="image/*" onChange={pickImage}
                  className="block w-full text-sm text-neutral-600 file:mr-3 file:rounded-full file:border-0 file:bg-ink file:px-4 file:py-2 file:text-sm file:font-semibold file:text-cream" />
                {imagePreview && (
                  <img src={imagePreview} alt="preview" className="mt-3 h-28 w-28 rounded-lg object-cover border border-ink/10" />
                )}
              </div>

              <button disabled={saving} className="w-full rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-ink hover:bg-gold-dark disabled:opacity-60">
                {uploading ? "Uploading image..." : saving ? "Adding..." : "Add Section"}
              </button>
            </form>
          </div>

          <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-xl font-bold text-ink">Change Admin Password</h2>
            <p className="mt-2 text-sm text-neutral-500">Secure the admin panel by updating the password from here.</p>
            <form onSubmit={updatePassword} className="mt-6 space-y-4">
              <div>
                <label className="mb-1.5 block text-sm text-neutral-600">Current password</label>
                <input
                  type="password"
                  value={passwordForm.currentPassword}
                  onChange={(e) => setPasswordForm({ ...passwordForm, currentPassword: e.target.value })}
                  className="w-full rounded-xl border border-ink/15 px-4 py-2.5 outline-none focus:border-gold"
                  required
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm text-neutral-600">New password</label>
                <input
                  type="password"
                  value={passwordForm.newPassword}
                  onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                  className="w-full rounded-xl border border-ink/15 px-4 py-2.5 outline-none focus:border-gold"
                  required
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm text-neutral-600">Confirm new password</label>
                <input
                  type="password"
                  value={passwordForm.confirmPassword}
                  onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
                  className="w-full rounded-xl border border-ink/15 px-4 py-2.5 outline-none focus:border-gold"
                  required
                />
              </div>
              {passwordStatus.error && <p className="rounded-xl bg-red-50 px-4 py-2 text-sm text-red-700">{passwordStatus.error}</p>}
              {passwordStatus.success && <p className="rounded-xl bg-emerald-50 px-4 py-2 text-sm text-emerald-700">{passwordStatus.success}</p>}
              <button type="submit" disabled={updatingPassword}
                className="w-full rounded-full bg-ink px-6 py-2.5 text-sm font-semibold text-cream hover:bg-ink-soft disabled:opacity-60">
                {updatingPassword ? "Updating..." : "Update Password"}
              </button>
            </form>
          </div>
        </div>

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