"use client";

import { useEffect, useState } from "react";

/** Appears once you're a screen or so down, and takes you back up. */
export default function BackToTop() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth",
        })
      }
      aria-label="Back to top"
      // Kept out of the tab order and off the screen reader while hidden,
      // so it isn't a focus trap sitting in the corner.
      tabIndex={shown ? 0 : -1}
      aria-hidden={!shown}
      className={`fixed bottom-6 right-6 z-40 grid size-11 place-items-center rounded-full border border-line bg-paper-raised text-ink-soft shadow-lg transition-all duration-300 hover:border-accent hover:text-accent ${
        shown
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5"
        aria-hidden="true"
      >
        <path d="M12 19V5m0 0-6 6m6-6 6 6" />
      </svg>
    </button>
  );
}
