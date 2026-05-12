import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

export function ProjectsPreview() {
  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Projects"
            title="Portfolio projects in development"
            description="These projects will become proof for the services I plan to sell: business websites, APIs, dashboards, testing, and automation tools."
            align="left"
            className="mx-0"
          />

          <Button asChild variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
