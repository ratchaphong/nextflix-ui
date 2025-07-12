import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("AboutPage");

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">{t("title")}</h1>
      <p>{t("description")}</p>
    </main>
  );
}
