"use client";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

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
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">FAQ</p>
          <h2 className="mt-2 font-serif text-4xl font-bold text-ink sm:text-5xl">Common Questions</h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-ink/10 bg-white"
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                >
                  <span className="font-medium text-ink">{item.q}</span>
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                    {isOpen ? <FiMinus size={14} /> : <FiPlus size={14} />}
                  </span>
                </button>
                {isOpen && (
                  <p className="animate-fade px-6 pb-5 text-sm leading-relaxed text-ink/60">{item.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}