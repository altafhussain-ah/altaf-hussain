import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6">
      <div className="text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-serif text-title text-ink">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-4 text-ink-soft">
          It may have moved, or it may never have been here at all.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
        >
          Back home
        </Link>
      </div>
    </main>
  );
}
