/** Homepage process strip; titles align with `serviceProcessSteps` in services.ts */

export type HomeProcessStep = {
  name: string;
  detail: string;
};

export const homeProcessSection = {
  eyebrow: "Our Process",
  title: "A proven process for reliable delivery.",
  highlight: "reliable delivery",
  description: "Each stage reduces risk, adds clarity and keeps your project aligned with business goals.",
  steps: [
    { name: "Discover", detail: "Clarify goals, bottlenecks and gaps before proposing solutions." },
    { name: "Plan", detail: "Define scope, architecture and rollout so every decision stays practical." },
    { name: "Build", detail: "Ship quickly in focused iterations with regular demos and feedback." },
    { name: "Launch & Improve", detail: "Deploy, measure and keep improving after launch." },
  ] satisfies HomeProcessStep[],
};
