import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Share Your Design",
    text: "Send us your logo or artwork — vector files work best, but we can also work from a clear image.",
  },
  {
    n: "02",
    title: "Sample Approval",
    text: "We prepare a sample matched to your colors and specs for your approval before bulk production starts.",
  },
  {
    n: "03",
    title: "Bulk Manufacturing",
    text: "Once approved, we move into full-scale production with consistent quality across every piece.",
  },
  {
    n: "04",
    title: "Quality Check",
    text: "Every batch is inspected for stitching, color accuracy and finish before it leaves our facility.",
  },
  {
    n: "05",
    title: "Export & Delivery",
    text: "Packed and shipped to your doorstep, anywhere in the world, with export-quality standards.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">How We Work</p>
          <h2 className="mt-2 font-serif text-4xl font-bold text-ink sm:text-5xl">From Design to Delivery</h2>
          <p className="mt-3 text-ink/60">
            A simple, reliable process built for brands, importers and distributors.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold-dark font-serif text-xl font-bold text-gold-dark">
                {s.n}
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{s.text}</p>
              {i < steps.length - 1 && (
                <div className="absolute right-[-1.25rem] top-7 hidden h-px w-8 bg-gold/40 lg:block" />
              )}
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}