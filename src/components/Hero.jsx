"use client";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream">
      {/* faint corner texture */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-16">
        {/* TEXT SIDE */}
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-dark" />
            Custom Patches & Embroidery
          </p>

          <h1 className="font-serif text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            Where your brand
            <br />
            becomes <span className="italic text-gold-dark">craft</span>
          </h1>

          <p className="mt-4 max-w-md text-base leading-relaxed text-ink/65 sm:text-lg">
            We turn ideas into wearable identity — precision PVC, embroidered,
            sublimation, woven and leather patches, crafted to your brand with
            an export-quality finish.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="/#categories"
              className="rounded-full bg-gold-dark px-8 py-3.5 text-sm font-semibold text-cream shadow-lg shadow-gold/20 transition hover:bg-ink"
            >
              Explore Our Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-ink/20 px-8 py-3.5 text-sm font-semibold text-ink transition hover:border-gold-dark hover:text-gold-dark"
            >
              Request a Quote
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-10 gap-y-5 border-t border-ink/10 pt-6">
            {[
              ["500+", "Brands Served"],
              ["10+", "Years Experience"],
              ["100%", "Custom Made"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="font-serif text-3xl font-bold text-gold-dark">{n}</p>
                <p className="text-[10px] uppercase tracking-[0.14em] text-ink/50">{l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* VISUAL SIDE — framed like a patch: stitched dashed border, rounded corners */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative rounded-[32px] border-2 border-dashed border-gold/50 bg-white p-3 shadow-sm">
            <div className="relative aspect-[4/3.4] overflow-hidden rounded-[24px] bg-ink shadow-2xl shadow-ink/20">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&q=80"
              >
                <source src="/hero.mp4" type="video/mp4" />
              </video>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            </div>
          </div>

          {/* floating badge chip — overlaps the frame like a sewn-on tag */}
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-ink/10 bg-white px-5 py-4 shadow-xl sm:block">
            <p className="font-serif text-2xl font-bold text-gold-dark">5</p>
            <p className="text-[10px] uppercase tracking-[0.14em] text-ink/50">Patch Types</p>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <a
        href="/#categories"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 text-ink/40 transition hover:text-gold-dark lg:block"
        aria-label="Scroll down"
      >
        <span className="flex h-9 w-5 justify-center rounded-full border border-ink/25 pt-1.5">
          <span className="h-2 w-0.5 animate-bounce rounded-full bg-gold-dark" />
        </span>
      </a>
    </section>
  );
}