import { skills } from "@/content/site";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolkit"
      title="What I work with."
      intro="Tools are just tools — but these are the ones I reach for without thinking."
    >
      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.group} delay={i * 80}>
            <div className="border-t border-line pt-5">
              <h3 className="eyebrow">{group.group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item, j) => (
                  <li
                    key={item}
                    className="chip rounded-full bg-paper-raised px-3 py-1.5 text-sm text-ink-soft ring-1 ring-line hover:text-ink hover:ring-line-strong"
                    style={{ ["--chip-delay" as string]: `${j * 50}ms` }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
