import { Fragment } from "react";
import { ServiceIcon, type IconName } from "@/components/visuals/service-icon";

const nodes: { icon: IconName; title: string; detail: string }[] = [
  { icon: "chat", title: "New lead", detail: "Website, chat or phone" },
  { icon: "ai", title: "AI agent", detail: "Answers and qualifies" },
  { icon: "systems", title: "CRM sync", detail: "Data logged and routed" },
  { icon: "calendar", title: "Your team", detail: "Booked call, ready to close" },
];

/** Animated workflow diagram: lead to AI agent to CRM to team. */
export function AiFlow() {
  return (
    <figure className="relative">
      <figcaption className="sr-only">
        How an AI agent workflow runs: a new lead arrives, the AI agent answers and qualifies it, the CRM is updated
        automatically, and your team receives a booked call.
      </figcaption>
      <div className="flex flex-col items-stretch lg:flex-row lg:items-center">
        {nodes.map((node, i) => (
          <Fragment key={node.title}>
            <div className="relative flex items-center gap-4 rounded-[var(--radius-lg)] border border-surface-border bg-surface p-5 shadow-sm lg:flex-1 lg:flex-col lg:text-center">
              {i === 1 ? (
                <span aria-hidden className="absolute -inset-px rounded-[var(--radius-lg)] ring-1 ring-accent/60 shadow-[0_0_40px_-8px_var(--glow)]" />
              ) : null}
              <ServiceIcon name={node.icon} />
              <div>
                <p className="font-semibold text-foreground">{node.title}</p>
                <p className="mt-1 text-sm text-foreground-muted">{node.detail}</p>
              </div>
            </div>
            {i < nodes.length - 1 ? (
              <div aria-hidden className="relative mx-auto h-10 w-px bg-surface-border lg:mx-0 lg:h-px lg:w-auto lg:min-w-10 lg:flex-[0.35]">
                <span
                  className="flow-dot absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_12px_var(--glow)] max-lg:left-1/2 lg:top-1/2"
                  style={{ animationDelay: `${i * 0.6}s` }}
                />
              </div>
            ) : null}
          </Fragment>
        ))}
      </div>
    </figure>
  );
}
