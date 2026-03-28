export type PortfolioPreview = {
  name: string;
  summary: string;
  impact: string;
};

export const portfolioPreviewSection = {
  eyebrow: "Selected Work",
  title: "Recent systems for business performance.",
  description: "How strategy turns into practical delivery.",
  ctaLabel: "View Work",
} as const;

export const portfolioPreviews: PortfolioPreview[] = [
  {
    name: "Operations Dashboard",
    summary: "Unified reporting for sales, delivery, and support.",
    impact: "Five spreadsheets replaced; status reporting time down ~60%.",
  },
  {
    name: "Service Booking Platform",
    summary: "Booking flow with qualification and routing built in.",
    impact: "More qualified inquiries; better first-touch-to-call conversion.",
  },
  {
    name: "AI Intake Assistant",
    summary: "Lead triage with clean handoff to internal teams.",
    impact: "Faster responses; less repetitive intake work daily.",
  },
];
