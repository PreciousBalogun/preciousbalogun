import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { getNextProject, getProjectBySlug, projects } from "@/lib/projects-data";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    if (!project) throw notFound();
    return { project, next: getNextProject(params.slug) };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — Case Study` },
          { name: "description", content: loaderData.project.summary },
          { property: "og:title", content: `${loaderData.project.title} — Case Study` },
          { property: "og:description", content: loaderData.project.summary },
        ]
      : [],
  }),
  component: CaseStudy,
  errorComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="text-2xl font-bold">Something went wrong</h1>
      <Link to="/" className="mt-4 inline-block text-primary">Go home</Link>
    </div>
  ),
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="text-2xl font-bold">Project not found</h1>
      <Link to="/" hash="projects" className="mt-4 inline-block text-primary">
        ← All Projects
      </Link>
    </div>
  ),
});

function CaseStudy() {
  const { project, next } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <article className="mx-auto max-w-5xl px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <Link
          to="/"
          hash="projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> All Projects
        </Link>

        <header className="mt-10">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full bg-primary-soft px-2.5 py-1 text-xs font-medium text-primary"
              >
                {t}
              </span>
            ))}
          </div>
          <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {project.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-end justify-between gap-6 border-t border-border pt-6">
            <dl className="grid grid-cols-2 gap-x-10 gap-y-4 sm:grid-cols-3">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Client
                </dt>
                <dd className="mt-1 text-sm font-medium">{project.client}</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Role
                </dt>
                <dd className="mt-1 text-sm font-medium">{project.role}</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Year
                </dt>
                <dd className="mt-1 text-sm font-medium">{project.year}</dd>
              </div>
            </dl>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Visit Live Site <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </header>

        <div className="mt-12 overflow-hidden rounded-2xl bg-surface-muted md:mt-16">
          <img
            src={project.heroImage}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </div>

        <section className="mt-16 grid gap-4 md:grid-cols-[200px_1fr] md:gap-10">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Overview
          </h2>
          <p className="text-base leading-relaxed text-foreground/80">
            {project.overview}
          </p>
        </section>

        <section className="mt-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Challenge
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/80">
              {project.challenge}
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Solution
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/80">
              {project.solution}
            </p>
          </div>
        </section>

        <section className="mt-14 grid gap-4 md:grid-cols-[200px_1fr] md:gap-10">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Results
          </h2>
          <p className="text-base leading-relaxed text-foreground/80">
            {project.results}
          </p>
        </section>

        {project.gallery.length > 0 && (
          <section className="mt-16">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {project.gallery.map((src, i) => (
                <div
                  key={`${src}-${i}`}
                  className="aspect-[4/3] overflow-hidden rounded-2xl bg-surface-muted"
                >
                  <img
                    src={src}
                    alt={`${project.title} — image ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        <footer className="mt-20 border-t border-border pt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Next Project
          </p>
          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="mt-3 inline-flex items-center gap-3 text-3xl font-bold text-foreground transition-colors hover:text-primary md:text-4xl"
          >
            {next.title} <ArrowUpRight className="h-6 w-6 text-primary" />
          </Link>
        </footer>
      </article>
    </div>
  );
}

// Ensure tree-shaking keeps the list referenced.
void projects;