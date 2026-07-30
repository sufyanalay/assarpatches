"use client";
import { useState } from "react";
import Link from "next/link";

export default function AccordionGallery({ items }) {
  const [active, setActive] = useState(0);

  if (!items?.length) return null;

  return (
    <section id="categories" className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">Our Craft</p>
          <h2 className="mt-2 font-serif text-4xl font-bold text-ink sm:text-5xl">Explore Our Patches</h2>
          <p className="mt-3 text-ink/60">Hover or tap a panel to see what's inside.</p>
        </div>

        <div className="no-bar mt-12 flex h-[420px] gap-2 overflow-x-auto rounded-2xl sm:h-[480px]">
          {items.map((item, i) => {
            const isActive = i === active;
            return (
              <Link
                key={item.slug}
                href={`/patches/${item.slug}`}
                onMouseEnter={() => setActive(i)}
                onClick={(e) => {
                  if (!isActive) {
                    e.preventDefault();
                    setActive(i);
                  }
                }}
                className={`group relative flex-shrink-0 overflow-hidden rounded-xl transition-all duration-500 ease-out ${
                  isActive ? "flex-[5]" : "flex-[1]"
                }`}
                style={{ minWidth: isActive ? "240px" : "56px" }}
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-ink/5 font-serif text-3xl text-ink/20">
                    {item.title?.[0]}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/10" />

                {/* collapsed: vertical title */}
                {!isActive && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="whitespace-nowrap text-sm font-bold uppercase tracking-[0.2em] text-cream [writing-mode:vertical-rl]">
                      {item.title}
                    </span>
                  </span>
                )}

                {/* expanded: horizontal content */}
                {isActive && (
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="font-serif text-2xl font-bold text-cream">{item.title}</h3>
                    {item.tagline && (
                      <p className="mt-2 max-w-xs text-sm text-cream/80">{item.tagline}</p>
                    )}
                    <span className="mt-4 inline-block w-fit rounded-full bg-gold-dark px-5 py-2 text-xs font-semibold uppercase tracking-wide text-cream transition group-hover:bg-gold">
                      View Gallery
                    </span>
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}