// hooks
import { useState, useCallback } from "react";

// types
import type { Filter } from "../types/types";

export const useNewTodo = (
  addTodo: (todo: string) => void,
  handleSetFilter: (filter: Filter | "") => void,
) => {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = useCallback(() => {
    if (!newTodo.trim()) return;

    addTodo(newTodo);
    setNewTodo("");

    handleSetFilter("notCompleted");
  }, [newTodo, addTodo, handleSetFilter]);

  const handleChange = useCallback((value: string) => {
    setNewTodo(value);
  }, []);

  return {
    newTodo,
    handleAddTodo,
    handleChange,
  };
};
