import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Workflow } from "lucide-react";

import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Container } from "@/components/common/Container";
import { GlassPanel } from "@/components/premium/GlassPanel";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Button } from "@/components/ui/button";
import { contact } from "@/data/contact";
import { services } from "@/data/services";
import { createMailtoUrl, createWhatsAppUrl } from "@/lib/contact-links";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Freelance services by Sk Ashfaq Bux including business website development, website fixing, Spring Boot APIs, admin dashboards, testing automation, and business automation tools.",
};

const focusBadges = [
  "Spring Boot APIs",
  "Admin Dashboards",
  "Testing Automation",
  "Business Websites",
];

const quickStartExamples = [
  "Website fix",
  "Landing page",
  "API module",
  "Dashboard screen",
  "Testing task",
];

export default function ServicesPage() {
  const whatsappUrl = createWhatsAppUrl(contact.whatsapp);
  const emailUrl = createMailtoUrl({
    to: contact.email,
    subject: "Service inquiry from portfolio",
  });

  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden border-b border-white/10 pb-12 pt-16 sm:pb-14 sm:pt-20 lg:pb-16 lg:pt-24">
        <div className="premium-grid-bg absolute inset-0 -z-20 opacity-60" />
        <div className="absolute -left-16 top-0 -z-10 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 -z-10 h-64 w-64 rounded-full bg-accent/22 blur-3xl" />

        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-cyan-200/90">
              Services
            </p>

            <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Build business-ready systems with clear outcomes, not vague scope.
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
              Hire me for practical website, backend, dashboard, testing, and
              automation milestones that move your business forward step by step.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-2.5">
              {focusBadges.map((badge) => (
                <span
                  key={badge}
                  className="motion-fast premium-hover-lift inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.06] px-3.5 py-1.5 text-xs text-slate-200"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-cyan-300" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <AnimatedSection delay={0.03}>
        <section className="pb-16 pt-10 sm:pb-20 sm:pt-12">
          <Container>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </Container>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.06}>
        <section className="pb-8 sm:pb-10">
          <Container>
            <GlassPanel
              className="motion-normal premium-hover-lift border-white/10 bg-card/70"
              padding="lg"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl">
                  <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-cyan-200/90">
                    Service Selection
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                    Start small with a clear milestone.
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                    Good first milestones help us move fast, reduce risk, and plan the
                    next step with real results from your first delivery.
                  </p>
                </div>

                <div className="motion-fast premium-hover-lift rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-5">
                  <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.09em] text-slate-300">
                    Quick Start Examples
                  </p>
                  <ul className="space-y-2.5">
                    {quickStartExamples.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-200">
                        <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-cyan-300/80" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlassPanel>
          </Container>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <section className="pb-20 pt-10">
          <Container>
            <GlassPanel
              className="motion-normal premium-hover-lift relative overflow-hidden border-white/10 bg-card/72"
              padding="lg"
            >
              <div className="absolute -left-16 top-0 -z-10 h-52 w-52 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute -bottom-20 right-0 -z-10 h-56 w-56 rounded-full bg-accent/22 blur-3xl" />

              <div className="mx-auto max-w-4xl text-center">
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-cyan-200/90">
                  Planning Support
                </p>
                <h2 className="mt-4 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Not sure which service you need?
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
                  Start with a small milestone and we can plan the next step after
                  the first result works.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="motion-fast premium-hover-lift h-11 bg-primary text-primary-foreground shadow-[0_10px_28px_rgb(0_229_255_/_24%)] hover:bg-primary/90"
                  >
                    <a href={whatsappUrl} target="_blank" rel="noreferrer">
                      Start Project
                    </a>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="motion-fast premium-hover-lift h-11 border-white/15 bg-white/5 text-foreground hover:border-cyan-300/35 hover:bg-white/10 hover:text-cyan-100"
                  >
                    <a href={emailUrl}>Email Me</a>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="motion-fast premium-hover-lift h-11 border-white/15 bg-transparent text-foreground hover:border-cyan-300/35 hover:bg-cyan-300/10 hover:text-cyan-100"
                  >
                    <Link href="/projects">
                      View Roadmap
                      <Workflow className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </GlassPanel>
          </Container>
        </section>
      </AnimatedSection>
    </main>
  );
}
