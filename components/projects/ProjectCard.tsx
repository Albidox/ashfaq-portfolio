import { ArrowUpRight, GitBranch, Globe2 } from "lucide-react";

import { ProjectStatusBadge } from "@/components/projects/ProjectStatusBadge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type ProjectCardProps = {
  project: {
    title: string;
    status: string;
    description: string;
    techStack: string[];
    liveUrl: string | null;
    githubUrl: string | null;
    caseStudyUrl: string | null;
  };
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="card-glow group relative h-full overflow-hidden border-white/10 bg-white/[0.03] text-white shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-purple-300/40 hover:bg-white/[0.06]">
      <CardContent className="flex h-full flex-col p-0">
        <div className="relative border-b border-white/10 bg-gradient-to-br from-cyan-300/10 via-purple-400/10 to-slate-950 p-6">
          <div className="absolute right-4 top-4">
            <ProjectStatusBadge status={project.status} />
          </div>

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/60 text-cyan-300 shadow-xl shadow-black/20">
            <Globe2 className="h-7 w-7" />
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold tracking-tight text-white">
              {project.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {project.description}
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="mt-auto grid gap-3 pt-6 sm:grid-cols-2">
            {project.liveUrl ? (
              <Button asChild className="bg-cyan-400 text-slate-950 hover:bg-cyan-300">
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live Demo
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            ) : (
              <Button disabled className="bg-slate-800 text-slate-500">
                Live Soon
              </Button>
            )}

            {project.githubUrl ? (
              <Button
                asChild
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  GitHub
                  <GitBranch className="ml-2 h-4 w-4" />
                </a>
              </Button>
            ) : (
              <Button
                disabled
                variant="outline"
                className="border-white/10 bg-transparent text-slate-500"
              >
                GitHub Soon
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
