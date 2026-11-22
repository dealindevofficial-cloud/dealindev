import Link from "next/link";
import type { ReactNode } from "react";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion";
import { JsonLd } from "@/components/seo/json-ld";
import { Eyebrow } from "@/components/ui";
import { AscendMotif, GlowBackdrop } from "@/components/visuals";
import { breadcrumbJsonLd } from "@/lib/seo";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  /** Breadcrumb trail after Home, e.g. [{ name: "Services", path: "/services" }] */
  breadcrumbs: { name: string; path: string }[];
  children?: ReactNode;
  aside?: ReactNode;
};

export function PageHero({ eyebrow, title, highlight, description, breadcrumbs, children, aside }: PageHeroProps) {
  const trail = [{ name: "Home", path: "/" }, ...breadcrumbs];
  const parts = highlight && title.includes(highlight) ? title.split(highlight) : null;

  return (
    <Section
      tone="dark"
      className="pb-20 pt-14 md:pb-28 md:pt-20"
      aria-labelledby="page-title"
      background={
        <>
          <GlowBackdrop />
          <AscendMotif className="-right-16 bottom-[-10rem] h-[34rem]" />
        </>
      }
    >
      <JsonLd data={breadcrumbJsonLd(trail)} />
      <div className={aside ? "grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]" : undefined}>
        <div className="space-y-7">
          <Reveal>
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-foreground-muted">
                {trail.map((item, i) => (
                  <li key={item.path} className="flex items-center gap-2">
                    {i < trail.length - 1 ? (
                      <>
                        <Link href={item.path} className="focus-ring rounded-sm transition-colors hover:text-accent">
                          {item.name}
                        </Link>
                        <span aria-hidden>/</span>
                      </>
                    ) : (
                      <span aria-current="page" className="text-foreground">
                        {item.name}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </Reveal>
          <Reveal delay={0.05}>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 id="page-title" className="max-w-[20ch] text-[2.5rem] text-foreground sm:text-5xl lg:text-[3.75rem]">
              {parts ? (
                <>
                  {parts[0]}
                  <span className="text-gradient-brand">{highlight}</span>
                  {parts[1]}
                </>
              ) : (
                title
              )}
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-[40rem] text-pretty text-lg leading-relaxed text-foreground-muted">{description}</p>
          </Reveal>
          {children ? <Reveal delay={0.2}>{children}</Reveal> : null}
        </div>
        {aside ? (
          <Reveal delay={0.15} y={24}>
            {aside}
          </Reveal>
        ) : null}
      </div>
    </Section>
  );
}
