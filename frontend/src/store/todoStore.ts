import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

type Todo = {
  id: string;
  text: string;
  completed: {
    realCompleted: boolean;
    animationCompleted: boolean;
  };
};

type TodoStore = {
  todos: Todo[];
  isLoading: boolean;
  addTodo: (text: string) => void;
  toggleCompleteTodo: (id: string) => void;
  removeTodo: (id: string) => void;
  updateTodo: (id: string, text: string) => void;
};

export const useTodoStore = create<TodoStore>()(
  persist(
    (set, get) => ({
      todos: [],
      isLoading: false,
      addTodo: (text) =>
        set((state) => ({
          todos: [
            {
              id: uuidv4(),
              text,
              completed: { realCompleted: false, animationCompleted: false },
            },
            ...state.todos,
          ],
        })),
      toggleCompleteTodo: (id) =>
        set((state) => {
          const todoIndex = state.todos.findIndex((todo) => todo.id === id);
          if (todoIndex === -1) return state;

          const newTodos = [...state.todos];
          const todo = newTodos[todoIndex];

          newTodos[todoIndex] = {
            ...todo,
            completed: {
              ...todo.completed,
              animationCompleted: !todo.completed.animationCompleted,
            },
          };

          setTimeout(() => {
            const currentTodos = get().todos;
            const currentTodoIndex = currentTodos.findIndex((t) => t.id === id);
            if (currentTodoIndex === -1) return;

            const updatedTodos = [...currentTodos];
            const currentTodo = updatedTodos[currentTodoIndex];

            updatedTodos[currentTodoIndex] = {
              ...currentTodo,
              completed: {
                realCompleted: !currentTodo.completed.realCompleted,
                animationCompleted: !currentTodo.completed.realCompleted,
              },
            };

            set({ todos: updatedTodos });
          }, 500);

          return { todos: newTodos };
        }),
      removeTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
      updateTodo: (id, text) =>
        set((state) => {
          const todoIndex = state.todos.findIndex((todo) => todo.id === id);
          if (todoIndex === -1) return state;

          const newTodos = [...state.todos];
          newTodos[todoIndex] = {
            ...newTodos[todoIndex],
            text,
          };

          return { todos: newTodos };
        }),
    }),
    {
      name: "todos",
      partialize: (state) => ({ todos: state.todos }),
      onRehydrateStorage: (state) => {
        state.isLoading = true;
      },
    },
  ),
);
