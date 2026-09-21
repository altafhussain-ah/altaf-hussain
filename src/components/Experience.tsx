import { experience } from "@/content/site";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="04 — Experience"
      title="Where I've worked."
    >
      <ol className="border-t border-line">
        {experience.map((role, i) => (
          <Reveal key={`${role.company}-${role.period}`} delay={i * 90} as="li">
            <div className="grid gap-x-10 gap-y-4 border-b border-line py-10 md:grid-cols-12">
              <div className="md:col-span-4">
                <p className="nums-tabular eyebrow">{role.period}</p>
                <h3 className="mt-3 font-serif text-2xl text-ink">
                  {role.company}
                </h3>
                <p className="mt-1 text-sm text-ink-soft">{role.title}</p>
                {role.location ? (
                  <p className="mt-0.5 text-sm text-muted">{role.location}</p>
                ) : null}
              </div>

              <div className="md:col-span-8">
                <ul className="space-y-3.5">
                  {role.points.map((point, j) => (
                    <li
                      key={j}
                      className="relative pl-6 text-sm leading-relaxed text-ink-soft md:text-[0.95rem]"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-2.5 h-px w-3.5 bg-line-strong"
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                {role.stack?.length ? (
                  <ul className="mt-6 flex flex-wrap gap-1.5">
                    {role.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-line px-2.5 py-1 text-xs text-muted"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
