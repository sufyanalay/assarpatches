import {
  FiAward,
  FiSettings,
  FiTruck,
  FiDollarSign,
  FiCheck,
  FiArrowUpRight,
} from "react-icons/fi";
import Reveal from "./Reveal";

const items = [
  {
    icon: FiAward,
    number: "01",
    title: "Premium Quality",
    text: "Durable patches manufactured with export-quality materials, precision finishing and strict quality standards.",
  },
  {
    icon: FiSettings,
    number: "02",
    title: "Customized Production",
    text: "Every order is manufactured around your exact artwork, dimensions, colors and branding requirements.",
  },
  {
    icon: FiTruck,
    number: "03",
    title: "Bulk Manufacturing",
    text: "Reliable production capacity designed for consistent quality across small and large-scale B2B orders.",
  },
  {
    icon: FiDollarSign,
    number: "04",
    title: "Competitive Pricing",
    text: "Cost-effective manufacturing solutions built for brands, wholesalers, importers and distributors.",
  },
];

const trustPoints = ["Export Quality", "Bulk Production", "Global Delivery"];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Left glow */}
        <div className="absolute -left-56 top-1/2 h-[550px] w-[550px] -translate-y-1/2 rounded-full bg-[#B88A3B]/[0.06] blur-[100px]" />

        {/* Right glow */}
        <div className="absolute -right-48 -top-40 h-[600px] w-[600px] rounded-full bg-[#D4AA6A]/[0.07] blur-[110px]" />

        {/* Dot texture */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(#8D6728 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Large decorative text */}
        <span className="absolute -bottom-16 -left-4 hidden select-none font-serif text-[170px] font-bold leading-none text-[#B88A3B]/[0.025] xl:block">
          ASSAR
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          {/* ================= LEFT SIDE ================= */}

          <Reveal direction="left" distance={70} duration={1000}>
            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#B88A3B]/20 bg-white/60 px-4 py-2 shadow-sm backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B88A3B] opacity-40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#B88A3B]" />
                </span>

                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#A77A30] sm:text-xs">
                  Why Choose Us
                </span>
              </div>

              {/* Heading */}
              <h2 className="mt-6 max-w-xl font-serif text-4xl font-bold leading-[1.08] text-[#181818] sm:text-5xl lg:text-[52px]">
                Your Trusted
                <span className="block">
                  Manufacturing <span className="text-[#B88A3B]">Partner.</span>
                </span>
              </h2>

              {/* Gold decoration */}
              <div className="mt-6 flex items-center gap-3">
                <div className="h-[2px] w-14 rounded-full bg-[#B88A3B]" />
                <div className="h-1.5 w-1.5 rotate-45 bg-[#B88A3B]" />
                <div className="h-px w-7 bg-[#B88A3B]/30" />
              </div>

              {/* Description */}
              <p className="mt-7 max-w-xl text-[15px] leading-8 text-[#6C6861] sm:text-base">
                At Assar Patches, we combine skilled craftsmanship, modern
                manufacturing standards and reliable production capabilities to
                deliver premium custom patches for international brands,
                importers, wholesalers and distributors.
              </p>

              <p className="mt-4 max-w-xl text-[15px] leading-8 text-[#6C6861] sm:text-base">
                From the first sample to final bulk production, every order is
                handled with precision, consistency and a commitment to
                long-term partnership.
              </p>

              {/* Trust Points */}
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
                {trustPoints.map((point) => (
                  <div key={point} className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#B88A3B]/20 bg-[#FFF8EC]">
                      <FiCheck size={12} className="text-[#B88A3B]" />
                    </span>

                    <span className="text-xs font-semibold text-[#35322E] sm:text-sm">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-10 grid max-w-lg grid-cols-3 border-y border-[#B88A3B]/15 py-6">
                <div>
                  <p className="font-serif text-2xl font-bold text-[#B88A3B] sm:text-3xl">
                    500+
                  </p>
                  <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#77716A] sm:text-[10px]">
                    Clients
                  </p>
                </div>

                <div className="border-x border-[#B88A3B]/15 px-5 sm:px-7">
                  <p className="font-serif text-2xl font-bold text-[#B88A3B] sm:text-3xl">
                    10+
                  </p>
                  <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#77716A] sm:text-[10px]">
                    Years
                  </p>
                </div>

                <div className="pl-5 sm:pl-7">
                  <p className="font-serif text-2xl font-bold text-[#B88A3B] sm:text-3xl">
                    100%
                  </p>
                  <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#77716A] sm:text-[10px]">
                    Custom
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ================= RIGHT CARDS ================= */}

          <div className="relative">
            {/* Decorative circle */}
            <div className="pointer-events-none absolute -right-10 -top-10 hidden h-32 w-32 rounded-full border border-dashed border-[#B88A3B]/15 lg:block" />

            <div className="grid gap-5 sm:grid-cols-2">
              {items.map(({ icon: Icon, number, title, text }, index) => (
                <Reveal
                  key={title}
                  direction={
                    index === 0
                      ? "top"
                      : index === 1
                        ? "right"
                        : index === 2
                          ? "left"
                          : "bottom"
                  }
                  distance={60}
                  duration={850}
                  delay={index * 120}
                >
                  <div
                    className={`group relative overflow-hidden rounded-[26px] border border-[#DED7CC] bg-white p-6 shadow-[0_6px_30px_rgba(30,25,15,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#B88A3B]/40 hover:shadow-[0_22px_50px_rgba(90,65,25,0.12)] sm:p-7 ${
                      index === 1 || index === 3 ? "lg:translate-y-8" : ""
                    }`}
                  >
                    {/* Hover Gold Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#B88A3B] via-[#AE8032] to-[#8E6728] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Background Decorative Number */}
                    <span className="pointer-events-none absolute -right-2 -top-6 font-serif text-[100px] font-bold leading-none text-[#B88A3B]/[0.045] transition-all duration-500 group-hover:text-white/[0.07]">
                      {number}
                    </span>

                    {/* Top */}
                    <div className="relative z-10 flex items-start justify-between">
                      {/* Icon */}
                      <div className="relative">
                        <div className="absolute inset-0 rounded-2xl bg-[#B88A3B]/10 blur-lg transition-all duration-500 group-hover:bg-white/20" />

                        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-[#B88A3B]/15 bg-[#FFF7E9] transition-all duration-500 group-hover:rotate-3 group-hover:border-white/20 group-hover:bg-white/15">
                          <Icon
                            size={23}
                            className="text-[#B88A3B] transition-colors duration-500 group-hover:text-white"
                          />
                        </div>
                      </div>

                      {/* Number */}
                      <span className="text-[10px] font-bold tracking-[0.2em] text-[#B88A3B]/50 transition-colors duration-500 group-hover:text-white/50">
                        {number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 mt-7">
                      <h3 className="font-serif text-xl font-bold text-[#1D1B18] transition-colors duration-500 group-hover:text-white">
                        {title}
                      </h3>

                      {/* Line */}
                      <div className="mt-3 h-[2px] w-8 rounded-full bg-[#B88A3B] transition-all duration-500 group-hover:w-14 group-hover:bg-white/70" />

                      <p className="mt-4 text-sm leading-7 text-[#77716A] transition-colors duration-500 group-hover:text-white/75">
                        {text}
                      </p>

                      {/* Bottom */}
                      <div className="mt-6 flex items-center justify-between border-t border-[#EDE7DE] pt-5 transition-colors duration-500 group-hover:border-white/15">
                        <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#9A9288] transition-colors duration-500 group-hover:text-white/60">
                          Assar Standard
                        </span>

                        <span className="flex h-8 w-8 translate-x-2 items-center justify-center rounded-full bg-[#FFF7E9] text-[#B88A3B] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:bg-white/15 group-hover:text-white group-hover:opacity-100">
                          <FiArrowUpRight size={15} />
                        </span>
                      </div>
                    </div>

                    {/* Bottom shine */}
                    <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-white/0 blur-3xl transition-all duration-500 group-hover:bg-white/10" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
