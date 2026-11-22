export type ServiceIcon = "web" | "app" | "ai";

export type ServicePillar = {
  slug: string;
  icon: ServiceIcon;
  title: string;
  summary: string;
  outcomes: string[];
  deliverables: string[];
  /** Short homepage service cards */
  homeOverview: {
    description: string;
    outcomeLine: string;
    highlights: [string, string, string];
  };
};

export type ServiceBenefit = {
  title: string;
  description: string;
};

export type ServiceProcessStep = {
  step: string;
  title: string;
  detail: string;
};

export const servicePillars: ServicePillar[] = [
  {
    slug: "website-development",
    icon: "web",
    title: "Custom Website Development",
    summary:
      "Fast, SEO-ready business websites that clarify your offer, build trust and turn visitors into qualified leads.",
    outcomes: [
      "Clear positioning that helps the right buyers self-qualify faster",
      "Higher lead quality from intentional page structure and messaging",
      "Top-tier Core Web Vitals and technical SEO from day one",
    ],
    deliverables: [
      "Conversion-focused homepage and landing pages",
      "Responsive design system built on Next.js",
      "On-page SEO, analytics and performance setup",
    ],
    homeOverview: {
      description: "High-performance websites that communicate value, rank on Google and support your sales process.",
      outcomeLine: "More trust, better leads, faster decisions.",
      highlights: ["Business websites", "Landing pages", "Technical SEO"],
    },
  },
  {
    slug: "app-development",
    icon: "app",
    title: "Web & Mobile App Development",
    summary:
      "Custom business software, from client portals to internal tools, that removes operational friction and centralizes key workflows.",
    outcomes: [
      "Less manual coordination and fewer process bottlenecks",
      "Faster delivery cycles with clear ownership across teams",
      "Real-time visibility into operations and performance",
    ],
    deliverables: [
      "Workflow mapping and solution architecture",
      "Role-based dashboards, portals and core business logic",
      "Documentation, handoff and an iteration roadmap",
    ],
    homeOverview: {
      description: "Custom web and mobile apps that streamline operations and replace spreadsheets and manual work.",
      outcomeLine: "Faster delivery and a more productive team.",
      highlights: ["Internal tools", "Client portals", "Dashboards"],
    },
  },
  {
    slug: "ai-automation",
    icon: "ai",
    title: "AI Agents & Automation",
    summary:
      "Practical AI chatbots, voice agents and automations designed around your real workflows, not novelty demos.",
    outcomes: [
      "Hours of repetitive work removed every week",
      "Consistent, instant responses across support and sales",
      "Scale your operations without immediate hiring pressure",
    ],
    deliverables: [
      "Automation opportunity audit and ROI mapping",
      "AI agents, chatbots and workflow orchestration",
      "Monitoring, safeguards and continuous optimization",
    ],
    homeOverview: {
      description: "AI agents and automations that handle repetitive work and keep your processes moving 24/7.",
      outcomeLine: "Less busywork, more capacity to grow.",
      highlights: ["AI chatbots", "Voice agents", "Workflow automation"],
    },
  },
];

export const servicesPageCopy = {
  hero: {
    eyebrow: "Our Services",
    title: "Web development, apps and AI automation for growing businesses.",
    highlight: "AI automation",
    description:
      "Every engagement is scoped to reduce friction, add clarity and create momentum, so you invest in systems that pay for themselves.",
  },
  benefits: {
    eyebrow: "Why Teams Choose Us",
    title: "Senior execution without agency overhead.",
    highlight: "without agency overhead",
    description: "We strengthen your workflows and delivery systems first, then build software that matches how you work.",
  },
  process: {
    eyebrow: "How We Work",
    title: "From idea to impact, with clear checkpoints.",
    highlight: "clear checkpoints",
    description: "A predictable four-step process that keeps scope, budget and quality under control.",
  },
  closingCta: {
    eyebrow: "Ready to Start",
    title: "Tell us your goals. We will map the fastest path to results.",
    description:
      "Whether it is a website redesign, a custom app or an AI agent, we will help you identify the highest-impact first move.",
    primaryCta: "Start Your Project",
    secondaryCta: "Explore AI Solutions",
  },
} as const;

export const serviceBenefits: ServiceBenefit[] = [
  {
    title: "Business-first execution",
    description: "Every recommendation ties back to revenue, efficiency or customer experience, not technical vanity.",
  },
  {
    title: "Senior-level delivery",
    description: "Clear communication, sound architecture decisions and a disciplined shipping rhythm from kickoff to launch.",
  },
  {
    title: "Systems that scale",
    description: "Maintainable, well-documented solutions your team can grow with, without costly rebuilds.",
  },
];

export const serviceProcessSteps: ServiceProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    detail: "We align on goals, constraints and workflow pain points so priorities are anchored in business reality.",
  },
  {
    step: "02",
    title: "Plan",
    detail: "We define scope, architecture, milestones and decision checkpoints before a line of code is written.",
  },
  {
    step: "03",
    title: "Build & Integrate",
    detail: "We ship in focused iterations with regular demos and feedback, keeping quality high and risk low.",
  },
  {
    step: "04",
    title: "Launch & Improve",
    detail: "We measure results, remove friction and keep improving performance as your business grows.",
  },
];
