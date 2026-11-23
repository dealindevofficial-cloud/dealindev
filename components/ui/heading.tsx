import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeadingLevel = 1 | 2 | 3;

interface HeadingProps {
  level?: HeadingLevel;
  eyebrow?: string;
  title: string;
  /** Part of `title` rendered in the brand accent */
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  id?: string;
  children?: ReactNode;
}

const headingSizes: Record<HeadingLevel, string> = {
  1: "text-[2.6rem] sm:text-5xl lg:text-[4rem]",
  2: "text-3xl sm:text-4xl lg:text-[2.85rem]",
  3: "text-2xl sm:text-3xl",
};

export function Eyebrow({
  children,
  className,
  line = true,
}: {
  children: ReactNode;
  className?: string;
  line?: boolean;
}) {
  return (
    <p className={cn("label inline-flex items-center gap-2.5 text-accent-text", className)}>
      {line && <span aria-hidden className="h-px w-6 bg-current opacity-70" />}
      {children}
    </p>
  );
}

function renderTitle(title: string, highlight?: string) {
  if (!highlight || !title.includes(highlight)) return title;
  const [before, after] = title.split(highlight);
  return (
    <>
      {before}
      <span className="text-accent-text">{highlight}</span>
      {after}
    </>
  );
}

export function Heading({
  level = 2,
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  className,
  id,
  children,
}: HeadingProps) {
  const Tag = `h${level}` as const;

  return (
    <div className={cn("space-y-5", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <Eyebrow className={align === "center" ? "justify-center" : undefined}>{eyebrow}</Eyebrow> : null}
      <Tag id={id} className={cn("text-foreground", headingSizes[level])}>
        {renderTitle(title, highlight)}
      </Tag>
      {description ? (
        <p
          className={cn(
            "max-w-[40rem] text-pretty text-base leading-relaxed text-foreground-muted sm:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
