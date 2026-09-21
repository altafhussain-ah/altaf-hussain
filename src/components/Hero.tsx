import Link from "next/link";
import { hero, site, socials } from "@/content/site";
import AnimatedHeadline from "./AnimatedHeadline";
import Reveal from "./Reveal";
import Spotlight from "./Spotlight";
import Stats from "./Stats";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
      <div className="hero-glow pointer-events-none absolute -top-40 left-1/2 h-[42rem] w-[72rem] -translate-x-1/2 rounded-full blur-3xl" />
      <Spotlight />

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

        <AnimatedHeadline
          text={hero.headline}
          className="mt-6 max-w-5xl font-serif text-display text-ink"
        />

        <Reveal delay={420}>
          <p className="mt-8 max-w-2xl text-lead text-ink-soft">
            {hero.subhead}
          </p>
        </Reveal>

        <Reveal delay={520}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform duration-300 hover:-translate-y-0.5"
            >
              See the work
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-line-strong px-6 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:bg-paper-raised"
            >
              Get in touch
            </Link>
          </div>
        </Reveal>

        <Reveal delay={600}>
          <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-muted">
            <span>{site.location}</span>
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

        <Reveal delay={680}>
          <div className="mt-14">
            <Stats />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
