"use client";

import { useMovieStore } from "@/stores/movie.store";
import { VideoItem } from "@/types/global";
import { VIDEO_CATEGORY } from "@/utils/constants";
import { useTranslations } from "next-intl";
import { useEffect, useMemo, useState } from "react";

export default function useDashboard() {
  const { fetchRecommended, fetchByCategory, recommended, categoryVideos } =
    useMovieStore();
  const [showVideo, setShowVideo] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState<string | null>(null);
  const t = useTranslations("Dashboard");

  const handlePlay = () => setShowVideo(true);

  const handleCloseModal = () => {
    setShowVideo(false);
  };

  const handleCardInfoClick = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setSelectedMovieId(id);
  };

  const handleCardModalClose = () => setSelectedMovieId(null);

  const categoryMapByEnum = useMemo(() => {
    const map = new Map<VIDEO_CATEGORY, VideoItem[]>();

    // สร้าง array ของ enum ค่าไว้ก่อน
    const categories = Object.values(VIDEO_CATEGORY);

    // map ค่าเริ่มต้นให้ทุก key
    for (const cat of categories) {
      map.set(cat, []);
    }

    const seen = new Set<string>();

    categoryVideos.forEach((video) => {
      if (seen.has(video.id)) return;
      seen.add(video.id);

      video.category.forEach((cat) => {
        if (map.has(cat as VIDEO_CATEGORY)) {
          map.get(cat as VIDEO_CATEGORY)!.push(video);
        }
      });
    });

    return map;
  }, [categoryVideos]);

  useEffect(() => {
    const init = async () => {
      await fetchRecommended();
      await fetchByCategory({
        category: "",
        title: "",
        page: 1,
        perPage: 100,
        orderBy: "title",
        order: "asc",
      });
    };

    init();
  }, []);

  return {
    t,
    showVideo,
    selectedMovieId,
    recommended,
    categoryMapByEnum,
    handlePlay,
    handleCloseModal,
    handleCardInfoClick,
    handleCardModalClose,
    totalMovies: [...recommended, ...categoryVideos],
  };
}
