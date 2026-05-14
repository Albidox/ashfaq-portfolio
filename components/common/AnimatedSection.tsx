"use client";

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

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : {
              duration: 0.52,
              ease: "easeOut",
              delay,
            }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
