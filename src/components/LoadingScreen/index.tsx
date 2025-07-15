"use client";

import Image from "next/image";
import styles from "./LoadingScreen.module.css";
import cx from "classnames";

export default function LoadingScreen({
  fullBlack = false,
}: {
  fullBlack?: boolean;
}) {
  return (
    <div
      className={cx(
        styles.loading__wrapper,
        fullBlack && styles.loading__black
      )}
    >
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
