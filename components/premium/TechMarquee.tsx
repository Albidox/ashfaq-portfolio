import { cn } from "@/lib/utils";

type TechMarqueeProps = {
  items: string[];
  className?: string;
};

export function TechMarquee({ items, className }: TechMarqueeProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

      <div className="animate-marquee-scroll marquee-pause-on-hover flex w-max min-w-full items-center gap-3 py-1 [animation-timing-function:linear]">
        {[...items, ...items].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="motion-fast premium-hover-lift inline-flex shrink-0 items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-[12px] text-slate-200 hover:border-cyan-300/35 hover:bg-cyan-300/10 hover:text-cyan-100"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
