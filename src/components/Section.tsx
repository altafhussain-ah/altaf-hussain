import Reveal from "./Reveal";

type Props = {
  id: string;
  /** The small accent label above the heading. */
  eyebrow: string;
  title: string;
  /** Optional sentence under the heading. */
  intro?: string;
  children: React.ReactNode;
  /** Draws a hairline above the section. */
  divider?: boolean;
  /** Alternate surface, so adjacent sections separate without a hard rule. */
  tinted?: boolean;
  className?: string;
};

/**
 * One centred section header for the whole page: accent eyebrow, heavy
 * heading, short rule, optional intro.
 */
export default function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  divider = true,
  tinted = false,
  className = "",
}: Props) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-20 md:py-28 ${
        divider ? "border-t border-line" : ""
      } ${tinted ? "bg-paper-raised" : ""} ${className}`}
    >
      <div className="container-editorial">
        <Reveal>
          <header className="mb-12 text-center md:mb-16">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-3 font-serif text-title text-ink">{title}</h2>
            <span className="heading-rule mt-5" aria-hidden="true" />
            {intro ? (
              <p className="mx-auto mt-6 max-w-2xl text-lead text-ink-soft">
                {intro}
              </p>
            ) : null}
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
