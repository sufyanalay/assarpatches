"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function AccordionGallery({ items }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);

          // ایک دفعہ animation چلنے کے بعد observer ختم
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  if (!items?.length) return null;

  return (
    <section
      ref={sectionRef}
      id="categories"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* =========================================
          BACKGROUND DECORATIONS
      ========================================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-[#B88A3B]/5 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#B88A3B]/5 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(#B88A3B 1.2px, transparent 1.2px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        {/* =========================================
            HEADER
        ========================================= */}

        <div className="mx-auto max-w-3xl text-center">
          {/* Badge - TOP */}
          <div
            className={`inline-flex items-center gap-2 rounded-full border border-[#D4AA6A]/40 bg-white/80 px-5 py-2 shadow-sm backdrop-blur-sm
            transition-all duration-700
            ease-[cubic-bezier(0.16,1,0.3,1)]
            ${
              visible
                ? "translate-y-0 opacity-100"
                : "-translate-y-10 opacity-0"
            }`}
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#B88A3B]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#B88A3B] sm:text-xs">
              Our Craft
            </span>
          </div>

          {/* Heading - LEFT */}
          <h2
            className={`mt-5 font-serif text-3xl font-bold leading-tight text-[#1A1A1A] sm:text-4xl md:text-5xl lg:text-6xl
            transition-all delay-100 duration-[900ms]
            ease-[cubic-bezier(0.16,1,0.3,1)]
            ${
              visible
                ? "translate-x-0 opacity-100"
                : "-translate-x-16 opacity-0"
            }`}
          >
            Explore Our{" "}
            <span className="relative inline-block text-[#B88A3B]">
              Patches
            </span>
          </h2>

          {/* Decorative Divider - SCALE */}
          <div
            className={`mt-5 flex items-center justify-center gap-3
            transition-all delay-200 duration-700
            ${visible ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#B88A3B] sm:w-16" />

            <div className="h-2 w-2 rotate-45 bg-[#B88A3B]" />

            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#B88A3B] sm:w-16" />
          </div>

          {/* Description - RIGHT */}
          <p
            className={`mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base lg:text-lg lg:leading-8
            transition-all delay-300 duration-[900ms]
            ease-[cubic-bezier(0.16,1,0.3,1)]
            ${
              visible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
            }`}
          >
            Discover our range of premium custom patches, manufactured with
            precision, durability and export-quality craftsmanship.
          </p>
        </div>

        {/* =========================================
            CARDS
        ========================================= */}

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-6 lg:gap-7">
          {items.map((item, index) => {
            /*
             * IMPORTANT:
             * کوئی hard-coded image نہیں۔
             *
             * Admin/backend سے item.image میں
             * جو image آئے گی وہی یہاں render ہوگی۔
             */
            const image = item.image;

            /*
             * ہر card الگ direction سے آئے گا
             */
            const hiddenAnimations = [
              "-translate-x-16 translate-y-4",
              "translate-y-16",
              "translate-x-16 translate-y-4",
              "-translate-x-12 translate-y-12",
              "translate-x-12 translate-y-12",
            ];

            const hiddenAnimation =
              hiddenAnimations[index % hiddenAnimations.length];

            return (
              <Link
                key={item.slug}
                href={`/patches/${item.slug}`}
                className={`group relative overflow-hidden rounded-[28px] bg-white
                shadow-[0_8px_35px_rgba(0,0,0,0.06)]

                transition-all duration-[900ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]

                hover:-translate-y-2
                hover:shadow-[0_22px_55px_rgba(0,0,0,0.14)]

                ${
                  visible
                    ? "translate-x-0 translate-y-0 scale-100 opacity-100"
                    : `${hiddenAnimation} scale-[0.96] opacity-0`
                }

                ${
                  index < 3
                    ? "lg:col-span-2"
                    : index === 3
                      ? "lg:col-span-2 lg:col-start-2"
                      : "lg:col-span-2"
                }
                `}
                style={{
                  transitionDelay: visible ? `${400 + index * 130}ms` : "0ms",
                }}
              >
                {/* Gold Border */}
                <div className="pointer-events-none absolute inset-0 z-30 rounded-[28px] border border-[#B88A3B]/15 transition-colors duration-500 group-hover:border-[#B88A3B]/40" />

                {/* =====================================
                    IMAGE
                ===================================== */}

                <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/3]">
                  {image ? (
                    <img
                      src={image}
                      alt={item.title || "Custom Patch"}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  ) : (
                    /*
                     * اگر admin نے image upload نہیں کی
                     * تو hard-coded image لگانے کی بجائے
                     * clean placeholder آئے گا۔
                     */
                    <div className="absolute inset-0 flex items-center justify-center bg-[#F8F5EF]">
                      <span className="font-serif text-5xl font-bold text-[#B88A3B]/20">
                        {item.title?.[0] || "A"}
                      </span>
                    </div>
                  )}

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

                  {/* Category Number */}
                  <div className="absolute left-5 top-5 z-10">
                    <span className="flex h-10 min-w-10 items-center justify-center rounded-full border border-white/25 bg-black/20 px-3 text-xs font-semibold text-white backdrop-blur-md">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Premium Badge */}
                  <div className="absolute right-5 top-5 z-10">
                    <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
                      Premium
                    </span>
                  </div>

                  {/* Image Bottom Title */}
                  <div className="absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-6">
                    <p className="mb-1.5 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#E5B85F] sm:text-[10px]">
                      Custom Manufacturing
                    </p>

                    <h3 className="font-serif text-2xl font-bold text-white sm:text-[26px]">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* =====================================
                    CARD CONTENT
                ===================================== */}

                <div className="relative p-5 sm:p-6">
                  {/* Gold Line */}
                  <div className="mb-4 h-[2px] w-9 rounded-full bg-[#B88A3B] transition-all duration-500 group-hover:w-16" />

                  <p className="min-h-[52px] text-sm leading-6 text-gray-500">
                    {item.tagline ||
                      `Premium custom ${item.title?.toLowerCase()} manufactured to your exact design and brand requirements.`}
                  </p>

                  {/* Bottom */}
                  <div className="mt-6 flex items-center justify-between border-t border-[#EEE7DC] pt-5">
                    <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#B88A3B]">
                      Explore Collection
                    </span>

                    {/* Arrow */}
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF4E3] text-[#B88A3B] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#B88A3B] group-hover:text-white">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="m13 6 6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="pointer-events-none absolute -bottom-20 -right-20 h-44 w-44 rounded-full bg-[#B88A3B]/0 blur-3xl transition-all duration-500 group-hover:bg-[#B88A3B]/10" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
