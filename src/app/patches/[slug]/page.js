import { connectDB } from "@/lib/db";
import Section from "@/models/Section";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryDetailGrid from "@/components/CategoryDetailGrid";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

async function getSection(slug) {
  await connectDB();
  const section = await Section.findOne({ slug }).lean();
  return section ? JSON.parse(JSON.stringify(section)) : null;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const section = await getSection(slug);
  if (!section) return {};

  return {
    title: `${section.title} | Assar Patches`,
    description: section.description || section.tagline || `Custom ${section.title} manufacturing — export quality, made to your brand.`,
  };
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const section = await getSection(slug);
  if (!section) notFound();

  return (
    <main>
      <Navbar />
      <div className="bg-cream pt-2">
        <CategoryDetailGrid section={section} />
      </div>
      <Footer />
    </main>
  );
}