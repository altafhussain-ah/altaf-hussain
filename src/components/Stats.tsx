"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/content/site";

export default function Stats() {
  return (
    <ul className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 md:grid-cols-4">
      {stats.map((stat, i) => (
        <li key={stat.label}>
          <Counter
            value={stat.value}
            suffix={stat.suffix}
            delay={i * 120}
          />
          <p className="mt-1.5 text-sm text-muted">{stat.label}</p>
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
      className="nums-tabular font-serif text-4xl text-ink md:text-5xl"
    >
      {display}
      <span className="text-accent">{suffix}</span>
    </p>
  );
}
