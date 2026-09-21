"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/content/site";

export default function Stats() {
  return (
    <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((stat, i) => (
        <li key={stat.label} className="card rounded-xl p-5">
          <div className="flex items-center gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
              <StatIcon index={i} />
            </span>
            <Counter value={stat.value} suffix={stat.suffix} delay={i * 110} />
          </div>
          <p className="mt-2.5 text-sm text-muted">{stat.label}</p>
        </li>
      ))}
    </ul>
  );
}

function Counter({
  value,
  suffix,
  delay,
}: {
  value: number;
  suffix: string;
  delay: number;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Counting up is the whole point of the element; with reduced motion
    // the final number is what matters, so skip straight to it.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    let start = 0;
    const DURATION = 1100;

    const step = (now: number) => {
      if (!start) start = now;
      const t = Math.min(1, (now - start) / DURATION);
      // easeOutExpo — fast out of the gate, settles gently on the number.
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setDisplay(Math.round(eased * value));
      if (t < 1) frame = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        window.setTimeout(() => {
          frame = requestAnimationFrame(step);
        }, delay);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [value, delay]);

  return (
    <p
      ref={ref}
      className="nums-tabular font-serif text-3xl font-extrabold text-ink"
    >
      {display}
      <span className="text-accent">{suffix}</span>
    </p>
  );
}

/** One glyph per stat slot, in the order they're declared in site.ts. */
function StatIcon({ index }: { index: number }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "size-[18px]",
    "aria-hidden": true,
  };

  switch (index) {
    case 0: // clock — years
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case 1: // medal — teaching award
      return (
        <svg {...common}>
          <circle cx="12" cy="15" r="5" />
          <path d="M8.5 10.5 6 3h12l-2.5 7.5" />
        </svg>
      );
    case 2: // trophy — awards
      return (
        <svg {...common}>
          <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
          <path d="M7 6H4v1a3 3 0 0 0 3 3m10-4h3v1a3 3 0 0 1-3 3" />
          <path d="M10 20h4m-2-6v6" />
        </svg>
      );
    default: // document — papers
      return (
        <svg {...common}>
          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
          <path d="M14 3v5h5M9 13h6m-6 4h4" />
        </svg>
      );
  }
}
