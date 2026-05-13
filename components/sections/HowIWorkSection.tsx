import { Brain, Code2, Rocket, ShieldCheck } from "lucide-react";

import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { GlassPanel } from "@/components/premium/GlassPanel";
import { processSteps, type ProcessStep } from "@/data/process";

const processIconMap = {
  discovery: Brain,
  development: Code2,
  testing: ShieldCheck,
  deployment: Rocket,
} satisfies Record<ProcessStep["icon"], typeof Brain>;

function ProcessCard({ step }: { step: ProcessStep }) {
  const Icon = processIconMap[step.icon];

  return (
    <GlassPanel
      padding="sm"
      className="group h-full border-white/10 bg-card/68 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/35"
    >
      <div className="flex h-full flex-col">
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200 transition group-hover:border-cyan-300/40 group-hover:bg-cyan-300/16">
          <Icon className="h-5 w-5" />
        </div>

        <h3 className="text-lg font-semibold tracking-tight text-foreground">{step.title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.description}</p>

        <p className="mt-auto pt-6 font-mono text-[11px] uppercase tracking-[0.08em] text-cyan-200/90">
          {step.output}
        </p>
      </div>
    </GlassPanel>
  );
}

export function HowIWorkSection() {
  return (
    <section id="process" className="border-y border-white/10 bg-background/60 py-20">
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="A structured workflow built for predictable delivery"
          description="Simple, professional steps that keep your project clear from planning to launch."
          align="left"
          className="mx-0 max-w-4xl"
        />

        <div className="relative mt-12 hidden lg:block">
          <div className="absolute left-8 right-8 top-5 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />

          <div className="grid grid-cols-4 gap-5">
            {processSteps.map((step) => (
              <div key={step.title} className="relative pt-10">
                <span className="absolute left-4 top-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/35 bg-cyan-300/14 font-mono text-sm font-semibold text-cyan-100 shadow-[0_0_20px_rgb(0_229_255_/_18%)]">
                  {String(step.step).padStart(2, "0")}
                </span>
                <ProcessCard step={step} />
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-10 space-y-4 lg:hidden">
          <div className="absolute bottom-0 left-4 top-3 w-px bg-gradient-to-b from-cyan-300/65 via-cyan-300/35 to-transparent" />

          {processSteps.map((step) => (
            <div key={step.title} className="relative pl-10">
              <span className="absolute left-0 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/35 bg-cyan-300/14 font-mono text-xs font-semibold text-cyan-100">
                {String(step.step).padStart(2, "0")}
              </span>
              <ProcessCard step={step} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
