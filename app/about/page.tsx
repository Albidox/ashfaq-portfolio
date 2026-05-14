import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Brain, Code2, ShieldCheck, Wrench } from "lucide-react";

import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Container } from "@/components/common/Container";
import { GlassPanel } from "@/components/premium/GlassPanel";
import { Button } from "@/components/ui/button";
import { contact } from "@/data/contact";
import { skills } from "@/data/skills";
import { createMailtoUrl, createWhatsAppUrl } from "@/lib/contact-links";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Sk Ashfaq Bux, a Java Backend Developer focused on websites, APIs, dashboards, testing automation, and small business software solutions.",
};

const trustBadges = [
  "Backend-first",
  "Testing mindset",
  "AI-assisted workflow",
  "Freelance-ready",
];

const highlights = [
  {
    icon: Code2,
    title: "Backend Architecture Thinking",
    description:
      "I design clear backend structure first so websites and dashboards stay reliable as your business grows.",
  },
  {
    icon: ShieldCheck,
    title: "Testing and QA Awareness",
    description:
      "I include API and workflow testing early to reduce release risk and catch issues before they affect users.",
  },
  {
    icon: Wrench,
    title: "Practical Freelance Delivery",
    description:
      "I break large goals into small milestones that are easier to review, approve, and ship with confidence.",
  },
  {
    icon: Brain,
    title: "AI-Assisted Development Workflow",
    description:
      "I use AI tools to speed up delivery, then review and validate outputs so quality stays controlled.",
  },
];

export default function AboutPage() {
  const whatsappUrl = createWhatsAppUrl(contact.whatsapp);
  const emailUrl = createMailtoUrl({
    to: contact.email,
    subject: "About page inquiry from portfolio",
  });

  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden border-b border-white/10 pb-16 pt-20 sm:pb-20 sm:pt-24 lg:pt-28">
        <div className="premium-grid-bg absolute inset-0 -z-20 opacity-60" />
        <div className="absolute -left-20 top-0 -z-10 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 -z-10 h-64 w-64 rounded-full bg-accent/22 blur-3xl" />

        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-cyan-200/90">
              About
            </p>

            <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Backend-first developer building practical systems for small businesses.
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
              I combine Java backend development, testing mindset, and AI-assisted
              workflows to build websites, APIs, dashboards, and automation tools.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-2.5">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="motion-fast premium-hover-lift inline-flex items-center rounded-full border border-white/[0.12] bg-white/[0.06] px-3.5 py-1.5 text-xs text-slate-200"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <AnimatedSection delay={0.03}>
        <section className="py-16 sm:py-20">
          <Container>
            <GlassPanel className="motion-normal premium-hover-lift border-white/10 bg-card/70" padding="lg">
              <div className="mx-auto max-w-4xl">
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-cyan-200/90">
                  Profile / Mission
                </p>
                <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  Sk Ashfaq Bux, Java Backend Developer focused on reliable outcomes.
                </h2>
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  I help small businesses and startups build practical web systems with
                  a backend-first approach. My focus is clean architecture, predictable
                  delivery, and testing support from day one.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Spring Boot APIs and REST architecture",
                    "PostgreSQL data design and backend flows",
                    "Postman and API testing workflows",
                    "Selenium and Playwright testing support",
                    "React and Next.js frontend integration",
                    "Freelance-ready milestone execution",
                  ].map((item) => (
                    <div
                      key={item}
                      className="motion-fast premium-hover-lift rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </GlassPanel>
          </Container>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.07}>
        <section className="pb-16 sm:pb-20">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-cyan-200/90">
                What I Bring
              </p>
              <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Structured engineering support for real business work.
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {highlights.map((item) => (
                <GlassPanel
                  key={item.title}
                  padding="sm"
                  className="motion-fast premium-hover-lift h-full border-white/10 bg-card/68 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/35"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </GlassPanel>
              ))}
            </div>
          </Container>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <section className="border-y border-white/10 bg-background/55 py-16 sm:py-20">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-cyan-200/90">
                Tools and Skills
              </p>
              <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Core stack I use to deliver practical builds.
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
                Skills are selected for real freelance delivery across websites, APIs,
                dashboards, and testing workflows.
              </p>
            </div>

            <div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-2.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="motion-fast premium-hover-lift rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 font-mono text-[12px] text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Container>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.13}>
        <section className="pb-20 pt-10">
          <Container>
            <GlassPanel
              className="motion-normal premium-hover-lift relative overflow-hidden border-white/10 bg-card/72"
              padding="lg"
            >
              <div className="absolute -left-16 top-0 -z-10 h-52 w-52 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute -bottom-20 right-0 -z-10 h-56 w-56 rounded-full bg-accent/22 blur-3xl" />

              <div className="mx-auto max-w-4xl text-center">
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-cyan-200/90">
                  Work Together
                </p>
                <h2 className="mt-4 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Want to work with a backend-first developer?
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
                  Start with a small clear task and I&apos;ll help you plan, build,
                  test, and deliver it properly.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="motion-fast premium-hover-lift h-11 bg-primary text-primary-foreground shadow-[0_10px_28px_rgb(0_229_255_/_24%)] hover:bg-primary/90"
                  >
                    <a href={whatsappUrl} target="_blank" rel="noreferrer">
                      Start Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="motion-fast premium-hover-lift h-11 border-white/15 bg-white/5 text-foreground hover:border-cyan-300/35 hover:bg-white/10 hover:text-cyan-100"
                  >
                    <a href={emailUrl}>Email Me</a>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="motion-fast premium-hover-lift h-11 border-white/15 bg-transparent text-foreground hover:border-cyan-300/35 hover:bg-cyan-300/10 hover:text-cyan-100"
                  >
                    <Link href="/services">View Services</Link>
                  </Button>
                </div>
              </div>
            </GlassPanel>
          </Container>
        </section>
      </AnimatedSection>
    </main>
  );
}
