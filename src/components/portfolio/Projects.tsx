import { ArrowUpRight } from "lucide-react";
import novabuk from "@/assets/project-novabuk.jpg";
import webcoupers from "@/assets/project-webcoupers.jpg";
import lima from "@/assets/project-lima.jpg";
import verunAsset from "@/assets/project-verun.png.asset.json";

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
  {
    title: "Clarity",
    description:
      "A residential cleaning services website for a San Mateo, CA-based business. Designed and built a clean, conversion-focused one-pager with service listings, a quote request form, and trust indicators.",
    tags: ["Web Design", "Lovable", "Landing Page"],
    image: lima,
  },
  {
    title: "Naan Soju Bang",
    description:
      "A restaurant website for a Korean dining experience. Built a warm, atmospheric one-pager featuring the menu, brand story, and reservation flow — designed to reflect the restaurant's personality and culture.",
    tags: ["Web Design", "Lovable", "Restaurant", "Branding"],
    image: naan,
  },
  {
    title: "Verun",
    description:
      "Landing page for an AI-powered digital advertising platform. Designed a bold, high-contrast hero and conversion flow that communicates real-time optimization and performance analytics at a glance.",
    tags: ["Web Design", "SaaS", "Landing Page"],
    image: verunAsset.url,
  },
  {
    title: "Capdal Website Redesign",
    description:
      "End-to-end redesign of the Capdal marketing site — rebuilt information architecture, visual system, and key conversion surfaces for a sharper, more trustworthy brand presence.",
    tags: ["Web Design", "Redesign", "Branding"],
    image: webcoupers,
  },
];

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
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden bg-surface-muted">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
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
                  {p.description}
                </p>
                <a
                  href="#contact"
                  className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5"
                >
                  View Project <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}