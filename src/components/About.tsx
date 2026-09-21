import { about, site } from "@/content/site";
import Reveal from "./Reveal";
import Section from "./Section";

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="Get to know me"
      title="About me."
      divider={false}
      tinted
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 90}>
              <p
                className={`text-ink-soft ${
                  i === 0 ? "text-lead" : "mt-5 text-base leading-relaxed"
                }`}
              >
                {p}
              </p>
            </Reveal>
          ))}

          {/* Hidden until site.resume points at a redacted CV — see site.ts. */}
          {site.resume ? (
            <Reveal delay={about.paragraphs.length * 90}>
              <a
                href={site.resume}
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Download résumé
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4"
                  aria-hidden="true"
                >
                  <path d="M12 3v13m0 0 4.5-4.5M12 16l-4.5-4.5M4 20h16" />
                </svg>
              </a>
            </Reveal>
          ) : null}
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={140}>
            <dl className="grid grid-cols-2 gap-4">
              {about.facts.map((fact) => (
                <div key={fact.label} className="card rounded-xl p-5">
                  <dt className="eyebrow-muted">{fact.label}</dt>
                  <dd className="mt-2 font-serif text-base font-bold text-ink">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
