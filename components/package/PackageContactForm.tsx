"use client";

import { useState } from "react";
import { inputClass, labelClass, textareaClass, submitButtonClass, formContainerClass } from "@/components/ui/form-styles";

export function PackageContactForm({ packageName }: { packageName: string }) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      package: packageName,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Failed to send");
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="p-6 rounded-2xl border-2 border-emerald-200 bg-emerald-50 text-emerald-800 text-center">
        <p className="font-semibold">Thank you for your enquiry.</p>
        <p className="text-sm mt-1">We&apos;ll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <div className={formContainerClass}>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="pkg-name" className={labelClass}>
            Name
          </label>
          <input
            id="pkg-name"
            name="name"
            type="text"
            required
            disabled={loading}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="pkg-email" className={labelClass}>
            Email
          </label>
          <input
            id="pkg-email"
            name="email"
            type="email"
            required
            disabled={loading}
            placeholder="your@email.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="pkg-phone" className={labelClass}>
            Phone
          </label>
          <input
            id="pkg-phone"
            name="phone"
            type="tel"
            disabled={loading}
            placeholder="+44 20 0000 0000"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="pkg-message" className={labelClass}>
            Message
          </label>
          <textarea
            id="pkg-message"
            name="message"
            rows={4}
            required
            disabled={loading}
            placeholder="Tell us your preferred dates, group size, and any special requests."
            className={textareaClass}
          />
        </div>
        {error && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{error}</p>
        )}
        <button
          type="submit"
          disabled={loading}
          className={submitButtonClass}
        >
          {loading ? "Sending…" : "Send Enquiry"}
        </button>
      </form>
    </div>
  );
}
