import {
  ArrowRight,
  Bug,
  Globe,
  LayoutDashboard,
  LucideIcon,
  Server,
  Sparkles,
  Wrench,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const iconMap: Record<string, LucideIcon> = {
  globe: Globe,
  wrench: Wrench,
  server: Server,
  "layout-dashboard": LayoutDashboard,
  bug: Bug,
  sparkles: Sparkles,
};

type ServiceCardProps = {
  service: {
    title: string;
    description: string;
    includes: string[];
    startingPrice: string;
    icon: string;
  };
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Sparkles;

  return (
    <Card className="card-glow group relative h-full border-white/10 bg-white/[0.03] text-white shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.06]">
      <CardContent className="flex h-full flex-col p-6">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300 transition group-hover:bg-cyan-300/20">
          <Icon className="h-6 w-6" />
        </div>

        <h3 className="text-xl font-semibold tracking-tight text-white">
          {service.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-300">
          {service.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {service.includes.slice(0, 4).map((item) => (
            <Badge
              key={item}
              variant="secondary"
              className="border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
            >
              {item}
            </Badge>
          ))}
        </div>

        <div className="mt-auto pt-6">
          <p className="text-sm font-medium text-cyan-300">
            {service.startingPrice}
          </p>

          <div className="mt-4 inline-flex items-center text-sm font-medium text-slate-300 transition group-hover:text-cyan-300">
            Discuss this service
            <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
