import type { Todo, Filter } from "../todoLogic/types/types";

export const filterTodos = (todos: Todo[], filter: Filter | ""): Todo[] => {
  const filtered = todos.filter((todo) => {
    switch (filter) {
      case "completed":
        return todo.completed.realCompleted;
      case "notCompleted":
        return !todo.completed.realCompleted;
      default:
        return true;
    }
  });

  if (filter === "all") {
    return filtered.sort(
      (a, b) =>
        Number(a.completed.realCompleted) - Number(b.completed.realCompleted),
    );
  } else return filtered;
};

export const getEmptyMessage = (
  filter: Filter | "",
  isLoading: boolean,
  completed: string,
  notCompleted: string,
  all: string,
) => {
  if (!isLoading) return null;

  const messages = {
    completed: `🚀 ${completed}`,
    notCompleted: `💪 ${notCompleted} `,
    all: `💡 ${all}`,
  };

  return messages[filter as keyof typeof messages] || messages.all;
};
