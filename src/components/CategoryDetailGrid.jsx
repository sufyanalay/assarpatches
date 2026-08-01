"use client";
import { useState } from "react";

export default function CategoryDetailGrid({ section }) {
  const [tab, setTab] = useState("all");
  const slides = section.slides || [];
  const filtered =
    tab === "all" ? slides : slides.filter((s) => s.subSection === tab);
  const subName = (slug) =>
    section.subSections?.find((x) => x.slug === slug)?.name || "";
  const countFor = (slug) =>
    slug === "all"
      ? slides.length
      : slides.filter((s) => s.subSection === slug).length;

  return (
    <section className="bg-cream py-16 mt-10">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">
            Our Craft
          </p>
          <h1 className="mt-2 font-serif text-4xl font-bold text-ink sm:text-5xl">
            {section.title}
          </h1>
          {section.description && (
            <p className="mt-3 text-ink/60">{section.description}</p>
          )}
        </div>

        {section.subSections?.length > 0 && (
          <div className="no-bar mt-8 flex flex-wrap justify-center gap-2.5 overflow-x-auto pb-1">
            <TabBtn
              active={tab === "all"}
              onClick={() => setTab("all")}
              count={countFor("all")}
            >
              All
            </TabBtn>
            {section.subSections.map((ss) => (
              <TabBtn
                key={ss.slug}
                active={tab === ss.slug}
                onClick={() => setTab(ss.slug)}
                count={countFor(ss.slug)}
              >
                {ss.name}
              </TabBtn>
            ))}
          </div>
        )}

        {filtered.length === 0 ? (
          <p className="mt-16 text-center text-ink/40">
            No items yet in this category.
          </p>
        ) : (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((s) => (
              <div
                key={s._id}
                className="group overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-square overflow-hidden bg-ink/5">
                  {s.type === "video" ? (
                    <video
                      src={s.url}
                      className="h-full w-full object-cover"
                      muted
                      loop
                      autoPlay
                      playsInline
                    />
                  ) : (
                    <img
                      src={s.url}
                      alt={s.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="p-5">
                  {s.subSection && (
                    <span className="inline-block rounded-full bg-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-gold-dark">
                      {subName(s.subSection)}
                    </span>
                  )}
                  <h3 className="mt-2 font-serif text-lg font-bold text-ink">
                    {s.title || "Untitled"}
                  </h3>
                  {s.details && (
                    <p className="mt-1.5 text-sm text-ink/60 line-clamp-3">
                      {s.details}
                    </p>
                  )}
                  {s.specs?.length > 0 && (
                    <ul className="mt-3 space-y-1">
                      {s.specs.slice(0, 3).map((sp) => (
                        <li
                          key={sp}
                          className="flex items-center gap-2 text-xs text-ink/60"
                        >
                          <span className="h-1 w-1 flex-shrink-0 rounded-full bg-gold-dark" />
                          {sp}
                        </li>
                      ))}
                    </ul>
                  )}
                  <a
                    href="/#contact"
                    className="mt-4 inline-block rounded-full bg-ink px-5 py-2 text-xs font-semibold text-cream transition hover:bg-gold-dark"
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function TabBtn({ active, onClick, children, count }) {
  return (
    <button
      onClick={onClick}
      className={`group flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
        active
          ? "scale-105 bg-ink text-cream shadow-lg shadow-ink/25"
          : "border border-ink/15 bg-white text-neutral-600 hover:-translate-y-0.5 hover:border-gold-dark hover:text-gold-dark hover:shadow-md"
      }`}
    >
      {active && <span className="h-1.5 w-1.5 rounded-full bg-gold" />}
      {children}
      {typeof count === "number" && (
        <span
          className={`rounded-full px-2 py-0.5 text-[10px] font-bold transition ${
            active
              ? "bg-gold text-ink"
              : "bg-ink/5 text-neutral-500 group-hover:bg-gold/20 group-hover:text-gold-dark"
          }`}
        >
          {count}
        </span>
      )}
    </button>
  );
}
