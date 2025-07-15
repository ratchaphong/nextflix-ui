"use client";

import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { useTheme } from "@/lib/useTheme";

const HIDDEN_PATHS = ["/select-profile", "/login", "/register"];

export function useFooter() {
  const t = useTranslations("Footer");
  const pathname = usePathname();
  const locale = useLocale();
  const { theme, toggleTheme } = useTheme();

  const shouldHideFooter = HIDDEN_PATHS.includes(pathname);

  return {
    t,
    locale,
    shouldHideFooter,
    theme,
    toggleTheme,
  };
}
