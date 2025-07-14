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
    "/selectProfile": {
      en: "/selectProfile",
      th: "/selectProfile",
    },
     "/dashboard": {
      en: "/dashboard",
      th: "/dashboard",
    },
  },
  localeDetection: false,
});
