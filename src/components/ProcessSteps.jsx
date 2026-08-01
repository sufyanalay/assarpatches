import {
  FiEdit3,
  FiCheckCircle,
  FiSettings,
  FiShield,
  FiTruck,
  FiArrowRight,
} from "react-icons/fi";

import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    icon: FiEdit3,
    title: "Share Your Design",
    text: "Send us your logo or artwork — vector files work best, but we can also work from a clear image.",
    label: "Your Idea",
  },
  {
    n: "02",
    icon: FiCheckCircle,
    title: "Sample Approval",
    text: "We prepare a sample matched to your colors and specs for your approval before bulk production starts.",
    label: "Approval",
  },
  {
    n: "03",
    icon: FiSettings,
    title: "Bulk Manufacturing",
    text: "Once approved, we move into full-scale production with consistent quality across every piece.",
    label: "Production",
  },
  {
    n: "04",
    icon: FiShield,
    title: "Quality Check",
    text: "Every batch is inspected for stitching, color accuracy and finish before it leaves our facility.",
    label: "Inspection",
  },
  {
    n: "05",
    icon: FiTruck,
    title: "Export & Delivery",
    text: "Packed and shipped to your doorstep, anywhere in the world, with export-quality standards.",
    label: "Delivery",
  },
];
const stepAnimations = [
  { direction: "left", distance: 70 },
  { direction: "bottom", distance: 60 },
  { direction: "top", distance: 60 },
  { direction: "bottom", distance: 60 },
  { direction: "right", distance: 70 },
];
export default function ProcessSteps() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Gold glow left */}
        <div className="absolute -left-48 top-20 h-[450px] w-[450px] rounded-full bg-[#B88A3B]/[0.05] blur-[110px]" />

        {/* Gold glow right */}
        <div className="absolute -right-52 bottom-0 h-[500px] w-[500px] rounded-full bg-[#D4AA6A]/[0.06] blur-[120px]" />

        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(#B88A3B 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* Large background text */}
        <span className="absolute -left-4 top-4 hidden select-none font-serif text-[150px] font-bold leading-none text-[#B88A3B]/[0.025] xl:block">
          PROCESS
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        {/* ================= HEADER ================= */}

        <Reveal direction="top" distance={50} duration={900}>
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#B88A3B]/20 bg-[#FFF9F0] px-4 py-2 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B88A3B] opacity-40" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#B88A3B]" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#A77A30] sm:text-xs">
                How We Work
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-6 font-serif text-4xl font-bold leading-tight text-[#181818] sm:text-5xl lg:text-[54px]">
              From Design to <span className="text-[#B88A3B]">Delivery.</span>
            </h2>

            {/* Divider */}
            <div className="mt-5 flex items-center justify-center gap-3">
              <div className="h-px w-14 bg-gradient-to-r from-transparent to-[#B88A3B]" />

              <div className="h-2 w-2 rotate-45 bg-[#B88A3B]" />

              <div className="h-px w-14 bg-gradient-to-l from-transparent to-[#B88A3B]" />
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-[#77716A] sm:text-base">
              A seamless manufacturing journey designed to turn your ideas into
              premium custom patches — with precision at every stage.
            </p>
          </div>
        </Reveal>

        {/* ================= PROCESS ================= */}

        <div className="relative mt-16 lg:mt-20">
          {/* Desktop main connecting line */}

          <div className="absolute left-[8%] right-[8%] top-[38px] hidden h-px lg:block">
            <div className="h-full w-full bg-gradient-to-r from-transparent via-[#B88A3B]/40 to-transparent" />
          </div>

          {/* Moving / premium center line */}

          <div className="absolute left-[10%] right-[10%] top-[37px] hidden lg:block">
            <div className="relative h-[3px] overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-[#B88A3B]/10" />

              <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-[#D4AA6A] to-transparent opacity-70" />
            </div>
          </div>

          {/* Cards */}

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <Reveal
                  key={step.n}
                  direction={stepAnimations[index].direction}
                  distance={stepAnimations[index].distance}
                  duration={850}
                  delay={index * 120}
                >
                  <div className="group relative h-full">
                    {/* ================= NUMBER NODE ================= */}

                    <div className="relative z-20 mx-auto mb-7 flex h-[76px] w-[76px] items-center justify-center">
                      {/* Outer circle */}
                      <div className="absolute inset-0 rounded-full border border-[#B88A3B]/20 bg-white shadow-[0_8px_30px_rgba(184,138,59,0.08)] transition-all duration-500 group-hover:scale-110 group-hover:border-[#B88A3B]/40 group-hover:shadow-[0_10px_35px_rgba(184,138,59,0.18)]" />

                      {/* Inner circle */}
                      <div className="absolute inset-[6px] rounded-full bg-[#FFF8EC] transition-all duration-500 group-hover:bg-[#B88A3B]" />

                      {/* Number */}
                      <span className="relative z-10 font-serif text-[27px] font-bold text-[#B88A3B] transition-colors duration-500 group-hover:text-white">
                        {step.n}
                      </span>

                      {/* Pulse ring */}
                      <span className="absolute inset-0 scale-90 rounded-full border border-[#B88A3B]/0 transition-all duration-500 group-hover:scale-[1.22] group-hover:border-[#B88A3B]/20" />
                    </div>

                    {/* ================= CARD ================= */}

                    <div className="relative h-[300px] overflow-hidden rounded-[24px] border border-[#E7E0D6] bg-white p-6 shadow-[0_5px_25px_rgba(35,30,20,0.035)] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-[#B88A3B]/30 group-hover:shadow-[0_22px_50px_rgba(80,55,20,0.11)]">
                      {/* Hover background */}

                      <div className="absolute inset-0 bg-gradient-to-br from-[#B88A3B] via-[#AD7F31] to-[#8D6627] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      {/* Decorative number */}

                      <span className="pointer-events-none absolute -right-2 -top-7 font-serif text-[100px] font-bold leading-none text-[#B88A3B]/[0.045] transition-colors duration-500 group-hover:text-white/[0.07]">
                        {step.n}
                      </span>

                      {/* Icon */}

                      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl border border-[#B88A3B]/15 bg-[#FFF8EC] transition-all duration-500 group-hover:rotate-3 group-hover:border-white/20 group-hover:bg-white/15">
                        <Icon
                          size={20}
                          className="text-[#B88A3B] transition-colors duration-500 group-hover:text-white"
                        />
                      </div>

                      {/* Label */}

                      <p className="relative z-10 mt-6 text-[9px] font-bold uppercase tracking-[0.22em] text-[#B88A3B] transition-colors duration-500 group-hover:text-white/60">
                        {step.label}
                      </p>

                      {/* Title */}

                      <h3 className="relative z-10 mt-2 font-serif text-[19px] font-bold leading-snug text-[#1C1A17] transition-colors duration-500 group-hover:text-white">
                        {step.title}
                      </h3>

                      {/* Small gold line */}

                      <div className="relative z-10 mt-3 h-[2px] w-7 rounded-full bg-[#B88A3B] transition-all duration-500 group-hover:w-12 group-hover:bg-white/70" />

                      {/* Description */}

                      <p className="relative z-10 mt-4 text-[13px] leading-6 text-[#77716A] transition-colors duration-500 group-hover:text-white/75">
                        {step.text}
                      </p>

                      {/* Arrow */}

                      <div className="absolute bottom-5 right-5 z-10 flex h-8 w-8 translate-x-2 items-center justify-center rounded-full bg-[#FFF8EC] text-[#B88A3B] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:bg-white/15 group-hover:text-white group-hover:opacity-100">
                        <FiArrowRight size={14} />
                      </div>

                      {/* Bottom glow */}

                      <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-white/0 blur-3xl transition-all duration-500 group-hover:bg-white/10" />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* ================= BOTTOM TRUST LINE ================= */}

        <Reveal direction="bottom" distance={40} duration={800} delay={300}>
          <div className="mx-auto mt-10 flex max-w-3xl items-center justify-center gap-4 lg:mt-20">
            <div className="hidden h-px flex-1 bg-gradient-to-r from-transparent to-[#B88A3B]/100 sm:block" />

            <div className="flex items-center gap-2 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8D867D] sm:text-[17px]">
              <FiCheckCircle className="shrink-0 text-[#B88A3B]" />
              Precision at every stage
            </div>

            <div className="hidden h-px flex-1 bg-gradient-to-l from-transparent to-[#B88A3B]/100 sm:block" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
