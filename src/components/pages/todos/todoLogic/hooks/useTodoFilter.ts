// hooks
import { useState, useEffect, useCallback } from "react";

// types
import type { Filter } from "../types/types";

export const useTodoFilter = () => {
  const [filter, setFilter] = useState<Filter | "">("");

  useEffect(() => {
    const savedFilter = localStorage.getItem("todoFilter") as Filter;
    setFilter(savedFilter || "notCompleted");
    if (!savedFilter) {
      localStorage.setItem("todoFilter", "notCompleted");
    }
  }, []);

  const handleSetFilter = useCallback((newFilter: Filter | "") => {
    setFilter((prevFilter) => {
      if (prevFilter === newFilter) return prevFilter;
      localStorage.setItem("todoFilter", newFilter);
      return newFilter;
    });
  }, []);

  return {
    filter,
    handleSetFilter,
  };
};
