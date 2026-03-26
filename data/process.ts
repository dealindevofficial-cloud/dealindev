/** Homepage process strip — titles align with `serviceProcessSteps` in services.ts */

export type HomeProcessStep = {
  name: string;
  detail: string;
};

export const homeProcessSection = {
  eyebrow: "Process",
  title: "A clear path from strategy to shipped outcomes.",
  description: "Our process is collaborative, predictable, and designed to keep momentum high.",
  steps: [
    { name: "Discover", detail: "Audit priorities, constraints, and opportunities." },
    { name: "Plan", detail: "Define architecture, milestones, and accountability." },
    { name: "Build", detail: "Ship with high standards and tight feedback loops." },
    { name: "Launch & Improve", detail: "Measure outcomes, refine, and scale what works." },
  ] satisfies HomeProcessStep[],
};
