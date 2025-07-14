import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "th"],
  defaultLocale: "th",
  localePrefix: "as-needed", // หรือ 'as-needed' หรือ 'never' หรือ 'always'
  pathnames: {
    "/": "/",
    "/about": {
      en: "/about",
      th: "/about",
    },
    "/register": {
      en: "/register",
      th: "/register",
    },
    "/login": {
      en: "/login",
      th: "/login",
    },
    "/select-profile": {
      en: "/select-profile",
      th: "/select-profile",
    },
    "/dashboard": {
      en: "/dashboard",
      th: "/dashboard",
    },
  },
  localeDetection: false,
});
