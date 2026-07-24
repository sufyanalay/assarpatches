import { FiGlobe, FiScissors, FiClock, FiAward } from "react-icons/fi";

const items = [
  { icon: FiGlobe, title: "Worldwide Shipping", text: "Export quality, delivered globally." },
  { icon: FiScissors, title: "Fully Custom", text: "Aapke design, aapki branding." },
  { icon: FiAward, title: "Premium Quality", text: "Best fabric & fine stitching." },
  { icon: FiClock, title: "On-time Delivery", text: "Deadlines ka pura khayal." },
];

export default function Features() {
  return (
    <section className="border-t border-white/5 bg-ink py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex flex-col items-center rounded-2xl border border-white/5 bg-white/[0.03] px-6 py-8 text-center transition hover:border-gold/30 hover:bg-white/[0.05]"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Icon size={26} />
              </div>
              <h3 className="mt-4 font-bold text-cream">{title}</h3>
              <p className="mt-1 text-sm text-cream/60">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}