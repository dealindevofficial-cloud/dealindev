export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  businessType: string;
};

export const testimonialsSection = {
  eyebrow: "Social Proof",
  title: "Teams that value reliable delivery.",
  description: "Practical improvements you can measure.",
} as const;

export const testimonials: Testimonial[] = [
  {
    quote:
      "They replaced our patchwork tools with one workflow we actually use—handoffs are much smoother.",
    name: "Alicia M.",
    role: "Operations Manager",
    businessType: "B2B Services Team",
  },
  {
    quote:
      "Clear process—we always knew what was being built, why it mattered, and what came next.",
    name: "Daniel R.",
    role: "Founder",
    businessType: "Product Startup",
  },
  {
    quote:
      "We needed focused improvements, not a massive rebuild—and that is what we got.",
    name: "Priya S.",
    role: "Head of Delivery",
    businessType: "Digital Services Company",
  },
];
