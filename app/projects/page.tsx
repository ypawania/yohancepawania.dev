import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects - Coming Soon",
  description: "Projects from Yohance Pawania, currently compiling.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-2xl flex-col justify-center px-6 py-8">
      <div className="space-y-10">
        <nav className="flex items-center gap-6 text-sm">
          <Link className="nav-link" href="/">
            home
          </Link>
          <Link className="nav-link" href="/blog">
            blog
          </Link>
          <span className="nav-link-active">projects</span>
        </nav>

        <section className="space-y-4">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
            target / builds
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-[2rem]">
            build target: projects
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-[var(--muted-strong)]">
            The route is live. The project writeups are still being linked,
            tested, and stripped down to the useful parts.
          </p>
        </section>

        <section
          aria-label="Build output"
          className="border-y border-[var(--border)] py-6 font-mono text-sm leading-relaxed"
        >
          <ol className="space-y-2">
            <li className="grid gap-3 sm:grid-cols-[4rem_1fr]">
              <span className="text-[var(--muted)]">[ok]</span>
              <span className="text-[var(--muted-strong)]">
                located embedded builds, pcbs, and server experiments
              </span>
            </li>
            <li className="grid gap-3 sm:grid-cols-[4rem_1fr]">
              <span className="text-[var(--muted)]">[ok]</span>
              <span className="text-[var(--muted-strong)]">
                filtered out abandoned folders and misleading screenshots
              </span>
            </li>
            <li className="grid gap-3 sm:grid-cols-[4rem_1fr]">
              <span className="text-[var(--muted)]">[warn]</span>
              <span className="text-[var(--muted-strong)]">
                demos need cleaner explanations before release
              </span>
            </li>
            <li className="grid gap-3 sm:grid-cols-[4rem_1fr]">
              <span className="text-[var(--muted)]">[exit]</span>
              <span className="text-[var(--foreground)]">
                status: still building
              </span>
            </li>
          </ol>
        </section>

        <Link className="social-link text-sm sm:text-base" href="/">
          back home
        </Link>
      </div>
    </main>
  );
}
