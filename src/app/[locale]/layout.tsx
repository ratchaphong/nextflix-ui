import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "@/styles/globals.css";
import Header from "@/components/Header";
import TokenChecker from "@/components/TokenChecker";
import Footer from "@/components/Footer";
import LoadingOverlay from "@/components/LoadingOverlay/indext";

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
            <LoadingOverlay />
            <Header />
            {children}
            <Footer />
          </TokenChecker>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export const metadata = {
  title: "Netflix Clone",
  description: "Watch unlimited movies and TV shows, anytime, anywhere.",
  keywords: ["netflix", "streaming", "movies", "tv shows"],
  authors: [{ name: "Your Name or Team" }],
  openGraph: {
    title: "Netflix Clone",
    description: "Unlimited entertainment, anytime, anywhere.",
    url: "https://your-site.com",
    siteName: "Netflix Clone",
    images: [
      {
        url: "/image/og-preview.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  themeColor: "#000000",
};
