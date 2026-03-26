export type ServicePillar = {
  title: string;
  summary: string;
  outcomes: string[];
  deliverables: string[];
  /** Short homepage service cards */
  homeOverview: {
    description: string;
    outcomeLine: string;
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
    title: "Website Development",
    summary:
      "Premium, conversion-aware websites that clarify your offer, strengthen trust, and move buyers to action.",
    outcomes: [
      "Clearer positioning that helps qualified prospects self-identify faster.",
      "Improved lead quality through intentional page architecture and messaging.",
      "A polished brand experience that supports sales conversations.",
    ],
    deliverables: [
      "Positioning-led homepage and conversion page flows",
      "Responsive component system for long-term scalability",
      "Performance and SEO foundations ready for growth",
    ],
    homeOverview: {
      description:
        "Premium, conversion-aware websites that communicate value clearly and support your sales process.",
      outcomeLine: "Improve trust, lead quality, and decision speed.",
    },
  },
  {
    title: "App Development",
    summary:
      "Custom internal and client-facing applications that reduce operational friction and centralize critical workflows.",
    outcomes: [
      "Less manual coordination and fewer process bottlenecks.",
      "Faster delivery cycles with clear ownership across teams.",
      "Higher operational visibility through better systems and tooling.",
    ],
    deliverables: [
      "Workflow mapping and architecture planning",
      "Role-aware dashboards, portals, and core business logic",
      "Structured handoff documentation and iteration roadmap",
    ],
    homeOverview: {
      description:
        "Custom applications that streamline operations, centralize workflows, and remove repetitive manual effort.",
      outcomeLine: "Increase delivery speed and team productivity.",
    },
  },
  {
    title: "AI Agents & Automation",
    summary:
      "Practical AI systems designed around real workflows, from repetitive task execution to intelligent team assistance.",
    outcomes: [
      "Reduced time spent on low-leverage, repetitive work.",
      "Improved response consistency in support and internal operations.",
      "Scalable delivery without immediate hiring pressure.",
    ],
    deliverables: [
      "Workflow opportunity audit for automation fit",
      "AI-assisted task orchestration and process automations",
      "Monitoring, safeguards, and optimization loops",
    ],
    homeOverview: {
      description:
        "Practical AI systems that handle repetitive tasks, assist teams in real-time, and keep processes moving.",
      outcomeLine: "Cut operational drag and scale support without hiring pressure.",
    },
  },
];

export const servicesPageCopy = {
  hero: {
    eyebrow: "Services",
    title: "Build digital systems that improve how your business operates.",
    description:
      "From websites to apps to AI automation, each engagement is designed to reduce friction, improve clarity, and create measurable momentum.",
  },
  benefits: {
    eyebrow: "Why Teams Choose Deal in Dev",
    title: "Execution clarity without agency noise.",
    description:
      "We focus on what makes your workflow and delivery system stronger, then build accordingly.",
  },
  process: {
    eyebrow: "Process",
    title: "A structured delivery path from idea to impact.",
    description:
      "You get predictable momentum, clear checkpoints, and systems built for long-term value.",
  },
  closingCta: {
    eyebrow: "Ready to Start",
    title: "Bring your workflow goals, and we will map the right technical path.",
    description:
      "Whether you need a website refresh, a custom app, or AI automation, we can define the highest-leverage first move together.",
    primaryCta: "Start a Project",
    secondaryCta: "Discuss Your Workflow",
  },
} as const;

export const serviceBenefits: ServiceBenefit[] = [
  {
    title: "Business-First Execution",
    description:
      "Every recommendation ties back to operational impact, not just implementation complexity.",
  },
  {
    title: "Senior-Level Delivery Standards",
    description:
      "Clear communication, practical architecture decisions, and disciplined shipping rhythm from start to finish.",
  },
  {
    title: "Systems You Can Grow With",
    description:
      "Solutions are designed for maintainability so your team can scale without rebuilding core foundations.",
  },
];

export const serviceProcessSteps: ServiceProcessStep[] = [
  {
    step: "Step 1",
    title: "Discover",
    detail:
      "Align on goals, constraints, and workflow pain points so priorities are anchored in business reality.",
  },
  {
    step: "Step 2",
    title: "Design the Plan",
    detail:
      "Define scope, architecture direction, delivery milestones, and decision checkpoints.",
  },
  {
    step: "Step 3",
    title: "Build and Integrate",
    detail:
      "Ship in focused iterations with feedback loops to keep quality high and risk low.",
  },
  {
    step: "Step 4",
    title: "Launch and Improve",
    detail:
      "Measure outcomes, remove friction, and improve performance as usage and business needs evolve.",
  },
];
