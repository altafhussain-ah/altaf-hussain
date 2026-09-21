"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Splits a headline into words and lifts each one out of a clipping mask,
 * staggered. Splitting happens here rather than in CSS so each word can
 * carry its own delay — and so the text stays one readable string in the
 * DOM for screen readers and copy-paste.
 */
export default function AnimatedHeadline({
  text,
  className = "",
  stagger = 55,
  startDelay = 120,
}: {
  text: string;
  className?: string;
  stagger?: number;
  startDelay?: number;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(true);
      return;
    }
    const id = window.setTimeout(() => setRevealed(true), 60);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <h1 ref={ref} className={className} data-revealed={revealed}>
      {/* The full string, available to assistive tech as one phrase. */}
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.split(" ").map((word, i) => (
          <span key={`${word}-${i}`} className="word">
            <span
              style={{
                ["--word-delay" as string]: `${startDelay + i * stagger}ms`,
              }}
            >
              {word}
            </span>
            {i < text.split(" ").length - 1 ? " " : ""}
          </span>
        ))}
      </span>
    </h1>
  );
}
