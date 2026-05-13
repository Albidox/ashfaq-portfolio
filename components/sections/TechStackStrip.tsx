import { Container } from "@/components/common/Container";
import { TechMarquee } from "@/components/premium/TechMarquee";

const techProofItems = [
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "REST APIs",
  "Next.js",
  "Tailwind CSS",
  "Postman",
  "Selenium",
  "Playwright",
  "Testing",
  "Automation",
];

export function TechStackStrip() {
  return (
    <section className="border-y border-white/10 bg-background/80 py-4">
      <Container>
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <p className="font-mono text-[11px] uppercase tracking-[0.11em] text-cyan-200/90">
            Command Center Proof Strip
          </p>
          <p className="text-xs text-muted-foreground">Core tools used for delivery</p>
        </div>

        <TechMarquee items={techProofItems} />
      </Container>
    </section>
  );
}
