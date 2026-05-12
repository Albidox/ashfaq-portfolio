import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Portfolio projects by Sk Ashfaq Bux including business websites, Spring Boot API systems, admin dashboards, testing automation frameworks, and small business tools.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <section className="relative overflow-hidden border-b border-white/10 py-20 sm:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_35%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.16),transparent_35%)]" />

        <Container>
          <SectionHeading
            eyebrow="Projects"
            title="Portfolio Projects in Development"
            description="I am currently building practical portfolio projects that match real freelance services: business websites, Spring Boot APIs, dashboards, automation testing, and small business tools."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="rounded-3xl border border-purple-300/20 bg-purple-300/10 p-8 text-center sm:p-10">
            <h2 className="text-2xl font-bold text-white">
              Real case studies will be added soon
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              Each project will later include a live demo, GitHub repository, screenshots,
              tech stack, and a short case study explaining the problem and solution.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
