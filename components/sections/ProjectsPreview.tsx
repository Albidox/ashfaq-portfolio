import Link from "next/link";
import { ArrowRight, FileText, GitBranch, MonitorSmartphone } from "lucide-react";

import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { GlassPanel } from "@/components/premium/GlassPanel";
import { StatusPill } from "@/components/premium/StatusPill";
import { Button } from "@/components/ui/button";
import { roadmapProjects, type RoadmapItem, type RoadmapStatus } from "@/data/roadmap";
import { cn } from "@/lib/utils";

const roadmapColumns: { status: RoadmapStatus; heading: string }[] = [
  { status: "architecture", heading: "Architecture" },
  { status: "building", heading: "Building" },
  { status: "testing", heading: "Testing" },
  { status: "upcoming", heading: "Upcoming" },
];

function RoadmapCard({
  item,
  compact = false,
}: {
  item: RoadmapItem;
  compact?: boolean;
}) {
  return (
    <GlassPanel
      padding="sm"
      className={cn(
        "group premium-hover-lift motion-fast border-white/10 bg-card/70 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/35",
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

        <h3 className="text-base font-semibold tracking-tight text-foreground">
          {item.title}
        </h3>
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

export function ProjectsPreview() {
  return (
    <section id="roadmap" className="border-y border-white/10 bg-background/55 py-20">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Roadmap"
            title="Honest project roadmap designed to prove real services"
            description="These builds are practical portfolio milestones focused on proving freelance delivery quality, not claiming finished work too early."
            align="left"
            className="mx-0 max-w-4xl"
          />

          <Button
            asChild
            variant="outline"
            className="motion-fast premium-hover-lift border-white/15 bg-white/5 text-foreground hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100"
          >
            <Link href="/projects">
              View Full Roadmap
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-10 hidden gap-5 lg:grid lg:grid-cols-4">
          {roadmapColumns.map((column) => {
            const items = roadmapProjects.filter((project) => project.status === column.status);

            return (
              <div
                key={column.status}
                className="rounded-3xl border border-white/10 bg-black/18 p-4"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-mono text-[12px] uppercase tracking-[0.1em] text-cyan-200">
                    {column.heading}
                  </h3>
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

        <div className="mt-10 space-y-4 lg:hidden">
          {roadmapProjects.map((item) => (
            <RoadmapCard key={item.id} item={item} compact />
          ))}
        </div>
      </Container>
    </section>
  );
}
