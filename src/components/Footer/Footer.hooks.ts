"use client";

import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { useTheme } from "@/lib/useTheme";
import { HIDDEN_PATHS_FOOTER } from "@/utils";

export default function useFooter() {
  const t = useTranslations("Footer");
  const pathname = usePathname();
  const locale = useLocale();
  const { theme, toggleTheme } = useTheme();

  const shouldHideFooter = HIDDEN_PATHS_FOOTER.includes(pathname);

  return {
    t,
    locale,
    shouldHideFooter,
    theme,
    toggleTheme,
  };
}
