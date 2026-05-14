import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

import { Container } from "@/components/common/Container";
import { TerminalCard } from "@/components/premium/TerminalCard";
import { Button } from "@/components/ui/button";
import { contact } from "@/data/contact";
import { createWhatsAppUrl } from "@/lib/contact-links";

const trustBadges = [
  { icon: ShieldCheck, label: "Backend-first Architecture" },
  { icon: CheckCircle2, label: "Testing + QA Mindset" },
];

export function HeroSection() {
  const whatsappUrl = createWhatsAppUrl(contact.whatsapp);

  return (
    <section className="relative overflow-hidden border-b border-white/10 py-16 sm:py-20 lg:py-24">
      <div className="premium-grid-bg absolute inset-0 -z-20 opacity-65" />
      <div className="absolute -left-20 top-8 -z-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-10 right-0 -z-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-14">
          <div className="animate-in fade-in-0 slide-in-from-bottom-3 duration-500">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Java Backend Developer
            </p>

            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Engineering Reliable Web Systems for Businesses That Need More Than a
              Website
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              I build Spring Boot APIs, admin dashboards, testing automation, and
              business web tools with a backend-first approach.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="motion-fast premium-hover-lift inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-slate-200"
                >
                  <badge.icon className="h-3.5 w-3.5 text-cyan-300" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="motion-fast premium-hover-lift h-11 bg-primary text-primary-foreground shadow-[0_8px_22px_rgb(0_229_255_/_24%)] hover:bg-primary/90"
              >
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="motion-fast premium-hover-lift h-11 border-white/15 bg-white/5 text-foreground hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100"
              >
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[500px] animate-in fade-in-0 slide-in-from-bottom-4 duration-700 lg:max-w-none lg:scale-100">
            <div className="animate-pulse-glow rounded-[28px]">
              <TerminalCard className="animate-float-slow" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
