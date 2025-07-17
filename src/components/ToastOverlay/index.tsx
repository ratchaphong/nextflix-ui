// components/ToastOverlay.tsx
"use client";

import styles from "./ToastOverlay.module.css";
import useToastOverlay from "./ToastOverlay.hooks";

export default function ToastOverlay() {
  const { visible, message, type } = useToastOverlay();

  if (!visible || !message || !type) return null;

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <span>{message}</span>
    </div>
  );
}
