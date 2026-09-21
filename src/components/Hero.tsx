import Image from "next/image";
import Link from "next/link";
import { about, hero, site, socials } from "@/content/site";
import Reveal from "./Reveal";
import Stats from "./Stats";
import Typewriter from "./Typewriter";
import WireframeField from "./WireframeField";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
      {/* Background layers, furthest back first. */}
      <div aria-hidden="true" className="tile-grid absolute inset-0" />
      <WireframeField />
      <div className="hero-glow pointer-events-none absolute -top-40 left-1/2 h-[42rem] w-[72rem] -translate-x-1/2 rounded-full blur-3xl" />

      <div className="container-editorial relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-sm font-semibold text-accent">{hero.eyebrow}</p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-2 font-serif text-display text-ink">
                {site.name}
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-2 font-serif text-xl font-semibold text-ink-soft md:text-2xl">
                {site.role}
              </p>
            </Reveal>

            <Reveal delay={220}>
              {/* Fixed height so the layout doesn't jump as lines change. */}
              <div className="mt-5 flex min-h-8 items-center">
                <Typewriter
                  lines={hero.rotatingLines}
                  className="text-lg text-ink md:text-xl"
                />
              </div>
            </Reveal>

            <Reveal delay={290}>
              <ul className="mt-7 space-y-2.5">
                {hero.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-ink-soft md:text-[0.95rem]"
                  >
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={360}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Get in touch
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </Link>
                <Link
                  href="#work"
                  className="rounded-full border border-line-strong px-6 py-3 text-sm font-semibold text-ink transition-colors duration-300 hover:bg-paper-raised"
                >
                  See the work
                </Link>

                <div className="ml-1 flex items-center gap-4 text-sm">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="link-underline text-muted transition-colors hover:text-ink"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {about.image ? (
            <div className="lg:col-span-5">
              <Reveal delay={200}>
                <div className="mx-auto w-52 sm:w-64 lg:ml-auto lg:mr-0 lg:w-full lg:max-w-sm">
                  <div className="portrait-ring">
                    <div className="relative aspect-square overflow-hidden rounded-full bg-paper-raised">
                      <Image
                        src={about.image}
                        alt={about.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 24rem, 16rem"
                        className="object-cover object-top"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          ) : null}
        </div>

        <Reveal delay={430}>
          <div className="mt-16">
            <Stats />
          </div>
        </Reveal>

        <Reveal delay={500}>
          <div className="mt-14 flex justify-center">
            <Link
              href="#about"
              aria-label="Scroll to About"
              className="scroll-cue text-muted transition-colors hover:text-accent"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-6"
                aria-hidden="true"
              >
                <path d="M12 5v14m0 0 6-6m-6 6-6-6" />
              </svg>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 size-4 shrink-0 text-accent"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </svg>
  );
}
