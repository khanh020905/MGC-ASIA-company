import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export const Marquee = ({ children, speed = 20, className }: MarqueeProps) => {
  return (
    <div className={cn("overflow-hidden flex whitespace-nowrap", className)}>
      <motion.div
        className="flex min-w-full shrink-0 items-center justify-around gap-8"
        animate={{
          x: ["0%", "-100%"],
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className="flex min-w-full shrink-0 items-center justify-around gap-8"
        animate={{
          x: ["0%", "-100%"],
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
        aria-hidden="true"
      >
        {children}
      </motion.div>
    </div>
  );
};
