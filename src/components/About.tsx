import Image from "next/image";
import { about, site } from "@/content/site";
import Reveal from "./Reveal";
import Section from "./Section";

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="01 — About"
      title="A short version."
      divider={false}
    >
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 90}>
              <p
                className={`text-ink-soft ${
                  i === 0
                    ? "text-lead"
                    : "mt-6 text-base leading-relaxed md:text-[1.0625rem]"
                }`}
              >
                {p}
              </p>
            </Reveal>
          ))}

          <Reveal delay={about.paragraphs.length * 90}>
            <a
              href={site.resume}
              className="link-underline mt-10 inline-flex items-center gap-2 text-sm font-medium text-ink"
            >
              Download résumé
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4"
                aria-hidden="true"
              >
                <path d="M12 3v13m0 0 4.5-4.5M12 16l-4.5-4.5M4 20h16" />
              </svg>
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          {about.image ? (
            <Reveal delay={120}>
              <div className="relative aspect-4/5 w-full overflow-hidden rounded-sm bg-paper-raised ring-1 ring-line">
                <Image
                  src={about.image}
                  alt={about.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                  priority={false}
                />
              </div>
            </Reveal>
          ) : null}

          <Reveal delay={200}>
            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6">
              {about.facts.map((fact) => (
                <div key={fact.label} className="border-t border-line pt-3">
                  <dt className="eyebrow">{fact.label}</dt>
                  <dd className="mt-1.5 text-sm text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
