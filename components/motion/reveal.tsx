"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { motionTransition, motionViewport } from "@/lib/motion";

type RevealProps = Omit<
  HTMLMotionProps<"div">,
  "initial" | "whileInView" | "viewport" | "transition"
> & {
  delay?: number;
  y?: number;
};

export function Reveal({ children, className, delay = 0, y = 14, ...rest }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={motionViewport}
      transition={{ ...motionTransition, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
