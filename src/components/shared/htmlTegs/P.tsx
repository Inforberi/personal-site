//styles
import { cn } from "@/utils/cn";

// types
import type { ComponentPropsWithoutRef } from "react";

type TextProps = {
  className?: string;
  children: React.ReactNode;
} & ComponentPropsWithoutRef<"p">;

const P = ({ className = "", children, ...props }: TextProps) => {
  return (
    <p
      className={cn(
        "!leading-normal sm:text-lg",
        "xl:text-xl",
        "2xl:text-2.5xl",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
};

export default P;
