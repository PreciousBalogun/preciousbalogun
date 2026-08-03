import type { ElementType, ReactNode } from "react";
import { useInView, usePrefersReducedMotion } from "@/hooks/useMotion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** delay in ms */
  delay?: number;
  /** entrance direction offset */
  from?: "up" | "left" | "right" | "none";
  as?: ElementType;
  duration?: number;
} & Record<string, unknown>;

const OFFSETS: Record<string, string> = {
  up: "translateY(20px)",
  left: "translateX(-16px)",
  right: "translateX(16px)",
  none: "none",
};

export function Reveal({
  children,
  className,
  delay = 0,
  from = "up",
  as,
  duration = 550,
  ...rest
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const [ref, inView] = useInView<HTMLElement>();
  const reduced = usePrefersReducedMotion();
  const show = reduced || inView;

  return (
    <Tag
      ref={ref as never}
      className={cn("will-change-[opacity,transform]", className)}
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "none" : OFFSETS[from],
        transition: reduced
          ? undefined
          : `opacity ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}