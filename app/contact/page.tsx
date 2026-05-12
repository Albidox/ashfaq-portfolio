import type { Metadata } from "next";
import { GitBranch, Link as LinkIcon, Mail, MessageCircle } from "lucide-react";

import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactMethodCard } from "@/components/contact/ContactMethodCard";
import { WhatsAppButton } from "@/components/contact/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { contact } from "@/data/contact";
import { createGmailComposeUrl, createWhatsAppUrl } from "@/lib/contact-links";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sk Ashfaq Bux for freelance website development, backend APIs, admin dashboards, automation testing, and small business automation projects.",
};

export default function ContactPage() {
  const whatsappUrl = createWhatsAppUrl(contact.whatsapp);
  const emailUrl = createGmailComposeUrl({
    to: contact.email,
    subject: "Portfolio inquiry from website visitor",
  });

  return (
    <main className="min-h-screen bg-slate-950">
      <section className="relative overflow-hidden border-b border-white/10 py-20 sm:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_35%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.16),transparent_35%)]" />

        <Container>
          <SectionHeading
            eyebrow="Contact"
            title="Let's discuss your website, API, dashboard, or automation idea"
            description="Start with a small clear milestone. You can contact me through email, WhatsApp, LinkedIn, or GitHub."
          />

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <WhatsAppButton label="Chat on WhatsApp" />

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
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ContactMethodCard
              icon={<Mail className="h-6 w-6" />}
              title="Email"
              description="Best for project details, requirements, and formal communication."
              href={emailUrl}
              label="Send email"
            />

            <ContactMethodCard
              icon={<MessageCircle className="h-6 w-6" />}
              title="WhatsApp"
              description="Best for quick discussion, small project questions, and fast contact."
              href={whatsappUrl}
              label="Open WhatsApp"
            />

            <ContactMethodCard
              icon={<LinkIcon className="h-6 w-6" />}
              title="LinkedIn"
              description="Connect with me professionally and view my work updates."
              href={contact.linkedin}
              label="Open LinkedIn"
            />

            <ContactMethodCard
              icon={<GitBranch className="h-6 w-6" />}
              title="GitHub"
              description="View my public code, repositories, and upcoming portfolio projects."
              href={contact.github}
              label="Open GitHub"
            />
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-slate-900/40 py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Project inquiry"
                title="Tell me what you want to build"
                description="Use this form to prepare a prefilled email with your project details. It opens Gmail in your browser with a mailto fallback."
                align="left"
                className="mx-0"
              />

              <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-lg font-semibold text-white">
                  Good first project examples
                </h3>

                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                  <li>- Fix a broken website button or form</li>
                  <li>- Create a small business landing page</li>
                  <li>- Build a Spring Boot API module</li>
                  <li>- Create an admin dashboard screen</li>
                  <li>- Prepare Postman API tests or automation scripts</li>
                </ul>
              </div>
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>
    </main>
  );
}
