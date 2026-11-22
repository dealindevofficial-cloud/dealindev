import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean;
  featured?: boolean;
};

export function Card({ className, interactive = false, featured = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-[var(--radius-lg)] p-7 shadow-sm md:p-8",
        featured ? "border-gradient" : "border border-surface-border bg-surface",
        interactive &&
          "transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_24px_60px_-28px_var(--glow)] motion-reduce:hover:translate-y-0",
        className,
      )}
      {...props}
    />
  );
}
