/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT THIS FILE TO UPDATE THE SITE.
 *  Everything the site displays lives here. No other file needs
 *  to change for normal content updates.
 *
 *  Blog posts are the one exception — those are markdown files
 *  in  content/posts/*.md  (currently empty; the Writing
 *  section hides itself until you add one).
 *
 *  Sourced from the EuroPass CV and LinkedIn profile.
 *  Deliberately excluded: date of birth, home address, mobile
 *  number, and referee contact details — see README.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Altaf Hussain",
  /** Shown under your name in the hero. Keep it to one line. */
  role: "Lecturer, Researcher & Studio Founder",
  /** Absolute URL of the deployed site — used for SEO/social cards. */
  url: "https://altaf-hussain.vercel.app",
  description:
    "Altaf Hussain — lecturer in game development at Air University, PhD researcher at Multimedia University, Malaysia, and founder of Aquwa Soft. Eleven years in software quality and studio leadership.",
  location: "Cyberjaya, Malaysia",
  email: "altafbintariq@gmail.com",
  /**
   * Set to a path like "/resume.pdf" to show a download link in About.
   * Left null on purpose: the EuroPass CV contains a home address,
   * date of birth, mobile number and three referees' contact details.
   * Publish a redacted copy before enabling this.
   */
  resume: null as string | null,
};

export const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/altaf-hussain-096388108/",
  },
  { label: "GitHub", href: "https://github.com/altafhussain-ah" },
] satisfies { label: string; href: string }[];

export const hero = {
  /** Small line above the name. */
  eyebrow: "Hi, I'm",
  /** Cycled one after another by the typewriter line under the role. */
  rotatingLines: [
    "I teach game development.",
    "I run a game studio.",
    "I research how software gets built.",
    "I've shipped quality for eleven years.",
  ],
  subhead:
    "Lecturer in the Department of Computer Games Development at Air University, PhD researcher at Multimedia University, and founder of Aquwa Soft.",
  /** Four scannable claims, each with a tick. */
  highlights: [
    "Game design, programming and digital asset creation",
    "Software quality engineering across the full SDLC",
    "Agile delivery and Scrum team leadership",
    "Research in requirements engineering and AI in games",
  ],
};

export const about = {
  /** Swap the file at  public/portrait.jpg  — or set this to null for text-only. */
  image: "/portrait.jpg" as string | null,
  imageAlt: "Altaf Hussain",
  paragraphs: [
    "I lecture in the Department of Computer Games Development at Air University, Islamabad, where I teach game design, programming and digital asset creation, and supervise final-year projects from first concept through to deployment. In 2026 I began a PhD at Multimedia University in Malaysia.",
    "I've also run my own studio since 2015. Aquwa Soft builds software and games out of Islamabad, and founding it taught me the parts of this work that no coursework covers — pricing, hiring, and the difference between a product that ships and one that merely compiles.",
    "My research sits where software engineering meets practice. My master's thesis was a systematic literature review of software-based requirement elicitation tools, and I currently have papers under review on that subject and on fake news detection using NLP and machine learning. I hold an MS in Software Engineering with distinction from Riphah International University.",
  ],
  /** Short, scannable facts shown beside the prose. */
  facts: [
    { label: "Based in", value: "Cyberjaya, MY" },
    { label: "Focus", value: "Game dev & SQA" },
    { label: "Studio", value: "Aquwa Soft" },
    { label: "Currently", value: "PhD researcher" },
  ],
};

export type ProjectCategory = "Research" | "Community" | "Software";

/** Order the project filter pills appear in. */
export const projectCategories: ProjectCategory[] = [
  "Research",
  "Community",
  "Software",
];

export type Project = {
  title: string;
  /** One line. What it is, not how it was made. */
  blurb: string;
  /** A short paragraph shown on the card. */
  description: string;
  year: string;
  category: ProjectCategory;
  /** Where it was done — shown as a small badge on the card. */
  org: string;
  tags: string[];
  /** Optional links — omit or set to null and the button won't render. */
  live?: string | null;
  source?: string | null;
};

export const projects: Project[] = [
  {
    title: "Requirement Elicitation Tools",
    blurb:
      "A systematic literature review of software-based requirement elicitation tools.",
    description:
      "Maps the challenges and selection criteria for tool-supported requirements elicitation, and identifies gaps the field has yet to close — the distance between theory and practice, how elicitation knowledge is captured and reused, and where emerging web and agent-based architectures fit into the next generation of support tools. Began as my MS thesis; currently under review for publication.",
    year: "2025",
    category: "Research",
    org: "Riphah International University",
    tags: ["Requirements Engineering", "Systematic Review", "Under Review"],
    live: null,
    source: null,
  },
  {
    title: "Fake News Detection",
    blurb:
      "Meta model extraction for fake news detection using NLP and machine learning.",
    description:
      "Applies natural language processing and machine learning to the detection of misinformation, using meta model extraction to improve classification. Co-authored with Shahzad Khan and currently under review for publication.",
    year: "2025",
    category: "Research",
    org: "Riphah International University",
    tags: ["NLP", "Machine Learning", "Under Review"],
    live: null,
    source: null,
  },
  {
    title: "Pakistan Game Developers Conference",
    blurb:
      "A national platform for game designers, developers and artists, hosted at Air University.",
    description:
      "The second PGDC brought together designers, developers, artists and storytellers from across Pakistan for a gaming ideathon, prototype competition, game jam, industry workshops and a careers fair — organised through the Department of Computer Games Development.",
    year: "2025",
    category: "Community",
    org: "Air University",
    tags: ["Game Development", "Conference", "Ideathon"],
    live: null,
    source: null,
  },
  {
    title: "Academic Guider",
    blurb:
      "A web-based search engine for matching students to schools and colleges.",
    description:
      "Final-year project for my BE at UET Taxila. A filtered search tool that helps students find the school or college that best fits their requirements, rather than making them trawl through institution listings by hand.",
    year: "2016",
    category: "Software",
    org: "UET Taxila",
    tags: ["Web Development", "Search", "Final Year Project"],
    live: null,
    source: null,
  },
  {
    title: "IoT Conference, Islamabad",
    blurb:
      "Chief organiser of an IoT conference at the Jinnah Convention Centre.",
    description:
      "Led organisation of a conference on the Internet of Things at the Jinnah Convention Centre, Islamabad — coordinating speakers, programme and logistics.",
    year: "2017",
    category: "Community",
    org: "Jinnah Convention Centre",
    tags: ["Events", "IoT", "Leadership"],
    live: null,
    source: null,
  },
];

export type SkillCategory =
  | "Quality"
  | "Game Dev"
  | "Process"
  | "Data"
  | "Tools";

export type Level = "Expert" | "Advanced" | "Working";

export type Skill = {
  name: string;
  category: SkillCategory;
  level: Level;
  detail: string;
};

/** Order the filter pills appear in. "All" is prepended by the component. */
export const skillCategories: SkillCategory[] = [
  "Quality",
  "Game Dev",
  "Process",
  "Data",
  "Tools",
];

export const skills: Skill[] = [
  {
    name: "Software Quality Engineering",
    category: "Quality",
    level: "Expert",
    detail:
      "Test strategy, planning and case design across the full SDLC — system, regression and acceptance testing.",
  },
  {
    name: "Test Automation & Tooling",
    category: "Quality",
    level: "Advanced",
    detail: "TFS and Microsoft Test Manager, traceability matrices, defect root cause analysis.",
  },
  {
    name: "Performance Testing",
    category: "Quality",
    level: "Advanced",
    detail: "Load, stress and database testing with JMeter against real workloads.",
  },
  {
    name: "Unity",
    category: "Game Dev",
    level: "Advanced",
    detail: "Gameplay systems and prototypes, and the engine I teach with day to day.",
  },
  {
    name: "Game Design",
    category: "Game Dev",
    level: "Expert",
    detail: "Concept and mechanics, design documents, level layouts, prototyping and playtesting.",
  },
  {
    name: "AI in Games",
    category: "Game Dev",
    level: "Advanced",
    detail: "Agent behaviour and decision systems — a standing research and teaching interest.",
  },
  {
    name: "3D Modelling & Animation",
    category: "Game Dev",
    level: "Working",
    detail: "Asset pipelines and animation fundamentals, taught at undergraduate level.",
  },
  {
    name: "Agile & Scrum",
    category: "Process",
    level: "Expert",
    detail: "Scrum Fundamentals certified. Sprint planning, ceremonies and delivery in agile teams.",
  },
  {
    name: "Project Management",
    category: "Process",
    level: "Advanced",
    detail: "Planning, milestones, resourcing and quality gates across end-to-end delivery.",
  },
  {
    name: "Team Leadership",
    category: "Process",
    level: "Advanced",
    detail: "Running a studio since 2015, plus supervising student project teams.",
  },
  {
    name: "SQL",
    category: "Data",
    level: "Advanced",
    detail: "Query authoring and database validation during application testing.",
  },
  {
    name: "Python",
    category: "Data",
    level: "Working",
    detail: "Data analysis and visualisation; certified in data visualisation with Python.",
  },
  {
    name: "Requirements Engineering",
    category: "Data",
    level: "Expert",
    detail: "The subject of my MS thesis and a paper currently under review.",
  },
  {
    name: "Jira & Trello",
    category: "Tools",
    level: "Advanced",
    detail: "Backlog, sprint and defect tracking across teams.",
  },
  {
    name: "Figma",
    category: "Tools",
    level: "Working",
    detail: "Interface layout and design handoff.",
  },
  {
    name: "Google Play Console",
    category: "Tools",
    level: "Advanced",
    detail: "Release management, store listings and post-launch performance monitoring.",
  },
  {
    name: "App Store Optimisation",
    category: "Tools",
    level: "Advanced",
    detail: "Keyword research and metadata tuning with Sensor Tower.",
  },
];

/** Shown as a small strip under the skills grid. */
export const languages = [
  { name: "Punjabi", level: "Native" },
  { name: "Urdu", level: "C1–C2" },
  { name: "English", level: "B2" },
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

/**
 * Current roles first, then past roles newest-first. Each entry carries its
 * own period, so the two overlapping current roles read correctly.
 *
 * Aquwa Soft is recorded here as Founder & CEO from 2015 to present, per the
 * site owner. Note this differs from both other sources: the EuroPass CV says
 * "Project Manager, Sep 2019 – Oct 2021" and LinkedIn says "Software Quality
 * Engineer, Sep 2015 – Oct 2021". LinkedIn should be updated to match.
 */
export const experience: Role[] = [
  {
    company: "Air University",
    title: "Lecturer, Computer Games Development",
    period: "Sep 2024 — Present",
    location: "Islamabad, Pakistan",
    points: [
      "Teach game design principles, programming and digital asset creation, and supervise individual and group projects across the full development lifecycle from concept to deployment.",
      "Named Best Teacher three semesters running — Spring 2025, Fall 2025 and Spring 2026 — by the Department of Computer Games Development.",
      "Run workshops and seminars on AI in games, 3D modelling, animation and game physics, and bring in guest lectures and collaborations with working industry professionals.",
      "Contribute to curriculum development and academic strategy, keeping the programme aligned with where the games industry is actually going.",
    ],
    stack: ["Unity", "Game Design", "AI in Games", "Curriculum", "Supervision"],
  },
  {
    company: "Aquwa Soft",
    title: "Founder & Chief Executive Officer",
    period: "2015 — Present",
    location: "Islamabad, Pakistan",
    points: [
      "Founded and run Aquwa Soft, a software and game development studio, leading the business since 2015.",
      "Set the quality bar hands-on through the studio's early years — the full software test lifecycle across client projects, defect triage and severity reporting, and the test plans and summary reports that went with it.",
      "Oversee game design and delivery end to end: concept and mechanics, design documents and level layouts, playtesting, plus app store optimisation and Google Play Console management.",
    ],
    stack: ["Leadership", "Game Design", "ASO", "Google Play Console", "STLC"],
  },
  {
    company: "British Council",
    title: "Test Day Officer",
    period: "Sep 2023 — Aug 2024",
    location: "Islamabad, Pakistan",
    points: [
      "Ran test day operations: candidate attendance and participation tracking, session coordination, and venue planning.",
      "Handled secure storage, transfer and reconciliation of test materials to compliance standards, escalating any discrepancies.",
      "Managed results processing and the timely review and submission of session records for further evaluation.",
    ],
    stack: ["Operations", "Compliance", "Coordination"],
  },
  {
    company: "IKONIC",
    title: "Senior Software Quality Engineer",
    period: "Nov 2021 — Aug 2023",
    location: "Islamabad, Pakistan",
    points: [
      "Owned testing strategy, planning and case design across the full SDLC — system, regression and performance testing in an agile (Scrum) environment.",
      "Built and executed test cases through TFS and Microsoft Test Manager, maintained traceability matrices, and performed root cause analysis on defects.",
      "Ran load, performance and database testing with JMeter and SQL, working directly with offshore developers and onshore project managers and business analysts.",
    ],
    stack: ["JMeter", "SQL", "TFS", "Microsoft Test Manager", "Scrum"],
  },
];

/** The band of numbers under the hero. Keep these to four. */
export const stats = [
  { value: 11, suffix: "+", label: "Years in software" },
  { value: 3, suffix: "×", label: "Best Teacher Award" },
  { value: 9, suffix: "", label: "Awards & honours" },
  { value: 2, suffix: "", label: "Papers under review" },
];

export type Education = {
  school: string;
  credential: string;
  period: string;
  detail?: string;
};

export const education: Education[] = [
  {
    school: "Multimedia University",
    credential: "PhD, in progress",
    period: "2026 — Present",
    detail:
      "Cyberjaya, Malaysia. Research in game development and software engineering.",
  },
  {
    school: "Riphah International University",
    credential: "MS, Software Engineering — with distinction",
    period: "2019 — 2021",
    detail:
      "Final grade 3.63/4.00. Thesis: Challenges & Criteria of Using Software-Based Requirement Elicitation Tools — A Systematic Literature Review.",
  },
  {
    school: "University of Engineering and Technology, Taxila",
    credential: "BE, Information Technology",
    period: "2012 — 2016",
    detail:
      "Coursework in software engineering, OOP, data structures and web development. Final-year project: Academic Guider.",
  },
];

export type Credential = { name: string; issuer: string; year: string };

export const certifications: Credential[] = [
  { name: "Fraud Awareness", issuer: "British Council", year: "2024" },
  { name: "Information Management", issuer: "British Council", year: "2024" },
  { name: "Safety & Security", issuer: "British Council", year: "2024" },
  {
    name: "Understanding Equality, Diversity and Inclusion",
    issuer: "British Council",
    year: "2024",
  },
  { name: "Scrum Fundamentals", issuer: "SCRUMstudy", year: "2022" },
  { name: "Data Visualisation with Python", issuer: "Certified", year: "2022" },
  { name: "JMeter", issuer: "Udemy", year: "2021" },
  { name: "Big Data 101", issuer: "Cognitive Class", year: "2021" },
  { name: "Fundamentals of Programming", issuer: "Certified", year: "2020" },
  { name: "Customer Centrist", issuer: "British Council", year: "2018" },
];

export const achievements: Credential[] = [
  {
    name: "Best Teacher Award — Spring 2026",
    issuer: "Air University",
    year: "2026",
  },
  {
    name: "Internship Coordinator Award",
    issuer: "Air University",
    year: "2026",
  },
  {
    name: "Best Teacher Award — Fall 2025",
    issuer: "Air University",
    year: "2025",
  },
  {
    name: "Best Teacher Award — Spring 2025",
    issuer: "Air University",
    year: "2025",
  },
  {
    name: "Highest Feedback Award — Spring 2025",
    issuer: "Air University",
    year: "2025",
  },
  {
    name: "PGDC Conference Organizer Award",
    issuer: "Air University",
    year: "2025",
  },
  {
    name: "Air Tech Coordinator Award",
    issuer: "Air University",
    year: "2025",
  },
  {
    name: "Best Performer Award",
    issuer: "Air University",
    year: "2025",
  },
  {
    name: "Chief Organiser, IoT Conference",
    issuer: "Jinnah Convention Centre, Islamabad",
    year: "2017",
  },
  {
    name: "2nd place, Quiz Competition (General Knowledge)",
    issuer: "All Pakistan Youth Expo",
    year: "2015",
  },
  {
    name: "Certificate of Appreciation, Quiz Competition",
    issuer: "Bahria University",
    year: "2015",
  },
];

/**
 * The Entrepreneur section — the studio profile.
 * Everything here is drawn from documented work. Add shipped titles, clients,
 * team size or a company URL as they become available.
 */
export const company = {
  name: "Aquwa Soft",
  tagline: "Game studio & software house",
  role: "Founder & Chief Executive Officer",
  /** Set a URL here and the section shows a link out to it. */
  url: null as string | null,
  intro:
    "A game studio and software house I founded in Islamabad in 2015. We build games and custom software — and because quality engineering is where I started, it is the discipline the studio is built around rather than the step bolted on at the end.",
  services: [
    {
      title: "Game development",
      detail:
        "Concept and mechanics through to release — design documents, level layouts, prototyping and playtesting, built primarily in Unity.",
    },
    {
      title: "Software development",
      detail:
        "Custom software delivered end to end, from requirements elicitation through build, release and iteration.",
    },
    {
      title: "Quality assurance",
      detail:
        "The studio's founding discipline. Full test lifecycle coverage — functional, integration, regression, usability and acceptance — with test plans and summary reports that stand up to review.",
    },
    {
      title: "Launch & growth",
      detail:
        "App store optimisation and Google Play Console management: keyword research, metadata, and tracking performance and user feedback after release.",
    },
  ],
  facts: [
    { label: "Founded", value: "2015" },
    { label: "Based in", value: "Islamabad, PK" },
    { label: "Focus", value: "Games & software" },
    { label: "My role", value: "Founder & CEO" },
  ],
};

export const contact = {
  heading: "Let's talk.",
  body: "I'm open to research collaboration, speaking, and conversations about game development education. A couple of sentences is plenty to start.",
  /**
   * Where the contact form sends to.
   *  - Leave as null and the form opens the visitor's mail client (no setup).
   *  - Or paste a Formspree / Getform endpoint to receive submissions by email.
   */
  formEndpoint: null as string | null,
};

/** Section order and labels for the nav. Reorder freely. */
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Entrepreneur", href: "#entrepreneur" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
