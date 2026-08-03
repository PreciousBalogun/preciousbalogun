import { useEffect, useState } from "react";
import { useInView, usePrefersReducedMotion } from "@/hooks/useMotion";

/**
 * Animates the numeric portion of a stat value (e.g. "100%", "2.4x", "+35")
 * from 0 to its final value. Non-numeric values render as-is.
 */
export function CountUp({ value, duration = 1200 }: { value: string; duration?: number }) {
  const [ref, inView] = useInView<HTMLSpanElement>();
  const reduced = usePrefersReducedMotion();

  const match = value.match(/^([^\d-]*)(-?\d+(?:\.\d+)?)(.*)$/);
  const isOrdinal = /\d+(st|nd|rd|th)\b/i.test(value);
  const target = match && !isOrdinal ? parseFloat(match[2]) : null;
  const decimals =
    target !== null && match![2].includes(".") ? match![2].split(".")[1].length : 0;
  const [display, setDisplay] = useState(
    target === null ? value : `${match![1]}0${match![3]}`
  );

  useEffect(() => {
    if (target === null) return;
    if (reduced) {
      setDisplay(value);
      return;
    }
    if (!inView) return;
    const start = performance.now();
    let frame = requestAnimationFrame(function tick(now) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = (target * eased).toFixed(decimals);
      setDisplay(`${match![1]}${current}${match![3]}`);
      if (t < 1) frame = requestAnimationFrame(tick);
    });
    return () => cancelAnimationFrame(frame);
  }, [inView, reduced, target, duration, decimals, value]);

  return <span ref={ref}>{target === null ? value : display}</span>;
}