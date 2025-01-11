// styles
import { cn } from "@/utils/cn";

// components
import SocialList from "@/components/shared/SocialList/SocialList";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import P from "@/components/shared/htmlTegs/P";

// next intl
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("HomePage.about");

  return (
    <section id="about">
      <SectionTitle text={t("title")} />
      <P className={cn("mb-8", "lg:mb-10 lg:w-3/4")}>{t("text1")}</P>
      <div
        className={cn(
          "grid gap-10",
          "lg:grid-cols-[auto,_1fr] lg:items-center lg:gap-14",
          "xl:gap-36",
          "2xl:gap-64",
        )}
      >
        <P className={cn("row-start-1 sm:text-end", "lg:col-start-2")}>
          {t("text2")}
        </P>
        <SocialList
          className={cn("justify-center", "lg:col-start-1 lg:row-start-1")}
        />
      </div>
    </section>
  );
};

export default About;
