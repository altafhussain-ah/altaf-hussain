"use client";

import { useEffect, useRef } from "react";
import { experience } from "@/content/site";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Experience() {
  const railRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLOListElement>(null);

  // Fill the rail in proportion to how far the list has scrolled past the
  // middle of the viewport. Written to a CSS variable per frame.
  useEffect(() => {
    const rail = railRef.current;
    const list = listRef.current;
    if (!rail || !list) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      rail.style.setProperty("--rail", "1");
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = list.getBoundingClientRect();
      const anchor = window.innerHeight * 0.55;
      const progress = (anchor - rect.top) / rect.height;
      rail.style.setProperty("--rail", String(Math.min(1, Math.max(0, progress))));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <Section
      id="experience"
      eyebrow="Where I've worked"
      title="Experience."
      intro="Eleven years, from the test lab to the lecture hall."
    >
      <div className="relative pl-7 md:pl-10">
        <div ref={railRef} className="timeline-rail" />

        <ol ref={listRef}>
          {experience.map((role, i) => (
            <Reveal
              key={`${role.company}-${role.period}`}
              delay={i * 70}
              as="li"
              className="relative"
            >
              <span className="timeline-dot" aria-hidden="true" />

              <div className="grid gap-x-10 gap-y-4 pb-12 md:grid-cols-12">
                <div className="md:col-span-4">
                  <span className="nums-tabular inline-block rounded-full bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent">
                    {role.period}
                  </span>
                  <h3 className="mt-3 font-serif text-xl font-bold text-ink">
                    {role.company}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-ink-soft">
                    {role.title}
                  </p>
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
                      {role.stack.map((tech, k) => (
                        <li
                          key={tech}
                          className="chip rounded-full border border-line px-2.5 py-1 text-xs text-muted"
                          style={{ ["--chip-delay" as string]: `${k * 45}ms` }}
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
      </div>
    </Section>
  );
}
