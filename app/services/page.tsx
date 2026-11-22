import Link from "next/link";
import { Section } from "@/components/layout";
import { Reveal } from "@/components/motion";
import { CtaBand, PageHero, ProcessTimeline } from "@/components/sections/shared";
import { JsonLd } from "@/components/seo/json-ld";
import { ArrowIcon, buttonVariants, Card, Heading } from "@/components/ui";
import { ServiceIcon } from "@/components/visuals";
import { serviceBenefits, servicePillars, serviceProcessSteps, servicesPageCopy } from "@/data/services";
import { siteBrand } from "@/data/site";
import { routes } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Web Development, App & AI Automation Services",
  description:
    "Custom website development, web and mobile app development, and AI automation services for US businesses. Scoped around measurable outcomes and built to scale.",
  path: routes.services,
});

const servicesJsonLd = servicePillars.map((p) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: p.title,
  description: p.summary,
  serviceType: p.title,
  url: `${siteBrand.url}${routes.services}#${p.slug}`,
  provider: { "@id": `${siteBrand.url}/#organization` },
  areaServed: { "@type": "Country", name: siteBrand.areaServed },
}));

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-foreground-muted">
          <svg aria-hidden viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0 text-accent">
            <path d="m3.5 8.5 3 3 6-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ServicesPage() {
  const { hero, benefits, process, closingCta } = servicesPageCopy;

  return (
    <>
      <JsonLd data={servicesJsonLd} />
      <PageHero {...hero} breadcrumbs={[{ name: "Services", path: routes.services }]}>
        <nav aria-label="Service areas" className="flex flex-wrap gap-3">
          {servicePillars.map((p) => (
            <Link
              key={p.slug}
              href={`#${p.slug}`}
              className="focus-ring rounded-full border border-surface-border bg-surface px-4 py-2 text-sm font-medium text-foreground/90 transition-colors hover:border-accent hover:text-accent"
            >
              {p.title}
            </Link>
          ))}
        </nav>
      </PageHero>

      {servicePillars.map((pillar, index) => (
        <Section key={pillar.slug} id={pillar.slug} tone={index % 2 === 0 ? "light" : "tint"} aria-labelledby={`${pillar.slug}-title`}>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <Reveal className="min-w-0 space-y-6">
              <ServiceIcon name={pillar.icon} />
              <h2 id={`${pillar.slug}-title`} className="text-3xl break-words text-foreground sm:text-4xl">
                {pillar.title}
              </h2>
              <p className="max-w-[36rem] text-lg leading-relaxed text-foreground-muted">{pillar.summary}</p>
              <Link
                href={pillar.icon === "ai" ? routes.aiSolutions : routes.contact}
                className={buttonVariants({
                  variant: "secondary",
                  className: "h-auto min-h-12 max-w-full py-3 text-center whitespace-normal sm:whitespace-nowrap",
                })}
              >
                {pillar.icon === "ai" ? "Explore AI solutions" : `Discuss your ${pillar.title.toLowerCase()} project`}
                <ArrowIcon />
              </Link>
            </Reveal>
            <Reveal delay={0.1} className="grid min-w-0 gap-5 sm:grid-cols-2 lg:grid-cols-1">
              <Card>
                <h3 className="label text-accent-text">Business outcomes</h3>
                <div className="mt-5">
                  <Bullets items={pillar.outcomes} />
                </div>
              </Card>
              <Card>
                <h3 className="label text-accent-text">What you get</h3>
                <div className="mt-5">
                  <Bullets items={pillar.deliverables} />
                </div>
              </Card>
            </Reveal>
          </div>
        </Section>
      ))}

      <Section tone="dark" aria-labelledby="benefits-title">
        <Reveal>
          <Heading id="benefits-title" {...benefits} />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {serviceBenefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 0.08} className="h-full">
              <Card interactive className="h-full">
                <span className="text-gradient-brand text-4xl font-bold">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 text-xl text-foreground">{benefit.title}</h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-foreground-muted">{benefit.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="process" tone="light" aria-labelledby="process-title">
        <Reveal>
          <Heading id="process-title" {...process} />
        </Reveal>
        <div className="mt-16">
          <ProcessTimeline steps={serviceProcessSteps.map((s) => ({ title: s.title, detail: s.detail }))} />
        </div>
      </Section>

      <CtaBand
        eyebrow={closingCta.eyebrow}
        title={closingCta.title}
        description={closingCta.description}
        primaryLabel={closingCta.primaryCta}
        secondaryLabel={closingCta.secondaryCta}
        secondaryHref={routes.aiSolutions}
      />
    </>
  );
}
