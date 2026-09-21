import { achievements } from "@/content/site";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Credentials() {
  return (
    <Section
      id="credentials"
      eyebrow="Recognition"
      title="Awards & honours."
      intro="Mostly from the Department of Computer Games Development at Air University."
    >
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item, i) => (
          <Reveal key={`${item.name}-${item.year}`} delay={i * 70} as="li">
            <div className="card flex h-full items-start gap-4 rounded-xl p-5">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
                <TrophyIcon />
              </span>
              <div className="min-w-0">
                <h3 className="font-serif text-[0.95rem] font-bold leading-snug text-ink">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{item.issuer}</p>
                <p className="nums-tabular mt-1.5 text-xs font-semibold text-accent">
                  {item.year}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

function TrophyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5"
      aria-hidden="true"
    >
      <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
      <path d="M7 6H4v1a3 3 0 0 0 3 3m10-4h3v1a3 3 0 0 1-3 3" />
      <path d="M10 20h4m-2-6v6" />
    </svg>
  );
}
