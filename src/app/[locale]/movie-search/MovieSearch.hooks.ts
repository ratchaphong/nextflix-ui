"use client";

import { useEffect, useRef, useState } from "react";
import { useMovieStore } from "@/stores/movie.store";
import { useFormikContext } from "formik";
import { logger } from "@/lib/logger";

export default function useMovieSearch() {
  const { values } = useFormikContext<{ keyword: string }>();
  const { fetchByCategory, categoryVideos } = useMovieStore();
  const timer = useRef<NodeJS.Timeout | null>(null);
  const [delayedKeyword, setDelayedKeyword] = useState("");

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      setDelayedKeyword(values.keyword.trim());
    }, 3000);
  }, [values.keyword]);

  useEffect(() => {
    const search = async () => {
      try {
        await fetchByCategory({
          category: "",
          page: 1,
          perPage: 500,
          orderBy: "title",
          order: "desc",
          title: delayedKeyword,
        });
      } catch (err) {
        logger.error("Failed to fetch:", err);
      }
    };

    search();
  }, [delayedKeyword]);

  return { results: categoryVideos };
}
