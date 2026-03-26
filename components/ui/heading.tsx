import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeadingLevel = 1 | 2 | 3 | 4;

interface HeadingProps {
  level?: HeadingLevel;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  children?: ReactNode;
}

const headingSizes: Record<HeadingLevel, string> = {
  1: "text-4xl md:text-5xl",
  2: "text-3xl md:text-4xl",
  3: "text-2xl md:text-3xl",
  4: "text-xl md:text-2xl",
};

export function Heading({
  level = 2,
  eyebrow,
  title,
  description,
  className,
  children,
}: HeadingProps) {
  const Tag = `h${level}` as const;

  return (
    <div className={cn("space-y-3", className)}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-readable">
          {eyebrow}
        </p>
      ) : null}
      <Tag className={cn("font-semibold text-foreground", headingSizes[level])}>
        {title}
      </Tag>
      {description ? (
        <p className="max-w-2xl text-pretty leading-relaxed text-foreground-muted">{description}</p>
      ) : null}
      {children}
    </div>
  );
}
