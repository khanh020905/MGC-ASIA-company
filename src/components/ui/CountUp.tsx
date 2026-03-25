import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

export function CountUp({
  end,
  duration = 2,
  decimals = 0,
}: {
  end: number;
  duration?: number;
  decimals?: number;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = time - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // Custom easeOut function (Quartic)
      const easeOut = 1 - Math.pow(1 - percentage, 4);
      
      setValue(end * easeOut);

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setValue(end); // Ensure exact final value
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return <span ref={ref}>{value.toFixed(decimals)}</span>;
}
