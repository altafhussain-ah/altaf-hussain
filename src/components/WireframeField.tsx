"use client";

import { useEffect, useRef } from "react";

/**
 * Slowly rotating wireframe polyhedra drifting behind the hero — the shapes a
 * 3D viewport shows before anything is textured. Drawn on canvas rather than
 * with DOM nodes because it's a few hundred line segments per frame.
 *
 * Deliberately restrained: thin strokes at low alpha in the site's accent, so
 * it reads as depth behind the headline rather than as a graphic competing
 * with it. Pauses when scrolled out of view or when the tab is hidden, and
 * doesn't run at all under prefers-reduced-motion.
 */

type Vec3 = [number, number, number];

/** Unit-ish primitives, each as vertices plus the edges joining them. */
const SHAPES: { verts: Vec3[]; edges: [number, number][] }[] = [
  {
    // Cube
    verts: [
      [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
      [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1],
    ],
    edges: [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7],
    ],
  },
  {
    // Tetrahedron
    verts: [[1, 1, 1], [-1, -1, 1], [-1, 1, -1], [1, -1, -1]],
    edges: [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]],
  },
  {
    // Octahedron
    verts: [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]],
    edges: [
      [0, 2], [0, 3], [0, 4], [0, 5],
      [1, 2], [1, 3], [1, 4], [1, 5],
      [2, 4], [4, 3], [3, 5], [5, 2],
    ],
  },
];

type Body = {
  shape: (typeof SHAPES)[number];
  x: number;
  y: number;
  z: number;
  scale: number;
  rx: number;
  ry: number;
  drx: number;
  dry: number;
  vx: number;
  vy: number;
};

export default function WireframeField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    // Cap DPR at 2 — beyond that the extra pixels cost more than they show.
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    let w = 0;
    let h = 0;

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const rand = (min: number, max: number) => min + Math.random() * (max - min);

    const bodies: Body[] = Array.from({ length: 7 }, (_, i) => ({
      shape: SHAPES[i % SHAPES.length],
      x: rand(0.08, 0.92) * w,
      y: rand(0.1, 0.9) * h,
      z: rand(-120, 160),
      scale: rand(38, 86),
      rx: rand(0, Math.PI * 2),
      ry: rand(0, Math.PI * 2),
      drx: rand(-0.0022, 0.0022),
      dry: rand(-0.0026, 0.0026),
      vx: rand(-0.16, 0.16),
      vy: rand(-0.11, 0.11),
    }));

    // Stroke colour tracks the theme's accent, re-read when the theme flips.
    let stroke = "rgba(176, 68, 31, 0.2)";
    const readAccent = () => {
      const root = getComputedStyle(document.documentElement);
      const accent = root.getPropertyValue("--accent").trim() || "#b0441f";
      const dark =
        document.documentElement.getAttribute("data-theme") === "dark";
      stroke = hexToRgba(accent, dark ? 0.26 : 0.2);
    };
    readAccent();

    const themeWatcher = new MutationObserver(readAccent);
    themeWatcher.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    const FOV = 330;
    let frame = 0;
    let running = true;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = stroke;
      ctx.lineWidth = 1;

      for (const b of bodies) {
        b.rx += b.drx;
        b.ry += b.dry;
        b.x += b.vx;
        b.y += b.vy;

        // Wrap around the edges with a margin, so shapes never pop mid-frame.
        const m = b.scale * 2;
        if (b.x < -m) b.x = w + m;
        if (b.x > w + m) b.x = -m;
        if (b.y < -m) b.y = h + m;
        if (b.y > h + m) b.y = -m;

        const cosX = Math.cos(b.rx);
        const sinX = Math.sin(b.rx);
        const cosY = Math.cos(b.ry);
        const sinY = Math.sin(b.ry);

        const points = b.shape.verts.map(([vx, vy, vz]) => {
          // Rotate about Y, then X.
          const x1 = vx * cosY - vz * sinY;
          const z1 = vx * sinY + vz * cosY;
          const y2 = vy * cosX - z1 * sinX;
          const z2 = vy * sinX + z1 * cosX;

          const depth = z2 * b.scale + b.z;
          const s = FOV / (FOV + depth);
          return [b.x + x1 * b.scale * s, b.y + y2 * b.scale * s] as const;
        });

        ctx.beginPath();
        for (const [a, c] of b.shape.edges) {
          ctx.moveTo(points[a][0], points[a][1]);
          ctx.lineTo(points[c][0], points[c][1]);
        }
        ctx.stroke();
      }

      if (running) frame = requestAnimationFrame(draw);
    };

    const start = () => {
      if (running) return;
      running = true;
      frame = requestAnimationFrame(draw);
    };
    const stop = () => {
      running = false;
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
    };

    frame = requestAnimationFrame(draw);

    // Stop burning frames once the hero has scrolled away.
    const visibility = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0 },
    );
    visibility.observe(parent);

    const onTabChange = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onTabChange);
    window.addEventListener("resize", resize);

    return () => {
      stop();
      visibility.disconnect();
      themeWatcher.disconnect();
      document.removeEventListener("visibilitychange", onTabChange);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}

/** #rrggbb or #rgb to rgba(). Falls back to the brand terracotta. */
function hexToRgba(hex: string, alpha: number) {
  let h = hex.replace("#", "").trim();
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  if (h.length !== 6 || Number.isNaN(parseInt(h, 16))) {
    return `rgba(176, 68, 31, ${alpha})`;
  }
  const n = parseInt(h, 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
}
