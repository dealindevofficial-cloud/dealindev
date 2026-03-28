import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { Section } from "@/components/layout";
import { Reveal } from "@/components/motion";
import { Card, Heading } from "@/components/ui";
import { staggerDelay } from "@/lib/motion";
import { contactInfoBlocks, contactIntro } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact | Deal in Dev",
  description:
    "Connect with Deal in Dev to discuss website development, app delivery, and AI automation tailored to your business workflow.",
};

export default function ContactPage() {
  return (
    <>
      <Section className="pb-8">
        <Reveal>
          <Heading
            level={1}
            eyebrow={contactIntro.eyebrow}
            title={contactIntro.title}
            description={contactIntro.description}
            className="max-w-4xl"
          />
        </Reveal>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <Reveal className="min-w-0">
            <Card className="space-y-8 border border-surface-border/80 bg-gradient-to-br from-background-elevated to-background p-7 shadow-lg shadow-black/30 md:space-y-9 md:p-10">
              <ContactForm />
            </Card>
          </Reveal>

          <div className="space-y-5">
            {contactInfoBlocks.map((block, index) => (
              <Reveal key={block.title} delay={staggerDelay(index)} className="min-w-0">
                <Card className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-readable">
                  {block.title}
                </p>
                {"href" in block ? (
                  <a
                    href={block.href}
                    className="focus-ring inline-flex rounded-sm text-base font-semibold text-foreground transition-colors hover:text-primary"
                  >
                    {block.detail}
                  </a>
                ) : (
                  <p className="text-base font-semibold text-foreground">{block.detail}</p>
                )}
                <p className="text-sm text-foreground-muted">{block.helper}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
