// styles
import { cn } from "@/utils/cn";

// components
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import P from "@/components/shared/htmlTegs/P";
import { useTranslations } from "next-intl";

// next intl

const Experience = () => {
  const t = useTranslations("HomePage.experience");
  return (
    <section id="experience">
      <SectionTitle text={t("title")} />
      <div
        className={cn(
          "grid gap-5",
          "sm:gap-7 sm:text-center",
          "lg:gap-8",
          "xl:gap-9",
          "2xl:gap-11",
        )}
      >
        <P>{t("text1")}</P>
        <P>{t("text2")}</P>
      </div>
    </section>
  );
};

export default Experience;
