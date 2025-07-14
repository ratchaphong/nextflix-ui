import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "@/styles/globals.css";
import Header from "@/components/Header";
import TokenChecker from "@/components/TokenChecker";
import Footer from "@/components/Footer";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <TokenChecker>
            <Header />
            {children}
            <Footer />
          </TokenChecker>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
