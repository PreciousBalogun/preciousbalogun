import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { projects } from "@/lib/projects-data";

export function Projects() {
  return (
    <section id="projects" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              02 — Selected Work
            </p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">Projects</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            A small selection of recent work.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.slug}
              data-tap-reveal
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all hover:-translate-y-1 hover:shadow-xl data-[tapped=true]:-translate-y-1 data-[tapped=true]:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden bg-surface-muted">
                <img
                  src={p.heroImage}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 group-data-[tapped=true]:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex max-w-full shrink-0 items-center whitespace-nowrap rounded-full bg-primary-soft px-2.5 py-1 text-[11px] font-medium leading-none text-primary sm:text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 text-2xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.summary}
                </p>
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5 group-data-[tapped=true]:gap-2.5"
                >
                  View Project <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}