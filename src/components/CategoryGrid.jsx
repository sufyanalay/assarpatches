import Link from "next/link";
import Reveal from "./Reveal";

export default function CategoryGrid({ sections }) {
  if (!sections?.length) return null;

  return (
    <section id="categories" className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">Our Craft</p>
          <h2 className="mt-2 font-serif text-4xl font-bold text-ink sm:text-5xl">Product Categories</h2>
          <p className="mt-3 text-ink/60">
            Explore our full range of custom patch manufacturing.
          </p>
        </div>

        <div className="no-bar mt-12 flex gap-5 overflow-x-auto pb-2">
          {sections.map((s, i) => {
            const thumb = s.image?.url; // only the dedicated admin-uploaded image, never a product/subsection photo
            return (
              <Reveal key={s._id} delay={i * 80} className="flex-shrink-0">
              <Link
                href={`/patches/${s.slug}`}
                className="group block w-52 overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:w-56"
              >
                <div className="aspect-square overflow-hidden bg-ink/5">
                  {thumb ? (
                    <img
                      src={thumb}
                      alt={s.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center font-serif text-4xl text-ink/15">
                      {s.title?.[0]}
                    </div>
                  )}
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-serif text-base font-bold text-ink">{s.title}</h3>
                  {s.tagline && <p className="mt-1 line-clamp-1 text-xs text-ink/50">{s.tagline}</p>}
                  <span className="mt-3 inline-block rounded-full bg-gold-dark px-4 py-1.5 text-xs font-semibold text-cream transition group-hover:bg-ink">
                    View All
                  </span>
                </div>
              </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}