"use client";

// styles
import { cn } from "@/utils/cn";

interface SwitcherButtonWrapperProps {
  typeSwitcher: "language" | "theme";
  ariaLabel?: string;
  title?: string;
  onClick: () => void;
  children: React.ReactNode;
}

const SwitcherButtonWrapper = ({
  title,
  ariaLabel,
  onClick,
  children,
  typeSwitcher,
}: SwitcherButtonWrapperProps) => {
  return (
    <button
      aria-label={ariaLabel}
      title={title}
      onClick={onClick}
      className={cn(
        "h-10 w-10 rounded-full bg-primary",
        "sm:h-12 sm:w-12",
        typeSwitcher === "language" &&
          "inline-grid grid-cols-1 grid-rows-1 place-items-center font-title text-sm font-semibold uppercase text-black sm:text-lg",
      )}
    >
      {children}
    </button>
  );
};

export default SwitcherButtonWrapper;
