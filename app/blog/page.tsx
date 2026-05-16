import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - Coming Soon",
  description: "Notes and writing from Yohance Pawania, currently compiling.",
};

export default function BlogPage() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-col px-6 pb-8 sm:pb-10">
      <div className="space-y-10">
        <section className="space-y-4">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
            target / writing
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-[2rem]">
            build target: blog
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-[var(--muted-strong)]">
            The page exists, but the posts are still compiling into something
            less half-finished.
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
                found notes on chips, linux, compilers, and side quests
              </span>
            </li>
            <li className="grid gap-3 sm:grid-cols-[4rem_1fr]">
              <span className="text-[var(--muted)]">[ok]</span>
              <span className="text-[var(--muted-strong)]">
                removed three paragraphs that sounded too certain
              </span>
            </li>
            <li className="grid gap-3 sm:grid-cols-[4rem_1fr]">
              <span className="text-[var(--muted)]">[warn]</span>
              <span className="text-[var(--muted-strong)]">
                drafts are not ready for public release
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
