"use client";

// styles
import { cn } from "@/utils/cn";

// hooks
import { useMemo } from "react";
import { useNewTodo } from "./hooks/useNewTodo";
import { useTodoFilter } from "./hooks/useTodoFilter";

// store
import { useTodoStore } from "@/store/todoStore";
import { useShallow } from "zustand/react/shallow";

// components
import TodoAddTask from "./components/TodoAddTask/TodoAddTask";
import TodoList from "./components/TodoList/TodoList";
import TodoHeading from "@/components/pages/todos/shared/htmlTegs/TodoHeading";

//next intl
import { useTranslations } from "next-intl";

// utils
import { filterTodos } from "../utils/todoFilters";

const Todos = () => {
  const t = useTranslations("TodoApp.todoList");

  const {
    todos,
    isLoading,
    addTodo,
    toggleCompleteTodo,
    removeTodo,
    updateTodo,
  } = useTodoStore(
    useShallow((state) => ({
      todos: state.todos,
      isLoading: state.isLoading,
      addTodo: state.addTodo,
      toggleCompleteTodo: state.toggleCompleteTodo,
      removeTodo: state.removeTodo,
      updateTodo: state.updateTodo,
    })),
  );

  const { filter, handleSetFilter } = useTodoFilter();
  const { newTodo, handleAddTodo, handleChange } = useNewTodo(
    addTodo,
    handleSetFilter,
  );

  const filteredTodos = useMemo(
    () => filterTodos(todos, filter),
    [todos, filter],
  );

  const emptyMessages = {
    completed: t("emptyMessages.completed"),
    notCompleted: t("emptyMessages.notCompleted"),
    all: t("emptyMessages.all"),
  };

  return (
    <section className={cn("mb-20 pt-14", "sm:pt-28", "lg:pt-24", "2xl:pt-32")}>
      <TodoHeading as="h1">{t("title")}</TodoHeading>
      <div className={cn("mx-auto", "lg:max-w-6xl", "2xl:max-w-[1360px]")}>
        <TodoAddTask
          title={t("addTask.title")}
          placeholder={t("addTask.placeholder")}
          button={t("addTask.button")}
          newTodo={newTodo}
          onChange={handleChange}
          handleAddTodo={handleAddTodo}
        />
        <TodoList
          handleSetFilter={handleSetFilter}
          isLoading={isLoading}
          filter={filter}
          filteredTodos={filteredTodos}
          buttons={[
            { text: t("navTodoList.current"), filter: "notCompleted" },
            { text: t("navTodoList.completed"), filter: "completed" },
            { text: t("navTodoList.all"), filter: "all" },
          ]}
          todoItemTranslate={{
            text: {
              completed: t("taskItem.text.completed"),
              notCompleted: t("taskItem.text.notCompleted"),
            },
            ariaLabels: {
              remove: t("taskItem.ariaLabels.remove"),
              edit: t("taskItem.ariaLabels.edit"),
              save: t("taskItem.ariaLabels.save"),
              complete: t("taskItem.ariaLabels.complete"),
            },
          }}
          emptyMessages={emptyMessages}
          toggleCompleteTodo={toggleCompleteTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </div>
    </section>
  );
};

export default Todos;
