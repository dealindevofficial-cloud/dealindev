import { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Textarea({
  className,
  rows = 5,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      rows={rows}
      className={cn(
        "focus-ring min-h-32 w-full rounded-md border border-surface-border bg-background-elevated px-4 py-3 text-base text-foreground placeholder:text-foreground-muted/80 md:min-h-28 md:text-sm",
        className,
      )}
      {...props}
    />
  );
}
