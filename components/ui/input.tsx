import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const controlBase =
  "focus-ring w-full rounded-[var(--radius-md)] border border-surface-border bg-surface text-base text-foreground placeholder:text-foreground-muted/70 transition-colors duration-200 hover:border-accent/50 focus:border-accent";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(controlBase, "h-12 px-4", className)} {...props} />;
}
