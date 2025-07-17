"use client";

import useDisableBodyScroll from "@/lib/useDisableBodyScroll";
import { useTranslations } from "next-intl";

export default function useSelectedMovieModal() {
  useDisableBodyScroll(true);
  const t = useTranslations("SelectedMovieModal");

  return { t };
}
