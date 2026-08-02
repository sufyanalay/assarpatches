"use client";

import { Icon } from "@iconify/react";

const features = [
  {
    icon: "mdi:factory",
    title: "OEM Production",
    text: "Customized manufacturing tailored to your exact brand requirements.",
  },
  {
    icon: "mdi:shield-check-outline",
    title: "Quality Control",
    text: "Strict inspection processes for reliable export-quality standards.",
  },
  {
    icon: "pinhead:manufactured-home",
    title: "Bulk Manufacturing",
    text: "Efficient large-scale production with consistent quality across every order.",
  },
  {
    icon: "mdi:handshake-outline",
    title: "Global Supply",
    text: "A trusted manufacturing partner for brands and B2B buyers worldwide.",
  },
];

const trustItems = [
  { icon: "mdi:check-decagram-outline", label: "Export Quality" },
  { icon: "mdi:earth", label: "Global Supply" },
  { icon: "mdi:factory", label: "Bulk Production" },
  { icon: "mdi:clock-fast", label: "On-Time Delivery" },
];

export default function Features() {
  return (
    <section id="expertise" className="relative overflow-hidden bg-black lg:min-h-[780px]">
      {/* Video: normal in-flow block on mobile (so it stays visible),
          becomes full-bleed background only from lg upward */}
      <video
        className="relative h-64 w-full object-cover sm:h-80 lg:absolute lg:inset-0 lg:h-full lg:w-full lg:scale-110 lg:translate-x-[5%]"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlays only apply once the video becomes a background (lg+) */}
      <div className="pointer-events-none hidden lg:absolute lg:inset-0 lg:block lg:bg-black/30" />
      <div className="pointer-events-none hidden lg:absolute lg:inset-0 lg:block lg:bg-gradient-to-r lg:from-black/55 lg:via-black/15 lg:to-transparent" />
      <div className="pointer-events-none hidden lg:absolute lg:inset-0 lg:block lg:bg-gradient-to-t lg:from-black/30 lg:via-transparent lg:to-black/10" />

      {/* Content: flows normally below the video on mobile, overlays as a centered flex row on lg+ */}
      <div className="relative z-10 w-full px-4 py-10 sm:px-6 sm:py-12 lg:flex lg:min-h-[780px] lg:items-center lg:px-8 lg:py-16 xl:px-12">
        {/* White Panel — slightly smaller on large screens than before */}
        <div className="relative w-full max-w-full overflow-hidden bg-white shadow-[0_30px_100px_rgba(0,0,0,0.30)] sm:max-w-[620px] lg:max-w-[560px] xl:max-w-[590px]">
          <div className="absolute left-0 top-0 h-[4px] w-full bg-gradient-to-r from-[#8F6828] via-[#D4AA6A] to-[#8F6828]" />
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#B88A3B]/[0.06] blur-3xl" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: "radial-gradient(#B88A3B 1px, transparent 1px)",
              backgroundSize: "25px 25px",
            }}
          />

          <div className="relative z-10 px-6 py-8 sm:px-10 sm:py-12 lg:px-8 lg:py-9">
            <div className="inline-flex items-center gap-2 bg-[#A77A30] px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white sm:text-xs">
                Advanced Expertise
              </span>
            </div>

            <h2 className="mt-5 text-2xl font-bold leading-[1.15] tracking-[-0.02em] text-[#161616] sm:text-3xl lg:text-[38px]">
              Precision Manufacturing
              <br className="hidden sm:block" /> Backed By{" "}
              <span className="text-[#B88A3B]">Experience & Innovation</span>
            </h2>

            <div className="mt-5 flex h-[8px] max-w-full items-center gap-[4px] overflow-hidden">
              {Array.from({ length: 30 }).map((_, i) => (
                <span key={i} className="h-[8px] w-[18px] shrink-0 -skew-x-[28deg] bg-[#B88A3B]" />
              ))}
            </div>

            <p className="mt-5 text-[13px] leading-7 text-[#59544E] sm:text-[14px]">
              At Assar Patches, our advanced manufacturing expertise allows us
              to deliver premium custom patch solutions for international
              brands, importers and distributors with precision, consistency and
              reliability — from OEM production to bulk-order fulfillment.
            </p>

            <div className="mt-6 space-y-4 sm:space-y-5">
              {features.map((feature, index) => (
                <div key={feature.title} className="group relative flex items-start gap-3 sm:gap-4">
                  <div className="relative flex h-10 w-10 shrink-0 items-center justify-center sm:h-11 sm:w-11">
                    <div className="absolute inset-0 rounded-xl bg-[#FFF7EA] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#B88A3B]" />
                    <Icon
                      icon={feature.icon}
                      width={22}
                      height={22}
                      className="relative z-10 text-[#B88A3B] transition-all duration-300 group-hover:text-white"
                    />
                  </div>

                  <div className="min-w-0 flex-1 pt-0.5">
                    <div className="flex items-center gap-3">
                      <h3 className="text-[15px] font-bold text-[#191919] sm:text-[16px]">
                        {feature.title}
                      </h3>
                      <span className="hidden h-px w-0 bg-[#B88A3B] transition-all duration-500 group-hover:w-8 sm:block" />
                    </div>
                    <p className="mt-0.5 text-[12px] leading-6 text-[#716B64] sm:text-[13px]">
                      {feature.text}
                    </p>
                  </div>

                  <span className="absolute right-0 top-0 text-[10px] font-bold tracking-[0.2em] text-[#B88A3B]/70">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-3 border-t border-[#E9E2D8] pt-5">
              {trustItems.map((item, i) => (
                <div key={item.label} className="flex items-center gap-1.5">
                  <Icon icon={item.icon} width={15} height={15} className="text-[#B88A3B]" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#69635D]">
                    {item.label}
                  </span>
                  {i < trustItems.length - 1 && (
                    <span className="ml-2 hidden h-3 w-px bg-[#DED5C8] sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Right Label */}
      <div className="absolute bottom-8 right-8 z-10 hidden items-center gap-3 rounded-full border border-white/20 bg-black/25 px-5 py-2.5 text-white backdrop-blur-md xl:flex">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D4AA6A] opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D4AA6A]" />
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
          Assar Manufacturing
        </span>
      </div>
    </section>
  );
}