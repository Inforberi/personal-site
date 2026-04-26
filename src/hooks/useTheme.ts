// "use client";

// import { useState, useLayoutEffect, useEffect, useCallback } from "react";
// import Cookies from "js-cookie";

// type Theme = "dark" | "light";

// const initialTheme = (Cookies.get("theme") as Theme | undefined) || "dark";

// export const useTheme = () => {
//   const [theme, setTheme] = useState<Theme>(initialTheme);

//   const handleDarkTheme = useCallback(() => {
//     if (theme === "dark") return;

//     setTheme("dark");
//   }, [theme]);

//   const handleLightTheme = useCallback(() => {
//     if (theme === "light") return;

//     setTheme("light");
//   }, [theme]);

//   const handleToggleTheme = useCallback(() => {
//     setTheme((prevTheme) => {
//       return prevTheme === "dark" ? "light" : "dark";
//     });
//   }, []);

//   useLayoutEffect(() => {
//     const savedTheme = Cookies.get("theme") as Theme | undefined;
//     const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
//       .matches
//       ? "dark"
//       : "light";

//     if (!savedTheme && systemTheme) {
//       setTheme(systemTheme);
//     }
//   }, []);

//   useEffect(() => {
//     if (!theme) return;

//     Cookies.set("theme", theme, { path: "/", expires: 365 });

//     document.documentElement.setAttribute("data-theme", theme);
//   }, [theme]);

//   return { theme, handleDarkTheme, handleLightTheme, handleToggleTheme };
// };
