import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  /** ISO date, for <time dateTime> and sorting. */
  iso: string;
  summary: string;
  tags: string[];
  readingTime: string;
};

export type Post = PostMeta & { html: string };

function readPostFile(fileName: string) {
  const slug = fileName.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(POSTS_DIR, fileName), "utf8");
  const { data, content } = matter(raw);

  const words = content.trim().split(/\s+/).length;
  const parsedDate = data.date ? new Date(data.date) : new Date(0);

  const meta: PostMeta = {
    slug,
    title: String(data.title ?? slug),
    iso: Number.isNaN(parsedDate.valueOf())
      ? ""
      : parsedDate.toISOString().slice(0, 10),
    date: Number.isNaN(parsedDate.valueOf())
      ? ""
      : parsedDate.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
    summary: String(data.summary ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    readingTime: `${Math.max(1, Math.round(words / 220))} min read`,
  };

  return { meta, content };
}

/** All posts, newest first. Returns an empty list if the folder is missing. */
export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => readPostFile(f).meta)
    .sort((a, b) => b.iso.localeCompare(a.iso));
}

export async function getPost(slug: string): Promise<Post | null> {
  const file = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;

  const { meta, content } = readPostFile(`${slug}.md`);
  const html = await marked.parse(content);
  return { ...meta, html };
}
