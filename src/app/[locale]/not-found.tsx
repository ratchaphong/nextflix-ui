// // src/app/[locale]/not-found.tsx
// import { useTranslations } from "next-intl";

// export default function NotFoundPage() {
//   const t = useTranslations("HomePage");
//   return <h1>{t("title")} (Not Found)</h1>;
// }
"use client";

import { useEffect } from "react";
import { useRouter } from "@/i18n/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  useEffect(() => {
    // ใช้ localized redirect
    router.replace("/");
  }, []);

  return null;
}
