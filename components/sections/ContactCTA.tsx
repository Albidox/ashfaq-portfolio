import { GitBranch, Link as LinkIcon, Mail, MessageCircle } from "lucide-react";

import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { contact } from "@/data/contact";
import { createGmailComposeUrl, createWhatsAppUrl } from "@/lib/contact-links";

export function ContactCTA() {
  const whatsappUrl = createWhatsAppUrl(contact.whatsapp);
  const emailUrl = createGmailComposeUrl({
    to: contact.email,
    subject: "Portfolio inquiry from website visitor",
  });

  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-8 text-center shadow-2xl shadow-cyan-950/20 sm:p-12">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.20),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.20),transparent_35%)]" />

          <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-cyan-300/10 blur-2xl animate-pulse-glow" />
          <div className="absolute bottom-8 right-8 h-24 w-24 rounded-full bg-purple-300/10 blur-2xl animate-pulse-glow" />

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Start small, build clearly
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Have a website, API, dashboard, or automation idea?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
            Let&apos;s discuss your requirement and start with a small clear milestone.
            You can contact me through email, WhatsApp, LinkedIn, or GitHub.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/20 hover:bg-cyan-300"
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
              className="border-white/20 bg-transparent text-white hover:bg-white/10"
            >
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>

          <div className="mt-6 flex justify-center gap-4">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-300"
            >
              <LinkIcon className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>

            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-300"
            >
              <GitBranch className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
