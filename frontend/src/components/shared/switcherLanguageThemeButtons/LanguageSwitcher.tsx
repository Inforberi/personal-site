"use client";

// styles
import { cn } from "@/utils/cn";

// next intl
import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";

// hooks
import { useState, useCallback } from "react";
import { useParams } from "next/navigation";

// types
import { Locale } from "@/types/types";
import SwitcherButtonWrapper from "./SwitcherButtonWrapper";

const locales: Locale[] = ["ru", "en"];

interface LanguageSwitcherProps {
  ariaLabel: string;
}

const LanguageSwitcher = ({ ariaLabel }: LanguageSwitcherProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const currentLocale = useLocale();

  const [selectedLocale, setSelectedLocale] = useState<Locale>(
    currentLocale as Locale,
  );

  const handleToggleLanguage = useCallback(() => {
    const newLocale = selectedLocale === "ru" ? "en" : "ru";

    const app = document.querySelector(".app");

    app?.classList.remove("page-transition");

    setTimeout(() => {
      // router.replace(pathname, { locale: newLocale });
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        { pathname, params },
        { locale: newLocale },
      );
    }, 500);
    setSelectedLocale(newLocale);
  }, [selectedLocale, pathname, router, params]);

  return (
    <SwitcherButtonWrapper
      typeSwitcher="language"
      title={ariaLabel}
      ariaLabel={ariaLabel}
      onClick={handleToggleLanguage}
    >
      {locales.map((locale, index) => (
        <span
          key={index}
          className={cn(
            "col-start-1 row-start-1",
            currentLocale === locale
              ? "pointer-events-none opacity-0"
              : "pointer-events-auto animate-fadeIn opacity-100",
          )}
        >
          {locale}
        </span>
      ))}
    </SwitcherButtonWrapper>
  );
};

export default LanguageSwitcher;
