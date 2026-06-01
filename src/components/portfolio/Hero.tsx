import { MapPin, ArrowRight, Download, Sparkles } from "lucide-react";
import workspace from "@/assets/hero-workspace.jpg";
import profile from "@/assets/profile.jpg";

const badges = [
  { label: "4 Companies" },
  { label: "2 MVPs Delivered" },
  { label: "3 Design Systems Built" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.06]"
        style={{ backgroundImage: `url(${workspace})` }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[1.2fr_1fr]">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
            <MapPin className="h-3.5 w-3.5 text-primary" /> Lagos, Nigeria
          </span>
          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
            Designing with{" "}
            <span className="text-primary">Purpose.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Product Designer specialising in design systems, MVPs, and user-centered
            digital experiences across Fintech and Agency environments.
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
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {badges.map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="font-medium text-foreground">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative animate-fade-up [animation-delay:200ms]">
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-primary-soft to-transparent blur-2xl" aria-hidden />
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-surface-muted shadow-xl">
            <img
              src={profile}
              alt="Precious Balogun"
              className="h-full w-full object-cover"
              width={900}
              height={1100}
            />
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-2xl border border-border bg-surface px-4 py-3 shadow-lg">
            <p className="text-xs text-muted-foreground">Available for</p>
            <p className="text-sm font-semibold">Full-time & Freelance</p>
          </div>
        </div>
      </div>
    </section>
  );
}