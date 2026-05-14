import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";

import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { contact } from "@/data/contact";
import { createMailtoUrl, createWhatsAppUrl } from "@/lib/contact-links";

export function ContactCTA() {
  const whatsappUrl = createWhatsAppUrl(contact.whatsapp);
  const emailUrl = createMailtoUrl({
    to: contact.email,
    subject: "Project inquiry from portfolio",
  });

  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-card/72 p-8 shadow-[0_20px_70px_rgb(2_6_23_/_45%)] backdrop-blur-xl sm:p-12">
          <div className="premium-grid-bg absolute inset-0 -z-20 opacity-35" />
          <div className="absolute -left-16 top-0 -z-10 h-52 w-52 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 right-0 -z-10 h-60 w-60 rounded-full bg-accent/22 blur-3xl" />

          <div className="mx-auto max-w-4xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-cyan-200/90">
              Start with a practical milestone
            </p>

            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to build something robust?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              Start with a small clear milestone - a website fix, API module, dashboard
              screen, or testing task.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="motion-fast premium-hover-lift h-11 bg-primary text-primary-foreground shadow-[0_10px_28px_rgb(0_229_255_/_24%)] hover:bg-primary/90"
              >
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Start Project
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="motion-fast premium-hover-lift h-11 border-white/15 bg-white/5 text-foreground hover:border-cyan-300/35 hover:bg-white/10 hover:text-cyan-100"
              >
                <a href={emailUrl}>
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
        </div>
      </Container>
    </section>
  );
}
