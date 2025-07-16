"use client";

import { useMovieStore } from "@/stores/movie.store";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

export function useDashboard() {
  const { fetchRecommended, recommended } = useMovieStore();
  const [showVideo, setShowVideo] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState<string | null>(null);
  const t = useTranslations("Dashboard");

  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = 220 + 16; // width + gap
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handlePlay = () => setShowVideo(true);

  const handleCloseModal = () => {
    setShowVideo(false);
  };

  const handleCardInfoClick = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setSelectedMovieId(id);
  };

  const handleCardModalClose = () => setSelectedMovieId(null);

  useEffect(() => {
    fetchRecommended();
  }, []);

  return {
    t,
    showVideo,
    selectedMovieId,
    recommended,
    carouselRef,
    handlePlay,
    handleCloseModal,
    handleCardInfoClick,
    handleCardModalClose,
    scroll,
  };
}
