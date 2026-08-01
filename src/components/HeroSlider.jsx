"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const images = [
  "/hero/pvc-patches.webp",
  "/hero/embroidered-patches.webp",
  "/hero/sublimation-patches.webp",
  "/hero/woven-patches.webp",
  "/hero/leather-patches.webp",
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((image, index) => (
        <Image
          key={image}
          src={image}
          alt={`Hero ${index + 1}`}
          fill
          priority={index === 0}
          className={`object-cover transition-all duration-1000 ${
            current === index ? "scale-100 opacity-100" : "scale-105 opacity-0"
          }`}
        />
      ))}

      {/* Previous */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur transition hover:border-gold hover:bg-gold hover:text-ink cursor-pointer hidden 2xl:flex"
      >
        <FiChevronLeft size={24} />
      </button>

      {/* Next */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur transition hover:border-gold hover:bg-gold hover:text-ink cursor-pointer hidden 2xl:flex"
      >
        <FiChevronRight size={24} />
      </button>
    </div>
  );
}
