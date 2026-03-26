import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";

type SectionProps = {
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
} & Pick<HTMLAttributes<HTMLElement>, "aria-label" | "aria-labelledby">;

export function Section({
  className,
  containerClassName,
  children,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
}: SectionProps) {
  return (
    <section
      className={cn("py-[var(--space-section-y)]", className)}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
