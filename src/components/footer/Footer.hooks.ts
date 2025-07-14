"use client";

import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "@/i18n/navigation";

const HIDDEN_PATHS = ["/selectProfile", "/login", "/register"];

export function useFooter() {
  const t = useTranslations("Footer");
  const pathname = usePathname();
  const locale = useLocale();

  const shouldHideFooter = HIDDEN_PATHS.includes(pathname);

  return {
    t,
    locale,
    shouldHideFooter,
  };
}
