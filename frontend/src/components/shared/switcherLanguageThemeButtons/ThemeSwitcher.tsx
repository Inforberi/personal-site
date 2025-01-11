"use client";

// styles
import { cn } from "@/utils/cn";

// hooks
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "../../providers/ThemeProvider";

// icons
import Sun from "/public/icons/sun.svg";
import Moon from "/public/icons/moon.svg";
import SwitcherButtonWrapper from "./SwitcherButtonWrapper";

const icons = [
  { src: Sun, theme: "light" },
  { src: Moon, theme: "dark" },
];

interface LanguageSwitcherProps {
  ariaLabel: string;
}

const ThemeSwitcher = ({ ariaLabel }: LanguageSwitcherProps) => {
  const { theme, handleToggleTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const themeIcons = icons.map((icon, index) => (
    <Image
      key={index}
      src={icon.src}
      alt=""
      className={cn(
        "col-start-1 row-start-1 w-6 rotate-360 opacity-0 transition-transform-opacity duration-700 sm:w-6",
        theme === icon.theme
          ? "pointer-events-none rotate-360 opacity-0"
          : "pointer-events-auto rotate-0 opacity-100",
      )}
    />
  ));

  return (
    <SwitcherButtonWrapper
      typeSwitcher="theme"
      title={ariaLabel}
      ariaLabel={ariaLabel}
      onClick={handleToggleTheme}
    >
      {isClient && (
        <div className="inline-grid h-full w-full animate-fadeIn grid-cols-1 grid-rows-1 place-items-center">
          {themeIcons}
        </div>
      )}
    </SwitcherButtonWrapper>
  );
};

export default ThemeSwitcher;
