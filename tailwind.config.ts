import type { Config } from "tailwindcss";
import scrollbarHide from "tailwind-scrollbar-hide";
import * as tailwindcssMotion from "tailwindcss-motion";
import tailwindScrollbar from "tailwind-scrollbar";

export default {
  darkMode: ["selector", '[data-theme="dark"]'],

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm400: "400px",
      sm500: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "1920px",
      "no-touch": { raw: "(hover: hover)" },
    },
    extend: {
      spacing: {
        22: "5.5rem", // 88px
        18: "4.5rem", // 72px
      },
      colors: {
        background: {
          dark: "#0B101D",
          light: "#F2F2F2",
        },
        cardBackground: {
          light: "#D9E2DD",
          dark: "#192236",
          hoverLight: "#CFEDDC",
          hoverDark: "#182a53",
        },
        primary: "var(--color-primary)",
      },
      fontFamily: {
        primary: ["var(--font-primary)", "sans-serif"],
        title: ["var(--font-title)", "sans-serif"],
      },
      fontSize: {
        "2.5xl": "1.625rem", // 26px
      },
      borderRadius: {
        inherit: "inherit",
      },
      rotate: { 360: "360deg" },
      transitionProperty: {
        "transform-opacity": "transform, opacity",
        outline: "outline-color",
      },
      willChange: {
        opacity: "opacity",
      },
      transitionDuration: {
        1500: "1500ms",
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [scrollbarHide, tailwindcssMotion, tailwindScrollbar],
} satisfies Config;
