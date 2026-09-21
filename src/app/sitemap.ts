import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { getAllPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: post.iso || undefined,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: site.url,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/blog`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...posts,
  ];
}
