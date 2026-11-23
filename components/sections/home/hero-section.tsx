import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion";
import { ArrowIcon, buttonVariants, Eyebrow } from "@/components/ui";
import { AscendMotif, GlowBackdrop } from "@/components/visuals";
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
      <div className="mx-auto max-w-5xl space-y-8 text-center">
          <Reveal>
            <Eyebrow line={false}>{heroContent.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 id="hero-title" className="mx-auto max-w-[20ch] text-balance text-[2.75rem] text-foreground sm:text-6xl lg:text-[5rem]">
              {before}
              <span className="text-gradient-brand">{heroContent.highlight}</span>
              {after}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto max-w-[44rem] text-pretty text-lg md:text-xl leading-relaxed text-foreground-muted">
              {heroContent.description}
            </p>
          </Reveal>
          <Reveal delay={0.18} className="flex flex-wrap justify-center gap-4">
            <Link href={routes.contact} className={buttonVariants({ size: "lg" })}>
              {heroContent.primaryCta.label}
              <ArrowIcon />
            </Link>
            <Link href={routes.services} className={buttonVariants({ variant: "secondary", size: "lg" })}>
              {heroContent.secondaryCta.label}
            </Link>
          </Reveal>
          <Reveal delay={0.24}>
            <ul aria-label={heroCapabilityStrip.ariaLabel} className="flex flex-wrap justify-center gap-x-6 gap-y-3 pt-4 text-sm text-foreground-muted">
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
    </Section>
  );
}
