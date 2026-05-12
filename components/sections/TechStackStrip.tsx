import { Container } from "@/components/common/Container";
import { skills } from "@/data/skills";

export function TechStackStrip() {
  return (
    <section className="border-b border-white/10 bg-slate-950 py-6">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
