"use client";

import { useRef, useState } from "react";
import { useMovieStore } from "@/stores/movie.store";
import { useTranslations } from "next-intl";

export default function useTrendingCarousel() {
  const t = useTranslations("HomePage");
  const { movies } = useMovieStore();

  const scrollRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<number | null>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (container) {
      const amount = container.offsetWidth;
      container.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return { t, selected, trendingItems: movies, scrollRef, setSelected, scroll };
}
