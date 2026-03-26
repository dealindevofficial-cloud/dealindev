import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Card, Heading } from "@/components/ui";
import { routes } from "@/lib/routes";

type FuturePageIntroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function FuturePageIntro({ eyebrow, title, description }: FuturePageIntroProps) {
  return (
    <Section className="pb-8">
      <Card className="space-y-6 border-dashed border-surface-border/80 bg-slate-950/35 p-8 md:p-10">
        <Heading
          level={1}
          eyebrow={eyebrow}
          title={title}
          description={description}
          className="max-w-3xl"
        />
        <p className="text-sm text-foreground-muted">
          This section is reserved for upcoming content.{" "}
          <Link
            href={routes.contact}
            className="font-medium text-primary transition hover:text-primary-strong"
          >
            Get in touch
          </Link>{" "}
          to discuss your project today.
        </p>
      </Card>
    </Section>
  );
}
