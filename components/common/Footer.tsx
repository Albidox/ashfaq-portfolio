import Link from "next/link";
import { GitBranch, Link as LinkIcon, Mail, MessageCircle } from "lucide-react";

import { Container } from "@/components/common/Container";
import { contact } from "@/data/contact";
import { siteConfig } from "@/data/site";
import { createGmailComposeUrl, createWhatsAppUrl } from "@/lib/contact-links";

const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Resume", href: "/resume" },
];

export function Footer() {
  const whatsappUrl = createWhatsAppUrl(contact.whatsapp);
  const emailUrl = createGmailComposeUrl({
    to: contact.email,
    subject: "Portfolio inquiry from website visitor",
  });

  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <h2 className="text-lg font-semibold text-white">{siteConfig.name}</h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
              Java Backend Developer helping small businesses and startups build websites,
              backend APIs, admin dashboards, and automation tools.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
              Pages
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-400 transition hover:text-cyan-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
              Contact
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href={emailUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-300"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-300"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-300"
              >
                <LinkIcon className="h-4 w-4" />
                LinkedIn
              </a>

              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-300"
              >
                <GitBranch className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js,
          Tailwind CSS, and clean backend-first thinking.
        </div>
      </Container>
    </footer>
  );
}
