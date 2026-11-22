import { Reveal } from "@/components/motion";

type Step = { title: string; detail: string };

/** Horizontal (desktop) / vertical (mobile) timeline whose connector draws in on scroll. */
export function ProcessTimeline({ steps }: { steps: readonly Step[] }) {
  return (
    <Reveal className="relative">
      <div aria-hidden className="absolute left-[1.4rem] top-0 h-full w-px bg-surface-border lg:left-0 lg:top-[1.4rem] lg:h-px lg:w-full">
        <div className="draw-line h-full w-full bg-[linear-gradient(90deg,#059669,#34d399)]" />
      </div>
      <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-8">
        {steps.map((step, index) => (
          <li key={step.title} className="relative flex gap-5 lg:block">
            <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-[0_0_0_6px_var(--background)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="lg:mt-7">
              <h3 className="text-xl text-foreground">{step.title}</h3>
              <p className="mt-2.5 max-w-xs text-[0.95rem] leading-relaxed text-foreground-muted">{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </Reveal>
  );
}
