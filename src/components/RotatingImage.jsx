"use client";
import { useEffect, useState } from "react";

export default function RotatingImage({ images, alt, className, intervalMs = 3500, startOffset = 0 }) {
  const [index, setIndex] = useState(images?.length ? startOffset % images.length : 0);

  useEffect(() => {
    if (!images || images.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [images, intervalMs]);

  if (!images || images.length === 0) return null;

  return (
    <img key={index} src={images[index]} alt={alt} className={`animate-fade ${className || ""}`} />
  );
}