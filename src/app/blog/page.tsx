import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description: "Essays and notes on building software.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <Nav />
      <main id="main" className="pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="container-editorial">
          <Reveal>
            <header className="mb-14 md:mb-20">
              <p className="eyebrow">Writing</p>
              <h1 className="mt-4 max-w-3xl font-serif text-display text-ink">
                Notes and essays.
              </h1>
              <p className="mt-6 max-w-xl text-lead text-ink-soft">
                Occasional writing about building software — mostly things I got
                wrong first.
              </p>
            </header>
          </Reveal>

          {posts.length === 0 ? (
            <p className="border-t border-line pt-8 text-ink-soft">
              No posts yet. Add a markdown file to{" "}
              <code className="rounded bg-paper-raised px-1.5 py-0.5 text-sm ring-1 ring-line">
                content/posts/
              </code>{" "}
              to get started.
            </p>
          ) : (
            <ul className="border-t border-line">
              {posts.map((post, i) => (
                <Reveal key={post.slug} delay={i * 70} as="li">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group grid gap-x-10 gap-y-3 border-b border-line py-8 md:grid-cols-12"
                  >
                    <div className="md:col-span-3">
                      <p className="nums-tabular eyebrow">{post.date}</p>
                      <p className="nums-tabular mt-1.5 text-xs text-muted">
                        {post.readingTime}
                      </p>
                    </div>

                    <div className="md:col-span-9">
                      <h2 className="font-serif text-2xl text-ink transition-colors group-hover:text-accent md:text-3xl">
                        {post.title}
                      </h2>
                      <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-ink-soft">
                        {post.summary}
                      </p>
                      {post.tags.length > 0 ? (
                        <ul className="mt-4 flex flex-wrap gap-1.5">
                          {post.tags.map((tag) => (
                            <li
                              key={tag}
                              className="rounded-full border border-line px-2.5 py-1 text-xs text-muted"
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </Link>
                </Reveal>
              ))}
            </ul>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
