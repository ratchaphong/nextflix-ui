import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "th"],
  defaultLocale: "th",
  pathnames: {
    "/": "/",
    "/about": {
      en: "/about",
      th: "/about",
    },
  },
});
