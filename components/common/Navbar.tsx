"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { contact } from "@/data/contact";
import { createWhatsAppUrl } from "@/lib/contact-links";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
  { label: "Resume", href: "/resume" },
];

export function Navbar() {
  const pathname = usePathname();
  const whatsappUrl = createWhatsAppUrl(contact.whatsapp);

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 px-3 pt-2 sm:px-5 sm:pt-3 lg:px-8">
      <Container className="flex items-center justify-center px-0 sm:px-0 lg:px-0">
        <nav
          aria-label="Main navigation"
          className="hidden w-full max-w-[1100px] items-center rounded-full border border-white/12 bg-card/72 px-2.5 py-1.5 text-foreground shadow-[0_14px_36px_rgb(2_6_23_/_42%)] backdrop-blur-xl lg:flex"
        >
          <Link
            href="/"
            className="group motion-fast mr-1.5 flex min-w-0 items-center gap-2.5 rounded-full px-2.5 py-1.5 transition hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/40 focus-visible:ring-offset-1 focus-visible:ring-offset-background"
            aria-label="Go to homepage"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-300/35 bg-cyan-300/12 text-[11px] font-semibold text-cyan-100 shadow-[0_0_14px_rgb(0_229_255_/_18%)]">
              SA
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block truncate text-sm font-semibold text-foreground">
                Ashfaq
              </span>
              <span className="block truncate font-mono text-[11px] uppercase tracking-[0.09em] text-muted-foreground">
                Backend
              </span>
            </span>
          </Link>

          <div className="ml-1.5 flex items-center gap-0.5">
            {navItems.map((item) => {
              const isActive = isActiveLink(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "motion-fast rounded-full px-3.5 py-1.5 text-sm font-medium text-muted-foreground transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/40 focus-visible:ring-offset-1 focus-visible:ring-offset-background hover:bg-white/5 hover:text-foreground",
                    isActive &&
                      "bg-white/8 text-cyan-100 shadow-[inset_0_0_0_1px_rgb(0_229_255_/_26%),0_0_14px_rgb(59_130_246_/_15%)]"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="ml-auto pl-2">
            <Button
              asChild
              variant="outline"
              className="motion-fast premium-hover-lift h-9 rounded-full border-white/15 bg-white/5 px-4 text-sm text-foreground shadow-[0_0_0_1px_rgb(255_255_255_/_6%)] transition hover:border-cyan-300/42 hover:bg-cyan-300/11 hover:text-cyan-100 hover:shadow-[0_0_20px_rgb(0_229_255_/_22%)] focus-visible:ring-cyan-300/35 focus-visible:ring-offset-1 focus-visible:ring-offset-background"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Start project conversation on WhatsApp"
              >
                Start Project
              </a>
            </Button>
          </div>
        </nav>

        <nav
          aria-label="Mobile navigation"
          className="flex w-full items-center justify-between rounded-2xl border border-white/12 bg-card/80 px-2.5 py-1.5 text-foreground shadow-[0_12px_34px_rgb(2_6_23_/_40%)] backdrop-blur-xl lg:hidden"
        >
          <Link
            href="/"
            className="group motion-fast flex min-w-0 items-center gap-2 rounded-xl px-2 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/40 focus-visible:ring-offset-1 focus-visible:ring-offset-background"
            aria-label="Go to homepage"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-300/35 bg-cyan-300/12 text-[11px] font-semibold text-cyan-100">
              SA
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block truncate text-sm font-semibold text-foreground">
                Ashfaq
              </span>
              <span className="block truncate font-mono text-[10px] uppercase tracking-[0.08em] text-muted-foreground">
                Backend
              </span>
            </span>
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="motion-fast premium-hover-lift rounded-xl border border-white/10 text-foreground hover:bg-white/10 focus-visible:ring-cyan-300/35 focus-visible:ring-offset-1 focus-visible:ring-offset-background"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[88vw] max-w-[380px] border-white/10 bg-background/95 p-0 text-foreground backdrop-blur-2xl"
            >
              <SheetHeader className="px-6 pb-1 pt-6">
                <SheetTitle className="text-left text-base">Navigation</SheetTitle>
                <SheetDescription className="text-left text-muted-foreground">
                  Browse pages and start a project conversation.
                </SheetDescription>
              </SheetHeader>

              <div className="flex h-full max-h-[calc(100vh-94px)] flex-col gap-2 overflow-y-auto px-6 pb-6 pt-4">
                {navItems.map((item) => {
                  const isActive = isActiveLink(item.href);
                  return (
                    <SheetClose key={item.label} asChild>
                      <Link
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "motion-fast premium-hover-lift rounded-xl border border-transparent px-4 py-3 text-base font-medium text-foreground transition hover:border-cyan-300/20 hover:bg-white/5 hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/40 focus-visible:ring-offset-1 focus-visible:ring-offset-background",
                          isActive &&
                            "border-cyan-300/30 bg-cyan-300/10 text-cyan-100 shadow-[0_0_20px_rgb(59_130_246_/_18%)]"
                        )}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  );
                })}

                <Button
                  asChild
                  className="motion-fast premium-hover-lift mt-4 h-11 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90 focus-visible:ring-cyan-300/35 focus-visible:ring-offset-1 focus-visible:ring-offset-background"
                >
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Start project conversation on WhatsApp"
                  >
                    Start Project
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </Container>
    </header>
  );
}
