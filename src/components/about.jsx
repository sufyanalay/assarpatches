export default function AboutSection() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center">
        {/* IMAGES */}
        <div className="relative mx-auto w-full max-w-md pb-10 pr-10 lg:max-w-none">
          <div className="aspect-[4/5] w-3/4 overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1604176424472-9d7122c0b98d?w=800&q=80"
              alt="Patch making process"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 aspect-[4/5] w-2/5 overflow-hidden rounded-2xl border-4 border-cream shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&q=80"
              alt="Finished patches"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* TEXT */}
        <div>
          <p className="inline-block rounded-full bg-ink px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cream">
            Who We Are
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-ink sm:text-4xl">
            Trusted Custom Patch Manufacturing Partner
          </h2>
          <blockquote className="mt-6 border-l-4 border-gold-dark pl-4 text-ink/70">
            Our commitment to quality, consistency and craftsmanship makes Assar
            Patches a trusted manufacturing partner for brands seeking dependable
            custom patch production.
          </blockquote>
          <p className="mt-5 leading-relaxed text-ink/60">
            At Assar Patches, we believe manufacturing is more than production —
            it's the foundation of trust between brands and their customers. From
            PVC and embroidered to sublimation, woven and leather patches, we help
            businesses bring high-quality custom branding to life through reliable
            bulk manufacturing and export-focused production standards.
          </p>
          <a
            href="/#contact"
            className="mt-7 inline-block rounded-full bg-gold-dark px-7 py-3 text-sm font-semibold text-cream transition hover:bg-ink"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}