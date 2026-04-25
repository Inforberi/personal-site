// styles
import "../../styles/globals.css";
import { cn } from "@/utils/cn";

// types
import type { Locale, Theme, Params, ChildrenLocale } from "@/types/types";

// hooks
import { cookies } from "next/headers";
import { Unbounded, Montserrat } from "next/font/google";
import { notFound } from "next/navigation";

// components
import Header from "@/components/shared/header/Header";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Footer from "@/components/shared/Footer/Footer";
import GsapProvider from "@/components/shared/gsap/GsapProvider";

// next intl
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  setRequestLocale,
  getTranslations,
} from "next-intl/server";
import { routing } from "@/i18n/routing";

const unbounded = Unbounded({
  weight: ["400", "500", "600"],
  variable: "--font-title",
  subsets: ["latin", "cyrillic"],
});

const montserrat = Montserrat({
  weight: ["400", "500", "600"],
  variable: "--font-primary",
  subsets: ["latin", "cyrillic"],
});

const locales = ["ru", "en"] satisfies Locale[];

const isLocale = (locale: string): locale is Locale => {
  return locales.includes(locale as Locale);
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const t = await getTranslations({
    locale,
    namespace: "RootMetadata",
  });

  return {
    metadataBase: new URL("https://personal-site-one-coral.vercel.app"),
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      type: "website",
      url: "/",
      siteName: "Frontend Developer",
      images: `/seo/og-image/home/og-image-home-${locale}.jpg`,
    },
    locale,
    alternates: {
      canonical: "/",
    },
    icons: {
      icon: [
        { url: "/seo/favicon/favicon.svg", type: "image/svg+xml" },
        {
          url: "/seo/favicon/favicon-32x32.png",
          type: "image/png",
          sizes: "32x32",
        },
        {
          url: "/seo/favicon/favicon-16x16.png",
          type: "image/png",
          sizes: "16x16",
        },
      ],
      apple: {
        url: "/seo/favicon/apple-touch-icon.png",
        sizes: "180x180",
      },
    },
    verification: {
      google: "ffqBmXrSMq1GbA0CLBUIPyYQwF17CbfiLXgVS4shjyY",
      yandex: "",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: ChildrenLocale) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();
  const cookieStore = await cookies();

  const themeValue = cookieStore.get("theme")?.value;
  const theme: Theme = themeValue === "light" ? "light" : "dark";

  return (
    <html
      lang={locale}
      data-theme={theme}
      className="relative scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary"
    >
      <body
        className={cn(
          unbounded.variable,
          montserrat.variable,
          "scroll-smooth bg-background-light font-primary font-normal text-black antialiased transition-colors duration-300 selection:bg-green-700 selection:text-white dark:bg-background-dark dark:text-white",
        )}
      >
        <GsapProvider>
          <ThemeProvider initialTheme={theme}>
            <NextIntlClientProvider messages={messages}>
              <div
                className={cn(
                  "mx-auto grid min-h-screen max-w-screen-3xl grid-cols-1 grid-rows-[auto_1fr_auto] overflow-x-hidden px-5",
                  "sm:px-8",
                  "lg:px-14",
                  "xl:px-20",
                  "2xl:px-24",
                )}
              >
                <Header />
                <main className="app">{children}</main>
                <Footer />
              </div>
            </NextIntlClientProvider>
          </ThemeProvider>
        </GsapProvider>
      </body>
    </html>
  );
}
