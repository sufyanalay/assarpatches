import Link from "next/link";
import { connectDB } from "@/lib/db";
import Section from "@/models/Section";
import NavLinks from "./NavLinks";

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

export default async function Navbar() {
  const categories = await getCategories();

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/95 backdrop-blur">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-serif text-2xl font-bold text-ink">
          Assar <span className="text-gold-dark">Patches</span>
        </Link>

        <NavLinks categories={categories} />
      </nav>
    </header>
  );
}