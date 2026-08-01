import { connectDB } from "@/lib/db";
import Section from "@/models/Section";
import NavbarWrapper from "./NavbarWrapper";

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

  return <NavbarWrapper categories={categories} />;
}
