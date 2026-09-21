import { contact, site, socials } from "@/content/site";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-line py-20 md:py-28">
      <div className="container-editorial">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">Contact</p>
              <h2 className="mt-4 font-serif text-title text-ink">
                {contact.heading}
              </h2>
              <p className="mt-5 text-lead text-ink-soft">{contact.body}</p>

              <div className="mt-10 space-y-4 border-t border-line pt-6">
                <a
                  href={`mailto:${site.email}`}
                  className="link-underline block text-lg text-ink"
                >
                  {site.email}
                </a>
                <p className="text-sm text-muted">{site.location}</p>
                <div className="flex flex-wrap gap-x-6 gap-y-2 pt-1 text-sm text-muted">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="link-underline transition-colors hover:text-ink"
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
      </div>
    </section>
  );
}
