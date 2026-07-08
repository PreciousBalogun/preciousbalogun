import { useEffect, useState } from "react";

/**
 * Returns true on devices whose primary pointer has no hover capability
 * (phones / touch tablets). Used to enable tap-to-toggle behavior that
 * mirrors desktop hover effects.
 */
export function useCoarsePointer() {
  const [isCoarse, setIsCoarse] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(hover: none), (pointer: coarse)");
    const update = () => setIsCoarse(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  return isCoarse;
}