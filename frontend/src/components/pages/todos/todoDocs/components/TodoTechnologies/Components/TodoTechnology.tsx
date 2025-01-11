// styles
import { cn } from "@/utils/cn";

// icons
import NextJS from "@/components/shared/icons/NextJS";
import Zustand from "@/components/shared/icons/Zustand";
import TypeScript from "@/components/shared/icons/TypeScript";
import Motion from "@/components/shared/icons/Motion";
import LocalStorage from "@/components/shared/icons/LocalStorage";
import Tailwind from "@/components/shared/icons/Tailwind";

interface TodoTechnologyProps {
  technology: keyof typeof icons;
  title: string;
}

const icons = {
  nextjs: NextJS,
  zustand: Zustand,
  typeScript: TypeScript,
  motion: Motion,
  localStorage: LocalStorage,
  tailwind: Tailwind,
};

const TodoTechnology = ({ title, technology }: TodoTechnologyProps) => {
  const IconComponent = icons[technology];

  if (!IconComponent) {
    return;
  }

  return (
    <li
      className={cn(
        "flex flex-col items-center justify-center gap-1 rounded-lg bg-cardBackground-light p-3 text-xs dark:bg-cardBackground-dark",
        "sm:flex-row sm:gap-3 sm:p-4 sm:text-sm",
        "lg:p-5 lg:text-base",
        "xl:rounded-2xl xl:text-xl",
        "2xl:gap-5 2xl:p-9 2xl:text-2xl",
      )}
    >
      <IconComponent
        className={cn(
          "h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12",
          technology === "tailwind" && "w-11 sm:w-12 lg:w-14 xl:w-16 2xl:w-18",
          technology === "motion" && "w-14 sm:w-18 lg:w-20 xl:w-22 2xl:w-24",
        )}
      />
      <span>{title}</span>
    </li>
  );
};

export default TodoTechnology;
