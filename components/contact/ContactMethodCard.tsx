import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

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
    <Card className="group h-full border-white/10 bg-white/[0.03] text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.06]">
      <CardContent className="p-6">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
          {icon}
        </div>

        <h3 className="text-xl font-semibold text-white">{title}</h3>

        <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>

        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          className="mt-5 inline-flex items-center text-sm font-medium text-cyan-300"
        >
          {label}
          <ArrowUpRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
        </a>
      </CardContent>
    </Card>
  );
}
