"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { label: "Home", href: "#home" },
  { label: "PVC Patches", href: "#pvc-patches" },
  { label: "Embroidered", href: "#embroidered-patches" },
  { label: "Sublimation", href: "#sublimation-patches" },
  { label: "Woven", href: "#woven-patches" },
  { label: "Leather", href: "#leather-patches" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // mobile menu khulne par background scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="shrink-0 font-serif text-xl font-bold text-cream sm:text-2xl"
        >
          Assar <span className="text-gold">Patches</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-5 lg:flex xl:gap-7">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="whitespace-nowrap text-sm font-medium text-cream/75 transition hover:text-gold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Desktop Button */}
          <Link
            href="#contact"
            className="hidden shrink-0 rounded-full border border-gold px-5 py-2 text-sm font-semibold text-gold transition hover:bg-gold hover:text-ink lg:inline-block"
          >
            Get a Quote
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="relative z-50 flex h-9 w-9 shrink-0 items-center justify-center lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
            aria-expanded={open}
          >
            <span className="relative block h-4 w-6">
              <span
                className={`absolute left-0 top-0 block h-0.5 w-6 bg-cream transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-6 bg-cream transition-all duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-3 block h-0.5 w-6 bg-cream transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-x-0 top-[65px] z-40 origin-top border-t border-white/10 bg-ink transition-all duration-300 lg:hidden ${
          open ? "max-h-[calc(100vh-65px)] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        } overflow-y-auto`}
      >
        <ul className="space-y-1 px-5 py-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-2 py-3 text-base font-medium text-cream/80 transition hover:bg-white/5 hover:text-gold"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-ink transition hover:bg-gold-dark"
            >
              Get a Quote
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}