import { FiAward, FiSettings, FiTruck, FiDollarSign } from "react-icons/fi";
import Reveal from "./Reveal";

const items = [
  {
    icon: FiAward,
    title: "Premium Quality",
    text: "Durable patches manufactured with export-quality standards.",
  },
  {
    icon: FiSettings,
    title: "Customized Production",
    text: "Manufacturing tailored to your exact design and requirements.",
  },
  {
    icon: FiTruck,
    title: "Bulk Manufacturing",
    text: "Reliable large-scale production with timely delivery.",
  },
  {
    icon: FiDollarSign,
    title: "Competitive Pricing",
    text: "Cost-effective solutions without compromising quality.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="inline-block rounded-full bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
              Why Choose Us
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold text-ink sm:text-4xl">
              Trusted Manufacturing Partner
              <br />
              For Global B2B Buyers
            </h2>
            <p className="mt-5 leading-relaxed text-ink/60">
              At Assar Patches, we combine skilled craftsmanship, modern
              manufacturing standards, and reliable bulk production capabilities
              to deliver customized patches for international brands, importers,
              wholesalers and distributors. Our commitment to precision,
              consistency and customer satisfaction allows us to build long-term
              partnerships with clients worldwide.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {items.map(({ icon: Icon, title, text }, i) => {
              const highlight = i === 1;
              return (
                <Reveal key={title} delay={i * 100}>
                <div
                  className={`rounded-2xl p-6 shadow-sm ${
                    highlight ? "bg-gold-dark text-cream" : "border border-ink/10 bg-white text-ink"
                  }`}
                >
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full ${
                      highlight ? "bg-cream/15" : "bg-gold/15"
                    }`}
                  >
                    <Icon size={20} className={highlight ? "text-cream" : "text-gold-dark"} />
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-bold">{title}</h3>
                  <p className={`mt-1.5 text-sm ${highlight ? "text-cream/80" : "text-ink/60"}`}>{text}</p>
                </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}