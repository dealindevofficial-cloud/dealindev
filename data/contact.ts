export const contactFormCopy = {
  title: "Tell us what you are trying to build, improve, or automate.",
  description:
    "Share your idea, current workflow, or business challenge and we will recommend the right next step for your goals.",
  submitNote:
    "Every inquiry is reviewed manually. Expect a practical response focused on fit, scope, and delivery approach.",
} as const;

export const contactIntro = {
  eyebrow: "Contact",
  title: "Start a focused client conversation about what your business needs next.",
  description:
    "Tell us what you are trying to build, improve, or automate. We help teams shape digital solutions that solve real workflow and growth challenges.",
};

export const contactServiceOptions = [
  "Website Development",
  "App Development",
  "AI Agent",
  "AI Automation",
  "Not Sure Yet",
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
