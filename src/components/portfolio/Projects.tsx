import { ArrowUpRight } from "lucide-react";
import novabuk from "@/assets/project-novabuk.jpg";
import webcoupers from "@/assets/project-webcoupers.jpg";

const projects = [
  {
    title: "NovaBuk Platform",
    description:
      "Founding design for a fintech MVP — building a coherent design system and onboarding flows from zero to launch.",
    tags: ["Fintech", "Design System", "MVP"],
    image: novabuk,
  },
  {
    title: "Webcoupers Intelligence",
    description:
      "Analytics surface for a consulting agency — turning dense data into decisions through clear hierarchy and motion.",
    tags: ["Agency", "Dashboard", "UX Research"],
    image: webcoupers,
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              03 — Selected Work
            </p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">Projects</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            A small selection of recent work — case studies coming soon.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-2xl border border-border bg-background transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden bg-surface-muted">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-primary-soft px-2.5 py-0.5 text-xs font-medium text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 text-2xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5"
                >
                  View Case Study <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}