"use client";

import { useEffect, useState } from "react";

type CopyEmailLinkProps = {
  className?: string;
};

const DISPLAY_EMAIL = "ypawania [at] gmail [dot] com";
const REAL_EMAIL = "ypawania@gmail.com";

async function copyEmailToClipboard() {
  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(REAL_EMAIL);
    return;
  }

  if (typeof document === "undefined") {
    throw new Error("Clipboard is unavailable");
  }

  const textArea = document.createElement("textarea");
  textArea.value = REAL_EMAIL;
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  const didCopy = document.execCommand("copy");
  document.body.removeChild(textArea);

  if (!didCopy) {
    throw new Error("Copy failed");
  }
}

export default function CopyEmailLink({ className }: CopyEmailLinkProps) {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");

  useEffect(() => {
    if (copyState === "idle") {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setCopyState("idle");
    }, 1600);

    return () => window.clearTimeout(timeoutId);
  }, [copyState]);

  async function handleCopy() {
    try {
      await copyEmailToClipboard();
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
  }

  const tooltipLabel =
    copyState === "copied"
      ? "copied"
      : copyState === "error"
        ? "copy failed"
        : "click to copy";

  const tooltipVisibilityClass =
    copyState === "idle"
      ? "translate-y-1 opacity-0 scale-95 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 group-focus-within:scale-100"
      : "translate-y-0 opacity-100 scale-100";

  const tooltipToneClass =
    copyState === "error"
      ? "text-[var(--muted-strong)]"
      : "text-[var(--foreground)]";

  return (
    <span className="group relative inline-flex items-center">
      <button
        type="button"
        onClick={handleCopy}
        className={className}
        aria-label="Copy email address to clipboard"
      >
        {DISPLAY_EMAIL}
      </button>
      <span
        className={`tooltip-surface pointer-events-none absolute right-0 top-full mt-2 whitespace-nowrap rounded-md border px-2 py-1 text-[11px] font-medium tracking-wide shadow-[0_6px_18px_rgba(0,0,0,0.35)] transition-all duration-150 ease-out ${tooltipToneClass} ${tooltipVisibilityClass}`}
        role="status"
        aria-live="polite"
      >
        {tooltipLabel}
      </span>
    </span>
  );
}
