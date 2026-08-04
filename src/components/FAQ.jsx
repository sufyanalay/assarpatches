"use client";

import { useState } from "react";
import {
  FiPlus,
  FiMinus,
  FiArrowUpRight,
  FiCheckCircle,
  FiMessageCircle,
} from "react-icons/fi";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "What is your minimum order quantity (MOQ)?",
    a: "MOQ varies by patch type — most designs start around 50–100 pieces. Larger bulk orders get better per-piece pricing.",
  },
  {
    q: "Do you provide a sample before bulk production?",
    a: "Yes. We prepare a sample matched to your design and colors so you can approve it before we move into full production.",
  },
  {
    q: "Can you match my exact brand colors?",
    a: "Yes, we work with Pantone references and your brand guidelines to match colors as closely as possible.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes, we manufacture to export-quality standards and regularly ship to brands, importers and distributors worldwide.",
  },
  {
    q: "How long does an order take?",
    a: "Turnaround depends on quantity and patch type. We'll confirm an exact timeline once we review your quote request.",
  },
  {
    q: "What file format should I send for my design?",
    a: "Vector files (AI, EPS, PDF) work best for the sharpest result, but we can also work from a clear, high-resolution image.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#] py-20 sm:py-24 lg:py-28"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Left glow */}
        <div className="absolute -left-52 top-10 h-[500px] w-[500px] rounded-full bg-[#B88A3B]/[0.055] blur-[120px]" />

        {/* Right glow */}
        <div className="absolute -right-52 bottom-0 h-[520px] w-[520px] rounded-full bg-[#D4AA6A]/[0.06] blur-[120px]" />

        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(#B88A3B 1px, transparent 1px)",
            backgroundSize: "29px 29px",
          }}
        />

        {/* Large watermark */}
        <span className="absolute -left-5 top-4 hidden select-none font-serif text-[150px] font-bold leading-none text-[#B88A3B]/[0.025] xl:block">
          FAQ
        </span>
      </div>

      {/* ================= CONTAINER ================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-20">
          {/* ================================================= */}
          {/* LEFT SIDE */}
          {/* ================================================= */}

          <div className="lg:sticky lg:top-28">
            {/* Badge */}

            <Reveal direction="top" distance={35} duration={700}>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#B88A3B]/20 bg-[#FFF9F0] px-4 py-2 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B88A3B] opacity-40" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#B88A3B]" />
                </span>

                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#A77A30] sm:text-xs">
                  Frequently Asked Questions
                </span>
              </div>
            </Reveal>

            {/* Heading */}

            <Reveal direction="left" distance={60} duration={850} delay={80}>
              <h2 className="mt-6 font-serif text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-[#191816] sm:text-5xl lg:text-[54px]">
                Everything You
                <br />
                Need To <span className="relative text-[#B88A3B]">Know.</span>
              </h2>
            </Reveal>

            {/* Decorative line */}

            <Reveal direction="left" distance={40} duration={750} delay={140}>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-[2px] w-14 rounded-full bg-[#B88A3B]" />

                <div className="h-1.5 w-1.5 rotate-45 bg-[#B88A3B]" />
              </div>
            </Reveal>

            {/* Description */}

            <Reveal direction="left" distance={50} duration={800} delay={180}>
              <p className="mt-6 max-w-md text-[15px] leading-7 text-[#716B64] sm:text-base">
                From minimum order quantities to samples, production and global
                shipping — find answers to the questions brands ask us most
                before starting their custom patch order.
              </p>
            </Reveal>

            {/* ================= IMAGE ================= */}

            <Reveal direction="bottom" distance={70} duration={950} delay={220}>
              <div className="group relative mt-8">
                {/* Decorative border */}
                <div className="absolute -bottom-3 -right-3 h-full w-full rounded-[28px] border border-[#B88A3B]/20" />

                {/* Main image */}
                <div className="relative h-[300px] overflow-hidden rounded-[28px] bg-[#222] shadow-[0_25px_65px_rgba(55,40,20,0.16)] sm:h-[340px] lg:h-[300px]">
                <img
  src="/hero1.png"
  alt="Custom patch manufacturing"
  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
/>
                  {/* Image overlays */}
                  <div className="absolute inset-0 bg-black/20" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

                  {/* Number */}
                  <div className="absolute right-5 top-5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/20 text-[10px] font-bold tracking-[0.1em] text-white backdrop-blur-md">
                      10+
                    </span>
                  </div>

                  {/* Image content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                    <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#E5B85F]">
                      Manufacturing Experience
                    </p>

                    <h3 className="mt-2 max-w-xs font-serif text-2xl font-bold leading-tight text-white">
                      Built on quality.
                      <br />
                      Trusted worldwide.
                    </h3>

                    <div className="mt-4 flex items-center gap-2 text-[11px] font-medium text-white/70">
                      <FiCheckCircle className="text-[#E5B85F]" />
                      Premium Custom Patch Production
                    </div>
                  </div>
                </div>

                {/* Floating badge */}

                <div className="absolute -bottom-5 left-5 z-20 sm:left-7">
                  <div className="flex items-center gap-3 rounded-2xl border border-[#E7D9BE] bg-white px-4 py-3 shadow-[0_12px_35px_rgba(40,30,15,0.13)]">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFF4E3]">
                      <FiMessageCircle className="text-[#B88A3B]" />
                    </div>

                    <div>
                      <p className="text-[11px] font-bold text-[#222]">
                        Need more help?
                      </p>

                      <p className="text-[9px] text-[#8C857D]">
                        Talk to our team
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* CTA */}

            <Reveal direction="bottom" distance={45} duration={800} delay={300}>
              <div className="mt-12 flex items-center gap-5">
                <a
                  href="/#contact"
                  className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-[#B88A3B] px-6 py-3.5 text-[12px] font-bold text-white shadow-[0_10px_30px_rgba(184,138,59,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#A77A30] hover:shadow-[0_15px_35px_rgba(184,138,59,0.3)] active:scale-95"
                >
                  Request a Quote
                  <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <span className="hidden text-[11px] leading-5 text-[#8C857D] sm:block">
                  Still have
                  <br />a question?
                </span>
              </div>
            </Reveal>
          </div>

          {/* ================================================= */}
          {/* RIGHT SIDE FAQ */}
          {/* ================================================= */}

          <div>
            {/* Small top label */}

            <Reveal direction="right" distance={45} duration={750}>
              <div className="mb-6 flex items-center justify-between border-b border-[#DDD4C7] pb-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8C857D]">
                  Common Questions
                </p>

                <span className="font-serif text-sm md:text[20px] italic text-[#B88A3B]">
                  01 — 06
                </span>
              </div>
            </Reveal>

            {/* ================= FAQ ITEMS ================= */}

            <div className="space-y-3">
              {faqs.map((item, i) => {
                const isOpen = open === i;

                return (
                  <Reveal
                    key={item.q}
                    direction="right"
                    distance={60}
                    duration={800}
                    delay={i * 90}
                  >
                    <div
                      className={`group relative overflow-hidden rounded-[22px] border transition-all duration-500 ${
                        isOpen
                          ? "border-[#B88A3B]/35 bg-white shadow-[0_16px_45px_rgba(75,55,25,0.08)]"
                          : "border-[#DED8CF] bg-white/65 hover:border-[#B88A3B]/30 hover:bg-white hover:shadow-[0_10px_30px_rgba(75,55,25,0.05)]"
                      }`}
                    >
                      {/* Active top line */}

                      <div
                        className={`absolute left-0 top-0 h-[2px] bg-gradient-to-r from-[#A77A30] via-[#D5AD68] to-transparent transition-all duration-500 ${
                          isOpen ? "w-full opacity-100" : "w-0 opacity-0"
                        }`}
                      />

                      {/* FAQ BUTTON */}

                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? -1 : i)}
                        className="flex w-full cursor-pointer items-center gap-4 px-5 py-5 text-left sm:gap-5 sm:px-6 sm:py-6"
                        aria-expanded={isOpen}
                      >
                        {/* Number */}

                        <span
                          className={`font-serif text-[22px] font-bold transition-colors duration-300 ${
                            isOpen ? "text-[#B88A3B]" : "text-[#B88A3B]/75"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        {/* Question */}

                        <span
                          className={`min-w-0 flex-1 text-[14px] font-semibold leading-6 transition-colors duration-300 sm:text-[15px] ${
                            isOpen
                              ? "text-[#1C1A17]"
                              : "text-[#393633] group-hover:text-[#1C1A17]"
                          }`}
                        >
                          {item.q}
                        </span>

                        {/* Icon */}

                        <span
                          className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-500 ${
                            isOpen
                              ? "rotate-180 bg-[#B88A3B] text-white shadow-[0_7px_18px_rgba(184,138,59,0.25)]"
                              : "bg-[#FFF4E3] text-[#B88A3B] group-hover:scale-110 group-hover:bg-[#B88A3B] group-hover:text-white"
                          }`}
                        >
                          {isOpen ? (
                            <FiMinus size={15} />
                          ) : (
                            <FiPlus size={15} />
                          )}
                        </span>
                      </button>

                      {/* ================= SMOOTH ANSWER ================= */}

                      <div
                        className={`grid transition-all duration-500 ease-in-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="px-5 pb-6 sm:px-6">
                            <div className="ml-8 border-t border-[#EEE7DC] pt-4 sm:ml-9">
                              <div className="flex gap-4">
                                {/* Gold line */}

                                <div className="mt-2 h-[2px] w-6 shrink-0 rounded-full bg-[#B88A3B]" />

                                <p className="max-w-xl text-[13px] leading-7 text-[#716B64] sm:text-[14px]">
                                  {item.a}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Background number */}

                      <span
                        className={`pointer-events-none absolute -bottom-6 right-4 select-none font-serif text-[80px] font-bold leading-none transition-all duration-500 ${
                          isOpen ? "text-[#B88A3B]/[0.035]" : "text-transparent"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* ================= BOTTOM TRUST ================= */}

            <Reveal direction="bottom" distance={40} duration={800} delay={450}>
              <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-[#DDD4C7] pt-6">
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#B88A3B]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#817A72]">
                    Clear Communication
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#B88A3B]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#817A72]">
                    Global Support
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#B88A3B]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#817A72]">
                    Reliable Production
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
