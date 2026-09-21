import Image from "next/image";
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
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, i) => (
          <Reveal key={project.title} delay={i * 100} as="article">
            <FeaturedCard project={project} />
          </Reveal>
        ))}
      </div>

      {rest.length > 0 ? (
        <div className="mt-16 border-t border-line">
          {rest.map((project, i) => (
            <Reveal key={project.title} delay={i * 70} as="article">
              <CompactRow project={project} />
            </Reveal>
          ))}
        </div>
      ) : null}
    </Section>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-sm border border-line bg-paper-raised transition-colors hover:border-line-strong">
      <div className="relative aspect-16/10 overflow-hidden border-b border-line bg-accent-soft">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} — preview`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <InitialMark title={project.title} />
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-serif text-2xl text-ink">{project.title}</h3>
          <span className="nums-tabular shrink-0 text-xs text-muted">
            {project.year}
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-line px-2.5 py-1 text-xs text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>

        <ProjectLinks project={project} className="mt-6 pt-5" />
      </div>
    </div>
  );
}

function CompactRow({ project }: { project: Project }) {
  return (
    <div className="group grid items-baseline gap-x-6 gap-y-2 border-b border-line py-7 md:grid-cols-12">
      <div className="md:col-span-4">
        <h3 className="font-serif text-xl text-ink">{project.title}</h3>
        <span className="nums-tabular mt-1 block text-xs text-muted md:hidden">
          {project.year}
        </span>
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
    <div
      className={`flex flex-wrap items-center gap-4 ${
        compact ? "" : "mt-auto border-t border-line"
      } ${className}`}
    >
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer noopener"
          className="link-underline inline-flex items-center gap-1 text-sm font-medium text-ink"
        >
          {link.label}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-3.5"
            aria-hidden="true"
          >
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
        </a>
      ))}
    </div>
  );
}

/** Stand-in when a project has no screenshot yet — reads as deliberate, not broken. */
function InitialMark({ title }: { title: string }) {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--accent) 0 1px, transparent 1px 11px)",
        }}
      />
      <span className="relative font-serif text-6xl text-accent/45">
        {title.charAt(0)}
      </span>
    </div>
  );
}
