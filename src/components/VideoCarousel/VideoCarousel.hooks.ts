import { useTranslations } from "next-intl";
import { useRef, useState } from "react";

export default function useVideoCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("VideoCarousel");
  const [hoveredMovieId, setHoveredMovieId] = useState<string | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = carouselRef.current.offsetWidth * 0.8;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return { carouselRef, scroll, t, hoveredMovieId, setHoveredMovieId };
}
