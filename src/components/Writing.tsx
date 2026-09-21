import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Writing({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) return null;

  return (
    <Section
      id="writing"
      eyebrow="Writing"
      title="Notes and essays."
      intro="Occasional writing on software engineering, teaching and game development."
    >
      <ul className="border-t border-line">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 80} as="li">
            <Link
              href={`/blog/${post.slug}`}
              className="group grid gap-x-10 gap-y-3 border-b border-line py-8 md:grid-cols-12"
            >
              <p className="nums-tabular eyebrow md:col-span-3">{post.date}</p>

              <div className="md:col-span-7">
                <h3 className="font-serif text-2xl text-ink transition-colors group-hover:text-accent">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {post.summary}
                </p>
              </div>

              <p className="nums-tabular text-xs text-muted md:col-span-2 md:text-right">
                {post.readingTime}
              </p>
            </Link>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={posts.length * 80}>
        <Link
          href="/blog"
          className="link-underline mt-10 inline-flex items-center gap-2 text-sm font-medium text-ink"
        >
          All writing
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </Reveal>
    </Section>
  );
}
