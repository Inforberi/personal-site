"use client";

// styles
import { cn } from "@/utils/cn";

// hooks
import { useEffect, useRef, useState, memo, useCallback } from "react";
import { motion } from "motion/react";

// components
import TodoTextarea from "./TodoTextarea";
import TodoButtons from "./TodoButtons";
import Checkbox from "@/components/shared/icons/Checkbox";

// types
import { TodoItemProps } from "../../types/types";

const todoItemTranslate = memo(
  ({
    todo,
    todoItemTranslate,
    updateTodo,
    removeTodo,
    toggleCompleteTodo,
  }: TodoItemProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);
    const todoItemRef = useRef<HTMLLIElement>(null);

    useEffect(() => {
      setNewText(todo.text);
    }, [todo.text]);

    const handleClickOutside = useCallback(
      (e: MouseEvent) => {
        if (
          todoItemRef.current &&
          !todoItemRef.current.contains(e.target as Node)
        ) {
          if (newText.trim() && newText !== todo.text) {
            updateTodo(todo.id, newText);
          }
          setIsEditing(false);
        }
      },
      [newText, todo.id, todo.text, updateTodo],
    );

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [handleClickOutside]);

    const handleEdit = useCallback(() => {
      setIsEditing(true);
    }, []);

    const handleSave = useCallback(() => {
      if (newText.trim() && newText !== todo.text) {
        updateTodo(todo.id, newText);
      }
      setIsEditing(false);
    }, [newText, todo.id, todo.text, updateTodo]);

    const handleDelete = useCallback(() => {
      removeTodo(todo.id);
    }, [removeTodo, todo.id]);

    const handleToggleComplete = useCallback(() => {
      toggleCompleteTodo(todo.id);
    }, [toggleCompleteTodo, todo.id]);

    const isCompleteText = [
      {
        text: todoItemTranslate.text.completed,
        isCompleted: todo.completed.realCompleted,
      },
      {
        text: todoItemTranslate.text.notCompleted,
        isCompleted: !todo.completed.realCompleted,
      },
    ];

    return (
      <motion.li
        ref={todoItemRef}
        className={cn(
          "inline-grid grid-cols-1 grid-rows-[auto_1fr_auto] rounded-2xl border border-black bg-white p-5 transition-colors duration-500 dark:border-transparent",
          todo.completed.animationCompleted && "bg-[#B8B8B8]",
          "sm:border-2",
          "xl:p-6",
          "2xl:p-7",
        )}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          scale: 1,
          opacity: 1,
          transition: {
            duration: 0.4,
          },
        }}
        exit={{
          scale: 0.8,
          opacity: 0,
          transition: {
            scale: { duration: 0.5, ease: "easeIn" },
            opacity: { duration: 0.4, ease: "easeOut" },
          },
        }}
        layout="position"
      >
        <button
          title={todoItemTranslate.ariaLabels.complete}
          aria-label={todoItemTranslate.ariaLabels.complete}
          onClick={handleToggleComplete}
          className={cn(
            "mb-5 flex items-center gap-2",
            "sm:mb-6",
            "xl:mb-7",
            "2xl:mb-8",
          )}
        >
          <span
            className={cn(
              "h-7 w-8",
              "sm:h-8 sm:w-9",
              "xl:h-9 xl:w-10",
              "xl:h-10 xl:w-11",
            )}
          >
            <Checkbox checked={!todo.completed.animationCompleted} />
          </span>
          <span
            className={cn(
              "inline-grid grid-cols-1 text-sm text-black",
              "sm:text-base",
              "xl:text-lg",
            )}
          >
            {isCompleteText.map((text, index) => (
              <span
                key={index}
                className={cn(
                  "col-start-1 row-start-1",
                  text.isCompleted ? "opacity-100" : "opacity-0",
                )}
              >
                {text.text}
              </span>
            ))}
          </span>
        </button>
        <div
          className={cn(
            "mb-5 min-h-16 max-w-full",
            "sm:mb-8",
            "lg:mb-10",
            "xl:mb-14",
            "2xl:mb-16",
          )}
        >
          {isEditing ? (
            <TodoTextarea value={newText} onChange={setNewText} />
          ) : (
            <span
              onClick={handleEdit}
              className={cn(
                "block h-auto min-h-full max-w-full break-words text-black",
                "sm:text-lg",
                "lg:text-xl",
                "2xl:text-2xl",
              )}
            >
              {todo.text}
            </span>
          )}
        </div>
        <TodoButtons
          todoItemTranslate={todoItemTranslate}
          isEditing={isEditing}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onSave={handleSave}
        />
      </motion.li>
    );
  },
);

todoItemTranslate.displayName = "todoItemTranslate";

export default todoItemTranslate;
