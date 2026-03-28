"use client";

import { useState } from "react";
import { Button, Heading, Input, Select, Textarea } from "@/components/ui";
import { contactFormCopy, contactServiceOptions } from "@/data/contact";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [formKey, setFormKey] = useState(0);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      businessName: String(fd.get("businessName") ?? "").trim(),
      serviceInterestedIn: String(fd.get("serviceInterestedIn") ?? "").trim(),
      projectDetails: String(fd.get("projectDetails") ?? "").trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage("Thanks — we received your message and will reply within one business day.");
      form.reset();
      setFormKey((k) => k + 1);
    } catch {
      setStatus("error");
      setMessage("Network error. Check your connection or email us directly.");
    }
  }

  return (
    <>
      <Heading
        level={2}
        title={contactFormCopy.title}
        description={contactFormCopy.description}
      />

      {status === "success" || status === "error" ? (
        <p
          role={status === "error" ? "alert" : "status"}
          className={
            status === "success"
              ? "rounded-lg border border-primary/40 bg-primary/10 px-4 py-3 text-sm text-foreground"
              : "rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-foreground"
          }
        >
          {message}
        </p>
      ) : null}

      <form
        key={formKey}
        className="space-y-6 md:space-y-7"
        noValidate
        onSubmit={onSubmit}
      >
        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          <div className="space-y-2.5">
            <label
              htmlFor="name"
              className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-readable"
            >
              Name
            </label>
            <Input
              id="name"
              name="name"
              autoComplete="name"
              required
              placeholder="Your full name"
              className="h-12 rounded-lg border-surface-border/80"
            />
          </div>

          <div className="space-y-2.5">
            <label
              htmlFor="email"
              className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-readable"
            >
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@company.com"
              className="h-12 rounded-lg border-surface-border/80"
            />
          </div>
        </div>

        <div className="space-y-2.5">
          <label
            htmlFor="businessName"
            className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-readable"
          >
            Business Name
          </label>
          <Input
            id="businessName"
            name="businessName"
            autoComplete="organization"
            placeholder="Your company or brand"
            className="h-12 rounded-lg border-surface-border/80"
          />
        </div>

        <div className="space-y-2.5">
          <label
            htmlFor="serviceInterestedIn"
            className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-readable"
          >
            Service Interested In
          </label>
          <Select
            id="serviceInterestedIn"
            name="serviceInterestedIn"
            defaultValue=""
            required
            placeholder="Select the service that best fits"
            className="rounded-lg [&_button]:h-12 [&_button]:rounded-lg [&_button]:border-surface-border/80"
            options={contactServiceOptions.map((service) => ({
              value: service,
              label: service,
            }))}
          />
        </div>

        <div className="space-y-2.5">
          <div className="flex items-end justify-between gap-3">
            <label
              htmlFor="projectDetails"
              className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-readable"
            >
              Project Details
            </label>
            <span className="text-xs text-foreground-muted">
              Include goals, timeline, and challenges
            </span>
          </div>
          <Textarea
            id="projectDetails"
            name="projectDetails"
            rows={6}
            required
            minLength={10}
            placeholder="Share what you want to launch or improve, what is slowing your team down today, and what a successful outcome should look like."
            className="min-h-40 rounded-lg border-surface-border/80"
          />
        </div>

        <div className="flex flex-wrap items-center gap-4 border-t border-surface-border/70 pt-4 md:pt-5">
          <Button
            type="submit"
            size="lg"
            className="rounded-lg px-8"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Sending…" : "Start the Conversation"}
          </Button>
          <p className="max-w-md text-sm leading-relaxed text-foreground-muted">
            {contactFormCopy.submitNote}
          </p>
        </div>
      </form>
    </>
  );
}
