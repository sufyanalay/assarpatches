import { connectDB } from "@/lib/db";
import Section from "@/models/Section";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiMail,
  FiMapPin,
  FiPhone,
  FiArrowRight,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

async function getCategories() {
  try {
    await connectDB();

    const sections = await Section.find()
      .sort({ order: 1, createdAt: 1 })
      .select("title slug")
      .lean();

    return JSON.parse(JSON.stringify(sections));
  } catch {
    return [];
  }
}

export default async function Footer() {
  const categories = await getCategories();

  return (
    <footer className="relative overflow-hidden border-t border-ink/10 bg-cream text-ink">
      {/* =====================================================
          BACKGROUND DECORATIONS
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Soft gold glow */}
        <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-gold-dark/[0.035] blur-[100px]" />

        <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-gold-dark/[0.04] blur-[100px]" />

        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage: "radial-gradient(#B88A3B 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Large watermark */}
        <span className="absolute -bottom-10 -left-3 hidden select-none font-serif text-[150px] font-bold leading-none tracking-[-0.05em] text-gold-dark/[0.025] lg:block">
          ASSAR
        </span>
      </div>

      {/* =====================================================
          TOP CTA STRIP
      ===================================================== */}

      <div className="relative z-10 border-b border-ink/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="flex flex-col gap-6 py-9 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold-dark">
                Start Your Next Project
              </p>

              <h2 className="mt-2 font-serif text-2xl font-bold leading-tight text-ink sm:text-3xl">
                Need custom patches for your brand?
              </h2>
            </div>

            <Link
              href="/#contact"
              className="group inline-flex w-fit cursor-pointer items-center gap-3 rounded-full bg-gold-dark px-6 py-3.5 text-sm font-semibold text-cream shadow-[0_10px_25px_rgba(184,138,59,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-ink hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)]"
            >
              Request a Quote
              <FiArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1.15fr] lg:gap-16">
          {/* =================================================
              BRAND
          ================================================= */}

          <div>
            {/* Logo */}
            <Link
              href="/"
              className="group inline-flex items-center font-serif text-2xl font-bold tracking-tight text-ink"
            >
              Assar{" "}
              <span className="ml-1 text-gold-dark transition-colors duration-300 group-hover:text-gold">
                Patches
              </span>
            </Link>

            {/* Gold line */}
            <div className="mt-4 flex items-center gap-2">
              <span className="h-[2px] w-10 rounded-full bg-gold-dark" />
              <span className="h-1.5 w-1.5 rotate-45 bg-gold-dark" />
            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-ink/60">
              Custom PVC, embroidered, sublimation, woven and leather patches
              manufactured with precision for brands, businesses and global B2B
              buyers.
            </p>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              <TrustBadge text="Export Quality" />
              <TrustBadge text="Custom Made" />
              <TrustBadge text="Global Supply" />
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/923127370957"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex cursor-pointer items-center gap-3 text-sm font-semibold text-ink transition-colors duration-300 hover:text-gold-dark"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-dark/20 bg-white text-gold-dark transition-all duration-300 group-hover:border-gold-dark group-hover:bg-gold-dark group-hover:text-cream">
                <FaWhatsapp size={17} />
              </span>
              Chat with our team
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* =================================================
              EXPLORE
          ================================================= */}

          <div>
            <FooterHeading>Explore</FooterHeading>

            <ul className="mt-6 space-y-3">
              {categories.map((c) => (
                <li key={c.slug}>
                  <FooterLink href={`/patches/${c.slug}`}>{c.title}</FooterLink>
                </li>
              ))}

              <li>
                <FooterLink href="/blogs">Blogs</FooterLink>
              </li>
            </ul>
          </div>

          {/* =================================================
              CONTACT
          ================================================= */}

          <div>
            <FooterHeading>Contact</FooterHeading>

            <div className="mt-6 space-y-5">
              {/* Email */}
              <ContactItem
                icon={FiMail}
                label="Email"
                text="assarpatches@gmail.com"
                href="mailto:assarpatches@gmail.com"
              />

              {/* Phone */}
              <ContactItem
                icon={FiPhone}
                label="Phone"
                text="+92 312 7370957"
                href="tel:+923127370957"
              />

              {/* WhatsApp */}
              <ContactItem
                icon={FaWhatsapp}
                label="WhatsApp"
                text="+92 312 7370957"
                href="https://wa.me/923127370957"
                external
              />

              {/* Address */}
              <ContactItem
                icon={FiMapPin}
                label="Location"
                text="Defence Road, Akbarabad, Sialkot, Pakistan"
              />
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM DIVIDER
        ===================================================== */}

        <div className="mt-14">
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-ink/10" />

            <span className="h-1.5 w-1.5 rotate-45 bg-gold-dark/60" />

            <div className="h-px w-10 bg-gold-dark/40" />

            <span className="h-1.5 w-1.5 rotate-45 bg-gold-dark/60" />

            <div className="h-px flex-1 bg-ink/10" />
          </div>
        </div>

        {/* =====================================================
            COPYRIGHT
        ===================================================== */}

        <div className="flex flex-col gap-4 pt-7 text-xs text-ink/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Assar Patches. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-dark" />
              Custom Manufacturing
            </span>

            <span className="hidden h-3 w-px bg-ink/15 sm:block" />

            <span>Made for Global Brands</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   FOOTER HEADING
========================================================= */

function FooterHeading({ children }) {
  return (
    <div>
      <h4 className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-dark">
        {children}
      </h4>

      <div className="mt-3 flex items-center gap-1.5">
        <span className="h-[2px] w-7 rounded-full bg-gold-dark" />
        <span className="h-1 w-1 rotate-45 bg-gold-dark/70" />
      </div>
    </div>
  );
}

/* =========================================================
   FOOTER LINK
========================================================= */

function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="group inline-flex cursor-pointer items-center gap-2 text-sm text-ink/60 transition-all duration-300 hover:translate-x-1 hover:text-gold-dark"
    >
      <span className="h-1 w-1 rounded-full bg-gold-dark/40 transition-all duration-300 group-hover:bg-gold-dark" />

      {children}
    </Link>
  );
}

/* =========================================================
   CONTACT ITEM
========================================================= */

function ContactItem({ icon: Icon, label, text, href, external = false }) {
  const content = (
    <>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold-dark/10 bg-white text-gold-dark shadow-sm transition-all duration-300 group-hover:border-gold-dark/30 group-hover:bg-gold-dark group-hover:text-cream">
        <Icon size={17} />
      </div>

      <div className="min-w-0">
        <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-ink/40">
          {label}
        </p>

        <p className="mt-1 break-words text-sm leading-5 text-ink/65 transition-colors duration-300 group-hover:text-gold-dark">
          {text}
        </p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="group flex cursor-pointer items-start gap-3"
      >
        {content}
      </a>
    );
  }

  return <div className="group flex items-start gap-3">{content}</div>;
}

/* =========================================================
   TRUST BADGE
========================================================= */

function TrustBadge({ text }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-dark/15 bg-white/70 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-ink/55">
      <span className="h-1 w-1 rounded-full bg-gold-dark" />
      {text}
    </span>
  );
}
