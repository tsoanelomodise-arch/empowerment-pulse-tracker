import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/use-in-view";

interface CountUpProps {
  end: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  /** Format with thousands separators */
  separator?: boolean;
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export const CountUp = ({
  end,
  duration = 1400,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
  separator = true,
}: CountUpProps) => {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.3 });
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!inView) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setValue(end);
      return;
    }
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      setValue(end * easeOutCubic(t));
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [inView, end, duration]);

  const formatted = value.toFixed(decimals);
  const display = separator
    ? Number(formatted).toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })
    : formatted;

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
};
