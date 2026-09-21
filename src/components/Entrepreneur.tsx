import { company } from "@/content/site";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Entrepreneur() {
  return (
    <Section
      id="entrepreneur"
      eyebrow="Entrepreneur"
      title="My studio."
      intro="Running Aquwa Soft is the other half of the job — the side where the deadlines are real and the users are paying."
      tinted
    >
      {/* Masthead panel: the studio's name gets the weight here, not mine. */}
      <Reveal>
        <div
          className="card scanline relative overflow-hidden rounded-2xl p-8 md:p-12"
          style={{ ["--scan-height" as string]: "100%" }}
        >
          <div aria-hidden="true" className="iso-grid absolute inset-0" />
          <div className="relative grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <p className="eyebrow">{company.tagline}</p>
              <h3 className="mt-3 font-serif text-title text-ink">
                {company.name}
              </h3>
              <p className="mt-6 max-w-xl text-lead text-ink-soft">
                {company.intro}
              </p>

              {company.url ? (
                <a
                  href={company.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group link-underline mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-ink"
                >
                  Visit {company.name}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </a>
              ) : null}
            </div>

            <div className="lg:col-span-5">
              <dl className="grid grid-cols-2 gap-x-6 gap-y-6">
                {company.facts.map((fact) => (
                  <div key={fact.label} className="border-t border-line pt-3">
                    <dt className="eyebrow">{fact.label}</dt>
                    <dd className="nums-tabular mt-1.5 text-sm text-ink">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {company.services.map((service, i) => (
          <Reveal key={service.title} delay={i * 90}>
            <div className="card h-full rounded-xl p-6">
              <div className="flex items-center gap-3.5">
                <span
                  aria-hidden="true"
                  className="nums-tabular grid size-9 shrink-0 place-items-center rounded-lg bg-accent-soft text-sm font-bold text-accent"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="font-serif text-lg font-bold text-ink">
                  {service.title}
                </h4>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                {service.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
