import * as React from "react";

import { cn } from "@/lib/utils";

const paddingClasses = {
  none: "",
  sm: "p-4 md:p-5",
  md: "p-6 md:p-7",
  lg: "p-8 md:p-10",
} as const;

type GlassPanelProps = React.ComponentProps<"div"> & {
  glow?: boolean;
  interactive?: boolean;
  padding?: keyof typeof paddingClasses;
};

export function GlassPanel({
  className,
  glow = true,
  interactive = false,
  padding = "md",
  ...props
}: GlassPanelProps) {
  return (
    <div
      data-slot="premium-glass-panel"
      className={cn(
        "motion-normal rounded-3xl border border-border bg-card/65 text-card-foreground shadow-[0_16px_40px_rgb(2_6_23_/_35%)] backdrop-blur-xl",
        glow && "premium-border-glow",
        interactive && "premium-hover-lift",
        paddingClasses[padding],
        className
      )}
      {...props}
    />
  );
}
