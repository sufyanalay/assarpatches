"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "Home", href: "#home" },
  { label: "PVC Patches", href: "#pvc-patches" },
  { label: "Embroidered Patches", href: "#embroidered-patches" },
  { label: "Sublimation Patches", href: "#sublimation-patches" },
  { label: "Woven Patches", href: "#woven-patches" },
  { label: "Leather Patches", href: "#leather-patches" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        {/* Logo */}
        <Link href="/" className="font-serif text-2xl font-bold text-cream">
          Assar <span className="text-gold">Patches</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-6 xl:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-cream/75 transition hover:text-gold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <Link
          href="#contact"
          className="hidden rounded-full border border-gold px-5 py-2 text-sm font-semibold text-gold transition hover:bg-gold hover:text-ink xl:inline-block"
        >
          Get a Quote
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="text-cream xl:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-cream"></span>
            <span className="block h-0.5 w-6 bg-cream"></span>
            <span className="block h-0.5 w-6 bg-cream"></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <ul className="space-y-1 border-t border-white/10 bg-ink px-5 py-3 xl:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-medium text-cream/75 hover:text-gold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}