"use client";

// hooks
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
  ReactNode,
} from "react";
import Cookies from "js-cookie";

// types
import { Theme } from "@/types/types";

type ThemeContextType = {
  theme: Theme;
  handleDarkTheme: () => void;
  handleLightTheme: () => void;
  handleToggleTheme: () => void;
};

interface ThemeProviderProps {
  initialTheme: Theme;
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({
  children,
  initialTheme,
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const handleDarkTheme = useCallback(() => {
    if (theme === "dark") return;
    setTheme("dark");
  }, [theme]);

  const handleLightTheme = useCallback(() => {
    if (theme === "light") return;
    setTheme("light");
  }, [theme]);

  const handleToggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }, []);

  useLayoutEffect(() => {
    const savedTheme = Cookies.get("theme") as Theme | undefined;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    if (!savedTheme && systemTheme) {
      setTheme(systemTheme);
    }
  }, []);

  useEffect(() => {
    if (!theme) return;

    Cookies.set("theme", theme, { path: "/", expires: 365 });
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        handleDarkTheme,
        handleLightTheme,
        handleToggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
