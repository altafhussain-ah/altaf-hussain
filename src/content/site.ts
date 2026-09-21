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
  headline: "I teach game development, and research how software gets built.",
  subhead:
    "Lecturer in the Department of Computer Games Development at Air University, PhD researcher at Multimedia University, and founder of Aquwa Soft. Eleven years across software quality, studio leadership and the classroom.",
  /** Small text above the headline. Set to null to hide it. */
  eyebrow: "PhD researcher at Multimedia University, Malaysia",
};

export const about = {
  /** Replace with your own photo at  public/portrait.png  — or set to null. */
  image: "/portrait.png" as string | null,
  imageAlt: "Portrait of Altaf Hussain",
  paragraphs: [
    "I lecture in the Department of Computer Games Development at Air University, Islamabad, where I teach game design, programming and digital asset creation, and supervise final-year projects from first concept through to deployment. In 2026 I began a PhD at Multimedia University in Malaysia.",
    "I've also run my own studio since 2015. Aquwa Soft builds software and games out of Islamabad, and founding it taught me the parts of this work that no coursework covers — pricing, hiring, and the difference between a product that ships and one that merely compiles. Alongside it I spent nearly two years as a Senior Software Quality Engineer at IKONIC, owning testing strategy across the SDLC.",
    "My research sits where software engineering meets practice. My master's thesis was a systematic literature review of software-based requirement elicitation tools, and I currently have papers under review on that subject and on fake news detection using NLP and machine learning. I hold an MS in Software Engineering with distinction from Riphah International University.",
    "Outside the lecture hall, I spent five years volunteering as a computer science teacher in under-resourced communities around Islamabad — work that shaped how I think about teaching more than any training course has.",
  ],
  /** Short, scannable facts shown beside the prose. */
  facts: [
    { label: "Based in", value: "Cyberjaya, MY" },
    { label: "Focus", value: "Game dev & SQA" },
    { label: "Studio", value: "Aquwa Soft" },
    { label: "Currently", value: "PhD researcher" },
  ],
};

export type Project = {
  title: string;
  /** One line. What it is, not how it was made. */
  blurb: string;
  /** A short paragraph shown on the featured card. */
  description: string;
  year: string;
  tags: string[];
  /** Optional links — omit or set to null and the button won't render. */
  live?: string | null;
  source?: string | null;
  /** Mark your best two or three. Featured items get a larger card. */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Requirement Elicitation Tools",
    blurb:
      "A systematic literature review of software-based requirement elicitation tools.",
    description:
      "Maps the challenges and selection criteria for tool-supported requirements elicitation, and identifies gaps the field has yet to close — the distance between theory and practice, how elicitation knowledge is captured and reused, and where emerging web and agent-based architectures fit into the next generation of support tools. Began as my MS thesis; currently under review for publication.",
    year: "2025",
    tags: ["Requirements Engineering", "Systematic Review", "Research"],
    live: null,
    source: null,
    featured: true,
  },
  {
    title: "Fake News Detection",
    blurb:
      "Meta model extraction for fake news detection using NLP and machine learning.",
    description:
      "Applies natural language processing and machine learning to the detection of misinformation, using meta model extraction to improve classification. Co-authored with Shahzad Khan and currently under review for publication.",
    year: "2025",
    tags: ["NLP", "Machine Learning", "Research"],
    live: null,
    source: null,
    featured: true,
  },
  {
    title: "Pakistan Game Developers Conference",
    blurb:
      "A national platform for game designers, developers and artists, hosted at Air University.",
    description:
      "The second PGDC brought together designers, developers, artists and storytellers from across Pakistan for a gaming ideathon, prototype competition, game jam, industry workshops and a careers fair — organised through the Department of Computer Games Development.",
    year: "2025",
    tags: ["Game Development", "Community", "Events"],
    live: null,
    source: null,
    featured: true,
  },
  {
    title: "Academic Guider",
    blurb:
      "A web-based search engine for matching students to schools and colleges.",
    description:
      "Final-year project for my BE at UET Taxila. A filtered search tool that helps students find the school or college that best fits their requirements, rather than making them trawl through institution listings by hand.",
    year: "2016",
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
    tags: ["Events", "IoT", "Leadership"],
    live: null,
    source: null,
  },
];

export type SkillGroup = { group: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    group: "Quality Engineering",
    items: [
      "Functional & non-functional testing",
      "Test case design",
      "Regression testing",
      "Performance testing (JMeter)",
      "TFS & Microsoft Test Manager",
      "Traceability matrices",
      "Root cause analysis",
    ],
  },
  {
    group: "Game Development",
    items: [
      "Unity",
      "Game design documents",
      "Prototyping & playtesting",
      "Level design",
      "AI in games",
      "3D modelling & animation",
    ],
  },
  {
    group: "Project & Process",
    items: [
      "Agile",
      "Scrum",
      "Project planning",
      "Jira & Trello",
      "Team management",
      "Stakeholder communication",
    ],
  },
  {
    group: "Data & Development",
    items: [
      "SQL",
      "Python",
      "Web development",
      "Data visualisation",
      "Data analysis",
    ],
  },
  {
    group: "Tools & Platforms",
    items: [
      "Figma",
      "Adobe Photoshop",
      "Google Play Console",
      "Sensor Tower",
      "Microsoft Office",
    ],
  },
  {
    group: "Languages",
    items: ["Punjabi (native)", "Urdu (C1–C2)", "English (B2)"],
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
  {
    company: "WEBEXERT",
    title: "Software Quality Assurance Engineer",
    period: "Oct 2021 — Nov 2021",
    location: "Islamabad, Pakistan",
    points: [
      "Short engagement covering functional and regression testing across web applications.",
    ],
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
    name: "Best Teacher Award",
    issuer: "Air University — Spring 2025, Fall 2025, Spring 2026",
    year: "3×",
  },
  {
    name: "Internship Coordinator Award",
    issuer: "Air University",
    year: "2026",
  },
  {
    name: "Highest Feedback Award",
    issuer: "Air University — Spring 2025",
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

export const volunteering = {
  role: "Computer Science Teacher",
  period: "2018 — 2023",
  location: "Islamabad, Pakistan",
  detail:
    "Volunteered teaching computer science to children in under-resourced communities, working to close the gap in access to quality education and build science literacy where resources are thin.",
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
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
