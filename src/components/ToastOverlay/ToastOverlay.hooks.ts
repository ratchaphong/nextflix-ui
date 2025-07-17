"use client";

import { useToastStore } from "@/stores/toast.store";
import { useEffect } from "react";

export default function useToastOverlay() {
  const { message, type, visible, hideToast } = useToastStore();

  useEffect(() => {
    if (visible) {
      const timeout = setTimeout(() => {
        hideToast();
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [visible, hideToast]);

  return { visible, message, type };
}
