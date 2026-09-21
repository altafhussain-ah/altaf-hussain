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

`public/portrait.jpg` is the photo in the About section. The slot is 4:5 and
uses `object-cover`, so anything portrait-shaped works — a taller image is
simply cropped top and bottom. Set `about.image` to `null` in `site.ts` for a
text-only About.

Research and project cards are typographic by design and carry no imagery.

### What is deliberately left off the site

The site is public, so some CV material is excluded by design:

| Left out | Why |
| --- | --- |
| Date of birth, home address, mobile number | Public personal data invites spam and worse |
| Referee names and contact details | Publishing third parties' emails and phone numbers without their consent |
| CV download | The EuroPass PDF contains all of the above |

To enable a résumé link, produce a redacted PDF, save it as
`public/resume.pdf`, and set `resume: "/resume.pdf"` in `site.ts`. The link
stays hidden while that value is `null`.

### Blog posts

`content/posts/` is currently empty, so the Writing section hides itself on the
home page and `/blog` shows an empty state. The machinery still works — add a
markdown file and both come back automatically.

The filename becomes the URL slug, so `content/posts/my-post.md` is served at
`/blog/my-post`.

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

## Deployment

Live at **https://altaf-hussain.vercel.app**, deployed from
[Vercel](https://vercel.com) and wired to this repository. Push to `main` and
Vercel rebuilds automatically — usually live within a minute.

`site.url` in `site.ts` must match the deployed domain; the sitemap, canonical
URLs and social card metadata all derive from it.

## Structure

```
content/posts/        Blog posts (markdown) — currently empty
public/               Images and static files
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

Sections render in this order, set in `src/app/page.tsx`: Hero, About,
Research & projects, Experience, Skills, Education, Credentials, Writing
(hidden while empty), Contact.

## Accessibility

Skip link, keyboard-visible focus rings, labelled controls, `aria-live` on form
status, and `prefers-reduced-motion` honoured throughout (scroll animations are
skipped entirely when it's set).
