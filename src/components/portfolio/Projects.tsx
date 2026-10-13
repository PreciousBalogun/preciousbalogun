import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { projects } from "@/lib/projects-data";
import { Reveal } from "@/components/motion/Reveal";

const ORDER = ["scrutia", "clarity", "capdal", "verun"] as const;

const META: Record<string, { industry: string; type: string; blurb: string }> = {
  scrutia: {
    industry: "AdTech",
    type: "Product Design",
    blurb:
      "Website for an ad-compliance tool. Agencies upload a creative and see whether it breaks ARCON or platform rules before they spend on it. I designed Home, Compliance and Pricing.",
  },
  clarity: {
    industry: "SaaS",
    type: "Product Design",
    blurb:
      "Landing page for Webcoupers' internal project management tool, still in development. One page for contributors, team leads and executives.",
  },
  capdal: {
    industry: "Construction",
    type: "Web Design",
    blurb:
      "Redesign of a construction firm's website, founded 1932. I designed and built the pages in Tailwind.",
  },
  verun: {
    industry: "AdTech",
    type: "Web Design",
    blurb:
      "The old page didn't say what Verun does. I rebuilt it so a media buyer gets the point in one scroll.",
  },
};

export function Projects() {
  const ordered = ORDER.map((slug) => projects.find((p) => p.slug === slug)).filter(
    (p): p is (typeof projects)[number] => Boolean(p)
  );

  return (
    <section id="projects" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-4 md:mb-24">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              02 — Selected Work
            </p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">Projects</h2>
          </Reveal>
          <Reveal as="p" delay={120} className="max-w-md text-muted-foreground">
            A small selection of recent work.
          </Reveal>
        </div>

        <div className="space-y-20 md:space-y-28 lg:space-y-36">
          {ordered.map((p, i) => {
            const meta = META[p.slug];
            const imageRight = i % 2 === 1;
            return (
              <Reveal
                key={p.slug}
                as="article"
                delay={i * 90}
                className="group relative"
              >
                <div className="grid items-center gap-8 rounded-3xl border border-border bg-background p-5 transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl sm:p-7 lg:grid-cols-5 lg:gap-12 lg:p-8">
                  <div
                    className={`overflow-hidden rounded-2xl bg-surface-muted lg:col-span-3 ${
                      imageRight ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="aspect-[16/10] w-full">
                      <img
                        src={p.heroImage}
                        alt={`${p.title} — ${meta?.industry ?? ""} case study cover`}
                        loading="lazy"
                        className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>

                  <div
                    className={`flex min-w-0 flex-col lg:col-span-2 ${
                      imageRight ? "lg:order-1" : ""
                    }`}
                  >
                    <h3 className="text-2xl font-bold sm:text-3xl">{p.title}</h3>
                    {p.tagline ? (
                      <p className="mt-2 text-base text-foreground/80">{p.tagline}</p>
                    ) : null}

                    <div className="mt-4 flex flex-wrap items-center gap-1.5 sm:gap-2">
                      {[meta?.industry, meta?.type].filter(Boolean).map((t) => (
                        <span
                          key={t}
                          className="inline-flex max-w-full shrink-0 items-center whitespace-nowrap rounded-full bg-primary-soft px-2.5 py-1 text-[11px] font-medium leading-none text-primary sm:text-xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                      {meta?.blurb ?? p.summary}
                    </p>

                    <div className="mt-7 flex flex-wrap items-center gap-5">
                      <Link
                        to="/projects/$slug"
                        params={{ slug: p.slug }}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary after:absolute after:inset-0 after:content-['']"
                      >
                        View Case Study
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                      {p.liveUrl ? (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="relative z-10 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                          Live Website
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
