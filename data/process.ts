/** Homepage process strip — titles align with `serviceProcessSteps` in services.ts */

export type HomeProcessStep = {
  name: string;
  detail: string;
};

export const homeProcessSection = {
  eyebrow: "Process",
  title: "A strategic process built for reliable execution.",
  description:
    "Each stage is designed to reduce risk, create clarity, and keep delivery aligned with business goals.",
  steps: [
    {
      name: "Discover",
      detail: "Understand goals, bottlenecks, and workflow gaps before any solution is proposed.",
    },
    {
      name: "Plan",
      detail: "Define the right system, structure, and rollout path so decisions stay focused and practical.",
    },
    {
      name: "Build",
      detail: "Develop with clarity, speed, and real business alignment through steady collaboration.",
    },
    {
      name: "Launch & Improve",
      detail: "Deploy, refine, and support long-term use with measured iteration after release.",
    },
  ] satisfies HomeProcessStep[],
};
