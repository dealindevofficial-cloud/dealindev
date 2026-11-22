import type { CSSProperties, ElementType, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type RevealProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  delay?: number;
  y?: number;
};

/**
 * Server-rendered reveal wrapper. Content is always in the HTML and visible
 * without JavaScript; `RevealObserver` adds `data-inview` to animate it in.
 */
export function Reveal({ as: Tag = "div", delay = 0, y = 16, className, style, ...rest }: RevealProps) {
  return (
    <Tag
      data-reveal=""
      className={cn(className)}
      style={{ "--reveal-delay": `${delay}s`, "--reveal-y": `${y}px`, ...style } as CSSProperties}
      {...rest}
    />
  );
}
