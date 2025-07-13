"use client";

import { useCallback } from "react";
import { FormValues } from "./home.types";
import { useTranslations } from "next-intl";

export function useHomeForm() {
  const t = useTranslations("HomePage");

  const handleSubmit = useCallback(async (values: FormValues) => {
    console.log("📨 Submitting form...", values);

    try {
      // 📝 TODO: แทนที่ด้วย API call หรือ logic ที่ต้องการ
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Mock delay
      alert(`Form submitted with email: ${values.email}`);
    } catch (error) {
      console.error("❌ Submission failed:", error);
    }
  }, []);

  return {
    handleSubmit,
    t,
  };
}
