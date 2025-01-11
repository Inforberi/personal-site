// styles
import { cn } from "@/utils/cn";

// components
import TodoHeading from "@/components/pages/todos/shared/htmlTegs/TodoHeading";

// types
import type { Section } from "../../../types/types";

interface HowTodoWorksItemProps extends Section {
  index: number;
}

const HowTodoWorksItem = ({
  title,
  descriptions,
  index,
}: HowTodoWorksItemProps) => {
  return (
    <li
      className={cn(
        "grid grid-cols-1 gap-6 py-5",
        "sm:gap-7 sm:py-8",
        "lg:grid-cols-[35%_1fr] lg:gap-10 lg:px-3 lg:py-10",
        "xl:px-11",
        "2xl:gap-24",
      )}
    >
      {/* TodoHeading */}
      <div
        className={cn(
          "flex items-center justify-center gap-5",
          "sm:gap-10",
          "lg:gap-5",
          "xl:gap-7",
          "2xl:gap-10",
        )}
      >
        <div
          className={cn(
            "font-title text-4xl text-primary opacity-70",
            "sm:text-5xl",
            "xl:text-7xl",
            "2xl:text-8xl",
          )}
        >
          {index}
        </div>
        <TodoHeading animation={false} as="h3">
          {title}
        </TodoHeading>
      </div>
      {/* content */}
      <ul className={cn("flex flex-col gap-2")}>
        {descriptions?.map((text, index) => (
          <li className="sm:text-lg xl:text-xl 2xl:text-2xl" key={index}>
            - {text}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default HowTodoWorksItem;
