import { Section } from "@/components/layout";
import { CountUp, Reveal } from "@/components/motion";
import { CtaBand, PageHero } from "@/components/sections/shared";
import { Heading } from "@/components/ui";
import { ProjectVisual } from "@/components/visuals";
import { portfolioPreviews } from "@/data/portfolio";
import { routes } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our Work: Web, App & AI Automation Projects",
  description:
    "Explore Deal in Dev projects: custom web apps, booking platforms and AI automation systems built to improve operations and growth for US businesses.",
  path: routes.work,
});

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Systems that deliver measurable business results."
        highlight="measurable business results"
        description="A selection of websites, custom apps and AI automations we have designed and built. Each project started with a business goal and ended with a measurable outcome."
        breadcrumbs={[{ name: "Work", path: routes.work }]}
      />

      <Section tone="light" aria-labelledby="projects-title">
        <Reveal>
          <Heading
            id="projects-title"
            eyebrow="Featured Projects"
            title="Selected builds across web, apps and AI."
            description="Full case studies are on the way. Ask us for examples relevant to your industry."
          />
        </Reveal>
        <div className="mt-14 space-y-8">
          {portfolioPreviews.map((project, index) => (
            <Reveal key={project.name} delay={0.05}>
              <article className="group grid overflow-hidden rounded-[var(--radius-xl)] border border-surface-border bg-surface shadow-sm transition-shadow duration-300 hover:shadow-md md:grid-cols-2">
                <div className={index % 2 === 1 ? "md:order-2" : undefined}>
                  <div className="h-full [&>div]:h-full [&>div]:min-h-64 [&>div]:rounded-none">
                    <ProjectVisual kind={project.visual} />
                  </div>
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <p className="label text-accent-text">{project.category}</p>
                  <h3 className="mt-3 text-2xl text-foreground sm:text-3xl">{project.name}</h3>
                  <p className="mt-4 leading-relaxed text-foreground-muted">{project.summary}</p>
                  <p className="mt-3 leading-relaxed text-foreground">{project.impact}</p>
                  <div className="mt-8 flex items-baseline gap-3 border-t border-surface-border pt-6">
                    <span className="text-gradient-brand text-4xl font-bold tracking-tight">
                      <CountUp value={project.metric.value} suffix={project.metric.suffix} />
                    </span>
                    <span className="text-sm text-foreground-muted">{project.metric.label}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="Your Project Next"
        title="Want results like these for your business?"
        description="Tell us what you want to build, improve or automate, and we will share relevant examples and a clear plan."
      />
    </>
  );
}
