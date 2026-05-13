import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const statusPillVariants = cva(
  "inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11px] font-medium tracking-[0.08em] uppercase transition-colors",
  {
    variants: {
      tone: {
        neutral: "border-border bg-white/5 text-muted-foreground",
        info: "border-cyan-300/30 bg-cyan-300/10 text-cyan-200",
        success: "border-emerald-300/35 bg-emerald-300/10 text-emerald-200",
        warning: "border-amber-300/35 bg-amber-300/10 text-amber-200",
        danger: "border-rose-300/35 bg-rose-300/10 text-rose-200",
      },
    },
    defaultVariants: {
      tone: "neutral",
    },
  }
);

const toneByStatus = {
  architecture: "info",
  building: "warning",
  testing: "success",
  upcoming: "neutral",
  live: "success",
  issue: "danger",
} as const;

type StatusKey = keyof typeof toneByStatus;

type StatusPillProps = React.ComponentProps<"span"> &
  VariantProps<typeof statusPillVariants> & {
    status?: StatusKey;
    showDot?: boolean;
  };

export function StatusPill({
  className,
  tone,
  status,
  showDot = true,
  children,
  ...props
}: StatusPillProps) {
  const resolvedTone = tone ?? (status ? toneByStatus[status] : "neutral");
  const label = children ?? status;

  if (!label) {
    return null;
  }

  return (
    <span
      data-slot="premium-status-pill"
      className={cn(statusPillVariants({ tone: resolvedTone }), className)}
      {...props}
    >
      {showDot ? <span className="h-1.5 w-1.5 rounded-full bg-current/90" /> : null}
      <span>{label}</span>
    </span>
  );
}
