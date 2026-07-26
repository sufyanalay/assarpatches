"use client";

import { useState } from "react";
import Link from "next/link";
import { FiChevronDown, FiPlus, FiMinus } from "react-icons/fi";

export default function NavLinks({ categories }) {
  const [open, setOpen] = useState(false); // mobile menu
  const [patchesOpen, setPatchesOpen] = useState(false); // mobile submenu

  return (
    <>
      {/* Desktop Navigation */}
      <ul className="hidden items-center gap-6 xl:flex">
        <li>
          <Link href="/" className="relative text-sm font-medium text-ink/70 transition hover:text-gold-dark after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:bg-gold-dark after:transition-all after:duration-300 hover:after:w-full">
            Home
          </Link>
        </li>

        <li className="group relative">
          <button className="relative flex items-center gap-1 text-sm font-medium text-ink/70 transition hover:text-gold-dark after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:bg-gold-dark after:transition-all after:duration-300 group-hover:after:w-full">
            Patches
            <FiChevronDown size={14} className="transition duration-300 group-hover:rotate-180" />
          </button>
          <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
            <div className="max-h-80 overflow-y-auto rounded-xl border border-ink/10 bg-white p-2 shadow-xl ring-1 ring-gold/10">
              {categories.length === 0 ? (
                <p className="px-3 py-2 text-sm text-ink/40">No categories yet</p>
              ) : (
                categories.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/patches/${c.slug}`}
                    className="block rounded-lg px-3 py-2 text-sm text-ink/70 transition hover:bg-cream hover:text-gold-dark hover:pl-4"
                  >
                    {c.title}
                  </Link>
                ))
              )}
            </div>
          </div>
        </li>

        <li>
          <Link href="/blogs" className="relative text-sm font-medium text-ink/70 transition hover:text-gold-dark after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:bg-gold-dark after:transition-all after:duration-300 hover:after:w-full">
            Blogs
          </Link>
        </li>
        <li>
          <Link href="/#contact" className="relative text-sm font-medium text-ink/70 transition hover:text-gold-dark after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:bg-gold-dark after:transition-all after:duration-300 hover:after:w-full">
            Contact
          </Link>
        </li>
      </ul>

      {/* Desktop Button */}
      <Link
        href="/#contact"
        className="hidden rounded-full border border-gold-dark px-5 py-2 text-sm font-semibold text-gold-dark transition duration-300 hover:scale-105 hover:bg-gold-dark hover:text-cream xl:inline-block"
      >
        Get a Quote
      </Link>

      {/* Mobile Menu Button */}
      <button
        type="button"
        className="text-ink xl:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
      >
        <div className="space-y-1.5">
          <span className="block h-0.5 w-6 bg-ink"></span>
          <span className="block h-0.5 w-6 bg-ink"></span>
          <span className="block h-0.5 w-6 bg-ink"></span>
        </div>
      </button>

      {/* Mobile Menu — absolutely positioned so it doesn't break the flex nav row */}
      {open && (
        <div className="absolute left-0 top-full w-full border-t border-ink/10 bg-cream px-5 py-3 xl:hidden">
          <ul className="space-y-1">
            <li>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-medium text-ink/70 hover:text-gold-dark"
              >
                Home
              </Link>
            </li>

            <li>
              <button
                onClick={() => setPatchesOpen(!patchesOpen)}
                className="flex w-full items-center justify-between py-2 text-sm font-medium text-ink/70 hover:text-gold-dark"
              >
                Patches
                {patchesOpen ? <FiMinus size={14} /> : <FiPlus size={14} />}
              </button>
              {patchesOpen && (
                <ul className="ml-3 space-y-1 border-l border-ink/10 pl-3">
                  {categories.length === 0 ? (
                    <li className="py-1.5 text-sm text-ink/40">No categories yet</li>
                  ) : (
                    categories.map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={`/patches/${c.slug}`}
                          onClick={() => setOpen(false)}
                          className="block py-1.5 text-sm text-ink/60 hover:text-gold-dark"
                        >
                          {c.title}
                        </Link>
                      </li>
                    ))
                  )}
                </ul>
              )}
            </li>

            <li>
              <Link
                href="/blogs"
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-medium text-ink/70 hover:text-gold-dark"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-medium text-ink/70 hover:text-gold-dark"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}