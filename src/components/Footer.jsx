import { connectDB } from "@/lib/db";
import Section from "@/models/Section";

async function getCategories() {
  try {
    await connectDB();
    const sections = await Section.find()
      .sort({ order: 1, createdAt: 1 })
      .select("title slug")
      .lean();
    return JSON.parse(JSON.stringify(sections));
  } catch {
    return [];
  }
}

export default async function Footer() {
  const categories = await getCategories();

  return (
    <footer id="contact" className="border-t border-ink/10 bg-cream py-14 text-ink">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-xl font-black">
              ASSAR <span className="text-gold-dark">PATCHES</span>
            </h3>
            <p className="mt-3 text-sm text-ink/60">
              PVC, embroidered, sublimation, woven aur leather patches — aapke
              brand ke liye, export quality mein.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold-dark">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-ink/70">
              {categories.map((c) => (
                <li key={c.slug}>
                  <a href={`/patches/${c.slug}`} className="hover:text-gold-dark">
                    {c.title}
                  </a>
                </li>
              ))}
              <li><a href="/blogs" className="hover:text-gold-dark">Blogs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold-dark">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-ink/70">
              <li>Email: assarpatches@gmail.com</li>
              <li>Phone: <a href="tel:+923127370957" className="hover:text-gold-dark">+92 312 7370957</a></li>
              <li>WhatsApp: <a href="https://wa.me/923127370957" target="_blank" rel="noopener noreferrer" className="hover:text-gold-dark">+92 312 7370957</a></li>
              <li>TODO_ADDRESS</li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-ink/10 pt-6 text-center text-xs text-ink/50">
          © 2026 Assar Patches. All rights reserved.
        </p>
      </div>
    </footer>
  );
}