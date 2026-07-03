import { MapPin, ArrowRight, Download } from "lucide-react";
import { useEffect, useState } from "react";
import workspace from "@/assets/hero-workspace.jpg";
import profileImage from "@/assets/profile.jpg";
import { useIsDark } from "@/hooks/useIsDark";


function useLagosTime() {
  const [time, setTime] = useState<string>("");
  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "Africa/Lagos",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}


export function Hero() {
  const lagosTime = useLagosTime();
  const isDark = useIsDark();
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.06]"
        style={{ backgroundImage: `url(${workspace})` }}
        aria-hidden
      />
      <div
  key={`profile-glow-${isDark ? "dark" : "light"}`}
  className="absolute -inset-6 -z-10 rounded-3xl blur-2xl"
  style={{
    backgroundImage:
      "linear-gradient(to right bottom, var(--primary-soft) 0%, transparent 100%)",
    willChange: "transform",
    transform: "translateZ(0)",
  }}
  aria-hidden
/>
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-10 lg:px-16 md:grid-cols-[1.2fr_1fr]">
        <div className="animate-fade-up">
          <span className="group relative inline-flex cursor-default items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm transition-all duration-300 ease-out hover:scale-105 hover:border-primary hover:text-primary hover:shadow-md">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            <span className="relative">
              Lagos, Nigeria
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full" />
            </span>
            <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-primary px-2 py-1 text-[10px] font-medium text-primary-foreground opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
              {lagosTime ? `Lagos · ${lagosTime}` : "Based in West Africa · GMT+1"}
            </span>
          </span>
          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
            Designing with{" "}
            <span className="text-primary">Purpose.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Product Designer crafting user-centered digital experiences that work
            across industries and markets.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:opacity-90 hover:shadow-lg"
            >
              View My Work <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>
        </div>
        <div className="relative animate-fade-up [animation-delay:200ms]">
          <div
            key={`profile-glow-${isDark ? "dark" : "light"}`}
            className="absolute -inset-6 -z-10 rounded-3xl blur-2xl"
            style={{
              backgroundImage:
                "linear-gradient(to right bottom, var(--primary-soft) 0%, transparent 100%)",
            }}
            aria-hidden
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-surface-muted transition-colors duration-300 lg:shadow-xl">
            <img
              src={profileImage}
              alt="Precious Balogun"
              className="h-full w-full object-cover"
              width="900"
              height="1100"
              loading="eager"
              decoding="async"
            />
          </div>
          <a
            href="#contact"
            className="group/avail absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3 lg:shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary hover:shadow-xl"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            <span>
              <span className="block text-xs text-muted-foreground transition-colors group-hover/avail:text-primary">
                Available for
              </span>
              <span className="block text-sm font-semibold">Full-time & Freelance</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
