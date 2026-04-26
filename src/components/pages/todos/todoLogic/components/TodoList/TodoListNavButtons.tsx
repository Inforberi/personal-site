"use client";

// styles
import { cn } from "@/utils/cn";

// hooks
import { memo, useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

// components
import TodoListButton from "./TodoListButton";

// types
import type { Filter, ButtonsFilter } from "../../types/types";
import { isTouchDevice } from "@/utils/deviceCheck";

interface TodoListButtonsFilterProps {
  buttons: ButtonsFilter[];
  currentFilter: Filter | "";
  onFilterChange: (filter: Filter | "") => void;
}

const TodoListNavButtons = memo(
  ({ currentFilter, buttons, onFilterChange }: TodoListButtonsFilterProps) => {
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
      setIsTouch(isTouchDevice());
    }, []);

    let orderedButtons = buttons;

    if (isTouch) {
      const activeButton = buttons.find(
        (button) => button.filter === currentFilter,
      );

      orderedButtons = activeButton
        ? [
            activeButton,
            ...buttons.filter((button) => button.filter !== currentFilter),
          ]
        : buttons;
    }

    return (
      <div
        className={cn(
          "mb-6 flex gap-2 overflow-x-scroll scrollbar-hide",
          "sm:mb-8 sm:gap-3",
          "xl:mb-10 xl:gap-4",
          "2xl:mb-14 2xl:gap-4",
        )}
      >
        <AnimatePresence initial={false}>
          {orderedButtons.map((button, index) => (
            <motion.div key={index} layout="position">
              <TodoListButton
                filter={button.filter}
                text={button.text}
                isActive={currentFilter === button.filter}
                onFilterChange={onFilterChange}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    );
  },
);

TodoListNavButtons.displayName = "TodoListButtonFilters";

export default TodoListNavButtons;
