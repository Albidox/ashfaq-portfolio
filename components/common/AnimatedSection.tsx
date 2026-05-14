"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function AnimatedSection({
  children,
  className,
  delay = 0,
}: AnimatedSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isMobileViewport, setIsMobileViewport] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const updateViewport = () => setIsMobileViewport(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);
    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  const revealViewport = isMobileViewport
    ? { once: true, amount: 0.06, margin: "0px 0px -10% 0px" }
    : { once: true, amount: 0.12, margin: "0px 0px -12% 0px" };

  const revealDelay = prefersReducedMotion ? 0 : isMobileViewport ? Math.min(delay, 0.03) : delay;
  const revealOffset = isMobileViewport ? 14 : 20;
  const revealDuration = isMobileViewport ? 0.45 : 0.5;

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: revealOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={revealViewport}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : {
              duration: revealDuration,
              ease: "easeOut",
              delay: revealDelay,
            }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
