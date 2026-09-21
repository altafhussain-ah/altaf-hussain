import { certifications, education } from "@/content/site";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="My background"
      title="Education & certifications."
      tinted
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <Reveal>
            <h3 className="eyebrow-muted mb-5">Education</h3>
          </Reveal>
          <div className="space-y-5">
            {education.map((item, i) => (
              <Reveal key={item.school} delay={i * 90}>
                <div className="card rounded-xl p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h4 className="font-serif text-lg font-bold text-ink">
                      {item.credential}
                    </h4>
                    <span className="nums-tabular rounded-full bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm font-medium text-ink-soft">
                    {item.school}
                  </p>
                  {item.detail ? (
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {item.detail}
                    </p>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={120}>
            <h3 className="eyebrow-muted mb-5">Certifications</h3>
          </Reveal>
          <Reveal delay={180}>
            <ul className="card divide-y divide-line rounded-xl">
              {certifications.map((c) => (
                <li
                  key={`${c.name}-${c.year}`}
                  className="flex items-baseline justify-between gap-4 px-5 py-3.5"
                >
                  <span className="text-sm text-ink">
                    {c.name}
                    <span className="block text-xs text-muted">{c.issuer}</span>
                  </span>
                  <span className="nums-tabular shrink-0 text-xs text-muted">
                    {c.year}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
