import { ArrowRight, Bug, Globe, LayoutDashboard, LucideIcon, Server, Sparkles, Wrench } from "lucide-react";

import { GlassPanel } from "@/components/premium/GlassPanel";
import type { ServiceItem } from "@/data/services";

const iconMap: Record<ServiceItem["icon"], LucideIcon> = {
  globe: Globe,
  wrench: Wrench,
  server: Server,
  "layout-dashboard": LayoutDashboard,
  bug: Bug,
  sparkles: Sparkles,
};

type ServiceCardProps = {
  service: ServiceItem;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <GlassPanel
      padding="sm"
      className="group h-full border-white/10 bg-card/68 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/38"
    >
      <div className="flex h-full flex-col">
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200 transition group-hover:border-cyan-300/45 group-hover:bg-cyan-300/16">
          <Icon className="h-5 w-5" />
        </div>

        <h3 className="text-lg font-semibold tracking-tight text-foreground">{service.title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.description}</p>

        <ul className="mt-5 space-y-2.5">
          {service.bullets.map((point) => (
            <li key={point} className="flex items-start gap-2.5 text-sm text-slate-200">
              <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/80" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground">
            Stack: {service.stack}
          </p>

          <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-100 transition group-hover:text-cyan-200">
            Discuss this
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </p>
        </div>
      </div>
    </GlassPanel>
  );
}
