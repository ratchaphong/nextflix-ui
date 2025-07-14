"use client";

import Image from "next/image";
import styles from "./LoadingScreen.module.css";

export default function LoadingScreen() {
  return (
    <div className={styles.loading__wrapper}>
      <Image
        src="/favicon.ico"
        alt="Loading..."
        width={64}
        height={64}
        className={styles.loading__icon}
      />
    </div>
  );
}
