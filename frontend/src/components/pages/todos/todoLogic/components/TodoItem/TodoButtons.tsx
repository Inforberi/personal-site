"use client";

// styles
import { cn } from "@/utils/cn";

// components
import Edit from "@/components/shared/icons/Edit";
import Remove from "@/components/shared/icons/Remove";
import Save from "@/components/shared/icons/Save";

// types
import type { todoItemTranslate } from "../../types/types";

interface TodoButtonsProps {
  todoItemTranslate: todoItemTranslate;
  isEditing: boolean;
  onEdit: () => void;
  onDelete: () => void;
  onSave: () => void;
}

const TodoButtons = ({
  todoItemTranslate,
  isEditing,
  onEdit,
  onDelete,
  onSave,
}: TodoButtonsProps) => {
  const saveEditButtons = [
    {
      button: <Save />,
      ariaLabel: todoItemTranslate.ariaLabels.save,
      onClick: onSave,
      visible: isEditing,
    },
    {
      button: <Edit />,
      ariaLabel: todoItemTranslate.ariaLabels.edit,
      onClick: onEdit,
      visible: !isEditing,
    },
  ];
  return (
    <div className={cn("ml-auto flex gap-2", "sm:gap-3")}>
      <div
        className={cn(
          "grid h-10 w-12 grid-cols-1 grid-rows-1",
          "sm:w-14",
          "2xl:h-12 2xl:w-16",
        )}
      >
        {saveEditButtons.map((button, index) => (
          <button
            key={index}
            title={button.ariaLabel}
            aria-label={button.ariaLabel}
            className={cn(
              "col-start-1 row-start-1 h-full w-full opacity-0 transition-opacity duration-500 will-change-opacity",
              button.visible
                ? "pointer-events-auto opacity-100"
                : "pointer-events-none opacity-0",
            )}
            onClick={button.onClick}
          >
            {button.button}
          </button>
        ))}
      </div>
      <button
        title={todoItemTranslate.ariaLabels.remove}
        aria-label={todoItemTranslate.ariaLabels.remove}
        className={cn("h-10 w-12", "sm:w-14", "2xl:h-12 2xl:w-16")}
        onClick={onDelete}
      >
        <Remove />
      </button>
    </div>
  );
};

export default TodoButtons;
