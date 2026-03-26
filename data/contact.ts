export const contactFormCopy = {
  title: "Tell us what you are building.",
  description: "Complete the form and we will follow up with a clear recommendation for next steps.",
  submitNote:
    "Prefer context first? Mention your current process and we will advise the best first move.",
} as const;

export const contactIntro = {
  eyebrow: "Contact",
  title: "Start a project with clear business intent and a focused delivery path.",
  description:
    "Share your goals and current bottlenecks. We will map a practical plan for websites, apps, or AI automation aligned to measurable outcomes.",
};

export const contactServiceOptions = [
  "Website Development",
  "App Development",
  "AI Agents & Automation",
  "Unsure - Need Guidance",
] as const;

export const contactInfoBlocks = [
  {
    title: "Business Email",
    detail: "hello@dealindev.com",
    helper: "Best for project scope and delivery discussions.",
    href: "mailto:hello@dealindev.com",
  },
  {
    title: "Response Window",
    detail: "Within 1 business day",
    helper: "You get a clear next step, not a generic reply.",
  },
  {
    title: "Engagement Focus",
    detail: "Web, Apps, and AI Operations",
    helper: "Built to improve execution quality and workflow speed.",
  },
] as const;
