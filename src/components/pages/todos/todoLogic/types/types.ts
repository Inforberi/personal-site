export type Todo = {
  id: string;
  text: string;
  completed: {
    realCompleted: boolean;
    animationCompleted: boolean;
  };
};

export interface TodoItemProps {
  todoItemTranslate: todoItemTranslate;
  todo: Todo;
  toggleCompleteTodo: (id: string) => void;
  updateTodo: (id: string, text: string) => void;
  removeTodo: (id: string) => void;
}

export type Filter = "all" | "completed" | "notCompleted";

export interface ButtonsFilter {
  text: string;
  filter: Filter;
}

export interface todoItemTranslate {
  text: {
    completed: string;
    notCompleted: string;
  };
  ariaLabels: {
    remove: string;
    edit: string;
    save: string;
    complete: string;
  };
}
