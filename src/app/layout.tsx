import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

/**
 * Runs before first paint so the page never flashes the wrong theme.
 * Defaults to light — the design is built light-first — and only goes dark
 * if the visitor has chosen it. To follow the OS instead, swap the stored
 * check for `matchMedia("(prefers-color-scheme: dark)").matches`.
 */
const themeScript = `
(function () {
  try {
    document.documentElement.classList.remove("no-js");
    var stored = localStorage.getItem("theme");
    document.documentElement.setAttribute("data-theme", stored === "dark" ? "dark" : "light");
  } catch (e) {
    document.documentElement.setAttribute("data-theme", "light");
  }
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`no-js ${body.variable} ${display.variable}`}
      data-theme="light"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="grain min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:text-paper"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
