"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import CommandPaletteTrigger from "./command-palette-trigger";
import ThemeToggle from "./theme-toggle";

const navItems = [
  { href: "/", label: "home" },
  { href: "/blog", label: "blog" },
  { href: "/projects", label: "projects" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="mx-auto flex w-full max-w-2xl items-center justify-between gap-6 px-6 py-8 text-sm sm:py-10">
      <nav className="flex items-center gap-6" aria-label="Primary navigation">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              className={`nav-link ${isActive ? "nav-link-active" : ""}`}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <CommandPaletteTrigger />
      </div>
    </header>
  );
}
