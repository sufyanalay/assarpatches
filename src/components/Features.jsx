"use client";

import {
  FiGlobe,
  FiScissors,
  FiClock,
  FiAward,
} from "react-icons/fi";

const items = [
  {
    icon: FiGlobe,
    title: "Worldwide Shipping",
    text: "Export-quality custom patches delivered worldwide.",
  },
  {
    icon: FiScissors,
    title: "Fully Custom Designs",
    text: "Every patch is crafted according to your logo and branding.",
  },
  {
    icon: FiAward,
    title: "Premium Quality",
    text: "Finest materials with exceptional embroidery craftsmanship.",
  },
  {
    icon: FiClock,
    title: "Fast Delivery",
    text: "Reliable production and on-time delivery for every order.",
  },
];

export default function Features() {
  return (
    <section className="bg-[#FCFAF6] py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border border-[#E7D9BE] bg-[#FFF8EC] px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#B88A3B]">
            Why Choose Assar
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#222] md:text-5xl">
            Premium Custom Patches
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            We manufacture premium embroidered, PVC, woven, leather and
            sublimation patches with export-quality finishing.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-[#E8E0D6] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFF4E3]">
                  <Icon size={30} className="text-[#B88A3B]" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-[#222]">
                  {item.title}
                </h3>

                <p className="leading-7 text-gray-600">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}