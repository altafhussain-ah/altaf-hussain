import Link from "next/link";
import { hero, site, socials } from "@/content/site";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-48 md:pb-28">
      {/* A soft warm wash behind the headline. Purely atmospheric. */}
      <div
        aria-hidden="true"
        className="hero-glow pointer-events-none absolute -top-40 left-1/2 h-[42rem] w-[72rem] -translate-x-1/2 rounded-full blur-3xl"
      />

      <div className="container-editorial relative">
        {hero.eyebrow ? (
          <Reveal>
            <p className="flex items-center gap-2.5 text-sm text-muted">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              {hero.eyebrow}
            </p>
          </Reveal>
        ) : null}

        <Reveal delay={80}>
          <h1 className="mt-6 max-w-5xl font-serif text-display text-ink">
            {hero.headline}
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-8 max-w-xl text-lead text-ink-soft">{hero.subhead}</p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="#work"
              className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
            >
              See the work
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-line-strong px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-paper-raised"
            >
              Get in touch
            </Link>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-16 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-line pt-6 text-sm text-muted">
            <span className="nums-tabular">{site.location}</span>
            <span aria-hidden="true" className="text-line-strong">
              /
            </span>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline transition-colors hover:text-ink"
              >
                {s.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
