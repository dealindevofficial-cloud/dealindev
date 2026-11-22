import { cn } from "@/lib/utils";

/** "Ascend d" mark: half-disc bowl + rising stem. Colors follow the section tone. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="144 76 224 360" aria-hidden className={cn("h-7 w-auto min-h-4 shrink-0", className)}>
      <path fill="var(--logo-bowl)" d="M270.53 183.35A125.92 125.92 0 0 0 270.53 435.20Z" />
      <path fill="var(--logo-stem)" d="M289.90 154.29L367.39 76.80L367.39 435.20L289.90 435.20Z" />
    </svg>
  );
}

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { mark: "h-6", text: "text-xl" },
  md: { mark: "h-7", text: "text-[1.45rem]" },
  lg: { mark: "h-10", text: "text-4xl" },
};

/** Horizontal lockup: mark + lowercase "dealindev" wordmark (Bold 700, -0.045em, "dev" in accent). */
export function Logo({ className, size = "md" }: LogoProps) {
  return (
    <span className={cn("inline-flex min-w-24 items-center gap-2.5", className)} aria-label="Deal in Dev" role="img">
      <LogoMark className={sizes[size].mark} />
      <span aria-hidden className={cn("font-bold leading-none tracking-[-0.045em]", sizes[size].text)}>
        <span style={{ color: "var(--logo-word)" }}>dealin</span>
        <span style={{ color: "var(--logo-dev)" }}>dev</span>
      </span>
    </span>
  );
}
