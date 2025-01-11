// styles
import { cn } from "@/utils/cn";

// components
import StackButtonMS from "./components/StackButtonMS";

// icon
import ArrowIcon from "@/components/shared/icons/ArrowIcon";

interface StackMSProps {
  button: string;
}

const StackMS = ({ button }: StackMSProps) => {
  return (
    <div
      className={cn(
        "mb-28",
        "sm400:mb-32",
        "sm:mb-52",
        "lg:mb-14",
        "xl:mb-16",
        "2xl:mb-24",
      )}
    >
      <div
        className={cn(
          "inline-flex flex-col items-center justify-center gap-4",
          "sm:gap-6",
          "lg:flex-row lg:gap-14",
          "2xl:gap-18",
        )}
      >
        <div
          className={cn(
            "order-3",
            "lg:order-none",
            "motion-opacity-in-0 motion-duration-[1.6s] motion-delay-[1.25s] motion-ease-spring-smooth",
          )}
        >
          <StackButtonMS button={button} />
        </div>
        <div
          className={cn(
            "flex h-10",
            "lg:h-auto lg:w-auto",
            "-motion-translate-y-in-50 motion-opacity-in-0 motion-duration-1000 motion-delay-[0.8s] motion-ease-spring-smooth",
            "lg:motion-translate-x-in-50 lg:motion-translate-y-in-0",
          )}
        >
          <ArrowIcon
            className={cn(
              "h-auto w-10 -rotate-90 fill-primary dark:fill-primary",
              "sm:w-12",
              "lg:rotate-0",
              "xl:w-18",
              "2xl:w-24",
            )}
          />
        </div>
        <p
          className={cn(
            "-order-1 font-title font-medium uppercase text-primary dark:text-primary",
            "sm:text-2xl",
            "lg:order-none",
            "xl:text-4xl",
            "2xl:text-5xl",
            "motion-opacity-in-0 motion-duration-2000 motion-delay-500 motion-ease-spring-smooth",
          )}
        >
          React/next.js
        </p>
      </div>
    </div>
  );
};

export default StackMS;
