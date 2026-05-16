"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Command } from "cmdk";
import {
  ArrowUp,
  BookOpen,
  ExternalLink,
  GitBranch,
  Home,
  Link as LinkIcon,
  Mail,
  Moon,
  Palette,
  PanelsTopLeft,
  Search,
  Sun,
  Wrench,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import useMobileDevice from "../hooks/use-mobile-device";
import useTheme from "../hooks/use-theme";

type CommandPaletteProps = {
  repoUrl: string;
};

function Shortcut({
  isShiftPressed,
  children,
}: {
  isShiftPressed: boolean;
  children: string;
}) {
  return (
    <div className="ml-auto flex items-center gap-1 text-xs text-neutral-500">
      {!isShiftPressed && (
        <>
          <kbd className="rounded border border-neutral-800 bg-neutral-900 px-1.5 py-0.5 font-mono text-neutral-400">
            shift
          </kbd>
          <span>+</span>
        </>
      )}
      <kbd className="rounded border border-neutral-800 bg-neutral-900 px-1.5 py-0.5 font-mono text-neutral-300">
        {children}
      </kbd>
    </div>
  );
}

function scrollToId(id: string) {
  const element = document.getElementById(id);
  if (!element) {
    return;
  }

  element.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", `#${id}`);
}

export default function CommandPalette({ repoUrl }: CommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const [isShiftPressed, setIsShiftPressed] = useState(false);
  const isMobileDevice = useMobileDevice();
  const pathname = usePathname();
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const nextThemeLabel =
    theme === "dark"
      ? "Light"
      : theme === "light"
        ? "Catppuccin"
        : "Dark";

  function runCommand(command: () => void) {
    setOpen(false);
    command();
  }

  const goToPath = useCallback((path: string) => {
    if (pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    router.push(path);
  }, [pathname, router]);

  const goToHomeSection = useCallback((id: string) => {
    if (pathname === "/") {
      scrollToId(id);
      return;
    }

    router.push(`/#${id}`);
  }, [pathname, router]);

  useEffect(() => {
    const handleCustomOpen = () => {
      setOpen(true);
      localStorage.setItem("hasOpenedCommandPalette", "true");
      window.dispatchEvent(new CustomEvent("command-palette-opened"));
    };

    window.addEventListener("open-command-palette", handleCustomOpen);
    return () =>
      window.removeEventListener("open-command-palette", handleCustomOpen);
  }, []);

  useEffect(() => {
    const handleToggle = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen((current) => {
          const next = !current;
          if (next) {
            localStorage.setItem("hasOpenedCommandPalette", "true");
            window.dispatchEvent(new CustomEvent("command-palette-opened"));
          }
          return next;
        });
      }
    };

    document.addEventListener("keydown", handleToggle);
    return () => document.removeEventListener("keydown", handleToggle);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.shiftKey) {
        setIsShiftPressed(true);
      }

      if (!event.shiftKey) {
        return;
      }

      const key = event.key.toLowerCase();

      if (key === "h") {
        event.preventDefault();
        runCommand(() => goToHomeSection("top"));
      } else if (key === "r") {
        event.preventDefault();
        runCommand(() => goToHomeSection("recents"));
      } else if (key === "b") {
        event.preventDefault();
        runCommand(() => goToPath("/blog"));
      } else if (key === "p") {
        event.preventDefault();
        runCommand(() => goToPath("/projects"));
      } else if (key === "g") {
        event.preventDefault();
        runCommand(() => window.open("https://github.com/ypawania", "_blank"));
      } else if (key === "l") {
        event.preventDefault();
        runCommand(() =>
          window.open(
            "https://www.linkedin.com/in/yohance-pawania-30aa902a4/",
            "_blank",
          ),
        );
      } else if (key === "x") {
        event.preventDefault();
        runCommand(() => window.open("https://x.com/ypawania_", "_blank"));
      } else if (key === "e") {
        event.preventDefault();
        runCommand(() => window.open("mailto:ypawania@gmail.com", "_blank"));
      } else if (key === "c") {
        event.preventDefault();
        runCommand(() => window.open(repoUrl, "_blank"));
      } else if (key === "t") {
        event.preventDefault();
        runCommand(() => toggleTheme());
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (!event.shiftKey) {
        setIsShiftPressed(false);
      }
    };

    const handleBlur = () => setIsShiftPressed(false);

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    window.addEventListener("blur", handleBlur);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("blur", handleBlur);
    };
  }, [goToHomeSection, goToPath, open, repoUrl, toggleTheme]);

  if (isMobileDevice) {
    return null;
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="palette-overlay fixed inset-0 z-40" />
        <Dialog.Content
          className="fixed left-1/2 top-[20%] z-50 w-[calc(100%-2rem)] max-w-[32rem] -translate-x-1/2 outline-none"
        >
          <Dialog.Title className="sr-only">Command palette</Dialog.Title>
          <Dialog.Description className="sr-only">
            Search website sections, links, and appearance controls.
          </Dialog.Description>
          <Command className="palette-surface overflow-hidden rounded-xl border shadow-2xl shadow-black/20">
            <div className="palette-section flex items-center gap-3 border-b px-5 py-5">
              <div className="palette-panel rounded-lg border p-2">
                <Home className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <h2 className="text-sm font-medium text-[var(--foreground)]">Home</h2>
                <p className="palette-panel-muted text-sm">
                  Search sections and links across this site
                </p>
              </div>
            </div>

            <div className="palette-section flex items-center border-b px-4 py-4">
              <Search className="palette-panel-muted h-4 w-4" />
              <Command.Input
                autoFocus
                placeholder="Search for actions..."
                className="w-full bg-transparent px-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none"
              />
            </div>

            <Command.List className="max-h-[320px] overflow-y-auto px-3 py-4">
              <Command.Empty className="px-5 py-4 text-sm text-[var(--muted)]">
                No results found.
              </Command.Empty>

              <Command.Group heading="Navigation" className="px-2 text-[var(--muted)]">
                <Command.Item
                  value="home top landing intro"
                  onSelect={() => runCommand(() => goToHomeSection("top"))}
                  className="palette-item flex cursor-pointer items-center gap-2 rounded px-3 py-2 text-sm"
                >
                  <Home className="h-4 w-4" />
                  <span className="flex-1">Go to Home</span>
                  <Shortcut isShiftPressed={isShiftPressed}>H</Shortcut>
                </Command.Item>
                <Command.Item
                  value="recent achievements projects built work"
                  onSelect={() => runCommand(() => goToHomeSection("recents"))}
                  className="palette-item flex cursor-pointer items-center gap-2 rounded px-3 py-2 text-sm"
                >
                  <Wrench className="h-4 w-4" />
                  <span className="flex-1">Go to Achievements</span>
                  <Shortcut isShiftPressed={isShiftPressed}>R</Shortcut>
                </Command.Item>
                <Command.Item
                  value="blog writing notes"
                  onSelect={() => runCommand(() => goToPath("/blog"))}
                  className="palette-item flex cursor-pointer items-center gap-2 rounded px-3 py-2 text-sm"
                >
                  <BookOpen className="h-4 w-4" />
                  <span className="flex-1">Go to Blog</span>
                  <Shortcut isShiftPressed={isShiftPressed}>B</Shortcut>
                </Command.Item>
                <Command.Item
                  value="projects builds work"
                  onSelect={() => runCommand(() => goToPath("/projects"))}
                  className="palette-item flex cursor-pointer items-center gap-2 rounded px-3 py-2 text-sm"
                >
                  <PanelsTopLeft className="h-4 w-4" />
                  <span className="flex-1">Go to Projects</span>
                  <Shortcut isShiftPressed={isShiftPressed}>P</Shortcut>
                </Command.Item>
                <Command.Item
                  value="top scroll back up"
                  onSelect={() =>
                    runCommand(() =>
                      window.scrollTo({ top: 0, behavior: "smooth" }),
                    )
                  }
                  className="palette-item flex cursor-pointer items-center gap-2 rounded px-3 py-2 text-sm"
                >
                  <ArrowUp className="h-4 w-4" />
                  <span className="flex-1">Scroll to Top</span>
                </Command.Item>
              </Command.Group>

              <Command.Group heading="Links" className="px-2 text-[var(--muted)]">
                <Command.Item
                  value="github profile code"
                  onSelect={() =>
                    runCommand(() =>
                      window.open("https://github.com/ypawania", "_blank"),
                    )
                  }
                  className="palette-item flex cursor-pointer items-center gap-2 rounded px-3 py-2 text-sm"
                >
                  <GitBranch className="h-4 w-4" />
                  <span className="flex-1">GitHub Profile</span>
                  <Shortcut isShiftPressed={isShiftPressed}>G</Shortcut>
                </Command.Item>
                <Command.Item
                  value="linkedin profile work"
                  onSelect={() =>
                    runCommand(() =>
                      window.open(
                        "https://www.linkedin.com/in/yohance-pawania-30aa902a4/",
                        "_blank",
                      ),
                    )
                  }
                  className="palette-item flex cursor-pointer items-center gap-2 rounded px-3 py-2 text-sm"
                >
                  <LinkIcon className="h-4 w-4" />
                  <span className="flex-1">LinkedIn Profile</span>
                  <Shortcut isShiftPressed={isShiftPressed}>L</Shortcut>
                </Command.Item>
                <Command.Item
                  value="twitter x social"
                  onSelect={() =>
                    runCommand(() =>
                      window.open("https://x.com/ypawania_", "_blank"),
                    )
                  }
                  className="palette-item flex cursor-pointer items-center gap-2 rounded px-3 py-2 text-sm"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="flex-1">X Profile</span>
                  <Shortcut isShiftPressed={isShiftPressed}>X</Shortcut>
                </Command.Item>
                <Command.Item
                  value="email contact gmail"
                  onSelect={() =>
                    runCommand(() =>
                      window.open("mailto:ypawania@gmail.com", "_blank"),
                    )
                  }
                  className="palette-item flex cursor-pointer items-center gap-2 rounded px-3 py-2 text-sm"
                >
                  <Mail className="h-4 w-4" />
                  <span className="flex-1">Email</span>
                  <Shortcut isShiftPressed={isShiftPressed}>E</Shortcut>
                </Command.Item>
                <Command.Item
                  value="source repo repository website codebase"
                  onSelect={() => runCommand(() => window.open(repoUrl, "_blank"))}
                  className="palette-item flex cursor-pointer items-center gap-2 rounded px-3 py-2 text-sm"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="flex-1">Website Repository</span>
                  <Shortcut isShiftPressed={isShiftPressed}>C</Shortcut>
                </Command.Item>
              </Command.Group>

              <Command.Group heading="Other" className="px-2 text-[var(--muted)]">
                <Command.Item
                  value="theme toggle light dark mode appearance"
                  onSelect={() => runCommand(() => toggleTheme())}
                  className="palette-item flex cursor-pointer items-center gap-2 rounded px-3 py-2 text-sm"
                >
                  {theme === "dark" ? (
                    <Sun className="h-4 w-4" />
                  ) : theme === "light" ? (
                    <Palette className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                  <span className="flex-1">
                    Switch to {nextThemeLabel} Mode
                  </span>
                  <Shortcut isShiftPressed={isShiftPressed}>T</Shortcut>
                </Command.Item>
              </Command.Group>
            </Command.List>

            <div className="palette-section border-t px-4 py-4 text-xs text-[var(--muted)]">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span>Press</span>
                  <kbd className="palette-kbd rounded border px-1.5 py-0.5 font-mono">
                    ↵
                  </kbd>
                  <span>to select</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Press</span>
                  <kbd className="palette-kbd rounded border px-1.5 py-0.5 font-mono">
                    esc
                  </kbd>
                  <span>to close</span>
                </div>
              </div>
            </div>
          </Command>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
