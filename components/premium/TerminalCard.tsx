import { cn } from "@/lib/utils";
import { GlassPanel } from "@/components/premium/GlassPanel";
import { StatusPill } from "@/components/premium/StatusPill";

type TerminalPayload = {
  developer: string;
  role: string;
  stack: string[];
  services: string[];
  status: string;
};

type TerminalCardProps = {
  className?: string;
  payload?: TerminalPayload;
};

const defaultPayload: TerminalPayload = {
  developer: "Sk Ashfaq Bux",
  role: "Java Backend Developer",
  stack: ["Spring Boot", "PostgreSQL", "Next.js"],
  services: ["APIs", "Dashboards", "Automation"],
  status: "available_for_projects",
};

export function TerminalCard({ className, payload = defaultPayload }: TerminalCardProps) {
  return (
    <GlassPanel
      padding="sm"
      className={cn("w-full rounded-[24px] border-white/12 bg-card/72", className)}
    >
      <div className="rounded-2xl border border-white/10 bg-background/88 p-4 sm:p-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <p className="truncate font-mono text-[11px] uppercase tracking-[0.09em] text-muted-foreground">
            architect_console.json
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-black/25 p-3 sm:p-4">
          <pre className="w-full whitespace-pre-wrap break-words font-mono text-[12px] leading-6 text-slate-200 sm:text-[13px]">
{`{
  "developer": "${payload.developer}",
  "role": "${payload.role}",
  "stack": ["${payload.stack.join('", "')}"],
  "services": ["${payload.services.join('", "')}"],
  "status": "${payload.status}"
}`}
          </pre>

          <div className="mt-3 flex items-center gap-2 font-mono text-xs text-cyan-200">
            <span className="text-slate-400">$</span>
            <span>backend_session_ready</span>
            <span className="premium-cursor-blink inline-block h-4 w-[2px] rounded bg-cyan-200 align-middle" />
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <StatusPill tone="success">available_for_projects</StatusPill>
          <StatusPill tone="info">backend_first</StatusPill>
          <StatusPill tone="neutral">mobile_safe</StatusPill>
        </div>
      </div>
    </GlassPanel>
  );
}
