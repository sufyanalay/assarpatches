"use client";

import { useEffect, useState } from "react";
import HeroSlider from "./HeroSlider";

export default function Hero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Small delay تاکہ initial hidden state browser پہلے render کر لے
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink"
    >
      {/* FULL-SCREEN BACKGROUND VIDEO */}
      <HeroSlider />

      {/* overlays — keep text readable over the video */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-ink/20" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-32 pb-24">
        <div className="max-w-2xl">
          {/* ========================================
              BADGE
              TOP -> POSITION
          ======================================== */}
          <p
            className={`mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold backdrop-blur-sm
            transition-all duration-700
            ease-[cubic-bezier(0.16,1,0.3,1)]
            ${
              animate
                ? "translate-y-0 opacity-100"
                : "-translate-y-10 opacity-0"
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Custom Patches & Embroidery
          </p>

          {/* ========================================
              HEADING
              LEFT -> POSITION
          ======================================== */}
          <h1
            className={`font-serif text-5xl font-semibold leading-[1.05] text-cream sm:text-6xl lg:text-7xl
            transition-all delay-150 duration-[1000ms]
            ease-[cubic-bezier(0.16,1,0.3,1)]
            ${
              animate
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            Where your brand
            <br />
            becomes <span className="italic text-gold">craft</span>
          </h1>

          {/* ========================================
              DESCRIPTION
              RIGHT -> POSITION
          ======================================== */}
          <p
            className={`mt-6 max-w-md text-base leading-relaxed text-cream/70 sm:text-lg
            transition-all delay-300 duration-[900ms]
            ease-[cubic-bezier(0.16,1,0.3,1)]
            ${
              animate ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
            }`}
          >
            We turn ideas into wearable identity — precision PVC, embroidered,
            sublimation, woven and leather patches, crafted to your brand with
            an export-quality finish.
          </p>

          {/* ========================================
              BUTTONS
          ======================================== */}
          <div className="mt-8 flex flex-wrap gap-4">
            {/* Explore Button — Bottom Left */}
            <a
              href="/#categories"
              className={`rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-ink shadow-lg shadow-gold/20
              transition-all delay-[450ms] duration-700
              ease-[cubic-bezier(0.16,1,0.3,1)]
              hover:bg-gold-dark
              ${
                animate
                  ? "translate-x-0 translate-y-0 scale-100 opacity-100"
                  : "-translate-x-10 translate-y-8 scale-95 opacity-0"
              }`}
            >
              Explore Our Work
            </a>

            {/* Quote Button — Bottom Right */}
            <a
              href="/#contact"
              className={`rounded-full border border-cream/30 px-8 py-3.5 text-sm font-semibold text-cream
              transition-all delay-[550ms] duration-700
              ease-[cubic-bezier(0.16,1,0.3,1)]
              hover:border-gold hover:text-gold
              ${
                animate
                  ? "translate-x-0 translate-y-0 scale-100 opacity-100"
                  : "translate-x-10 translate-y-8 scale-95 opacity-0"
              }`}
            >
              Request a Quote
            </a>
          </div>

          {/* ========================================
              STATS
          ======================================== */}
          <div
            className={`mt-12 flex flex-wrap gap-x-12 gap-y-4 border-t border-white/10 pt-7
            transition-all delay-[650ms] duration-700
            ${animate ? "opacity-100" : "opacity-0"}`}
          >
            {[
              ["500+", "Brands Served"],
              ["10+", "Years Experience"],
              ["100%", "Custom Made"],
            ].map(([n, l], index) => (
              <div
                key={l}
                className={`transition-all duration-700
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${
                  animate
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{
                  transitionDelay: `${700 + index * 130}ms`,
                }}
              >
                <p className="font-serif text-3xl font-bold text-gold">{n}</p>

                <p className="text-[10px] uppercase tracking-[0.14em] text-cream/60">
                  {l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================
          SCROLL CUE
          BOTTOM -> POSITION
      ======================================== */}
      <a
        href="/#categories"
        className={`absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-cream/60
        transition-all delay-[1150ms] duration-700
        hover:text-gold
        ${animate ? "opacity-100" : "translate-y-8 opacity-0"}`}
        aria-label="Scroll down"
      >
        <span className="flex h-9 w-5 justify-center rounded-full border border-cream/40 pt-1.5">
          <span className="h-2 w-0.5 animate-bounce rounded-full bg-gold" />
        </span>
      </a>
    </section>
  );
}
