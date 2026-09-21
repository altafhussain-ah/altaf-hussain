/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT THIS FILE TO MAKE THE SITE YOURS.
 *  Everything the site displays lives here. No other file needs
 *  to change for normal content updates.
 *
 *  Blog posts are the one exception — those are markdown files
 *  in  content/posts/*.md
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  /** Used in the browser tab, SEO metadata, and the footer. */
  name: "Altaf",
  /** Shown under your name in the hero. Keep it to one line. */
  role: "Software Engineer & Designer",
  /** Absolute URL of the deployed site — used for SEO/social cards. */
  url: "https://example.com",
  /** One sentence for search engines and link previews. */
  description:
    "Portfolio of Altaf — engineer and designer building thoughtful software for the web.",
  location: "Karachi, Pakistan",
  email: "altafbintariq@gmail.com",
  /** Put your CV at  public/resume.pdf  and this link just works. */
  resume: "/resume.pdf",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/yourhandle" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourhandle" },
  { label: "X", href: "https://x.com/yourhandle" },
] satisfies { label: string; href: string }[];

/** The big statement on the landing screen. Two or three short sentences. */
export const hero = {
  headline: "I build software that feels considered.",
  subhead:
    "Engineer and designer working across the stack — from data models to the last pixel. Currently open to new work.",
  /** Small text above the headline. Set to null to hide it. */
  eyebrow: "Available for select projects",
};

export const about = {
  /** Swap in your own photo at  public/portrait.png  — or set this to null for a text-only About. */
  image: "/portrait.png" as string | null,
  imageAlt: "Portrait of Altaf",
  paragraphs: [
    "I'm a software engineer and designer with a habit of caring about the parts most people skip — the empty states, the error copy, the moment a page first paints. I've spent the last several years building products end to end, which mostly means being comfortable moving between a database schema and a type ramp in the same afternoon.",
    "Before this I studied computer science, then spent a while convinced I'd be a designer, then a while convinced I'd be an engineer. The honest answer is that the interesting problems live in the seam between the two, so that's where I work.",
    "Outside of work I read more than I finish, take photographs I rarely print, and am slowly getting better at cooking without a recipe.",
  ],
  /** Short, scannable facts shown beside the prose. */
  facts: [
    { label: "Based in", value: "Karachi, PK" },
    { label: "Focus", value: "Product engineering" },
    { label: "Experience", value: "5+ years" },
    { label: "Open to", value: "Full-time & contract" },
  ],
};

export type Project = {
  title: string;
  /** One line. What it is, not how it was made. */
  blurb: string;
  /** A short paragraph shown when the card expands into the grid. */
  description: string;
  year: string;
  tags: string[];
  /** Optional links — omit or set to null and the button won't render. */
  live?: string | null;
  source?: string | null;
  /** Put images in  public/projects/  and reference them as "/projects/name.jpg" */
  image?: string | null;
  /** Mark your best two or three. Featured projects get a larger card. */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Ledger",
    blurb: "A double-entry accounting engine with a spreadsheet on top.",
    description:
      "A financial tracking tool for small studios. The core is a strict double-entry ledger; the interface is a familiar grid that hides the accounting until you need it. Handles multi-currency, recurring entries, and exports that accountants actually accept.",
    year: "2025",
    tags: ["TypeScript", "Next.js", "Postgres", "Prisma"],
    live: "https://example.com",
    source: "https://github.com/yourhandle/ledger",
    image: "/projects/ledger.png",
    featured: true,
  },
  {
    title: "Fieldnotes",
    blurb: "Offline-first note-taking for people doing research in the field.",
    description:
      "Built for researchers working where connectivity isn't a given. Local-first storage with conflict-free sync when a signal returns, full-text search over thousands of entries, and an export pipeline that produces citable documents.",
    year: "2024",
    tags: ["React", "SQLite", "CRDT", "Tauri"],
    live: null,
    source: "https://github.com/yourhandle/fieldnotes",
    image: "/projects/fieldnotes.png",
    featured: true,
  },
  {
    title: "Tonebank",
    blurb: "A colour-system generator that checks its own contrast.",
    description:
      "Give it a brand colour and it produces a full accessible ramp — tints, shades, and semantic tokens — validating every pairing against WCAG as it goes. Exports to CSS variables, Tailwind config, or Figma variables.",
    year: "2024",
    tags: ["Design systems", "Colour science", "Figma API"],
    live: "https://example.com",
    source: null,
    image: "/projects/tonebank.png",
    featured: true,
  },
  {
    title: "Sift",
    blurb: "Natural-language filtering for large CSV files in the browser.",
    description:
      "Drop in a file of a few million rows and ask questions in plain English. Parses and indexes entirely client-side — nothing is uploaded — then compiles your question into a query plan you can inspect and edit.",
    year: "2023",
    tags: ["WebAssembly", "DuckDB", "LLM"],
    live: "https://example.com",
    source: "https://github.com/yourhandle/sift",
    image: null,
  },
  {
    title: "Marginalia",
    blurb: "A reading app that keeps your notes next to the text.",
    description:
      "An EPUB reader built around annotation rather than consumption. Highlights and notes live in the margin, sync across devices, and export to Markdown so your reading actually compounds into something.",
    year: "2023",
    tags: ["Swift", "SwiftUI", "CloudKit"],
    live: null,
    source: "https://github.com/yourhandle/marginalia",
    image: null,
  },
  {
    title: "Pace",
    blurb: "Training-load tracking for runners who hate training apps.",
    description:
      "One screen, one number: are you doing too much this week? Pulls from Strava, computes acute-to-chronic workload ratio, and says nothing else. Deliberately feature-poor.",
    year: "2022",
    tags: ["Go", "Strava API", "Charts"],
    live: "https://example.com",
    source: null,
    image: null,
  },
];

export type SkillGroup = { group: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Go", "SQL", "Swift"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "SwiftUI", "Accessibility"],
  },
  {
    group: "Backend & Data",
    items: ["Node.js", "Postgres", "Prisma", "Redis", "REST & tRPC"],
  },
  {
    group: "Design",
    items: ["Figma", "Design systems", "Typography", "Prototyping"],
  },
  {
    group: "Practice",
    items: ["Testing", "CI/CD", "Docker", "Observability", "Code review"],
  },
];

export type Role = {
  company: string;
  title: string;
  period: string;
  location?: string;
  /** Two or three bullets. Lead with outcomes, not responsibilities. */
  points: string[];
  stack?: string[];
};

export const experience: Role[] = [
  {
    company: "Northwind Studio",
    title: "Senior Product Engineer",
    period: "2023 — Present",
    location: "Remote",
    points: [
      "Led the rebuild of the client dashboard, cutting median time-to-interactive from 4.1s to 1.2s and lifting weekly active use by roughly a third.",
      "Designed and shipped the shared component library now used across four product teams, which removed about 12k lines of duplicated UI code.",
      "Set up the review and release process the team still runs: trunk-based, feature-flagged, with a deploy that takes under six minutes.",
    ],
    stack: ["TypeScript", "Next.js", "Postgres", "AWS"],
  },
  {
    company: "Halcyon Labs",
    title: "Full-Stack Engineer",
    period: "2021 — 2023",
    location: "Karachi, PK",
    points: [
      "Built the billing and subscription system end to end, handling multi-currency pricing and proration for around 30k accounts.",
      "Took the API from an undocumented mess to a typed, versioned surface with generated clients — support tickets about integration dropped noticeably.",
      "Mentored two junior engineers through their first year, both of whom were promoted.",
    ],
    stack: ["Node.js", "React", "Stripe", "Docker"],
  },
  {
    company: "Freelance",
    title: "Designer & Developer",
    period: "2019 — 2021",
    points: [
      "Designed and built sites and internal tools for a dozen small businesses and two non-profits.",
      "Ran the whole engagement solo — scoping, design, build, handover — which is where I learned to write documentation people actually read.",
    ],
  },
];

export type Education = {
  school: string;
  credential: string;
  period: string;
  detail?: string;
};

export const education: Education[] = [
  {
    school: "University of Karachi",
    credential: "BSc, Computer Science",
    period: "2015 — 2019",
    detail:
      "Focus on distributed systems and human–computer interaction. Final-year project on offline-first data sync.",
  },
  {
    school: "Interaction Design Foundation",
    credential: "Certificate, UI Design Patterns",
    period: "2021",
    detail: "Coursework in interface patterns, accessibility, and design systems.",
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  title: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Altaf is the rare engineer who will push back on the spec — and be right. Our dashboard rebuild shipped early because he cut the two features nobody actually wanted.",
    author: "Sana Qureshi",
    title: "Head of Product, Northwind Studio",
  },
  {
    quote:
      "I've handed him ambiguous problems with no clear owner and gotten back working software with a written rationale. That combination is genuinely hard to find.",
    author: "Daniel Reyes",
    title: "CTO, Halcyon Labs",
  },
  {
    quote:
      "He redesigned our booking flow and completions went up immediately. But what I remember is that he explained every decision in language I understood.",
    author: "Marwa Haddad",
    title: "Founder, Atlas Travel Co.",
  },
];

export const contact = {
  heading: "Let's work together.",
  body: "I'm open to full-time roles and selective contract work. If you have a problem worth solving, I'd like to hear about it — a couple of sentences is plenty to start.",
  /**
   * Where the contact form sends to.
   *  - Leave as null and the form becomes a plain mailto: link (works everywhere, no setup).
   *  - Or paste a Formspree / Getform endpoint to receive submissions as email.
   */
  formEndpoint: null as string | null,
};

/** Section order and labels for the nav. Reorder freely. */
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];
