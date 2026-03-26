export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  businessType: string;
};

export const testimonialsSection = {
  eyebrow: "Social Proof",
  title: "Trusted by teams that value reliable delivery.",
  description: "Supporting modern business solutions with practical, measurable improvements.",
} as const;

export const testimonials: Testimonial[] = [
  {
    quote:
      "Deal in Dev helped us replace a patchwork of tools with one workflow our team actually uses. Handoffs are much smoother now.",
    name: "Alicia M.",
    role: "Operations Manager",
    businessType: "B2B Services Team",
  },
  {
    quote:
      "The process was clear and well managed. We always knew what was being built, why it mattered, and what was coming next.",
    name: "Daniel R.",
    role: "Founder",
    businessType: "Product Startup",
  },
  {
    quote:
      "We did not need a massive rebuild. We needed focused improvements, and that is exactly what we got.",
    name: "Priya S.",
    role: "Head of Delivery",
    businessType: "Digital Services Company",
  },
];
