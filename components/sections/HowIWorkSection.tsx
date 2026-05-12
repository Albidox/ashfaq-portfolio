import { CheckCircle2 } from "lucide-react";

import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";

const steps = [
  {
    title: "Understand the requirement",
    description:
      "We start with a clear discussion about the task, goal, pages, features, and expected output.",
  },
  {
    title: "Plan the solution",
    description:
      "I break the work into small milestones so the project stays clear and easy to track.",
  },
  {
    title: "Build cleanly",
    description:
      "I create the website, API, dashboard, or automation flow using maintainable code.",
  },
  {
    title: "Test properly",
    description:
      "I test the main flows, fix issues, and share screenshots, Postman collection, or reports when needed.",
  },
  {
    title: "Deploy and support",
    description:
      "I help with deployment and provide basic support after delivery for agreed changes or fixes.",
  },
];

export function HowIWorkSection() {
  return (
    <section className="border-y border-white/10 bg-slate-900/40 py-20">
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="How I work on freelance projects"
          description="A simple process that keeps small projects clear, practical, and easy to complete."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-5">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-300/40 hover:bg-white/[0.06]"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-sm font-semibold text-cyan-300">
                  Step {index + 1}
                </span>
                <CheckCircle2 className="h-5 w-5 text-cyan-300" />
              </div>

              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
