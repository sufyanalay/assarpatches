"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import NavLinks from "./NavLinks";

export default function NavbarWrapper({ categories }) {
  const pathname = usePathname();

  // Check ke hum Home page par hain ya nahi
  const isHomePage = pathname === "/";

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * Home Page:
   * scroll nahi hua = transparent
   * scroll hua = normal navbar
   *
   * Other Pages:
   * hamesha normal navbar
   */
  const showSolidNavbar = !isHomePage || scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        showSolidNavbar
          ? "border-b border-ink/10 bg-cream/95 shadow-lg backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        {/* Logo */}
        <Link
          href="/"
          className={`font-serif text-2xl font-bold transition-colors duration-500 ${
            showSolidNavbar ? "text-ink" : "text-white"
          }`}
        >
          Assar{" "}
          <span
            className={`transition-colors duration-500 ${
              showSolidNavbar ? "text-gold-dark" : "text-gold"
            }`}
          >
            Patches
          </span>
        </Link>

        {/* Navigation */}
        <NavLinks categories={categories} scrolled={showSolidNavbar} />
      </nav>
    </header>
  );
}
