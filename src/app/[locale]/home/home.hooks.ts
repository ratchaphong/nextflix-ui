"use client";

import { HomeFormValues } from "./home.types";
import { useTranslations } from "next-intl";
import { FormikHelpers } from "formik";
import { useEffect } from "react";
import { useMovieStore } from "@/stores/movie.store";

export function useHomeForm() {
  const t = useTranslations("HomePage");
  const { fetchMovies } = useMovieStore();

  const handleSubmit = async (
    values: HomeFormValues,
    actions: FormikHelpers<HomeFormValues>
  ) => {
    console.log("📨 Submitting form...", values);
    try {
      console.log("Submitted:", values);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      actions.setSubmitting(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return {
    handleSubmit,
    t,
  };
}
