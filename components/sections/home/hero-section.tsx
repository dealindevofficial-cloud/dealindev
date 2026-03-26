"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion";
import { Card } from "@/components/ui";
import { heroCapabilityStrip, heroContent, heroOutcomePanel } from "@/data/home";
import { staggerDelay } from "@/lib/motion";
import { routes } from "@/lib/routes";

export function HeroSection() {
  return (
    <Section className="pt-12 md:pt-20">
      <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <Reveal className="space-y-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-readable">
            {heroContent.eyebrow}
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {heroContent.title}
          </h1>
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-foreground-muted sm:text-lg lg:pr-8">
            {heroContent.description}
          </p>
          <div className="flex flex-wrap gap-3.5">
            <Link
              href={routes.bookACall}
              className="focus-ring group inline-flex h-12 items-center justify-center gap-2 rounded-md border border-primary/70 bg-gradient-to-r from-primary via-sky-400 to-primary-strong px-7 text-base font-semibold text-slate-950 shadow-[0_14px_40px_-18px_rgba(56,189,248,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_22px_48px_-20px_rgba(56,189,248,0.95)] active:translate-y-0"
            >
              {heroContent.primaryCta.label}
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                →
              </span>
            </Link>
            <Link
              href={routes.services}
              className="focus-ring inline-flex h-12 items-center justify-center rounded-md border border-slate-400/35 bg-slate-900/55 px-7 text-base font-medium text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-slate-800/70"
            >
              {heroContent.secondaryCta.label}
            </Link>
          </div>

          <div
            aria-label={heroCapabilityStrip.ariaLabel}
            className="flex flex-wrap items-center gap-2.5 pt-2"
          >
            {heroCapabilityStrip.points.map((point, index) => (
              <Reveal key={point} delay={staggerDelay(index, 0.045)} y={8}>
                <span className="inline-flex items-center rounded-full border border-slate-400/25 bg-slate-900/45 px-3.5 py-1.5 text-xs font-medium tracking-wide text-foreground/85 backdrop-blur-sm">
                  {point}
                </span>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={staggerDelay(1, 0.07)} className="min-w-0">
          <Card className="relative overflow-hidden border-primary/25 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-950/95 p-7 md:p-8">
            <div
              aria-hidden
              className="absolute -right-16 -top-20 h-52 w-52 rounded-full bg-primary/30 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-24 -left-14 h-56 w-56 rounded-full bg-secondary/30 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40"
            />

            <div className="relative space-y-4 md:space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <Reveal delay={staggerDelay(1, 0.05)} y={8}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="rounded-xl border border-slate-300/15 bg-slate-950/85 p-4 shadow-[0_20px_45px_-26px_rgba(59,130,246,0.75)] backdrop-blur"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary-readable/90">
                      AI Agent Stack
                    </p>
                    <div className="mt-3 space-y-2.5">
                      <div className="rounded-md border border-slate-300/10 bg-slate-900/80 px-3 py-2 text-xs text-foreground/90">
                        AI calling agents
                      </div>
                      <div className="rounded-md border border-primary/35 bg-primary/10 px-3 py-2 text-xs text-primary-readable">
                        Chatbot support flows
                      </div>
                      <div className="rounded-md border border-secondary/40 bg-secondary/10 px-3 py-2 text-xs text-foreground/90">
                        Automation triggers + routing
                      </div>
                    </div>
                  </motion.div>
                </Reveal>

                <Reveal delay={staggerDelay(2, 0.05)} y={8}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="rounded-xl border border-slate-300/15 bg-slate-950/85 p-4 shadow-[0_20px_45px_-26px_rgba(168,85,247,0.75)] backdrop-blur"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-foreground/85">
                      Delivery Metrics
                    </p>
                    <div className="mt-3 space-y-2.5">
                      <div className="flex items-center justify-between rounded-md border border-slate-300/10 bg-slate-900/80 px-3 py-2 text-xs">
                        <span className="text-foreground/85">Agents live</span>
                        <span className="text-primary-readable">99.9%</span>
                      </div>
                      <div className="flex items-center justify-between rounded-md border border-slate-300/10 bg-slate-900/80 px-3 py-2 text-xs">
                        <span className="text-foreground/85">Avg response time</span>
                        <span className="text-foreground/95">1.4s</span>
                      </div>
                      <div className="flex items-center justify-between rounded-md border border-slate-300/10 bg-slate-900/80 px-3 py-2 text-xs">
                        <span className="text-foreground/85">Automations deployed</span>
                        <span className="text-foreground/95">24</span>
                      </div>
                    </div>
                  </motion.div>
                </Reveal>
              </div>

              <Reveal delay={staggerDelay(3, 0.05)} y={8}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="rounded-xl border border-slate-300/15 bg-slate-950/90 p-5 shadow-[0_28px_55px_-28px_rgba(56,189,248,0.8)] backdrop-blur"
                >
                  <p className="text-sm font-medium text-primary-readable">{heroOutcomePanel.title}</p>
                  <ul className="mt-3 list-none space-y-2.5 text-sm text-foreground/88">
                    {heroOutcomePanel.bullets.map((line) => (
                      <li key={line} className="flex gap-2">
                        <span aria-hidden className="text-primary-readable">
                          –
                        </span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Reveal>
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
