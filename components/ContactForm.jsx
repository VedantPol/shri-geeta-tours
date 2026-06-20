"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { wa } from "@/lib/site";

export default function ContactForm() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    const f = new FormData(e.currentTarget);
    const message = [
      "Hi SHRI GEETA TOURS AND TRAVELS, I want to plan a trip.",
      `Name: ${f.get("name") || ""}`,
      `Phone: ${f.get("phone") || ""}`,
      `Destination: ${f.get("destination") || ""}`,
      `Travel month: ${f.get("month") || ""}`,
      `Travellers: ${f.get("travellers") || ""}`,
      `Notes: ${f.get("notes") || ""}`,
    ].join("\n");
    window.open(wa(message), "_blank", "noopener,noreferrer");
    // Reset the sending state shortly after opening WhatsApp.
    setTimeout(() => setSending(false), 1200);
  };

  const field =
    "mt-1.5 w-full rounded-xl border border-ink/15 bg-sand-50 px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-ink-muted/60 focus:border-green-brand focus:ring-2 focus:ring-green-brand/20";

  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-sand-100 p-6 ring-1 ring-ink/5 sm:p-8">
      <p className="eyebrow">Trip enquiry</p>
      <h2 className="text-2xl font-semibold leading-tight">Share details for a quick WhatsApp quote.</h2>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink-soft">
          Name
          <input name="name" type="text" required placeholder="Your name" className={field} />
        </label>
        <label className="block text-sm font-medium text-ink-soft">
          Phone
          <input name="phone" type="tel" required placeholder="Your phone number" className={field} />
        </label>
        <label className="block text-sm font-medium text-ink-soft">
          Destination
          <input name="destination" type="text" required placeholder="Kashmir, Goa, Dubai…" className={field} />
        </label>
        <label className="block text-sm font-medium text-ink-soft">
          Travel month
          <input name="month" type="text" placeholder="e.g. December 2026" className={field} />
        </label>
        <label className="block text-sm font-medium text-ink-soft sm:col-span-2">
          Travellers
          <input name="travellers" type="number" min="1" placeholder="Number of travellers" className={field} />
        </label>
        <label className="block text-sm font-medium text-ink-soft sm:col-span-2">
          Notes
          <textarea
            name="notes"
            rows={4}
            placeholder="Budget, hotel category, flight needs, special requests"
            className={field}
          />
        </label>
      </div>

      <button type="submit" disabled={sending} className="btn btn-primary mt-6 w-full disabled:opacity-70">
        {sending ? "Opening WhatsApp…" : "Send enquiry on WhatsApp"}
        {!sending && <Send size={16} />}
      </button>
      <p className="mt-3 text-center text-xs text-ink-muted">
        This opens WhatsApp with your details pre-filled. No data is stored on this site.
      </p>
    </form>
  );
}
