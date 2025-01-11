// styles
import { cn } from "@/utils/cn";

// components
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import StackItem from "./components/StackItem";
import P from "@/components/shared/htmlTegs/P";
import { useTranslations } from "next-intl";

// next intl

const Stack = () => {
  const t = useTranslations("HomePage.stack");

  const stacks = ["web", "lib", "animation", "tools"] as const;
  return (
    <section id="stack">
      <SectionTitle text={t("title")} />
      <div
        className={cn(
          "grid gap-10",
          "sm:gap-14",
          "xl:grid-cols-[33%,_auto] xl:gap-24",
        )}
      >
        <P className={cn("lg:w-3/4", "xl:col-start-1 xl:w-full")}>
          {t("text")}
        </P>
        <div
          className={cn(
            "grid gap-8",
            "sm:grid-cols-2 sm:grid-rows-2 sm:gap-10",
            "lg:mx-auto lg:w-3/4 lg:gap-20",
            "xl:col-start-2 xl:w-auto",
          )}
        >
          {stacks.map((stack, index) => (
            <StackItem
              key={index}
              title={t(`technologyList.${stack}.title`)}
              description={t(`technologyList.${stack}.technologies`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
