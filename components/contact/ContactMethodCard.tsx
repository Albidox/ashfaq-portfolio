import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

import { GlassPanel } from "@/components/premium/GlassPanel";

type ContactMethodCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  label: string;
};

export function ContactMethodCard({
  icon,
  title,
  description,
  href,
  label,
}: ContactMethodCardProps) {
  return (
    <GlassPanel
      padding="sm"
      className="group motion-normal premium-hover-lift h-full border-white/10 bg-card/70 hover:border-cyan-300/35"
    >
      <div className="motion-fast mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200 group-hover:border-cyan-300/45 group-hover:bg-cyan-300/16">
        {icon}
      </div>

      <h3 className="text-lg font-semibold tracking-tight text-foreground">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>

      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        className="motion-fast mt-5 inline-flex items-center rounded-md px-1 py-0.5 text-sm font-medium text-cyan-200 transition hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/40 focus-visible:ring-offset-1 focus-visible:ring-offset-background"
      >
        {label}
        <ArrowUpRight className="motion-fast ml-2 h-4 w-4 transition group-hover:translate-x-1" />
      </a>
    </GlassPanel>
  );
}
