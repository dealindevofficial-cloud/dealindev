import { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const controlBase =
  "focus-ring h-12 w-full rounded-md border border-surface-border bg-background-elevated px-4 text-base text-foreground placeholder:text-foreground-muted/80 transition-colors md:h-11 md:text-sm";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(controlBase, className)} {...props} />;
}
