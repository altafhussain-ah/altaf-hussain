import { education } from "@/content/site";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" eyebrow="05 — Education" title="Where I studied.">
      <div className="grid gap-8 md:grid-cols-2">
        {education.map((item, i) => (
          <Reveal key={item.school} delay={i * 90}>
            <div className="h-full border-t border-line pt-6">
              <p className="nums-tabular eyebrow">{item.period}</p>
              <h3 className="mt-3 font-serif text-2xl text-ink">
                {item.school}
              </h3>
              <p className="mt-1.5 text-sm font-medium text-ink-soft">
                {item.credential}
              </p>
              {item.detail ? (
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {item.detail}
                </p>
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
