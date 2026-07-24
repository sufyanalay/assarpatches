"use client";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink">
      {/* CREATIVE BACKGROUND — a stitched dot-grid + soft thread-like diagonal, no flat video wash */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(212,175,55,0.35) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-1/3 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.15]"
        preserveAspectRatio="none"
      >
        <line x1="0%" y1="15%" x2="100%" y2="0%" stroke="#D4AF37" strokeWidth="1" strokeDasharray="6 8" />
        <line x1="0%" y1="100%" x2="100%" y2="82%" stroke="#D4AF37" strokeWidth="1" strokeDasharray="6 8" />
      </svg>

      {/* SCROLLING MARQUEE — a stitched "label tape" of patch types for motion & energy */}
      <div className="relative z-10 overflow-hidden border-b border-gold/15 bg-gold/5 py-2">
        <div className="animate-marquee flex w-max gap-8 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.3em] text-gold/70">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-8">
              {["PVC Patches", "Embroidered", "Sublimation", "Woven", "Leather", "Export Quality"].map((t) => (
                <span key={t} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-gold" />
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:py-20">
        {/* TEXT SIDE */}
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Custom Patches & Embroidery
          </p>

          <h1 className="font-serif text-3xl font-semibold leading-[1.1] text-cream sm:text-4xl lg:text-5xl xl:text-[3.4rem]">
            Where your brand
            <br />
            becomes <span className="italic text-gold">craft</span>
          </h1>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/65 sm:text-base">
            We turn ideas into wearable identity — precision PVC, embroidered,
            sublimation, woven and leather patches, crafted to your brand with
            an export-quality finish.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#pvc-patches"
              className="rounded-full bg-gold px-7 py-3 text-center text-sm font-semibold text-ink shadow-lg shadow-gold/20 transition hover:bg-gold-dark"
            >
              Explore Our Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-cream/25 px-7 py-3 text-center text-sm font-semibold text-cream transition hover:border-gold hover:text-gold"
            >
              Request a Quote
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-6">
            {[
              ["500+", "Brands Served"],
              ["10+", "Years Experience"],
              ["100%", "Custom Made"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="font-serif text-2xl font-bold text-gold">{n}</p>
                <p className="text-[10px] uppercase tracking-[0.14em] text-cream/55">{l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* VISUAL SIDE — the product video, framed like a stitched patch */}
        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative rounded-[28px] border-2 border-dashed border-gold/35 bg-ink/40 p-2.5 backdrop-blur-sm">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-ink shadow-2xl shadow-black/40 lg:aspect-[5/4]">
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
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            </div>
          </div>
          {/* floating badge chip — overlaps the frame like a sewn-on tag */}
          <div className="absolute -bottom-4 -left-3 hidden rounded-2xl border border-gold/30 bg-ink px-4 py-3 shadow-xl sm:block lg:-bottom-5 lg:-left-5">
            <p className="font-serif text-xl font-bold text-gold">5</p>
            <p className="text-[10px] uppercase tracking-[0.14em] text-cream/60">Patch Types</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 22s linear infinite;
        }
      `}</style>
    </section>
  );
}