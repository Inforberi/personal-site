"use client";

// hooks
import { usePathname } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useEffect } from "react";

const Template = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const locale = useLocale();

  useEffect(() => {
    const app = document.querySelector(".app");
    if (!app) return;

    app.classList.add("page-transition");
  }, [pathname, locale]);

  return <>{children}</>;
};

export default Template;
