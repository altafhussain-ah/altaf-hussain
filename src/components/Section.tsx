import Reveal from "./Reveal";

type Props = {
  id: string;
  /** The small uppercase label. */
  eyebrow: string;
  /** The section heading. */
  title: string;
  /** Optional sentence under the heading. */
  intro?: string;
  children: React.ReactNode;
  /** Draws a hairline above the section. Off for the first section after the hero. */
  divider?: boolean;
  className?: string;
};

/**
 * One consistent section header for the whole page: numbered eyebrow, serif
 * title, optional intro — then whatever the section itself renders.
 */
export default function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  divider = true,
  className = "",
}: Props) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-20 md:py-28 ${divider ? "border-t border-line" : ""} ${className}`}
    >
      <div className="container-editorial">
        <Reveal>
          <header className="mb-12 md:mb-16">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-4 font-serif text-title text-ink">{title}</h2>
            {intro ? (
              <p className="mt-5 max-w-2xl text-lead text-ink-soft">{intro}</p>
            ) : null}
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
