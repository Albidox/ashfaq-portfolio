import type { Metadata } from "next";
import Link from "next/link";
import { Download, FileText, Mail, MessageCircle } from "lucide-react";

import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Container } from "@/components/common/Container";
import { GlassPanel } from "@/components/premium/GlassPanel";
import { Button } from "@/components/ui/button";
import { contact } from "@/data/contact";
import { createGmailComposeUrl, createWhatsAppUrl } from "@/lib/contact-links";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Download the freelancing-focused resume of Sk Ashfaq Bux highlighting Java backend development, Spring Boot APIs, PostgreSQL, testing, automation, and frontend support.",
};

const resumeBadges = [
  "Java Backend",
  "Spring Boot APIs",
  "Testing Automation",
  "Admin Dashboards",
];

const resumeHighlights = [
  "Java Backend Development",
  "Spring Boot REST APIs",
  "PostgreSQL Database Work",
  "Postman API Testing",
  "Selenium / Playwright Automation",
  "React / Next.js Frontend Basics",
  "Admin Dashboard Support",
  "AI-assisted Development Workflow",
];

export default function ResumePage() {
  const whatsappUrl = createWhatsAppUrl(contact.whatsapp);
  const emailUrl = createGmailComposeUrl({
    to: contact.email,
    subject: "Resume inquiry from portfolio website",
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
              Resume
            </p>

            <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Freelance-ready backend developer resume.
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
              Download a focused resume covering Java backend development, Spring
              Boot APIs, PostgreSQL, testing automation, frontend support, and
              AI-assisted workflow.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-2.5">
              {resumeBadges.map((badge) => (
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
            <GlassPanel
              className="motion-normal premium-hover-lift mx-auto max-w-4xl border-white/10 bg-card/70"
              padding="lg"
            >
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
                  <FileText className="h-7 w-7" />
                </div>

                <p className="mt-5 font-mono text-[12px] uppercase tracking-[0.1em] text-cyan-200/90">
                  Resume Command Card
                </p>

                <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  Sk_Ashfaq_Bux_Freelance_Resume.pdf
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                  This resume is designed for freelance website, backend API,
                  dashboard, testing, and automation work.
                </p>

                <div className="motion-fast premium-hover-lift mx-auto mt-6 max-w-2xl rounded-2xl border border-white/10 bg-black/20 px-4 py-3 font-mono text-[12px] text-slate-300">
                  file: /resume/sk-ashfaq-bux-resume.pdf
                </div>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="motion-fast premium-hover-lift h-11 bg-primary text-primary-foreground shadow-[0_10px_28px_rgb(0_229_255_/_22%)] hover:bg-primary/90"
                  >
                    <a href="/resume/sk-ashfaq-bux-resume.pdf" download>
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </a>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="motion-fast premium-hover-lift h-11 border-white/15 bg-white/5 text-foreground hover:border-cyan-300/35 hover:bg-white/10 hover:text-cyan-100"
                  >
                    <a href={emailUrl} target="_blank" rel="noreferrer">
                      <Mail className="mr-2 h-4 w-4" />
                      Email Me
                    </a>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="motion-fast premium-hover-lift h-11 border-white/15 bg-transparent text-foreground hover:border-cyan-300/35 hover:bg-cyan-300/10 hover:text-cyan-100"
                  >
                    <a href={whatsappUrl} target="_blank" rel="noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp
                    </a>
                  </Button>
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
                What This Resume Proves
              </p>
              <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Practical delivery fit for modern freelance projects.
              </h2>
            </div>

            <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {resumeHighlights.map((item) => (
                <GlassPanel
                  key={item}
                  padding="sm"
                  className="motion-fast premium-hover-lift border-white/10 bg-card/68 text-center font-mono text-[12px] text-slate-200"
                >
                  {item}
                </GlassPanel>
              ))}
            </div>
          </Container>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <section className="pb-8 sm:pb-10">
          <Container>
            <GlassPanel
              className="motion-normal premium-hover-lift mx-auto max-w-5xl border-white/10 bg-card/70"
              padding="lg"
            >
              <div className="text-center">
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-cyan-200/90">
                  Best Fit
                </p>
                <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  Built for practical business delivery needs.
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
                  Best for small businesses, startups, and agencies needing websites,
                  backend APIs, dashboards, testing, or automation support.
                </p>
              </div>
            </GlassPanel>
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
                  Quick Intro
                </p>
                <h2 className="mt-4 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Want the short version first?
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
                  Message me with your requirement and I&apos;ll tell you whether I can
                  help with the first milestone.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="motion-fast premium-hover-lift h-11 bg-primary text-primary-foreground shadow-[0_10px_28px_rgb(0_229_255_/_22%)] hover:bg-primary/90"
                  >
                    <a href={whatsappUrl} target="_blank" rel="noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Chat on WhatsApp
                    </a>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="motion-fast premium-hover-lift h-11 border-white/15 bg-white/5 text-foreground hover:border-cyan-300/35 hover:bg-white/10 hover:text-cyan-100"
                  >
                    <a href={emailUrl} target="_blank" rel="noreferrer">
                      <Mail className="mr-2 h-4 w-4" />
                      Email Me
                    </a>
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
