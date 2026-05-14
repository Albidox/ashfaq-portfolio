import type { Metadata } from "next";
import { GitBranch, Link as LinkIcon, Mail, MessageCircle } from "lucide-react";

import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Container } from "@/components/common/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactMethodCard } from "@/components/contact/ContactMethodCard";
import { WhatsAppButton } from "@/components/contact/WhatsAppButton";
import { GlassPanel } from "@/components/premium/GlassPanel";
import { Button } from "@/components/ui/button";
import { contact } from "@/data/contact";
import { createGmailComposeUrl, createWhatsAppUrl } from "@/lib/contact-links";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sk Ashfaq Bux for freelance website development, backend APIs, admin dashboards, automation testing, and small business automation projects.",
};

const contactBadges = [
  "WhatsApp-first",
  "Email-ready",
  "Small milestones",
  "Clear handoff",
];

const firstMilestones = [
  "Website fix",
  "Landing page",
  "Spring Boot API module",
  "Admin dashboard screen",
  "Postman/API testing",
  "Automation script",
];

export default function ContactPage() {
  const whatsappUrl = createWhatsAppUrl(contact.whatsapp);
  const emailUrl = createGmailComposeUrl({
    to: contact.email,
    subject: "Portfolio inquiry from website visitor",
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
              Contact
            </p>

            <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Start with a small clear milestone.
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
              Tell me what you need - a website fix, API module, dashboard screen,
              testing flow, or automation tool - and I&apos;ll help you plan the next
              step.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-2.5">
              {contactBadges.map((badge) => (
                <span
                  key={badge}
                  className="motion-fast premium-hover-lift inline-flex items-center rounded-full border border-white/[0.12] bg-white/[0.06] px-3.5 py-1.5 text-xs text-slate-200"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <WhatsAppButton label="Chat on WhatsApp" />

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
            </div>
          </div>
        </Container>
      </section>

      <AnimatedSection delay={0.03}>
        <section className="py-16 sm:py-20">
          <Container>
            <div className="mx-auto mb-10 max-w-4xl text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-cyan-200/90">
                Contact Methods
              </p>
              <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Choose the contact flow that fits your project stage.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <ContactMethodCard
                icon={<MessageCircle className="h-6 w-6" />}
                title="WhatsApp"
                description="Best for quick scope checks, urgent updates, and starting with a small milestone."
                href={whatsappUrl}
                label="Open WhatsApp"
              />

              <ContactMethodCard
                icon={<Mail className="h-6 w-6" />}
                title="Email"
                description="Best for formal requirements, references, and project details that need clear threading."
                href={emailUrl}
                label="Send email"
              />

              <ContactMethodCard
                icon={<LinkIcon className="h-6 w-6" />}
                title="LinkedIn"
                description="Best for professional connection, background context, and long-term collaboration."
                href={contact.linkedin}
                label="Open LinkedIn"
              />

              <ContactMethodCard
                icon={<GitBranch className="h-6 w-6" />}
                title="GitHub"
                description="Best for reviewing code style, project direction, and upcoming technical work."
                href={contact.github}
                label="Open GitHub"
              />
            </div>
          </Container>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.07}>
        <section className="border-y border-white/10 bg-background/55 py-16 sm:py-20">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <GlassPanel className="motion-normal premium-hover-lift border-white/10 bg-card/70" padding="lg">
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-cyan-200/90">
                Project Inquiry
              </p>
              <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-foreground">
                Share the first task you want to solve.
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                A small first milestone keeps the project clear, fast to validate,
                and easier to scale after initial delivery works.
              </p>

              <div className="motion-fast premium-hover-lift mt-6 rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-5">
                <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.09em] text-slate-300">
                  Good First Milestones
                </p>
                <ul className="space-y-2.5">
                  {firstMilestones.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-200">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-cyan-300/80" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              </GlassPanel>

              <ContactForm />
            </div>
          </Container>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.11}>
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
                  Quick Start
                </p>
                <h2 className="mt-4 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Not ready with full requirements?
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
                  Send a short message first. We can define the first small milestone
                  together.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <WhatsAppButton label="Chat on WhatsApp" />

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
                </div>
              </div>
            </GlassPanel>
          </Container>
        </section>
      </AnimatedSection>
    </main>
  );
}
