import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "focus-ring group inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-all duration-300 ease-out active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 motion-reduce:transform-none";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "btn-shine bg-primary text-primary-foreground shadow-[0_10px_30px_-12px_var(--glow)] hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-[0_16px_40px_-12px_var(--glow)]",
  secondary:
    "border border-foreground/20 bg-transparent text-foreground hover:-translate-y-0.5 hover:border-accent hover:bg-accent-soft",
  ghost: "text-accent-text hover:bg-accent-soft",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-6 text-[0.95rem]",
  lg: "h-14 px-8 text-base",
};

export function buttonVariants({
  variant = "primary",
  size = "md",
  className,
}: { variant?: ButtonVariant; size?: ButtonSize; className?: string } = {}) {
  return cn(base, variantClasses[variant], sizeClasses[size], className);
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({ className, variant, size, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={buttonVariants({ variant, size, className })} {...props} />;
}

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      fill="none"
      className={cn("h-4 w-4 transition-transform duration-300 group-hover:translate-x-1", className)}
    >
      <path d="M4 10h11m0 0-4.5-4.5M15 10l-4.5 4.5" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
