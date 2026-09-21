import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { getAllPosts, getPost } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Not found" };

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.iso || undefined,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <>
      <Nav />
      <main id="main" className="pt-36 pb-20 md:pt-44 md:pb-28">
        <article className="container-editorial">
          <header className="mx-auto max-w-2xl">
            <Link
              href="/blog"
              className="link-underline text-sm text-muted transition-colors hover:text-ink"
            >
              &larr; All writing
            </Link>

            <h1 className="mt-8 font-serif text-title text-ink">
              {post.title}
            </h1>

            <div className="nums-tabular mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 border-b border-line pb-6 text-sm text-muted">
              {post.iso ? <time dateTime={post.iso}>{post.date}</time> : null}
              <span aria-hidden="true" className="text-line-strong">
                /
              </span>
              <span>{post.readingTime}</span>
              {post.tags.length > 0 ? (
                <>
                  <span aria-hidden="true" className="text-line-strong">
                    /
                  </span>
                  <span>{post.tags.join(", ")}</span>
                </>
              ) : null}
            </div>
          </header>

          {/*
            The HTML comes from markdown files in this repo — authored by the
            site owner, same trust level as the source. Don't point getPost()
            at user-submitted content without sanitising first.
          */}
          <div
            className="prose-editorial mx-auto mt-12 max-w-2xl"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <div className="mx-auto mt-16 max-w-2xl border-t border-line pt-8">
            <Link
              href="/blog"
              className="link-underline text-sm font-medium text-ink"
            >
              &larr; Back to all writing
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
