import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";

export type SectionTone = "light" | "tint" | "dark" | "brand";

type SectionProps = {
  className?: string;
  containerClassName?: string;
  tone?: SectionTone;
  /** Decorative layers rendered behind the content */
  background?: ReactNode;
  id?: string;
  children: ReactNode;
} & Pick<HTMLAttributes<HTMLElement>, "aria-label" | "aria-labelledby">;

export function Section({
  className,
  containerClassName,
  tone = "light",
  background,
  id,
  children,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        `tone-${tone}`,
        "relative isolate overflow-hidden py-[var(--space-section-y)]",
        className,
      )}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
    >
      {background ? (
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          {background}
        </div>
      ) : null}
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
