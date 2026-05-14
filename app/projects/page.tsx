import type { Metadata } from "next";
import Link from "next/link";
import { FileText, GitBranch, MonitorSmartphone, Workflow } from "lucide-react";

import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Container } from "@/components/common/Container";
import { GlassPanel } from "@/components/premium/GlassPanel";
import { StatusPill } from "@/components/premium/StatusPill";
import { Button } from "@/components/ui/button";
import { contact } from "@/data/contact";
import { roadmapProjects, type RoadmapItem, type RoadmapStatus } from "@/data/roadmap";
import { createMailtoUrl, createWhatsAppUrl } from "@/lib/contact-links";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Portfolio projects by Sk Ashfaq Bux including business websites, Spring Boot API systems, admin dashboards, testing automation frameworks, and small business tools.",
};

const statusHighlights: { status: RoadmapStatus; label: string }[] = [
  { status: "architecture", label: "In Architecture" },
  { status: "building", label: "Building" },
  { status: "testing", label: "Testing" },
  { status: "upcoming", label: "Upcoming" },
];

const roadmapColumns: { status: RoadmapStatus; heading: string }[] = [
  { status: "architecture", heading: "Architecture" },
  { status: "building", heading: "Building" },
  { status: "testing", heading: "Testing" },
  { status: "upcoming", heading: "Upcoming" },
];

function RoadmapCard({ item, compact = false }: { item: RoadmapItem; compact?: boolean }) {
  return (
    <GlassPanel
      padding="sm"
      className={cn(
        "group motion-fast premium-hover-lift border-white/10 bg-card/70 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/35",
        compact ? "h-auto" : "h-full"
      )}
    >
      <div className="flex h-full flex-col">
        <div className="mb-4 flex items-start justify-between gap-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-cyan-200/90">
            {item.id}
          </p>
          <StatusPill status={item.status}>{item.statusLabel}</StatusPill>
        </div>

        <h3 className="text-base font-semibold tracking-tight text-foreground">{item.title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.prove}</p>

        <div className="mt-5 border-t border-white/10 pt-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground">
            Stack: {item.techStack}
          </p>
        </div>

        <div className="mt-auto grid gap-2 pt-4 text-xs text-slate-200">
          <p className="inline-flex items-center gap-2">
            <FileText className="h-3.5 w-3.5 text-cyan-300" />
            {item.caseStudyNote}
          </p>
          <p className="inline-flex items-center gap-2">
            <MonitorSmartphone className="h-3.5 w-3.5 text-cyan-300" />
            {item.liveDemoNote}
          </p>
          <p className="inline-flex items-center gap-2">
            <GitBranch className="h-3.5 w-3.5 text-cyan-300" />
            {item.githubNote}
          </p>
        </div>
      </div>
    </GlassPanel>
  );
}

export default function ProjectsPage() {
  const whatsappUrl = createWhatsAppUrl(contact.whatsapp);
  const emailUrl = createMailtoUrl({
    to: contact.email,
    subject: "Project roadmap inquiry from portfolio",
  });

  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden border-b border-white/10 pb-8 pt-14 sm:pb-10 sm:pt-16 lg:pb-12 lg:pt-20">
        <div className="premium-grid-bg absolute inset-0 -z-20 opacity-60" />
        <div className="absolute -left-20 top-0 -z-10 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 -z-10 h-64 w-64 rounded-full bg-accent/22 blur-3xl" />

        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-cyan-200/90">
              Project Roadmap
            </p>

            <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Practical portfolio builds designed to prove real freelance delivery.
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
              These roadmap projects are being built step by step to showcase how I
              deliver websites, APIs, dashboards, and automation for real business use.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-2.5">
              {statusHighlights.map((item) => (
                <StatusPill key={item.label} status={item.status} className="motion-fast premium-hover-lift">
                  {item.label}
                </StatusPill>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <AnimatedSection delay={0.03}>
        <section className="pb-14 pt-6 sm:pb-16 sm:pt-8">
          <Container>
            <div className="hidden gap-5 lg:grid lg:grid-cols-4">
              {roadmapColumns.map((column) => {
                const items = roadmapProjects.filter((project) => project.status === column.status);

                return (
                  <div
                    key={column.status}
                    className="motion-normal premium-hover-lift rounded-3xl border border-white/10 bg-black/18 p-4"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <h2 className="font-mono text-[12px] uppercase tracking-[0.1em] text-cyan-200">
                        {column.heading}
                      </h2>
                      <span className="rounded-full border border-white/10 px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                        {items.length}
                      </span>
                    </div>

                    <div className="space-y-4">
                      {items.map((item) => (
                        <RoadmapCard key={item.id} item={item} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="space-y-4 lg:hidden">
              {roadmapProjects.map((item) => (
                <RoadmapCard key={item.id} item={item} compact />
              ))}
            </div>
          </Container>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.07}>
        <section className="pb-8 sm:pb-10">
          <Container>
            <GlassPanel className="motion-normal premium-hover-lift border-white/10 bg-card/70" padding="lg">
              <div className="mx-auto max-w-4xl text-center">
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-cyan-200/90">
                  Honesty Note
                </p>
                <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  Built as practical proof, not fake completed client work.
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
                  These projects are being built as practical proof for the services I
                  offer. I am not showing fake completed client work. Each project will
                  later include screenshots, GitHub, live demo, and case study.
                </p>
              </div>
            </GlassPanel>
          </Container>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.11}>
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
                  Roadmap Priority
                </p>
                <h2 className="mt-4 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Want to see a specific build first?
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
                  I can prioritize a business website, backend API, dashboard, or testing
                  project based on the type of freelance work you need.
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
                    <Link href="/services">
                      View Services
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
