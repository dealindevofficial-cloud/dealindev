import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion";
import { Heading } from "@/components/ui";
import { AscendMotif } from "@/components/visuals";
import { whyDealInDevSection } from "@/data/home";

export function WhyDealInDevSection() {
  const { differentiators, ...heading } = whyDealInDevSection;

  return (
    <Section tone="tint" aria-labelledby="why-title" background={<AscendMotif className="-right-16 -top-16 h-[36rem]" />}>
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <Heading id="why-title" {...heading} />
        </Reveal>

        <ol className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {differentiators.map((item, index) => (
            <Reveal as="li" key={item.title} delay={index * 0.08} className="border-t-2 border-accent/40 pt-6">
              <span className="text-gradient-brand text-5xl font-bold tracking-tight">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-xl text-foreground">{item.title}</h3>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-foreground-muted">{item.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
