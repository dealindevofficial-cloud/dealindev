import Link from "next/link";
import { Container } from "@/components/layout/container";
import { footerLinkGroups } from "@/data/navigation";
import { siteBrand } from "@/data/site";
import { routes } from "@/lib/routes";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-surface-border/70 bg-slate-950/50">
      <Container className="py-14">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div className="max-w-sm space-y-4">
            <p className="text-lg font-bold tracking-tight">
              <span className="text-gradient-brand">{siteBrand.name}</span>
            </p>
            <p className="text-sm text-foreground-muted">{siteBrand.tagline}</p>
            <Link
              href={routes.bookACall}
              className="focus-ring inline-flex rounded-sm text-sm font-medium text-primary transition hover:text-primary-strong"
            >
              Book a Call
            </Link>
          </div>

          <nav aria-label="Site sections" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerLinkGroups.map((group) => (
              <div key={group.title} className="space-y-3">
                <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground-muted">
                  {group.title}
                </h2>
                <ul className="space-y-2">
                  {group.links.map((link) => (
                    <li key={`${group.title}-${link.label}`}>
                      <Link
                        href={link.href}
                        className="focus-ring rounded-sm text-sm text-foreground/90 transition hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-12 border-t border-surface-border/70 pt-5 text-xs text-foreground-muted">
          <p>© {new Date().getFullYear()} Deal in Dev. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
