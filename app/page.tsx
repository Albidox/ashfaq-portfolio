import { AnimatedSection } from "@/components/common/AnimatedSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowIWorkSection } from "@/components/sections/HowIWorkSection";
import { ProblemSolutionSection } from "@/components/sections/ProblemSolutionSection";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { TechStackStrip } from "@/components/sections/TechStackStrip";
import { WhyWorkWithMeSection } from "@/components/sections/WhyWorkWithMeSection";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950">
      <HeroSection />
      <TechStackStrip />

      <AnimatedSection>
        <ProblemSolutionSection />
      </AnimatedSection>

      <AnimatedSection>
        <ServicesPreview />
      </AnimatedSection>

      <AnimatedSection>
        <ProjectsPreview />
      </AnimatedSection>

      <AnimatedSection>
        <HowIWorkSection />
      </AnimatedSection>

      <AnimatedSection>
        <WhyWorkWithMeSection />
      </AnimatedSection>

      <AnimatedSection>
        <ContactCTA />
      </AnimatedSection>
    </main>
  );
}
