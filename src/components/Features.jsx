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
    <section
      id="expertise"
      className="relative overflow-hidden bg-black min-h-screen lg:min-h-[780px]"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full scale-110 translate-x-[5%] object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />

      {/* Main Container */}
      <div className="relative z-10 flex min-h-screen w-full items-center px-4 py-16 sm:px-6 sm:py-20 lg:min-h-[780px] lg:px-8 lg:py-16 xl:px-12">
        {/* White Panel */}
        <div className="relative w-full max-w-full overflow-hidden bg-white shadow-[0_30px_100px_rgba(0,0,0,0.30)] sm:max-w-[620px] lg:max-w-[650px] xl:max-w-[670px]">
          {/* Top Gold Line */}
          <div className="absolute left-0 top-0 h-[4px] w-full bg-gradient-to-r from-[#8F6828] via-[#D4AA6A] to-[#8F6828]" />

          {/* Glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#B88A3B]/[0.06] blur-3xl" />

          {/* Dot pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: "radial-gradient(#B88A3B 1px, transparent 1px)",
              backgroundSize: "25px 25px",
            }}
          />

          <div className="relative z-10 px-6 py-8 sm:px-10 sm:py-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#A77A30] px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white sm:text-xs">
                Advanced Expertise
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-5 text-2xl font-bold leading-[1.15] tracking-[-0.02em] text-[#161616] sm:text-3xl lg:text-[38px]">
              Precision Manufacturing
              <br className="hidden sm:block" /> Backed By{" "}
              <span className="text-[#B88A3B]">Experience & Innovation</span>
            </h2>

            {/* Stripe Divider */}
            <div className="mt-5 flex h-[8px] max-w-full items-center gap-[4px] overflow-hidden">
              {Array.from({ length: 30 }).map((_, i) => (
                <span
                  key={i}
                  className="h-[8px] w-[18px] shrink-0 -skew-x-[28deg] bg-[#B88A3B]"
                />
              ))}
            </div>

            {/* Description */}
            <p className="mt-5 text-[13px] leading-7 text-[#59544E] sm:text-[14px]">
              At Assar Patches, our advanced manufacturing expertise allows us
              to deliver premium custom patch solutions for international
              brands, importers and distributors with precision, consistency and
              reliability — from OEM production to bulk-order fulfillment.
            </p>

            {/* Feature List */}
            <div className="mt-6 space-y-4 sm:space-y-5">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group relative flex items-start gap-3 sm:gap-4"
                >
                  {/* Icon */}
                  <div className="relative flex h-10 w-10 shrink-0 items-center justify-center sm:h-11 sm:w-11">
                    <div className="absolute inset-0 rounded-xl bg-[#FFF7EA] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#B88A3B]" />
                    <Icon
                      icon={feature.icon}
                      width={22}
                      height={22}
                      className="relative z-10 text-[#B88A3B] transition-all duration-300 group-hover:text-white"
                    />
                  </div>

                  {/* Content */}
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

                  {/* Step number */}
                  <span className="absolute right-0 top-0 text-[10px] font-bold tracking-[0.2em] text-[#B88A3B]/70">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>

            {/* Trust Bar */}
            <div className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-3 border-t border-[#E9E2D8] pt-5">
              {trustItems.map((item, i) => (
                <div key={item.label} className="flex items-center gap-1.5">
                  <Icon
                    icon={item.icon}
                    width={15}
                    height={15}
                    className="text-[#B88A3B]"
                  />
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
