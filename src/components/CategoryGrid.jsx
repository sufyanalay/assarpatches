import Link from "next/link";

export default function CategoryGrid({ sections }) {
  if (!sections?.length) return null;

  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">Our Craft</p>
          <h2 className="mt-2 font-serif text-4xl font-bold text-ink sm:text-5xl">Product Categories</h2>
          <p className="mt-3 text-ink/60">
            Explore our full range of custom patch manufacturing.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((s) => {
            const thumb = s.image?.url || s.slides?.[0]?.url;
            return (
              <div
                key={s._id}
                className="group overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-[4/3] overflow-hidden bg-ink/5">
                  {thumb ? (
                    <img
                      src={thumb}
                      alt={s.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center font-serif text-5xl text-ink/15">
                      {s.title?.[0]}
                    </div>
                  )}
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-xl font-bold text-ink">{s.title}</h3>
                  {s.tagline && <p className="mt-2 text-sm text-ink/60">{s.tagline}</p>}
                  <Link
                    href={`/patches/${s.slug}`}
                    className="mt-5 inline-block rounded-full bg-gold-dark px-6 py-2.5 text-sm font-semibold text-cream transition hover:bg-ink"
                  >
                    View All
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}