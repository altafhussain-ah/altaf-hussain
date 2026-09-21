import { contact, site, socials } from "@/content/site";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title={contact.heading}
      intro={contact.body}
      tinted
    >
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="card rounded-xl p-6">
              <h3 className="eyebrow-muted">Email</h3>
              <a
                href={`mailto:${site.email}`}
                className="link-underline mt-2 block break-all font-serif text-base font-bold text-ink"
              >
                {site.email}
              </a>

              <h3 className="eyebrow-muted mt-7">Based in</h3>
              <p className="mt-2 text-sm text-ink-soft">{site.location}</p>

              <h3 className="eyebrow-muted mt-7">Elsewhere</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="rounded-full border border-line px-3.5 py-1.5 text-sm text-ink-soft transition-colors hover:border-accent hover:text-accent"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
