import type { Metadata } from "next";
import { Brain, Code2, ShieldCheck, Wrench } from "lucide-react";

import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/skills";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Sk Ashfaq Bux, a Java Backend Developer focused on websites, APIs, dashboards, testing automation, and small business software solutions.",
};

const highlights = [
  {
    icon: Code2,
    title: "Backend development",
    description:
      "I work with Java, Spring Boot, REST APIs, PostgreSQL, validation, and backend flow design.",
  },
  {
    icon: ShieldCheck,
    title: "Testing mindset",
    description:
      "I understand API testing, Postman, Selenium, Playwright, bug reporting, and test automation basics.",
  },
  {
    icon: Wrench,
    title: "Practical freelancing services",
    description:
      "I focus on small business websites, website fixes, backend APIs, dashboards, and automation tools.",
  },
  {
    icon: Brain,
    title: "AI-assisted development",
    description:
      "I use tools like Codex and Gemini to build faster, while still reviewing, testing, and understanding the output.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <section className="relative overflow-hidden border-b border-white/10 py-20 sm:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_35%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.16),transparent_35%)]" />

        <Container>
          <SectionHeading
            eyebrow="About"
            title="I’m Sk Ashfaq Bux, a Java Backend Developer building practical web solutions"
            description="My focus is on helping small businesses and startups create reliable websites, backend APIs, dashboards, testing flows, and small automation tools."
          />

          <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-slate-300 sm:p-8">
            <p className="text-base leading-8">
              I am a Java Backend Developer with experience in Spring Boot,
              PostgreSQL, REST APIs, Postman, and testing. I also work with React,
              Next.js, Tailwind CSS, and MERN basics so I can support practical
              full-stack work for small freelance projects.
            </p>

            <p className="mt-5 text-base leading-8">
              My goal is to start with small, clear services such as website
              creation, website fixing, backend API modules, admin dashboards,
              testing automation, and simple business automation tools.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Focus"
            title="What I bring to a project"
            description="A mix of backend thinking, testing awareness, frontend support, and AI-assisted development."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.06]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                  <item.icon className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-slate-900/40 py-20">
        <Container>
          <SectionHeading
            eyebrow="Skills"
            title="Tools and technologies"
            description="These are the main tools and technologies I use or am actively building with."
          />

          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 hover:bg-white/10"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </main>
  );
}
