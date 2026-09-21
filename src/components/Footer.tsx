import Link from "next/link";
import { site, socials } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-editorial flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="nums-tabular text-sm text-muted">
          &copy; {new Date().getFullYear()} {site.name}. Built with Next.js.
        </p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
          <Link href="/blog" className="link-underline hover:text-ink">
            Writing
          </Link>
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
    </footer>
  );
}
