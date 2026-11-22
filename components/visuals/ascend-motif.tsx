import { cn } from "@/lib/utils";

/** Oversized, faint "Ascend d" shapes used as a section ornament. */
export function AscendMotif({ className }: { className?: string }) {
  return (
    <svg viewBox="144 76 224 360" aria-hidden className={cn("absolute h-[32rem] w-auto opacity-[0.06]", className)}>
      <path fill="var(--logo-bowl)" d="M270.53 183.35A125.92 125.92 0 0 0 270.53 435.20Z" />
      <path fill="var(--logo-stem)" d="M289.90 154.29L367.39 76.80L367.39 435.20L289.90 435.20Z" />
    </svg>
  );
}

/** Soft emerald glow + dot grid backdrop. */
export function GlowBackdrop({ className, grid = true }: { className?: string; grid?: boolean }) {
  return (
    <>
      <div className={cn("bg-mesh absolute inset-0", className)} />
      {grid ? <div className="bg-dot-grid mask-fade-b absolute inset-0" /> : null}
    </>
  );
}
