"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "@/components/layout/container";
import { primaryNavigation } from "@/data/navigation";
import { motionTransitionFast } from "@/lib/motion";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

const MotionLink = motion(Link);

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        isScrolled
          ? "border-surface-border/70 bg-slate-950/85 shadow-md backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-6">
          <Link
            href={routes.home}
            className="focus-ring rounded-sm text-lg font-bold tracking-tight transition-opacity hover:opacity-90"
          >
            <span className="text-gradient-brand">Deal in Dev</span>
          </Link>

          <nav className="hidden items-center gap-0.5 md:flex" aria-label="Primary">
            {primaryNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-md px-3 py-2 text-sm font-medium text-foreground-muted transition-colors hover:bg-slate-800/40 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <MotionLink
              href={routes.bookACall}
              transition={motionTransitionFast}
              whileHover={reduceMotion ? undefined : { y: -1 }}
              whileTap={reduceMotion ? undefined : { scale: 0.985 }}
              className="focus-ring inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-slate-950 shadow-md transition-colors duration-200 hover:bg-primary-strong hover:shadow-lg"
            >
              Book a Call
            </MotionLink>
          </div>

          <button
            type="button"
            className="focus-ring inline-flex h-11 min-h-11 min-w-11 w-11 items-center justify-center rounded-md border border-surface-border bg-surface/60 text-foreground md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <div className="relative h-3.5 w-4">
              <span
                className={cn(
                  "absolute left-0 top-0 h-0.5 w-4 bg-current transition-all",
                  isOpen && "top-[6px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[6px] h-0.5 w-4 bg-current transition-opacity",
                  isOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-3 h-0.5 w-4 bg-current transition-all",
                  isOpen && "top-[6px] -rotate-45",
                )}
              />
            </div>
          </button>
        </div>

        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className={cn(
            "grid transition-all duration-300 md:hidden",
            isOpen ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]",
          )}
        >
          <div className="overflow-hidden" inert={!isOpen || undefined}>
            <div className="surface-card space-y-2 rounded-lg p-3">
              {primaryNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="focus-ring block rounded-md px-3 py-2 text-sm text-foreground-muted transition hover:bg-slate-800/70 hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <MotionLink
                href={routes.bookACall}
                transition={motionTransitionFast}
                whileHover={reduceMotion ? undefined : { y: -1 }}
                whileTap={reduceMotion ? undefined : { scale: 0.985 }}
                className="focus-ring mt-2 inline-flex h-9 w-full items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-slate-950 shadow-md transition-colors duration-200 hover:bg-primary-strong hover:shadow-lg"
              >
                Book a Call
              </MotionLink>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
