import type { Transition } from "framer-motion";

/** Restrained easing for premium feel (no bouncy springs on layout). */
export const motionEase = [0.22, 1, 0.36, 1] as const;

export const motionTransition: Transition = {
  duration: 0.42,
  ease: motionEase,
};

export const motionTransitionFast: Transition = {
  duration: 0.2,
  ease: motionEase,
};

export const motionViewport = {
  once: true,
  margin: "-40px 0px",
  amount: 0.15,
} as const;

export function staggerDelay(index: number, step = 0.055) {
  return step * index;
}
