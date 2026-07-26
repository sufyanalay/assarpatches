import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustMarquee from "@/components/TrustMarquee";
import Features from "@/components/Features";
import About from "@/components/About";
import CategoryGrid from "@/components/CategoryGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { connectDB } from "@/lib/db";
import Section from "@/models/Section";

export const dynamic = "force-dynamic"; // hamesha fresh data

async function getSections() {
  try {
    await connectDB();
    const sections = await Section.find().sort({ order: 1, createdAt: 1 }).lean();
    return JSON.parse(JSON.stringify(sections)); // plain objects
  } catch {
    return [];
  }
}

export default async function Home() {
  const sections = await getSections();

  const galleryImages = sections
    .flatMap((s) => (s.slides || []).filter((sl) => sl.type !== "video").map((sl) => sl.url))
    .filter(Boolean);

  return (
    <main>
      <Navbar />
      <Hero />
      <TrustMarquee />
      <Reveal><Features /></Reveal>
      <Reveal><About images={galleryImages} /></Reveal>
      <Reveal><CategoryGrid sections={sections} /></Reveal>
      <Reveal><WhyChooseUs /></Reveal>
      <Reveal><Contact /></Reveal>
      <Footer />
    </main>
  );
}