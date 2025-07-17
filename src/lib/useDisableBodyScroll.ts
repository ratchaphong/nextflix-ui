"use client";

import { useEffect } from "react";

const useDisableBodyScroll = (isActive: boolean) => {
  useEffect(() => {
    if (isActive) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isActive]);
};

export default useDisableBodyScroll;
