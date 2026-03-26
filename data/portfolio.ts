export type PortfolioPreview = {
  name: string;
  summary: string;
  impact: string;
};

export const portfolioPreviewSection = {
  eyebrow: "Selected Work",
  title: "Recent systems built for business performance.",
  description: "Representative previews to show how strategy translates into practical delivery.",
  ctaLabel: "View Work",
} as const;

export const portfolioPreviews: PortfolioPreview[] = [
  {
    name: "Operations Dashboard",
    summary: "Unified reporting across sales, delivery, and support workflows.",
    impact: "Replaced 5 disconnected spreadsheets and reduced status reporting time by 60%.",
  },
  {
    name: "Service Booking Platform",
    summary: "High-trust booking flow with qualification and routing built in.",
    impact: "Lifted qualified inquiries and improved conversion from first touch to call.",
  },
  {
    name: "AI Intake Assistant",
    summary: "Automated lead triage with context handoff to internal teams.",
    impact: "Cut response time and reduced repetitive intake tasks each day.",
  },
];
