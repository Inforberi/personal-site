"use client";

// styles
import { cn } from "@/utils/cn";

// hooks
import Image from "next/image";
import { memo } from "react";

// icon
import add from "/public/icons/add.svg";

interface TodoAddTaskProps {
  title: string;
  placeholder: string;
  button: string;
  newTodo: string;
  onChange: (value: string) => void;
  handleAddTodo: () => void;
}

const TodoAddTask = memo(
  ({
    title,
    placeholder,
    button,
    newTodo,
    onChange,
    handleAddTodo,
  }: TodoAddTaskProps) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        handleAddTodo();
      }
    };
    return (
      <div className="mb-12 2xl:mb-20">
        <h2
          className={cn("mb-5 text-lg", "sm:text-2xl", "2xl:mb-9 2xl:text-3xl")}
        >
          {title}
        </h2>
        <div
          className={cn(
            "grid h-16 min-w-0 grid-cols-[1fr_auto] items-center gap-2 rounded-2xl",
            "sm:h-18",
            "lg:gap-3 lg:rounded-3xl",
            "2xl:h-22 2xl:gap-3",
          )}
        >
          <input
            type="text"
            value={newTodo}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            onKeyDown={handleKeyDown}
            className={cn(
              "h-full min-w-48 rounded-inherit border border-black bg-white px-5 text-black transition-colors duration-300 placeholder:text-sm dark:border-white",
              "sm:border-2 sm:px-7 sm:text-lg sm:placeholder:text-lg",
              "2xl:px-14 2xl:text-2xl 2xl:placeholder:text-2xl",
            )}
          />
          <button
            aria-label={button}
            onClick={handleAddTodo}
            className={cn(
              "h-full rounded-inherit bg-primary px-4 font-semibold text-black",
              "sm:px-7 sm:text-lg",
              "xl:text-xl",
              "2xl:px-14 2xl:text-3xl",
            )}
          >
            <span className="hidden lg:inline">{button}</span>
            <Image className="w-8 lg:hidden" src={add} alt="" />
          </button>
        </div>
      </div>
    );
  },
);

TodoAddTask.displayName = "TodoAddTask";

export default TodoAddTask;
