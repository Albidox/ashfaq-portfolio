import { Brain, MessageSquare, Rocket, ServerCog, ShieldCheck } from "lucide-react";

import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";

const reasons = [
  {
    icon: ServerCog,
    title: "Backend-first thinking",
    description:
      "I understand APIs, databases, validation, and backend flow, not only frontend screens.",
  },
  {
    icon: ShieldCheck,
    title: "Testing mindset",
    description:
      "I focus on testing important flows so the delivered work is more reliable.",
  },
  {
    icon: MessageSquare,
    title: "Clear communication",
    description:
      "I prefer small milestones, clear requirements, and honest updates during work.",
  },
  {
    icon: Brain,
    title: "AI-assisted development",
    description:
      "I use modern AI tools like Codex and Gemini to work faster while still reviewing and testing the output.",
  },
  {
    icon: Rocket,
    title: "Small-business friendly",
    description:
      "I can start with small tasks like fixes, landing pages, API modules, dashboards, or testing support.",
  },
];

export function WhyWorkWithMeSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Why work with me"
          title="A practical developer for small, clear projects"
          description="My focus is not to overpromise. I start with useful, manageable work and deliver it properly."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-purple-300/40 hover:bg-white/[0.06]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-300/20 bg-purple-300/10 text-purple-200">
                <reason.icon className="h-6 w-6" />
              </div>

              <h3 className="text-lg font-semibold text-white">{reason.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
