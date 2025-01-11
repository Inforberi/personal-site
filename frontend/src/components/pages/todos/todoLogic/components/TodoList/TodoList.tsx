"use client";

// styles
import { cn } from "@/utils/cn";

// hooks
import { useMemo, memo, useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";

// utils
import { getEmptyMessage } from "../../../utils/todoFilters";

// types
import type {
  Todo,
  TodoItemProps,
  ButtonsFilter,
  todoItemTranslate,
  Filter,
} from "../../types/types";

// components
import TodoItem from "../TodoItem/TodoItem";
import TodoListNavButtons from "./TodoListNavButtons";
import LoadingTodos from "../LoadingTodos/LoadingTodos";

type EmptyMessages = {
  completed: string;
  notCompleted: string;
  all: string;
};

interface TodoListProps extends Omit<TodoItemProps, "todo"> {
  filteredTodos: Todo[];
  filter: Filter | "";
  isLoading: boolean;
  handleSetFilter: (filter: Filter | "") => void;
  buttons: ButtonsFilter[];
  todoItemTranslate: todoItemTranslate;
  emptyMessages: EmptyMessages;
}

const TodoList = memo(
  ({
    buttons,
    todoItemTranslate,
    filter,
    isLoading,
    emptyMessages,
    filteredTodos,
    handleSetFilter,
    updateTodo,
    removeTodo,
    toggleCompleteTodo,
  }: TodoListProps) => {
    const [mount, isMount] = useState(false);

    useEffect(() => {
      isMount(true);
    }, []);

    const todoItems = useMemo(
      () =>
        filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            updateTodo={updateTodo}
            removeTodo={removeTodo}
            toggleCompleteTodo={toggleCompleteTodo}
            todoItemTranslate={todoItemTranslate}
          />
        )),
      [
        filteredTodos,
        updateTodo,
        removeTodo,
        toggleCompleteTodo,
        todoItemTranslate,
      ],
    );

    const emptyMessage = getEmptyMessage(
      filter,
      isLoading,
      emptyMessages.completed,
      emptyMessages.notCompleted,
      emptyMessages.all,
    );

    return (
      <div>
        <TodoListNavButtons
          buttons={buttons}
          currentFilter={filter}
          onFilterChange={handleSetFilter}
        />

        {isLoading && mount ? (
          filteredTodos.length === 0 ? (
            <h2
              className={cn(
                "pt-5 text-lg font-semibold",
                "sm:text-xl",
                "lg:text-2xl",
                "2xl:text-3xl",
              )}
            >
              {emptyMessage}
            </h2>
          ) : (
            <ul
              className={cn(
                "grid auto-rows-auto grid-cols-1 gap-5",
                "sm:grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))]",
                "xl:gap-7",
                "2xl:gap-8",
              )}
            >
              <AnimatePresence initial={false}>{todoItems}</AnimatePresence>
            </ul>
          )
        ) : (
          <LoadingTodos />
        )}
      </div>
    );
  },
);

TodoList.displayName = "TodoList";

export default TodoList;
