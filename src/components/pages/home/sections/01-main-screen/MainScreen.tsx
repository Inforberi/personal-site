// styles
import { cn } from "@/utils/cn";

//  components
import TitleMS from "./components/TitleMS";
import StackMS from "./components/StackMS/StackMS";
import Button from "../../shared/button/Button";
import P from "@/components/shared/htmlTegs/P";
import MyselfImage from "./components/MyselfImage";

// next intl
import { useTranslations } from "next-intl";

const MainScreen = () => {
  const t = useTranslations("HomePage.mainScreen");

  return (
    <section className={cn("pt-14", "lg:pt-20", "xl:pt-24")} id="main-screen">
      <div className={cn("grid grid-cols-1 grid-rows-1", "lg:grid-cols-2")}>
        <div
          className={cn(
            "col-start-1 row-start-1",
            "lg:max-w-[550px]",
            "xl:max-w-[725px]",
            "2xl:max-w-[1030px]",
          )}
        >
          <TitleMS text={t("title")} />
          <StackMS button={t("stack")} />
          <P
            className={cn(
              "mb-10 text-center",
              "sm:mb-14",
              "lg:text-start",
              "xl:mb-16",
              "2xl:mb-24",
              "motion-scale-in-75 motion-translate-y-in-50 motion-opacity-in-0 motion-duration-1000 motion-delay-1500 motion-ease-spring-smooth",
            )}
          >
            {t("text")}
          </P>
          <div
            className={cn(
              "flex flex-col items-center justify-center gap-6",
              "sm:flex-row sm:gap-8",
              "lg:justify-start",
              "2xl:gap-10",
            )}
          >
            <Button
              variant="fill"
              as="button"
              text={t("buttons.button1")}
              className="-motion-translate-x-in-25 motion-opacity-in-0 motion-duration-1000 motion-delay-[1.7s] motion-ease-spring-bouncy"
            />
            <Button
              variant="ghost"
              as="link"
              text={t("buttons.button2")}
              className="motion-translate-x-in-25 motion-opacity-in-0 motion-duration-1000 motion-delay-[1.7s] motion-ease-spring-bouncy"
            />
          </div>
        </div>
        <MyselfImage alt={t("imageAlt")} />
      </div>
    </section>
  );
};

export default MainScreen;
