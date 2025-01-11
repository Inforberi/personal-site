// styles
import { cn } from "@/utils/cn";

interface TitleMSProps {
  text: string;
}

const TitleMS = ({ text }: TitleMSProps) => {
  return (
    <div
      className={cn(
        "mb-6 inline-flex flex-col font-title text-3xl font-semibold uppercase",
        "sm:mb-18 sm:gap-1 sm:text-4xl",
        "lg:mb-6 lg:gap-3 lg:text-5xl",
        "xl:mb-10 xl:text-6xl",
        "2xl:text-8xl",
      )}
    >
      <span className="-motion-translate-x-in-25 motion-opacity-in-0 motion-ease-spring-smooth">
        Frontend -
      </span>
      <span className="motion-translate-x-in-25 motion-opacity-in-0 motion-ease-spring-smooth">
        {text}
      </span>
    </div>
  );
};

export default TitleMS;
