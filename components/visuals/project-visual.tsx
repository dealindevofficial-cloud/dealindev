import type { PortfolioPreview } from "@/data/portfolio";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div aria-hidden className="tone-dark relative h-48 overflow-hidden rounded-t-[var(--radius-lg)] bg-background">
      <div className="bg-mesh absolute inset-0 opacity-80" />
      <div className="bg-dot-grid absolute inset-0 opacity-60" />
      <div className="absolute inset-x-6 bottom-0 top-7 rounded-t-[var(--radius-md)] border border-b-0 border-surface-border bg-surface/90 p-4 transition-transform duration-500 ease-out group-hover:-translate-y-2">
        {children}
      </div>
    </div>
  );
}

/** Small code-built product mockup for each portfolio card. */
export function ProjectVisual({ kind }: { kind: PortfolioPreview["visual"] }) {
  if (kind === "dashboard") {
    return (
      <Frame>
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-9 flex-1 rounded-md border border-surface-border bg-background/60" />
          ))}
        </div>
        <div className="mt-3 flex h-20 items-end gap-1.5">
          {[30, 45, 40, 60, 55, 72, 68, 85, 90].map((h, i) => (
            <span key={i} className="flex-1 rounded-t bg-[linear-gradient(180deg,#34d399,#059669)]" style={{ height: `${h}%`, opacity: 0.5 + i * 0.06 }} />
          ))}
        </div>
      </Frame>
    );
  }

  if (kind === "booking") {
    return (
      <Frame>
        <div className="grid grid-cols-7 gap-1.5">
          {Array.from({ length: 21 }).map((_, i) => (
            <span
              key={i}
              className={
                i === 9
                  ? "h-6 rounded bg-accent"
                  : i % 5 === 0
                    ? "h-6 rounded bg-accent-soft ring-1 ring-accent/40"
                    : "h-6 rounded bg-background/60"
              }
            />
          ))}
        </div>
        <div className="mt-3 h-8 w-2/3 rounded-full bg-primary/90" />
      </Frame>
    );
  }

  return (
    <Frame>
      <div className="space-y-2.5">
        <div className="ml-auto w-3/5 rounded-xl rounded-br-sm bg-accent-soft px-3 py-2">
          <div className="h-2 w-full rounded bg-accent/60" />
        </div>
        <div className="w-4/5 rounded-xl rounded-bl-sm border border-surface-border bg-background/60 px-3 py-2">
          <div className="h-2 w-full rounded bg-foreground/30" />
          <div className="mt-1.5 h-2 w-2/3 rounded bg-foreground/20" />
        </div>
        <div className="ml-auto w-2/5 rounded-xl rounded-br-sm bg-accent-soft px-3 py-2">
          <div className="h-2 w-full rounded bg-accent/60" />
        </div>
      </div>
    </Frame>
  );
}
