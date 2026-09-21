import { testimonials } from "@/content/site";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="06 — Kind words"
      title="What people say."
    >
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.author} delay={i * 100} as="article">
            <figure className="flex h-full flex-col rounded-sm border border-line bg-paper-raised p-7">
              <span
                aria-hidden="true"
                className="font-serif text-5xl leading-none text-accent/35"
              >
                &ldquo;
              </span>
              <blockquote className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-line pt-4">
                <p className="text-sm font-medium text-ink">{t.author}</p>
                <p className="mt-0.5 text-sm text-muted">{t.title}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
