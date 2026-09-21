"use client";

import { useState } from "react";
import { contact, site } from "@/content/site";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    // No backend configured: hand off to the visitor's mail client with the
    // message pre-filled. Works on a static host with zero setup.
    if (!contact.formEndpoint) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(contact.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" autoComplete="name" />
        <Field label="Email" name="email" type="email" autoComplete="email" />
      </div>

      <label className="block">
        <span className="eyebrow">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          className="mt-2.5 w-full resize-y rounded-sm border border-line bg-paper-raised px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-line-strong focus:outline-none"
          placeholder="What are you working on?"
        />
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>

        <p aria-live="polite" className="text-sm">
          {status === "sent" ? (
            <span className="text-ink-soft">
              {contact.formEndpoint
                ? "Thanks — I'll be in touch shortly."
                : "Opening your mail app…"}
            </span>
          ) : null}
          {status === "error" ? (
            <span className="text-accent">
              That didn&apos;t go through. Email me directly at{" "}
              <a href={`mailto:${site.email}`} className="link-underline">
                {site.email}
              </a>
              .
            </span>
          ) : null}
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="eyebrow">{label}</span>
      <input
        type={type}
        name={name}
        required
        autoComplete={autoComplete}
        className="mt-2.5 w-full rounded-sm border border-line bg-paper-raised px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-line-strong focus:outline-none"
      />
    </label>
  );
}
