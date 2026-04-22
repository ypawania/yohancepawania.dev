"use client";

import { Moon, Palette, Sun } from "lucide-react";
import useTheme from "../hooks/use-theme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const nextThemeLabel =
    theme === "dark"
      ? "creme mode"
      : theme === "light"
        ? "catppuccin mode"
        : "dark mode";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-button flex appearance-none items-center justify-center rounded-lg px-2.5 py-1.5 transition-colors duration-150 outline-none focus:outline-none focus-visible:outline-none"
      aria-label={`Switch to ${nextThemeLabel}`}
      title={`Switch to ${nextThemeLabel}`}
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : theme === "light" ? (
        <Palette className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}
