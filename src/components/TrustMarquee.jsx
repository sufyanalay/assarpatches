const items = [
  "PVC Patches",
  "Embroidered Patches",
  "Sublimation Patches",
  "Woven Patches",
  "Leather Patches",
  "Export Quality",
  "Bulk Manufacturing",
  "Custom Branding",
  "OEM & Private Label",
];

export default function TrustMarquee() {
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-ink/10 bg-ink py-4">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.15em] text-cream/70"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}