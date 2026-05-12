"use client";

import Link from "next/link";
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
import { siteConfig } from "@/data/site";
import { createWhatsAppUrl } from "@/lib/contact-links";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Resume", href: "/resume" },
];

export function Navbar() {
  const whatsappUrl = createWhatsAppUrl(contact.whatsapp);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" className="group flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 text-sm font-bold text-cyan-300 ring-1 ring-cyan-300/30 transition group-hover:bg-cyan-400/20">
              SA
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-white">{siteConfig.name}</p>
              <p className="text-xs text-slate-400">{siteConfig.role}</p>
            </div>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-300 transition hover:text-cyan-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Button
              asChild
              variant="outline"
              className="border-cyan-300/30 bg-transparent text-cyan-200 hover:bg-cyan-300/10 hover:text-cyan-100"
            >
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                Start a Project
              </a>
            </Button>
          </div>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[88vw] max-w-[360px] border-white/10 bg-slate-950/98 p-0 text-white"
              >
                <SheetHeader className="px-6 pb-2 pt-5">
                  <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                  <SheetDescription className="sr-only">
                    Main navigation links for the portfolio website.
                  </SheetDescription>
                </SheetHeader>

                <div className="flex h-full max-h-[calc(100vh-80px)] flex-col gap-5 overflow-y-auto px-6 pb-6 pt-4">
                  {navItems.map((item) => (
                    <SheetClose key={item.href} asChild>
                      <Link
                        href={item.href}
                        className="text-base font-medium text-slate-200 transition hover:text-cyan-300"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}

                  <Button asChild className="mt-2 bg-cyan-400 text-slate-950 hover:bg-cyan-300">
                    <a href={whatsappUrl} target="_blank" rel="noreferrer">
                      Start a Project
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </Container>
    </header>
  );
}
