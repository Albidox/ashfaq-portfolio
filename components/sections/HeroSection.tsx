import Link from "next/link";
import { ArrowRight, Code2, Database, Server, ShieldCheck } from "lucide-react";

import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { contact } from "@/data/contact";
import { skills } from "@/data/skills";
import { createWhatsAppUrl } from "@/lib/contact-links";

export function HeroSection() {
  const whatsappUrl = createWhatsAppUrl(contact.whatsapp);

  return (
    <section className="relative overflow-hidden border-b border-white/10 py-24 sm:py-32">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#020617_0%,#0f172a_100%)]" />

      <div className="animated-grid absolute inset-0 -z-10 opacity-40" />

      <div className="absolute left-[-10%] top-[-10%] -z-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-[-10%] right-[-10%] -z-10 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl animate-pulse-glow" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Java Backend Developer
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              I Build{" "}
              <span className="text-gradient">Websites, APIs & Automation Tools</span>{" "}
              for Small Businesses
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              I&apos;m Sk Ashfaq Bux, a Java Backend Developer helping businesses create
              reliable websites, backend APIs, admin dashboards, and testing automation
              using Java, Spring Boot, React, PostgreSQL, and modern AI-assisted
              development tools.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/20 hover:bg-cyan-300"
              >
                <Link href="/services">
                  View Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  Start a Project
                </a>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {skills.slice(0, 8).map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="relative animate-float-slow">
            <div className="card-glow rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5">
                <div className="mb-5 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <div className="space-y-4 font-mono text-sm">
                  <p className="text-slate-500">{"// Freelance service stack"}</p>
                  <p>
                    <span className="text-purple-300">const</span>{" "}
                    <span className="text-cyan-300">developer</span>{" "}
                    <span className="text-white">=</span>{" "}
                    <span className="text-green-300">&quot;Sk Ashfaq Bux&quot;</span>
                  </p>
                  <p>
                    <span className="text-purple-300">services</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-green-300">
                      websites + APIs + dashboards
                    </span>
                  </p>
                  <p>
                    <span className="text-purple-300">focus</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-green-300">
                      clean delivery + testing
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  { icon: Server, label: "Spring Boot APIs" },
                  { icon: Database, label: "PostgreSQL" },
                  { icon: Code2, label: "React / Next.js" },
                  { icon: ShieldCheck, label: "Testing Mindset" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-cyan-300/40 hover:bg-white/[0.07]"
                  >
                    <item.icon className="h-5 w-5 text-cyan-300" />
                    <span className="text-sm text-slate-300">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
