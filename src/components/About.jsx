"use client";

import { useEffect, useRef, useState } from "react";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import RotatingImage from "./RotatingImage";

const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=900&q=80",
  "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=900&q=80",
];

const highlights = [
  "10+ Years of Manufacturing Excellence",
  "500+ Global Brand Partners",
  "Export-Quality Certified Production",
  "On-Time Bulk Delivery Guarantee",
];

export default function About({ images = [] }) {
  const pool = images.length ? images : FALLBACK_IMAGES;
  const half = pool.length > 1 ? Math.floor(pool.length / 2) : 0;

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  /* ========================================
     SCROLL REVEAL
  ======================================== */
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -60px 0px",
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F8F5EF] py-20 sm:py-24"
    >
      {/* ========================================
          BACKGROUND
      ======================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#B88A3B]/5 blur-3xl" />

        <div className="absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-[#B88A3B]/5 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#B88A3B 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* ========================================
              LEFT IMAGE AREA
          ======================================== */}

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            {/* Decorative Ring 1 */}
            <div
              className={`absolute -left-6 -top-6 z-0 h-24 w-24 rounded-full border-2 border-dashed border-[#B88A3B]/25
              transition-all duration-1000 ease-out
              ${
                isVisible
                  ? "translate-x-0 translate-y-0 rotate-0 opacity-100"
                  : "-translate-x-10 -translate-y-10 -rotate-90 opacity-0"
              }`}
            />

            {/* Decorative Ring 2 */}
            <div
              className={`absolute -bottom-6 -right-6 z-0 h-16 w-16 rounded-full border-2 border-[#B88A3B]/20
              transition-all delay-300 duration-1000 ease-out
              ${
                isVisible
                  ? "translate-x-0 translate-y-0 scale-100 opacity-100"
                  : "translate-x-10 translate-y-10 scale-50 opacity-0"
              }`}
            />

            {/* ========================================
                MAIN IMAGE
                LEFT -> POSITION
            ======================================== */}

            <div
              className={`relative z-10 overflow-hidden rounded-3xl shadow-2xl
              transition-all duration-[1100ms]
              ease-[cubic-bezier(0.16,1,0.3,1)]
              ${
                isVisible
                  ? "translate-x-0 scale-100 opacity-100"
                  : "-translate-x-24 scale-[0.94] opacity-0"
              }`}
              style={{ aspectRatio: "5/5" }}
            >
              <RotatingImage
                images={pool}
                alt="Assar Patches manufacturing"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                startOffset={0}
                intervalMs={4000}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* ========================================
                GOLD CORNER
                TOP -> POSITION
            ======================================== */}

            <div
              className={`absolute left-0 top-0 z-20 h-16 w-16
              transition-all delay-500 duration-700 ease-out
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-10 opacity-0"
              }`}
            >
              <div className="h-1 w-12 rounded-full bg-[#B88A3B]" />
              <div className="mt-1 h-12 w-1 rounded-full bg-[#B88A3B]" />
            </div>

            {/* ========================================
                SMALL IMAGE
                BOTTOM RIGHT -> POSITION
            ======================================== */}

            <div
              className={`absolute -bottom-6 -right-4 z-20 w-[42%]
              overflow-hidden rounded-2xl border-4 border-white shadow-2xl
              transition-all delay-300 duration-[1000ms]
              ease-[cubic-bezier(0.16,1,0.3,1)]
              sm:w-[38%]
              ${
                isVisible
                  ? "translate-x-0 translate-y-0 rotate-0 scale-100 opacity-100"
                  : "translate-x-16 translate-y-20 rotate-6 scale-90 opacity-0"
              }`}
              style={{ aspectRatio: "4/4" }}
            >
              <RotatingImage
                images={pool}
                alt="Custom patch sample"
                className="h-full w-full object-cover"
                startOffset={half}
                intervalMs={4600}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>

            {/* ========================================
                PARTNERS BADGE
                LEFT/BOTTOM -> POSITION
            ======================================== */}

            <div
              className={`absolute -left-4 bottom-20 z-30
              transition-all delay-[650ms] duration-700
              ease-[cubic-bezier(0.16,1,0.3,1)]
              sm:-left-8
              ${
                isVisible
                  ? "translate-x-0 translate-y-0 scale-100 opacity-100"
                  : "-translate-x-14 translate-y-8 scale-90 opacity-0"
              }`}
            >
              <div className="flex items-center gap-3 rounded-2xl border border-[#E7D9BE] bg-white px-4 py-3 shadow-xl">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF4E3]">
                  <FiCheckCircle className="text-lg text-[#B88A3B]" />
                </div>

                <div>
                  <p className="text-xs font-bold text-[#222]">500+ Partners</p>

                  <p className="text-[10px] text-gray-400">Worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================
              RIGHT CONTENT
          ======================================== */}

          <div>
            {/* ========================================
                BADGE
                TOP -> POSITION
            ======================================== */}

            <div
              className={`transition-all duration-700 ease-out
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-10 opacity-0"
              }`}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#E7D9BE] bg-[#FFF8EC] px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#B88A3B]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#B88A3B]" />
                Who We Are
              </span>
            </div>

            {/* ========================================
                HEADING
                RIGHT -> POSITION
            ======================================== */}

            <h2
              className={`mt-5 font-serif text-3xl font-bold leading-tight text-[#222]
              transition-all delay-150 duration-[900ms]
              ease-[cubic-bezier(0.16,1,0.3,1)]
              sm:text-4xl lg:text-5xl
              ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-20 opacity-0"
              }`}
            >
              Trusted OEM Patches
              <br />
              <span className="text-[#B88A3B]">Manufacturing</span> Partner
            </h2>

            {/* ========================================
                GOLD LINE
                SCALE ANIMATION
            ======================================== */}

            <div
              className={`mt-4 h-1 w-14 origin-left rounded-full bg-[#B88A3B]
              transition-transform delay-300 duration-700
              ${isVisible ? "scale-x-100" : "scale-x-0"}`}
            />

            {/* ========================================
                QUOTE
                TOP -> POSITION
            ======================================== */}

            <blockquote
              className={`mt-7 border-l-4 border-[#B88A3B] pl-5
              transition-all delay-[350ms] duration-800 ease-out
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-10 opacity-0"
              }`}
            >
              <p className="text-base italic leading-7 text-[#222]/65">
                "Our commitment to quality, consistency, and long-term
                partnerships makes Assar Patches a trusted manufacturing partner
                for brands seeking dependable custom patch production."
              </p>
            </blockquote>

            {/* ========================================
                DESCRIPTION
                RIGHT -> POSITION
            ======================================== */}

            <p
              className={`mt-5 text-base leading-relaxed text-gray-500
              transition-all delay-[450ms] duration-800
              ease-[cubic-bezier(0.16,1,0.3,1)]
              ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-16 opacity-0"
              }`}
            >
              At Assar Patches, we believe manufacturing is more than production
              — it is the foundation of trust between brands and their
              customers. We help businesses bring high-quality PVC, embroidered,
              sublimation, woven and leather patches to market through reliable
              bulk manufacturing and export-focused production standards.
            </p>

            {/* ========================================
                HIGHLIGHTS
                STAGGER ANIMATION
            ======================================== */}

            <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <li
                  key={item}
                  className={`flex items-start gap-2.5
                  transition-all duration-700
                  ease-[cubic-bezier(0.16,1,0.3,1)]
                  ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${550 + index * 120}ms`,
                  }}
                >
                  <FiCheckCircle className="mt-0.5 shrink-0 text-base text-[#B88A3B]" />

                  <span className="text-sm font-medium text-[#222]/75">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* ========================================
                BUTTON
                BOTTOM -> POSITION
            ======================================== */}

            <div
              className={`mt-10 flex flex-wrap items-center gap-4
              transition-all delay-[1000ms] duration-700
              ease-[cubic-bezier(0.16,1,0.3,1)]
              ${
                isVisible
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-12 scale-95 opacity-0"
              }`}
            >
              <a
                href="/#categories"
                className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#B88A3B] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:brightness-110 hover:shadow-xl active:scale-95"
              >
                Explore Our Work
                <FiArrowRight className="text-base transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
