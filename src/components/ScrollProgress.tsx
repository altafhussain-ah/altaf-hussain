"use client";

import { useEffect, useRef } from "react";

/**
 * Reading-progress bar. Written straight to a CSS variable via rAF rather
 * than through React state — this fires on every scroll frame, and a
 * setState per frame would re-render the tree for a single number.
 */
export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      el.style.setProperty("--progress", String(Math.min(1, progress)));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-px"
    >
      <div ref={ref} className="progress-bar h-full bg-accent" />
    </div>
  );
}
