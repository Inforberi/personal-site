// styles
import { cn } from "@/utils/cn";

// components
import P from "@/components/shared/htmlTegs/P";

interface StackItemProps {
  title: string;
  description: string;
}

const StackItem = ({ title, description }: StackItemProps) => {
  return (
    <div className={cn("flex flex-col gap-6", "xl:gap-5", "2xl:gap-8")}>
      <h3
        className={cn(
          "text-xl underline decoration-primary decoration-1 underline-offset-8",
          "sm:text-2xl sm:decoration-2",
          "xl:text-3xl",
          "2xl:text-4xl",
        )}
      >
        {title}
      </h3>
      <P>{description}</P>
    </div>
  );
};

export default StackItem;
