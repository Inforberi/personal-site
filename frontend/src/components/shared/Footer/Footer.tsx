// styles
import { cn } from "@/utils/cn";

// hooks
import TransitionLink from "../TransitionLink/TransitionLink";

// components
import Contacts from "./components/Contacts";
import NavLink from "./components/NavLink";
import LogoIcon from "../LogoIcon/LogoIcon";
import P from "../htmlTegs/P";

//next intl
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  const navList = [
    { title: t("main"), href: "/" },
    { title: t("todo"), href: "/todo-list" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className={cn("pt-24", "sm:pt-28", "2xl:pt-36")}>
      <div
        className={cn(
          "space-y-8 border-t border-primary py-12",
          "sm:space-y-10",
          "lg:space-y-12 lg:border-t-2",
        )}
      >
        <div
          className={cn(
            "flex flex-col items-center justify-center gap-8",
            "sm:flex-row sm:items-start sm:justify-between sm:gap-0",
          )}
        >
          <TransitionLink
            href="/"
            className={cn("font-title text-5xl font-semibold")}
          >
            <LogoIcon />
          </TransitionLink>
          <NavLink navList={navList} />
          <Contacts />
        </div>
        <P className="text-center">{t("privacy", { currentYear })}</P>
      </div>
    </footer>
  );
};

export default Footer;
