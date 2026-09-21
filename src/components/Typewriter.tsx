"use client";

import { useEffect, useState } from "react";

/**
 * Types each line out, holds it, deletes it, moves to the next. Timings are
 * deliberately uneven — a constant interval reads mechanical.
 *
 * Under reduced motion it renders the first line as static text and stops.
 */
export default function Typewriter({
  lines,
  className = "",
}: {
  lines: string[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [still, setStill] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStill(true);
      setText(lines[0] ?? "");
    }
  }, [lines]);

  useEffect(() => {
    if (still || lines.length === 0) return;

    const current = lines[index % lines.length];
    const done = !deleting && text === current;
    const empty = deleting && text === "";

    // Pause at the end of a line, and briefly once it's cleared.
    if (done) {
      const id = window.setTimeout(() => setDeleting(true), 1900);
      return () => window.clearTimeout(id);
    }
    if (empty) {
      const id = window.setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % lines.length);
      }, 350);
      return () => window.clearTimeout(id);
    }

    const id = window.setTimeout(
      () => {
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1),
        );
      },
      // Deleting is quicker than typing, as it is when a person does it.
      deleting ? 32 : 62,
    );
    return () => window.clearTimeout(id);
  }, [text, deleting, index, lines, still]);

  return (
    <p className={className} aria-live="off">
      {/* Keeps the line from collapsing to zero height between phrases. */}
      <span className="sr-only">{lines.join(". ")}</span>
      <span aria-hidden="true">
        {text}
        {still ? null : (
          <span className="ml-0.5 inline-block w-px animate-pulse bg-accent align-middle text-transparent">
            |
          </span>
        )}
      </span>
    </p>
  );
}
