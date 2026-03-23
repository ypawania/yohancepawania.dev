import CopyEmailLink from "./components/copy-email-link";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col px-6 py-6 sm:py-8 md:h-svh md:overflow-hidden">
      <nav className="mb-8 flex items-center gap-6 text-sm text-neutral-400 sm:mb-10">
        <a className="nav-link nav-link-active" href="#top">
          home
        </a>
        <a className="nav-link" href="#about">
          blog
        </a>
        <a className="nav-link" href="#achievements">
          projects
        </a>
      </nav>

      <div className="flex min-h-0 flex-1 flex-col justify-between gap-8 sm:gap-10 md:gap-12">
        <section id="top" className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-100 sm:text-[2rem]">
            Yohance Pawania
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-neutral-300">
            Software engineer focused on backend systems, AI/ML, and building practical products.
          </p>
        </section>

        <section id="about" className="space-y-4">
          <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-neutral-500">
            About
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-neutral-300 sm:text-base">
            I like building things that are technically deep but easy to use. Most of my work sits at
            the intersection of systems engineering, applied machine learning, and developer tools.
          </p>
          <p className="max-w-xl text-sm leading-relaxed text-neutral-400 sm:text-base">
            I care about clean execution, fast feedback loops, and writing software that is simple,
            reliable, and useful.
          </p>
        </section>

        <section id="achievements" className="space-y-4">
          <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-neutral-500">
            Achievements
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-neutral-300 sm:text-base">
            <li>Built and shipped production features across backend and AI-oriented products.</li>
            <li>Won and placed in multiple hackathons while leading teams under tight timelines.</li>
            <li>Led technical projects end-to-end, from architecture and implementation to launch.</li>
            <li>Contributed to student and developer communities through mentorship and events.</li>
          </ul>
        </section>

        <footer className="grid w-full grid-cols-1 items-start gap-2 pt-1 text-sm text-neutral-400 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-4 sm:text-base">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a className="social-link" href="https://github.com/ypawania" target="_blank" rel="noopener noreferrer">
              github
            </a>
            <a className="social-link" href="https://www.linkedin.com/in/yohance-pawania-30aa902a4/" target="_blank" rel="noopener noreferrer">
              linkedin
            </a>
            <a className="social-link" href="https://x.com/ypawania_" target="_blank" rel="noopener noreferrer">
              twitter 
            </a>
          </div>
          <CopyEmailLink className="social-link justify-self-start cursor-copy appearance-none border-0 bg-transparent p-0 text-left sm:justify-self-end sm:text-right" />
        </footer>
      </div>
    </main>
  );
}
