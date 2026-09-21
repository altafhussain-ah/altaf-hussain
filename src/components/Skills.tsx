"use client";

import { useState } from "react";
import {
  languages,
  skillCategories,
  skills,
  type Level,
  type SkillCategory,
} from "@/content/site";
import Reveal from "./Reveal";
import Section from "./Section";

const LEVEL_COLOR: Record<Level, string> = {
  Expert: "var(--level-expert)",
  Advanced: "var(--level-advanced)",
  Working: "var(--level-working)",
};

type Filter = SkillCategory | "All";

export default function Skills() {
  const [filter, setFilter] = useState<Filter>("All");
  const filters: Filter[] = ["All", ...skillCategories];

  const shown =
    filter === "All" ? skills : skills.filter((s) => s.category === filter);

  return (
    <Section
      id="skills"
      eyebrow="What I work with"
      title="Skills & expertise."
      intro="Eleven years of it, split between shipping software and teaching people how."
      tinted
    >
      <Reveal>
        <div
          role="group"
          aria-label="Filter skills by category"
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className="pill"
            >
              {f}
            </button>
          ))}
        </div>
      </Reveal>

      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((skill, i) => (
          <Reveal
            /* Key on the filter too, so cards re-run their reveal when the
               list changes rather than snapping in already-visible. */
            key={`${filter}-${skill.name}`}
            delay={Math.min(i, 8) * 55}
            as="li"
          >
            <div className="card h-full rounded-xl p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-serif text-base font-bold text-ink">
                  {skill.name}
                </h3>
                <span
                  className="level shrink-0"
                  style={{
                    ["--level-color" as string]: LEVEL_COLOR[skill.level],
                  }}
                >
                  {skill.level}
                </span>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {skill.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={120}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 border-t border-line pt-8">
          <span className="eyebrow-muted">Languages</span>
          {languages.map((l) => (
            <span key={l.name} className="text-sm text-ink-soft">
              {l.name}{" "}
              <span className="text-muted">&middot; {l.level}</span>
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
