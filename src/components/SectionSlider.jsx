"use client";
import { useState } from "react";

export default function SectionSlider({ section, flip }) {
  const [tab, setTab] = useState("all");
  const [active, setActive] = useState(0);

  const slides = section.slides || [];
  const filtered = tab === "all" ? slides : slides.filter((s) => s.subSection === tab);
  const slide = filtered[active] || filtered[0];

  // agar is section mein koi slide hi nahi, kuch mat dikhao
  if (slides.length === 0) return null;

  const changeTab = (t) => { setTab(t); setActive(0); };
  const next = () => setActive((p) => (p + 1) % filtered.length);
  const subName = (slug) => section.subSections?.find((x) => x.slug === slug)?.name || "";
  const countFor = (slug) =>
    slug === "all" ? slides.length : slides.filter((s) => s.subSection === slug).length;

  return (
    <section id={section.slug} className="scroll-mt-20 border-t border-ink/5 bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">Our Craft</p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-ink sm:text-4xl">{section.title}</h2>
          {section.description && <p className="mt-3 text-neutral-500">{section.description}</p>}
        </div>

        {section.subSections?.length > 0 && (
          <>
            <p className="mt-8 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-neutral-400">
              Filter by type
            </p>
            <div className="no-bar mt-3 flex flex-nowrap justify-start gap-2.5 overflow-x-auto px-1 pb-1 sm:flex-wrap sm:justify-center">
              <TabBtn active={tab === "all"} onClick={() => changeTab("all")} count={countFor("all")}>All</TabBtn>
              {section.subSections.map((ss) => (
                <TabBtn key={ss.slug} active={tab === ss.slug} onClick={() => changeTab(ss.slug)} count={countFor(ss.slug)}>
                  {ss.name}
                </TabBtn>
              ))}
            </div>
          </>
        )}

        {/* Media/details pair — order-based flip instead of a direction:rtl hack,
            so text alignment and scroll behaviour stay normal on every breakpoint */}
        <div className="mt-10 overflow-hidden rounded-[22px] border border-ink/10 bg-white shadow-sm lg:grid lg:grid-cols-2">
          {/* MEDIA side */}
          <div className={`relative ${flip ? "lg:order-2" : "lg:order-1"}`}>
            <button onClick={next} className="group relative block aspect-[5/4] w-full overflow-hidden bg-ink" aria-label="Next">
              {slide.type === "video" ? (
                <video key={slide.url} src={slide.url} className="animate-fade h-full w-full object-cover" autoPlay muted loop playsInline />
              ) : (
                <img key={slide.url} src={slide.url} alt={slide.title} className="animate-fade h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <span className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-bold text-ink">
                {active + 1}/{filtered.length}
              </span>
              <div className="absolute bottom-5 left-5 right-16 text-left sm:left-6">
                <p className="truncate font-serif text-lg font-semibold text-cream drop-shadow sm:text-xl lg:text-2xl">{slide.title || "Untitled"}</p>
                {slide.subSection && (
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-gold">{subName(slide.subSection)}</p>
                )}
              </div>
              {filtered.length > 1 && (
                <span className="absolute bottom-5 right-5 rounded-full bg-ink/60 px-3 py-1 text-[11px] font-medium text-cream backdrop-blur transition group-hover:bg-gold group-hover:text-ink">
                  Next →
                </span>
              )}
            </button>

            {filtered.length > 1 && (
              <div key={tab} className="no-bar flex gap-2 overflow-x-auto bg-ink/[0.03] px-4 py-3">
                {filtered.map((s, i) => (
                  <button
                    key={s._id || s.url}
                    onClick={() => setActive(i)}
                    style={{ animationDelay: `${i * 70}ms` }}
                    className={`animate-fade aspect-square w-14 flex-shrink-0 overflow-hidden rounded-lg transition ${
                      i === active ? "ring-2 ring-gold ring-offset-2 ring-offset-cream" : "opacity-50 hover:opacity-100"
                    }`}
                  >
                    {s.type === "video" ? (
                      <video src={s.url} className="h-full w-full object-cover" muted />
                    ) : (
                      <img src={s.url} alt={s.title} className="h-full w-full object-cover" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* DETAILS side */}
          <div
            className={`flex flex-col justify-center p-8 sm:p-10 ${flip ? "lg:order-1" : "lg:order-2"} ${
              flip
                ? "bg-[radial-gradient(circle_at_top_left,_theme(colors.gold/8%),_transparent_60%)]"
                : "bg-[radial-gradient(circle_at_top_right,_theme(colors.gold/8%),_transparent_60%)]"
            }`}
          >
            <div key={slide.url} className="animate-fade flex h-full flex-col">
              {slide.subSection && (
                <span className="w-fit rounded-full bg-gold/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-gold-dark">
                  {subName(slide.subSection)}
                </span>
              )}
              <h3 className="mt-4 font-serif text-2xl font-bold text-ink sm:text-3xl">{slide.title || "Untitled Piece"}</h3>

              <p className="mt-3 leading-relaxed text-neutral-600">
                {slide.details || "Custom made to your exact specifications — colors, size and backing all tailored to your brand."}
              </p>

              {slide.specs?.length > 0 ? (
                <ul className="mt-5 grid gap-2.5">
                  {slide.specs.map((sp) => (
                    <li key={sp} className="flex items-start gap-3 text-sm text-neutral-700">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                      {sp}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-5 text-sm text-neutral-400">
                  Material, sizing and MOQ details shared on request.
                </p>
              )}

              <a href="#contact" className="mt-7 block w-fit rounded-full bg-ink px-7 py-3 text-center text-sm font-semibold text-cream transition hover:bg-ink-soft">
                Get a Quote for this
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TabBtn({ active, onClick, children, count }) {
  return (
    <button
      onClick={onClick}
      className={`group flex flex-shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
        active ? "scale-105 bg-ink text-cream shadow-lg shadow-ink/25" : "border border-ink/15 bg-white text-neutral-600 hover:-translate-y-0.5 hover:border-gold hover:text-gold-dark hover:shadow-md"
      }`}
    >
      {active && <span className="h-1.5 w-1.5 rounded-full bg-gold" />}
      {children}
      {typeof count === "number" && (
        <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold transition ${active ? "bg-gold text-ink" : "bg-ink/5 text-neutral-500 group-hover:bg-gold/20 group-hover:text-gold-dark"}`}>
          {count}
        </span>
      )}
    </button>
  );
}