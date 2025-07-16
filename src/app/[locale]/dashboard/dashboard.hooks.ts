"use client";

import { useRef, useState } from "react";

const MOVIES = [
  {
    id: "QYDza3BLr1w",
    title: "Future Past: Sanctuary Music Video – Duran Duran",
    thumbnail: "https://img.youtube.com/vi/QYDza3BLr1w/hqdefault.jpg",
    video: "https://www.youtube.com/embed/QYDza3BLr1w?autoplay=1",
    description:
      "The official music video for “Sanctuary” by Duran Duran, from the 2021 album Future Past.",
  },
  {
    id: "NRtnUVaRwXM",
    title: "Invisible (Remastered) – Duran Duran [2021]",
    thumbnail: "https://img.youtube.com/vi/NRtnUVaRwXM/hqdefault.jpg",
    video: "https://www.youtube.com/embed/NRtnUVaRwXM?autoplay=1",
    description:
      "Duran Duran’s classic “Invisible” remastered with enhanced visuals and audio production.",
  },
  {
    id: "HegSBovl24I",
    title: "Anniversary (Live at Wembley) – Duran Duran 2022",
    thumbnail: "https://img.youtube.com/vi/HegSBovl24I/hqdefault.jpg",
    video: "https://www.youtube.com/embed/HegSBovl24I?autoplay=1",
    description:
      'Live performance of "Anniversary" by Duran Duran filmed at Wembley Stadium, 2022 tour.',
  },
  {
    id: "OodEsjZ88TQ",
    title: "Closer Than This – Duran Duran (Official Video)",
    thumbnail: "https://img.youtube.com/vi/OodEsjZ88TQ/hqdefault.jpg",
    video: "https://www.youtube.com/embed/OodEsjZ88TQ?autoplay=1",
    description:
      'Official music video for "Closer Than This" from Duran Duran’s Future Past album.',
  },
  {
    id: "Y36b8_WFejI",
    title: "Invisible – Duran Duran (Official Audio)",
    thumbnail: "https://img.youtube.com/vi/Y36b8_WFejI/hqdefault.jpg",
    video: "https://www.youtube.com/embed/Y36b8_WFejI?autoplay=1",
    description:
      "Official audio track of Duran Duran’s “Invisible” from Future Past — listen here.",
  },
  {
    id: "mXHKjFKBC0g",
    title: "Sunset Garage Live Session – Duran Duran 2022",
    thumbnail: "https://img.youtube.com/vi/mXHKjFKBC0g/hqdefault.jpg",
    video: "https://www.youtube.com/embed/mXHKjFKBC0g?autoplay=1",
    description:
      "Exclusive live session at Sunset Garage studio featuring Duran Duran’s greatest hits.",
  },
  {
    id: "sySlY1XKlhM",
    title: "Invisible – Official Lyric Video – Duran Duran",
    thumbnail: "https://img.youtube.com/vi/sySlY1XKlhM/hqdefault.jpg",
    video: "https://www.youtube.com/embed/sySlY1XKlhM?autoplay=1",
    description:
      "Lyric video for Duran Duran’s “Invisible” — sing along with the official lyrics.",
  },
];

export function useDashboard() {
  const [showVideo, setShowVideo] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState<string | null>(null);

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

  const handleMoreInfo = () => setShowModal(true);

  const handleCloseModal = () => {
    setShowModal(false);
    setShowVideo(false);
  };

  const handleCardInfoClick = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setSelectedMovieId(id);
  };

  const handleCardModalClose = () => setSelectedMovieId(null);

  return {
    showVideo,
    showModal,
    selectedMovieId,
    MOVIES,
    carouselRef,
    handlePlay,
    handleMoreInfo,
    handleCloseModal,
    handleCardInfoClick,
    handleCardModalClose,
    scroll,
  };
}
