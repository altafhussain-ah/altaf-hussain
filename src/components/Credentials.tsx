import { achievements, certifications } from "@/content/site";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Credentials() {
  return (
    <Section
      id="credentials"
      eyebrow="Credentials"
      title="Certifications & recognition."
    >
      <div className="grid gap-x-16 gap-y-14 lg:grid-cols-2">
        <Reveal>
          <List heading="Awards & recognition" items={achievements} />
        </Reveal>

        <Reveal delay={100}>
          <List heading="Certifications" items={certifications} />
        </Reveal>
      </div>
    </Section>
  );
}

function List({
  heading,
  items,
}: {
  heading: string;
  items: { name: string; issuer: string; year: string }[];
}) {
  return (
    <div>
      <h3 className="eyebrow">{heading}</h3>
      <ul className="mt-4 border-t border-line">
        {items.map((item) => (
          <li
            key={`${item.name}-${item.year}`}
            className="flex items-baseline justify-between gap-6 border-b border-line py-3.5"
          >
            <span className="text-sm text-ink">
              {item.name}
              <span className="block text-sm text-muted">{item.issuer}</span>
            </span>
            <span className="nums-tabular shrink-0 text-xs text-muted">
              {item.year}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
