export type Testimonial = {
  quote: string;
  name: string;
  company: string;
};

export const testimonialsSection = {
  eyebrow: "Social Proof",
  title: "Trusted by teams that value outcomes and execution quality.",
} as const;

export const testimonials: Testimonial[] = [
  {
    quote:
      "Deal in Dev helped us turn a fragmented process into one streamlined system. The impact was immediate.",
    name: "Operations Lead",
    company: "B2B Services Firm",
  },
  {
    quote:
      "The team brought strategic clarity, strong communication, and execution discipline from day one.",
    name: "Founder",
    company: "Growth-Stage Startup",
  },
  {
    quote:
      "We now ship faster and with more confidence because the platform finally matches how our business works.",
    name: "Head of Delivery",
    company: "Digital Product Company",
  },
];
