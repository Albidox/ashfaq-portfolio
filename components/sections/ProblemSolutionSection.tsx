import { Bug, Globe2, LayoutDashboard, Server } from "lucide-react";

import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";

const problems = [
  {
    icon: Globe2,
    title: "Need a business website?",
    description:
      "I can build a clean, mobile-friendly website with contact form, WhatsApp button, services, FAQ, and deployment support.",
  },
  {
    icon: Server,
    title: "Need backend APIs?",
    description:
      "I can create secure Spring Boot APIs with PostgreSQL database, validation, and Postman documentation.",
  },
  {
    icon: LayoutDashboard,
    title: "Need an admin dashboard?",
    description:
      "I can build simple dashboards for managing customers, products, orders, reports, and internal workflows.",
  },
  {
    icon: Bug,
    title: "Need testing support?",
    description:
      "I can test websites and APIs using Postman, Selenium, Playwright, bug reports, and automation reports.",
  },
];

export function ProblemSolutionSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Problems I solve"
          title="Practical development support for small businesses"
          description="Start with a small clear task, then scale when the first result is working properly."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {problems.map((problem) => (
            <Card
              key={problem.title}
              className="group border-white/10 bg-white/[0.03] text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.06]"
            >
              <CardContent className="p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                  <problem.icon className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-semibold text-white">{problem.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
