import Image from "next/image";
import CommandPalette from "./components/command-palette";
import CommandPaletteTrigger from "./components/command-palette-trigger";
import CopyEmailLink from "./components/copy-email-link";
import TextLink from "./components/text-link";
import ThemeToggle from "./components/theme-toggle";

export default function Home() {
  const webringUrl = "https://cs.uwatering.com/#https://yohancepawania.dev";

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-col px-6 py-8 sm:py-10">
      <nav className="mb-8 flex items-center justify-between gap-6 text-sm sm:mb-10">
        <div className="flex items-center gap-6">
          <a className="nav-link nav-link-active" href="#top">
            home
          </a>
          <a className="nav-link" href="#recents">
            blog
          </a>
          <a className="nav-link" href="#socials">
            projects
          </a>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <CommandPaletteTrigger />
        </div>
      </nav>

      <div className="flex flex-col gap-10 sm:gap-12">
        <section id="top" className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-[2rem]">
            Yohance Pawania
          </h1>
          <div className="space-y-4">
            <p className="max-w-xl text-base leading-relaxed text-[var(--muted-strong)]">
              i&apos;m an incoming computer science student at
              the University of Waterloo passionate about physics, compilers, and machine learning. 
            </p>
            <p className="max-w-xl text-sm leading-relaxed text-[var(--muted-strong)] sm:text-base">
              Lately I&apos;ve been spending time on machine learning, messing
              around with my home server, and building a better feel for
              hardware. I&apos;m also comfortable on the lathe, mill, and
              woodworking bench.
            </p>
            <p className="max-w-xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
              Away from the computer, I like bouldering, biking, camping, and
              being outside. I read a lot too, mostly science fiction and
              classics.
            </p>
          </div>
        </section>

        <section id="recents" className="space-y-4">
          <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-[var(--muted)]">
            <i>recently</i>
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--muted-strong)] sm:text-base">
            <li>cold mailed my way into an embedded software internship @ <TextLink href="https://www.geotab.com">geotab</TextLink></li>
            <li>interned at <span className="inline-flex items-center gap-1 whitespace-nowrap"><Image src="/assets/Sunnybrook.png" alt="Sunnybrook" width={16} height={16} className="h-[1em] w-auto" /><TextLink href="https://www.sunnybrook.ca">sunnybrook</TextLink></span>, designing PCBs for noninvasive brain surgery</li>
            <li>organized <span className="inline-flex items-center gap-1 whitespace-nowrap">canada&apos;s largest high school <Image src="/assets/eurekahacks-logo.svg" alt="Eurekahacks" width={16} height={16} className="h-[1em] w-auto" /> <TextLink href="https://2025.eurekahacks.ca/">hackathon</TextLink> </span></li>
            <li>spent a year building modular e-bike conversion kits for eradicating mobility barriers [backed by <TextLink href="https://www.bloomberg.org">bloomberg philanthropies</TextLink>]</li>
            <li>led firmware development for my school&apos;s electric racekart team</li>
          </ul>
        </section>

        <footer id="socials" className="grid w-full grid-cols-1 items-start gap-2 border-t border-[var(--border)] pt-6 text-sm sm:grid-cols-[1fr_auto] sm:items-center sm:gap-4 sm:text-base">
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
            <nav
              aria-label="UW CS Webring"
              className="flex items-center gap-2"
            >
              <a className="social-link leading-none" href={`${webringUrl}?nav=prev`} aria-label="Previous UW CS Webring site">
                ←
              </a>
              <a
                className="webring-link"
                href={webringUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="UW CS Webring"
              >
                <Image
                  src="https://cs.uwatering.com/icon.white.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="h-[1em] w-[1em] opacity-75 transition-opacity duration-150"
                  unoptimized
                />
              </a>
              <a className="social-link leading-none" href={`${webringUrl}?nav=next`} aria-label="Next UW CS Webring site">
                →
              </a>
            </nav>
          </div>
          <CopyEmailLink className="social-link justify-self-start cursor-copy appearance-none border-0 bg-transparent p-0 text-left sm:justify-self-end sm:text-right" />
        </footer>
      </div>
      <CommandPalette repoUrl="https://github.com/ypawania/yohancepawania.dev" />
    </main>
  );
}
