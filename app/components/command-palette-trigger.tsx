"use client";

import { useState } from "react";
import useMobileDevice from "../hooks/use-mobile-device";
import useModifierKey from "../hooks/use-modifier-key";

export default function CommandPaletteTrigger() {
  const [isMac] = useState(
    () =>
      typeof navigator !== "undefined" &&
      navigator.platform.toLowerCase().includes("mac"),
  );
  const isModifierPressed = useModifierKey();
  const isMobileDevice = useMobileDevice();

  if (isMobileDevice) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() =>
        window.dispatchEvent(new CustomEvent("open-command-palette"))
      }
      className="theme-button hidden appearance-none items-center gap-1 rounded-lg px-2 py-1 text-xs transition-colors duration-150 outline-none focus:outline-none focus-visible:outline-none sm:flex"
      aria-label="Open command palette"
    >
      <span
        className={`flex items-center ${isModifierPressed ? "opacity-0" : "opacity-100"}`}
      >
        <kbd className="palette-kbd rounded border px-1.5 py-0.5 font-mono">
          {isMac ? "cmd" : "ctrl"}
        </kbd>
        <span>+</span>
      </span>
      <kbd className="palette-kbd rounded border px-1.5 py-0.5 font-mono">
        K
      </kbd>
    </button>
  );
}
