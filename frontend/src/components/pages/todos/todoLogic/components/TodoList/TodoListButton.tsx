"use client";

// styles
import { cn } from "@/utils/cn";

// hooks
import { memo } from "react";
import type { Filter } from "../../types/types";

interface TodoListButtonProps {
  filter: Filter | "";
  text: string;
  isActive: boolean;
  onFilterChange: (filter: Filter | "") => void;
}

const TodoListButton = memo(
  ({ filter, text, isActive, onFilterChange }: TodoListButtonProps) => {
    return (
      <button
        className={cn(
          "whitespace-nowrap rounded-xl px-5 py-2 text-sm font-medium transition-colors duration-500",
          isActive && "bg-primary text-black",
          !isActive &&
            "no-touch:hover:bg-cardBackground-hoverLight dark:no-touch:hover:bg-cardBackground-hoverDark bg-cardBackground-light text-[#444444] dark:bg-cardBackground-dark dark:text-[#A9A9A9]",
          "sm:px-6 sm:py-3 sm:text-base",
          "lg:rounded-2xl lg:px-8 lg:text-lg",
          "2xl:rounded-3xl 2xl:px-8 2xl:py-5 2xl:text-2xl",
        )}
        onClick={() => onFilterChange(filter)}
      >
        {text}
      </button>
    );
  },
);

TodoListButton.displayName = "TodoListButton";

export default TodoListButton;
