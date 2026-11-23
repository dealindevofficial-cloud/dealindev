import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion";
import { ArrowIcon, buttonVariants, Eyebrow } from "@/components/ui";
import { AscendMotif } from "@/components/visuals";
import { siteBrand } from "@/data/site";
import { routes } from "@/lib/routes";

type CtaBandProps = {
  eyebrow?: string;
  title: string;
  description: string;
  valuePoints?: readonly string[];
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

/** Full-bleed brand-gradient call to action used at the end of every page. */
export function CtaBand({
  eyebrow,
  title,
  description,
  valuePoints,
  primaryLabel = "Book a Free Strategy Call",
  secondaryLabel = "Email Our Team",
  secondaryHref = `mailto:${siteBrand.email}`,
}: CtaBandProps) {
  return (
    <Section
      tone="brand"
      aria-labelledby="cta-title"
      background={
        <>
          <AscendMotif className="-right-10 -top-20 h-[34rem] opacity-[0.12]" />
          <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_10%_100%,rgb(255_255_255/0.25),transparent)]" />
        </>
      }
    >
      <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
        <Reveal className="space-y-6">
          {eyebrow ? <Eyebrow className="font-bold text-[#04120d]!">{eyebrow}</Eyebrow> : null}
          <h2 id="cta-title" className="max-w-[20ch] text-4xl font-extrabold text-[#04120d] sm:text-5xl">
            {title}
          </h2>
          <p className="max-w-[38rem] text-lg font-medium leading-relaxed text-[#04120d]/85">{description}</p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href={routes.contact} className={buttonVariants({ size: "lg" })}>
              {primaryLabel}
              <ArrowIcon />
            </Link>
            <Link href={secondaryHref} className={buttonVariants({
                variant: "secondary",
                size: "lg",
                className: "border-[#04120d]/40! font-semibold text-[#04120d]! hover:border-[#04120d]! hover:bg-white/20!",
              })}
            >
              {secondaryLabel}
            </Link>
          </div>
        </Reveal>

        {valuePoints ? (
          <Reveal delay={0.1}>
            <ul className="space-y-4 rounded-[var(--radius-lg)] border border-white/40 bg-white/30 p-7 backdrop-blur">
              {valuePoints.map((point) => (
                <li key={point} className="flex items-start gap-3 font-semibold text-[#04120d]">
                  <span aria-hidden className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#04120d] text-[#6ee7b7]">
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5">
                      <path d="m3.5 8.5 3 3 6-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        ) : null}
      </div>
    </Section>
  );
}
