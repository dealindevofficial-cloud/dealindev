/** Homepage process strip — titles align with `serviceProcessSteps` in services.ts */

export type HomeProcessStep = {
  name: string;
  detail: string;
};

export const homeProcessSection = {
  eyebrow: "Process",
  title: "A process built for reliable execution.",
  description:
    "Each stage cuts risk, adds clarity, and stays aligned with your goals.",
  steps: [
    {
      name: "Discover",
      detail: "Clarify goals, bottlenecks, and gaps before proposing solutions.",
    },
    {
      name: "Plan",
      detail: "Define system scope and rollout so decisions stay practical.",
    },
    {
      name: "Build",
      detail: "Ship with speed and alignment through steady collaboration.",
    },
    {
      name: "Launch & Improve",
      detail: "Deploy, refine, and iterate with measured improvements after launch.",
    },
  ] satisfies HomeProcessStep[],
};
