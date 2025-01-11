// "use client";

// hooks
import TransitionLink from "../TransitionLink/TransitionLink";
// import { useState, useCallback } from "react";

// components
import ThemeSwitcher from "../switcherLanguageThemeButtons/ThemeSwitcher";
import LanguageSwitcher from "../switcherLanguageThemeButtons/LanguageSwitcher";
import NavBarDesktop from "./components/NavBarDesktop";
import LogoIcon from "../LogoIcon/LogoIcon";

//next intl
import { useTranslations } from "next-intl";
// import BurgerMenuButton from "./components/BurgerMenuButton";

const Header = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleMenu = useCallback(() => {
  //   setIsMenuOpen((prev) => !prev);
  // }, []);

  const t = useTranslations("Header");

  const navbar = [
    { text: t("navLinks.main"), href: "/" },
    { text: t("navLinks.todo"), href: "/todo-list" },
  ];

  return (
    <header
      id="header"
      className="flex w-full items-center justify-between pt-8"
    >
      <TransitionLink
        href="/"
        className="font-title text-2xl font-semibold xl:text-3xl 2xl:text-4xl"
      >
        <LogoIcon />
      </TransitionLink>
      <NavBarDesktop navbar={navbar} />
      <div className="flex items-center justify-center gap-3 2xl:gap-5">
        <ThemeSwitcher ariaLabel={t("themeSwitcher.ariaLabel")} />
        <LanguageSwitcher ariaLabel={t("languageSwitcher.ariaLabel")} />
      </div>
      {/* <BurgerMenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} /> */}
    </header>
  );
};

export default Header;
