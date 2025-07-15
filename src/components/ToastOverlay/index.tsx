// components/ToastOverlay.tsx
"use client";

import { useEffect } from "react";
import { useToastStore } from "@/stores/toast.store";
import styles from "./ToastOverlay.module.css";

export default function ToastOverlay() {
  const { message, type, visible, hideToast } = useToastStore();

  useEffect(() => {
    if (visible) {
      const timeout = setTimeout(() => {
        hideToast();
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [visible, hideToast]);

  if (!visible || !message || !type) return null;

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <span>{message}</span>
    </div>
  );
}
