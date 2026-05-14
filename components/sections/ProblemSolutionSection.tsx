import { AlertTriangle, CheckCircle2, Gauge, LayoutDashboard, ShieldCheck } from "lucide-react";

import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { GlassPanel } from "@/components/premium/GlassPanel";
import { cn } from "@/lib/utils";

const problems = [
  {
    icon: Gauge,
    title: "Slow APIs bottlenecking growth?",
    indicator: "Response delay detected",
    description:
      "Slow API responses hurt conversions and team speed. I optimize backend flow so your business can operate faster.",
  },
  {
    icon: ShieldCheck,
    title: "Manual testing causing regressions?",
    indicator: "Regression risk high",
    description:
      "Manual-only testing misses issues under pressure. I add practical test flows so releases stay safer.",
  },
  {
    icon: LayoutDashboard,
    title: "Need a dashboard that actually makes sense?",
    indicator: "Workflow friction",
    description:
      "Scattered dashboards slow daily work. I build clear admin views that support decisions, not confusion.",
  },
];

export function ProblemSolutionSection() {
  return (
    <section id="problems" className="py-14 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Problems I solve"
          title="Business problems that need clean backend execution"
          description="Focused technical delivery for speed, stability, and cleaner team workflow."
          align="left"
          className="mx-0 max-w-4xl"
        />

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {problems.map((problem, index) => (
            <GlassPanel
              key={problem.title}
              padding="sm"
              className="group h-full border-white/10 bg-card/66 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40"
            >
              <div className="flex h-full flex-col">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-amber-200">
                    <AlertTriangle className="h-3.5 w-3.5" />
                    <span>{problem.indicator}</span>
                  </div>
                  <span className="mt-0.5 font-mono text-[11px] text-muted-foreground">
                    C{index + 1}
                  </span>
                </div>

                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 transition group-hover:border-cyan-300/40 group-hover:bg-cyan-300/15">
                  <problem.icon className="h-5 w-5" />
                </div>

                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {problem.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {problem.description}
                </p>

                <div
                  className={cn(
                    "mt-auto pt-6 font-mono text-xs tracking-[0.08em] text-muted-foreground",
                    "transition group-hover:text-emerald-200"
                  )}
                >
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Solvable with a structured backend approach
                  </span>
                </div>
              </div>
            </GlassPanel>
          ))}
        </div>
      </Container>
    </section>
  );
}
