import { AnimatedSection } from "@/components/common/AnimatedSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowIWorkSection } from "@/components/sections/HowIWorkSection";
import { ProblemSolutionSection } from "@/components/sections/ProblemSolutionSection";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { TechStackStrip } from "@/components/sections/TechStackStrip";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950">
      <HeroSection />
      <TechStackStrip />

      <AnimatedSection delay={0.02}>
        <ProblemSolutionSection />
      </AnimatedSection>

      <AnimatedSection delay={0.05}>
        <ServicesPreview />
      </AnimatedSection>

      <AnimatedSection delay={0.08}>
        <HowIWorkSection />
      </AnimatedSection>

      <AnimatedSection delay={0.11}>
        <ProjectsPreview />
      </AnimatedSection>

      <AnimatedSection delay={0.14}>
        <ContactCTA />
      </AnimatedSection>
    </main>
  );
}
