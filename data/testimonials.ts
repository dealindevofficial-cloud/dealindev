export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  businessType: string;
};

export const testimonialsSection = {
  eyebrow: "Client Results",
  title: "Trusted by teams that value reliable delivery.",
  highlight: "reliable delivery",
  description: "Practical improvements our clients can see and measure.",
} as const;

export const testimonials: Testimonial[] = [
  {
    quote: "They replaced our patchwork of tools with one workflow our team actually uses. Handoffs are dramatically smoother.",
    name: "Alicia M.",
    role: "Operations Manager",
    businessType: "B2B Services Company",
  },
  {
    quote: "A clear process from day one. We always knew what was being built, why it mattered and what came next.",
    name: "Daniel R.",
    role: "Founder",
    businessType: "SaaS Startup",
  },
  {
    quote: "We needed focused improvements, not a massive rebuild, and that is exactly what Deal in Dev delivered.",
    name: "Priya S.",
    role: "Head of Delivery",
    businessType: "Digital Services Agency",
  },
];
