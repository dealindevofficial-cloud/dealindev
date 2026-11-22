import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion";
import { Heading } from "@/components/ui";
import { testimonials, testimonialsSection } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <Section tone="light" aria-labelledby="testimonials-title">
      <Reveal>
        <Heading id="testimonials-title" align="center" {...testimonialsSection} />
      </Reveal>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, index) => (
          <Reveal
            as="figure"
            key={t.name}
            delay={index * 0.08}
            className="relative flex flex-col rounded-[var(--radius-lg)] border border-surface-border bg-surface p-8 shadow-sm"
          >
            <svg aria-hidden viewBox="0 0 32 24" className="h-7 w-9 text-accent">
              <path
                fill="currentColor"
                d="M0 24V14C0 6.3 4.2 1.6 12.6 0l1.3 3.3C9.4 4.6 7.2 7.2 6.9 11H13v13H0Zm19 0V14c0-7.7 4.2-12.4 12.6-14l1.3 3.3c-4.5 1.3-6.7 3.9-7 7.7H32v13H19Z"
              />
            </svg>
            <blockquote className="mt-6 flex-1 text-[1.05rem] leading-relaxed text-foreground">“{t.quote}”</blockquote>
            <figcaption className="mt-8 flex items-center gap-3.5 border-t border-surface-border pt-6">
              <span
                aria-hidden
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#059669,#34d399)] text-sm font-bold text-[#04120d]"
              >
                {t.name.charAt(0)}
              </span>
              <span>
                <span className="block font-semibold text-foreground">{t.name}</span>
                <span className="block text-sm text-foreground-muted">
                  {t.role}, {t.businessType}
                </span>
              </span>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
