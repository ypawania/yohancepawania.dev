"use client";

import { useSyncExternalStore } from "react";

export type Theme = "dark" | "light" | "catppuccin";

const STORAGE_KEY = "site-theme";
const DEFAULT_THEME: Theme = "dark";
const THEMES: Theme[] = [DEFAULT_THEME, "light", "catppuccin"];

function isTheme(value: string | null): value is Theme {
  return value === "dark" || value === "light" || value === "catppuccin";
}

function getSnapshot(): Theme {
  if (typeof document !== "undefined") {
    const theme = document.documentElement.dataset.theme ?? null;
    if (isTheme(theme)) {
      return theme;
    }
  }
  return DEFAULT_THEME;
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  window.localStorage.setItem(STORAGE_KEY, theme);
  window.dispatchEvent(new CustomEvent("theme-change", { detail: theme }));
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener("theme-change", onStoreChange);

  return () => {
    window.removeEventListener("theme-change", onStoreChange);
  };
}

function getServerSnapshot(): Theme {
  return DEFAULT_THEME;
}

export default function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = () => {
    const currentThemeIndex = THEMES.indexOf(theme);
    const nextTheme =
      THEMES[(currentThemeIndex + 1) % THEMES.length] ?? DEFAULT_THEME;
    applyTheme(nextTheme);
  };

  return { theme, toggleTheme };
}
