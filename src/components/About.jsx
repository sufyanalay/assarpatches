import RotatingImage from "./RotatingImage";

const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=900&q=80",
  "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=900&q=80",
];

export default function About({ images = [] }) {
  const pool = images.length ? images : FALLBACK_IMAGES;
  const half = pool.length > 1 ? Math.floor(pool.length / 2) : 0;

  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center">
        {/* IMAGES */}
        <div className="relative mx-auto w-full max-w-md pb-10 pr-8 lg:max-w-none">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-ink/10 shadow-sm">
            <RotatingImage
              images={pool}
              alt="Assar Patches manufacturing"
              className="h-full w-full object-cover"
              startOffset={0}
              intervalMs={4000}
            />
          </div>
          <div className="absolute -bottom-2 -right-2 aspect-[3/4] w-2/5 overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:w-1/2">
            <RotatingImage
              images={pool}
              alt="Custom patch sample"
              className="h-full w-full object-cover"
              startOffset={half}
              intervalMs={4600}
            />
          </div>
        </div>

        {/* TEXT */}
        <div>
          <p className="inline-block rounded-full bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
            Who We Are
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-ink sm:text-4xl">
            Trusted OEM Patches Manufacturing Partner
          </h2>
          <blockquote className="mt-6 border-l-4 border-gold-dark pl-5 text-ink/70">
            Our commitment to quality, consistency, and long-term partnerships makes
            Assar Patches a trusted manufacturing partner for brands seeking
            dependable custom patch production.
          </blockquote>
          <p className="mt-5 leading-relaxed text-ink/60">
            At Assar Patches, we believe manufacturing is more than production —
            it's the foundation of trust between brands and their customers. As a
            specialized custom patches manufacturer, we help businesses bring
            high-quality PVC, embroidered, sublimation, woven and leather patches
            to market through reliable bulk manufacturing, professional
            craftsmanship, and export-focused production standards.
          </p>
          <a
            href="/#categories"
            className="mt-7 inline-block rounded-full bg-gold-dark px-7 py-3 text-sm font-semibold text-cream transition hover:bg-ink"
          >
            Explore Our Work
          </a>
        </div>
      </div>
    </section>
  );
}