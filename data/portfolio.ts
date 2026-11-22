export type PortfolioPreview = {
  name: string;
  category: string;
  summary: string;
  impact: string;
  metric: { value: number; suffix: string; label: string };
  visual: "dashboard" | "booking" | "chat";
};

export const portfolioPreviewSection = {
  eyebrow: "Selected Work",
  title: "Recent systems built for business performance.",
  highlight: "business performance",
  description: "A look at how strategy turns into practical, measurable delivery.",
  ctaLabel: "View Our Work",
} as const;

export const portfolioPreviews: PortfolioPreview[] = [
  {
    name: "Operations Dashboard",
    category: "Custom Web App",
    summary: "Unified reporting for sales, delivery and support in one real-time view.",
    impact: "Replaced five spreadsheets and cut status reporting time by about 60%.",
    metric: { value: 60, suffix: "%", label: "less reporting time" },
    visual: "dashboard",
  },
  {
    name: "Service Booking Platform",
    category: "Website & Booking",
    summary: "A booking flow with built-in lead qualification and smart routing.",
    impact: "More qualified inquiries and higher first-touch-to-call conversion.",
    metric: { value: 2, suffix: "x", label: "qualified inquiries" },
    visual: "booking",
  },
  {
    name: "AI Intake Assistant",
    category: "AI Automation",
    summary: "AI lead triage with clean handoff to the right internal team.",
    impact: "Faster responses and far less repetitive intake work every day.",
    metric: { value: 24, suffix: "/7", label: "instant responses" },
    visual: "chat",
  },
];
