# Portfolio

A light, editorial portfolio site — Next.js 16 (App Router), React 19, Tailwind CSS v4, TypeScript.

## Running it

```bash
npm run dev
```

Then open http://localhost:3000.

| Command             | What it does                              |
| ------------------- | ----------------------------------------- |
| `npm run dev`       | Dev server with hot reload                |
| `npm run build`     | Production build                          |
| `npm start`         | Serve the production build locally        |
| `npm run typecheck` | Type-check without emitting               |

## Making it yours

**Almost everything lives in one file: [`src/content/site.ts`](src/content/site.ts).**

Your name, role, email, socials, hero copy, about text, projects, skills, jobs,
education, testimonials and nav labels are all there. Edit that file and the
whole site updates — you shouldn't need to touch a component for normal content
changes.

The three things that live elsewhere:

| What              | Where                                                   |
| ----------------- | ------------------------------------------------------- |
| Blog posts        | `content/posts/*.md`                                     |
| Images            | `public/` — see below                                    |
| Colours & type    | `src/app/globals.css` (the `:root` block at the top)     |

### Images

The repo ships with generated placeholder images so the site looks complete out
of the box. Replace them with your own:

- `public/portrait.png` — your photo for the About section (roughly 4:5)
- `public/projects/*.png` — project screenshots (roughly 16:10)
- `public/resume.pdf` — add this and the "Download résumé" link works

Any format works — just update the path in `site.ts` to match. A project with
`image: null` falls back to a typographic placeholder rather than a broken image.

### Blog posts

Add a markdown file to `content/posts/`. The filename becomes the URL slug, so
`content/posts/my-post.md` is served at `/blog/my-post`.

```markdown
---
title: "Your post title"
date: "2026-03-14"
summary: "One sentence — shown in the post list and as the social preview."
tags: ["Engineering"]
---

Your content here. Standard markdown: **bold**, _italic_, `code`,
lists, > blockquotes, ## headings, and fenced code blocks.
```

Reading time is calculated automatically. Posts sort newest-first; the three
most recent appear on the home page.

### The contact form

By default (`contact.formEndpoint: null` in `site.ts`) the form opens the
visitor's mail client with the message pre-filled. That works anywhere with no
setup and no backend.

To receive submissions as email instead, create a form at
[Formspree](https://formspree.io) or [Getform](https://getform.io) and paste the
endpoint URL into `contact.formEndpoint`.

### Colours and fonts

The palette is CSS custom properties at the top of
[`src/app/globals.css`](src/app/globals.css) — one `:root` block for light, one
`[data-theme="dark"]` block for dark. Change `--accent` to re-tint the whole
site.

Fonts are set in [`src/app/layout.tsx`](src/app/layout.tsx): Instrument Serif for
display, Inter for body. Swap either for any
[Google Font](https://fonts.google.com) by changing the import.

### Dark mode

Ships light-first with a toggle in the nav; the choice persists in
`localStorage`. To follow the visitor's OS setting instead, change the stored
check in the `themeScript` in `layout.tsx` to
`window.matchMedia("(prefers-color-scheme: dark)").matches`.

## Before you deploy

1. Set `site.url` in `site.ts` to your real domain — SEO metadata, the sitemap
   and social cards all derive from it.
2. Replace the placeholder content in `site.ts` (projects, jobs, testimonials
   and socials are all sample copy).
3. Add `public/resume.pdf`.

## Deploying

The site is fully static. [Vercel](https://vercel.com) is the least-friction
option — push to GitHub, import the repo, and it deploys with no configuration.
Netlify, Cloudflare Pages and GitHub Pages all work too.

Note: `git` isn't installed on this machine yet. Install it from
[git-scm.com](https://git-scm.com/download/win) if you want to push to GitHub.

## Structure

```
content/posts/        Blog posts (markdown)
public/               Images, résumé, static files
src/
  app/
    layout.tsx        Fonts, metadata, theme script
    page.tsx          Home — composes every section
    globals.css       Palette, type scale, article styles
    blog/             Blog index and post pages
    sitemap.ts        Auto-generated sitemap
    robots.ts         Auto-generated robots.txt
  components/         One file per section
  content/site.ts     ← all your content
  lib/posts.ts        Markdown reading and parsing
```

## Accessibility

Skip link, keyboard-visible focus rings, labelled controls, `aria-live` on form
status, and `prefers-reduced-motion` honoured throughout (scroll animations are
skipped entirely when it's set).
