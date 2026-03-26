import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion";
import { Card, Heading } from "@/components/ui";
import { servicesOverviewSection } from "@/data/home";
import { servicePillars } from "@/data/services";
import { staggerDelay } from "@/lib/motion";

const serviceIconStyles: Record<string, string> = {
  "Website Development":
    "from-cyan-400/30 via-sky-400/15 to-blue-500/25 text-cyan-100 ring-cyan-300/30",
  "App Development":
    "from-indigo-400/30 via-blue-500/15 to-violet-500/25 text-indigo-100 ring-indigo-300/30",
  "AI Agents & Automation":
    "from-violet-400/30 via-fuchsia-500/15 to-cyan-500/25 text-violet-100 ring-violet-300/30",
};

const serviceIconLabels: Record<string, string> = {
  "Website Development": "Web",
  "App Development": "App",
  "AI Agents & Automation": "AI",
};

export function ServicesOverviewSection() {
  return (
    <Section className="py-18 md:py-24">
      <Reveal>
        <Heading
          eyebrow={servicesOverviewSection.eyebrow}
          level={2}
          title={servicesOverviewSection.title}
          description={servicesOverviewSection.description}
          className="max-w-3xl"
        />
      </Reveal>
      <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-2 lg:gap-7 lg:grid-cols-3">
        {servicePillars.map((service, index) => (
          <Reveal key={service.title} delay={staggerDelay(index)} className="h-full min-w-0">
            <Card className="group relative h-full overflow-hidden border border-surface-border/75 bg-slate-950/45 p-6 md:p-7 hover:border-primary/45 hover:shadow-lg">
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -right-14 -top-20 h-52 w-52 rounded-full bg-gradient-to-br from-primary/20 to-blue-500/0 blur-2xl" />
              </div>
              <div className="relative flex h-full flex-col">
                <div
                  className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-[0.72rem] font-semibold uppercase tracking-[0.12em] ring-1 backdrop-blur-sm ${serviceIconStyles[service.title] ?? "from-primary/30 to-blue-500/20 text-foreground ring-surface-border"}`}
                >
                  {serviceIconLabels[service.title] ?? "Dev"}
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-foreground">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                  {service.homeOverview.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {service.homeOverview.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-full border border-surface-border/80 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-foreground-subtle"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-surface-border/70 pt-4 text-sm font-semibold text-primary-readable">
                  {service.homeOverview.outcomeLine}
                </p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
