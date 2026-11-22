import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion";
import { ArrowIcon, buttonVariants, Eyebrow } from "@/components/ui";
import { AscendMotif, GlowBackdrop, HeroDashboard } from "@/components/visuals";
import { heroCapabilityStrip, heroContent } from "@/data/home";
import { routes } from "@/lib/routes";

export function HeroSection() {
  const [before, after] = heroContent.title.split(heroContent.highlight);

  return (
    <Section
      tone="dark"
      className="pb-24 pt-16 md:pb-32 md:pt-24"
      aria-labelledby="hero-title"
      background={
        <>
          <GlowBackdrop />
          <AscendMotif className="-left-24 bottom-[-8rem] h-[38rem]" />
        </>
      }
    >
      <div className="grid items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
        <div className="space-y-8">
          <Reveal>
            <Eyebrow>{heroContent.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 id="hero-title" className="max-w-[16ch] text-[2.75rem] text-foreground sm:text-6xl lg:text-[4.4rem]">
              {before}
              <span className="text-gradient-brand">{heroContent.highlight}</span>
              {after}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="max-w-[36rem] text-pretty text-lg leading-relaxed text-foreground-muted">
              {heroContent.description}
            </p>
          </Reveal>
          <Reveal delay={0.18} className="flex flex-wrap gap-4">
            <Link href={routes.contact} className={buttonVariants({ size: "lg" })}>
              {heroContent.primaryCta.label}
              <ArrowIcon />
            </Link>
            <Link href={routes.services} className={buttonVariants({ variant: "secondary", size: "lg" })}>
              {heroContent.secondaryCta.label}
            </Link>
          </Reveal>
          <Reveal delay={0.24}>
            <ul aria-label={heroCapabilityStrip.ariaLabel} className="flex flex-wrap gap-x-6 gap-y-3 pt-4 text-sm text-foreground-muted">
              {heroCapabilityStrip.points.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <svg aria-hidden viewBox="0 0 16 16" className="h-4 w-4 text-accent">
                    <path d="m3.5 8.5 3 3 6-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15} y={24}>
          <HeroDashboard />
        </Reveal>
      </div>
    </Section>
  );
}
