"use client";

import { useAuthStore } from "@/stores/auth.store";

import { useMovieStore } from "@/stores/movie.store";
import LoadingScreen from "../LoadingScreen";

const LoadingOverlay = () => {
  const isAuthLoading = useAuthStore((state) => state.loading);
  const isMovieLoading = useMovieStore((state) => state.loading);

  const isAnyLoading = isAuthLoading || isMovieLoading;

  if (!isAnyLoading) return null;

  return <LoadingScreen />;
};

export default LoadingOverlay;
