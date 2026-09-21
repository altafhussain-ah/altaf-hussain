"use client";

import { useState } from "react";
import {
  projectCategories,
  projects,
  type Project,
  type ProjectCategory,
} from "@/content/site";
import Reveal from "./Reveal";
import Section from "./Section";

type Filter = ProjectCategory | "All";

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const filters: Filter[] = ["All", ...projectCategories];

  const shown =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section
      id="work"
      eyebrow="Some of my work"
      title="Research & projects."
      intro="Published and in-progress research, alongside the projects and events I've built and led."
    >
      <Reveal>
        <div
          role="group"
          aria-label="Filter projects by type"
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

      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((project, i) => (
          <Reveal
            key={`${filter}-${project.title}`}
            delay={Math.min(i, 6) * 90}
            as="li"
          >
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card group flex h-full flex-col rounded-xl p-6">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent">
          {project.org}
        </span>
        <span className="nums-tabular text-xs text-muted">{project.year}</span>
      </div>

      <h3 className="mt-4 font-serif text-lg font-bold leading-snug text-ink transition-colors duration-300 group-hover:text-accent">
        {project.title}
      </h3>
      <p className="mt-1.5 text-sm font-medium text-ink-soft">
        {project.blurb}
      </p>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {project.tags.map((tag, i) => (
          <li
            key={tag}
            className="chip rounded-md border border-line px-2 py-1 text-xs text-muted"
            style={{ ["--chip-delay" as string]: `${i * 60}ms` }}
          >
            {tag}
          </li>
        ))}
      </ul>

      <ProjectLinks project={project} />
    </article>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  const links = [
    { href: project.live, label: "View live" },
    { href: project.source, label: "Source" },
  ].filter((l): l is { href: string; label: string } => Boolean(l.href));

  // Research entries often have nothing to link to yet — render nothing
  // rather than an apologetic placeholder.
  if (links.length === 0) return null;

  return (
    <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-line pt-4">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer noopener"
          className="group/link link-underline inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
        >
          {link.label}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            aria-hidden="true"
          >
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
        </a>
      ))}
    </div>
  );
}
