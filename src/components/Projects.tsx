import { projects, type Project } from "@/content/site";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title="Research & projects."
      intro="Published and in-progress research, alongside the projects and events I've built and led."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, i) => (
          <Reveal key={project.title} delay={i * 110} as="article">
            <FeaturedCard project={project} index={i + 1} />
          </Reveal>
        ))}
      </div>

      {rest.length > 0 ? (
        <div className="mt-14 border-t border-line">
          {rest.map((project, i) => (
            <Reveal key={project.title} delay={i * 80} as="article">
              <CompactRow project={project} index={featured.length + i + 1} />
            </Reveal>
          ))}
        </div>
      ) : null}
    </Section>
  );
}

function FeaturedCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <div className="card group flex h-full flex-col overflow-hidden rounded-sm p-7">
      <div className="flex items-start justify-between gap-4">
        <span
          aria-hidden="true"
          className="nums-tabular font-serif text-5xl leading-none text-line-strong transition-colors duration-500 group-hover:text-accent/45"
        >
          {String(index).padStart(2, "0")}
        </span>
        <span className="nums-tabular shrink-0 pt-2 text-xs text-muted">
          {project.year}
        </span>
      </div>

      <h3 className="mt-6 font-serif text-2xl leading-tight text-ink">
        {project.title}
      </h3>
      <p className="mt-2 text-sm font-medium text-ink-soft">{project.blurb}</p>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <ul className="mt-6 flex flex-wrap gap-1.5">
        {project.tags.map((tag, i) => (
          <li
            key={tag}
            className="chip rounded-full border border-line px-2.5 py-1 text-xs text-muted"
            style={{ ["--chip-delay" as string]: `${i * 60}ms` }}
          >
            {tag}
          </li>
        ))}
      </ul>

      <ProjectLinks project={project} className="mt-6 border-t border-line pt-5" />
    </div>
  );
}

function CompactRow({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <div className="group grid items-baseline gap-x-6 gap-y-2 border-b border-line py-7 transition-colors md:grid-cols-12">
      <div className="flex items-baseline gap-4 md:col-span-4">
        <span
          aria-hidden="true"
          className="nums-tabular text-xs text-line-strong transition-colors duration-500 group-hover:text-accent"
        >
          {String(index).padStart(2, "0")}
        </span>
        <div>
          <h3 className="font-serif text-xl text-ink transition-colors duration-300 group-hover:text-accent">
            {project.title}
          </h3>
          <span className="nums-tabular mt-1 block text-xs text-muted md:hidden">
            {project.year}
          </span>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-ink-soft md:col-span-5">
        {project.blurb}
      </p>

      <div className="flex items-center gap-4 md:col-span-3 md:justify-end">
        <span className="nums-tabular hidden text-xs text-muted md:inline">
          {project.year}
        </span>
        <ProjectLinks project={project} compact />
      </div>
    </div>
  );
}

function ProjectLinks({
  project,
  compact = false,
  className = "",
}: {
  project: Project;
  compact?: boolean;
  className?: string;
}) {
  const links = [
    { href: project.live, label: compact ? "Live" : "View live" },
    { href: project.source, label: compact ? "Code" : "Source" },
  ].filter((l): l is { href: string; label: string } => Boolean(l.href));

  // Research entries often have nothing to link to yet — render nothing
  // rather than an apologetic placeholder.
  if (links.length === 0) return null;

  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer noopener"
          className="group/link link-underline inline-flex items-center gap-1.5 text-sm font-medium text-ink"
        >
          {link.label}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
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
