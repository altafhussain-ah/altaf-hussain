"use client";

import { useEffect, useRef } from "react";

/**
 * A soft warm light that follows the pointer across the hero. Coordinates go
 * straight to CSS variables on each frame — routing them through React state
 * would re-render on every mousemove.
 *
 * Pointer-only by design: it never appears on touch devices, and it fades out
 * when the pointer leaves the section.
 */
export default function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const section = el.parentElement;
    if (!section) return;

    // Skip entirely for coarse pointers and reduced-motion users.
    if (
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let frame = 0;
    let x = 0;
    let y = 0;

    const apply = () => {
      frame = 0;
      el.style.setProperty("--x", `${x}px`);
      el.style.setProperty("--y", `${y}px`);
    };

    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
      if (!frame) frame = requestAnimationFrame(apply);
    };

    const onEnter = () => el.style.setProperty("opacity", "1");
    const onLeave = () => el.style.setProperty("opacity", "0");

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseenter", onEnter);
    section.addEventListener("mouseleave", onLeave);

    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseenter", onEnter);
      section.removeEventListener("mouseleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500"
      style={{
        background:
          "radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), color-mix(in oklab, var(--accent) 10%, transparent), transparent 70%)",
      }}
    />
  );
}
