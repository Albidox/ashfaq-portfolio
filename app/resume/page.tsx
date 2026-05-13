import type { Metadata } from "next";
import { Download, FileText, Mail, MessageCircle } from "lucide-react";

import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { contact } from "@/data/contact";
import { createGmailComposeUrl, createWhatsAppUrl } from "@/lib/contact-links";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Download the freelancing-focused resume of Sk Ashfaq Bux highlighting Java backend development, Spring Boot APIs, PostgreSQL, testing, automation, and frontend support.",
};

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
    <main className="min-h-screen bg-slate-950">
      <section className="relative overflow-hidden border-b border-white/10 py-20 sm:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_35%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.16),transparent_35%)]" />

        <Container>
          <SectionHeading
            eyebrow="Resume"
            title="Download My Freelancing Resume"
            description="A focused resume for freelance website, backend API, admin dashboard, testing, and automation work."
          />

          <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center sm:p-8">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
              <FileText className="h-8 w-8" />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-white">
              Sk Ashfaq Bux - Freelance Resume
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-300">
              This resume highlights my Java backend development, Spring Boot APIs,
              PostgreSQL, testing, automation, and practical freelance services for
              small businesses and startups.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild className="bg-cyan-400 text-slate-950 hover:bg-cyan-300">
                <a href="/resume/Sk_Ashfaq_Bux_Freelance_Resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                <a href={emailUrl} target="_blank" rel="noreferrer">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Me
                </a>
              </Button>

              <Button asChild className="bg-cyan-400 text-slate-950 hover:bg-cyan-300">
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Resume focus"
            title="What this resume highlights"
            description="The resume is aligned with the same freelance services shown on this portfolio website."
          />

          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {resumeHighlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm font-medium text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
