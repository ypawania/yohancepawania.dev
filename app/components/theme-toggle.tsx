"use client";

import { Moon, Palette, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";
import useTheme from "../hooks/use-theme";

function subscribe() {
  return () => {};
}

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isHydrated = useSyncExternalStore(subscribe, () => true, () => false);
  const nextThemeLabel =
    !isHydrated || theme === "catppuccin"
      ? "dark mode"
      : theme === "dark"
        ? "light mode"
        : "catppuccin mode";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-button flex appearance-none items-center justify-center rounded-lg px-2.5 py-1.5 transition-colors duration-150 outline-none focus:outline-none focus-visible:outline-none"
      aria-label={`Switch to ${nextThemeLabel}`}
      title={`Switch to ${nextThemeLabel}`}
    >
      {!isHydrated || theme === "catppuccin" ? (
        <Moon className="h-4 w-4" />
      ) : theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Palette className="h-4 w-4" />
      )}
    </button>
  );
}
