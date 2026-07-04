import { useEffect } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import {
  getNextProject,
  getProjectBySlug,
  projects,
  type Project,
} from "@/lib/projects-data";

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
  const { project, next } = Route.useLoaderData() as {
    project: Project;
    next: Project;
  };

  useEffect(() => {
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = prev;
    };
  }, []);

  const chips = buildChips(project);
  const problemBullets = project.problemBullets ?? [];
  const responsibilities = project.responsibilities ?? [];
  const insights = project.insights ?? defaultInsights;
  const ideation = project.ideation ?? defaultIdeation(project);
  const decisions = project.designDecisions ?? defaultDecisions(project);
  const finals = project.finalDesigns ?? project.gallery;
  const stats = project.stats ?? [];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky back link */}
      <div className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
          <Link
            to="/"
            hash="projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Work
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 text-sm font-semibold text-primary hover:opacity-80 sm:inline-flex"
            >
              Visit Live Site <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      {/* 1. Hero */}
      <section className="relative overflow-hidden">
        <div className="relative h-[70vh] min-h-[520px] w-full">
          <img
            src={project.heroImage}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
          <div className="relative z-10 mx-auto flex h-full max-w-[1200px] flex-col justify-end px-6 pb-14 sm:px-10 lg:px-16 lg:pb-20">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur"
                >
                  {t}
                </span>
              ))}
            </div>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
              {project.tagline ?? project.summary}
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {chips.map((c) => (
                <div
                  key={c.label}
                  className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur"
                >
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                    {c.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-white">
                    {c.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* 2. Overview */}
      <Section>
        <Eyebrow>Overview</Eyebrow>
        <SectionHeading>About the project</SectionHeading>
        <Prose>{project.overview}</Prose>
      </Section>

      {/* 3. The Problem */}
      <div className="bg-surface-muted">
        <Section>
          <Eyebrow>The Problem</Eyebrow>
          <SectionHeading>What we set out to solve</SectionHeading>
          <div className="mx-auto max-w-[720px] rounded-2xl border border-border bg-background p-6 sm:p-8">
            <p className="text-base leading-relaxed text-foreground/85 md:text-lg">
              {project.problem ?? project.challenge}
            </p>
            {problemBullets.length > 0 && (
              <ul className="mt-5 space-y-2.5">
                {problemBullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-3 text-sm leading-relaxed text-foreground/80"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Section>
      </div>

      {/* 4. My Role */}
      <Section>
        <Eyebrow>My Role</Eyebrow>
        <SectionHeading>What I owned</SectionHeading>
        <div className="mx-auto max-w-[720px]">
          <p className="text-base leading-relaxed text-foreground/80">
            {project.roleDetails ??
              `As ${project.role} on ${project.title}, I led the end-to-end design work — from research and IA through to polished, developer-ready specs.`}
          </p>
          {responsibilities.length > 0 && (
            <ul className="mt-6 grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {responsibilities.map((r) => (
                <li
                  key={r}
                  className="flex gap-3 text-sm text-foreground/80"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {r}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Section>

      {/* 5. Research & Discovery */}
      <div className="bg-surface-muted">
        <Section>
          <Eyebrow>Research & Discovery</Eyebrow>
          <SectionHeading>Understanding the space</SectionHeading>
          <Prose>
            {project.researchIntro ??
              "I combined competitive teardown, stakeholder conversations, and analytics review to ground the design in evidence rather than opinion."}
          </Prose>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {insights.map((i) => (
              <div
                key={i.title}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <h3 className="text-base font-bold">{i.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {i.body}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* 6. Defining the Problem */}
      <Section>
        <Eyebrow>Defining the Problem</Eyebrow>
        <SectionHeading>How Might We</SectionHeading>
        <blockquote className="mx-auto max-w-3xl border-l-4 border-primary pl-6 text-2xl font-semibold leading-snug text-foreground md:text-3xl md:leading-snug">
          {project.hmw ??
            `How might we help ${project.client}'s audience understand and act on the product's value within the first few seconds?`}
        </blockquote>
      </Section>

      {/* 7. Ideation & Exploration */}
      <Section>
        <Eyebrow>Ideation & Exploration</Eyebrow>
        <SectionHeading>Sketches and lo-fi explorations</SectionHeading>
        <div className="grid gap-6 sm:grid-cols-2">
          {ideation.map((it, i) => (
            <figure key={i}>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-surface-muted">
                <img
                  src={it.image}
                  alt={it.caption}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                {it.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* 8. Design Decisions */}
      <div className="bg-surface-muted">
        <Section>
          <Eyebrow>Design Decisions</Eyebrow>
          <SectionHeading>The why behind the pixels</SectionHeading>
          <div className="mt-4 flex flex-col gap-16">
            {decisions.map((d, i) => (
              <div
                key={d.title}
                className={`grid items-center gap-8 md:grid-cols-2 md:gap-12 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-background">
                  <img
                    src={d.image}
                    alt={d.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold md:text-3xl">{d.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-foreground/80">
                    {d.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* 9. Final Designs */}
      <Section>
        <Eyebrow>Final Designs</Eyebrow>
        <SectionHeading>The shipped experience</SectionHeading>
        <div className="flex flex-col gap-8">
          {finals.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="overflow-hidden rounded-2xl bg-surface-muted"
            >
              <img
                src={src}
                alt={`${project.title} — final ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        {project.prototypeUrl && (
          <div className="mt-10 flex justify-center">
            <a
              href={project.prototypeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View Prototype <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        )}
      </Section>

      {/* 10. Results & Impact */}
      <div className="bg-surface-muted">
        <Section>
          <Eyebrow>Results & Impact</Eyebrow>
          <SectionHeading>Outcomes</SectionHeading>
          {stats.length > 0 ? (
            <>
              <div className="grid gap-5 sm:grid-cols-3">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-border bg-background p-6 text-center"
                  >
                    <div className="text-4xl font-bold text-primary md:text-5xl">
                      {s.value}
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Prose>{project.resultsContext ?? project.results}</Prose>
              </div>
            </>
          ) : (
            <blockquote className="mx-auto max-w-3xl border-l-4 border-primary pl-6 text-xl font-medium leading-snug text-foreground md:text-2xl">
              {project.forwardLooking ?? project.results}
            </blockquote>
          )}
        </Section>
      </div>

      {/* 11. Reflection */}
      <Section>
        <Eyebrow>What I Learned</Eyebrow>
        <SectionHeading>Reflection</SectionHeading>
        <div className="mx-auto max-w-[720px]">
          <p className="text-base italic leading-relaxed text-muted-foreground">
            {project.reflection ??
              `Working on ${project.title} reminded me that the sharpest design decisions come from listening carefully — to the client, to users, and to what the data quietly keeps saying.`}
          </p>
        </div>
      </Section>

      {/* Next Project */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1200px] px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Next Project
          </p>
          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="group mt-4 flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all hover:-translate-y-1 hover:shadow-xl md:flex-row"
          >
            <div className="aspect-[16/9] overflow-hidden bg-surface-muted md:aspect-auto md:w-1/2">
              <img
                src={next.heroImage}
                alt={next.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-8 md:p-10">
              <div className="flex flex-wrap gap-2">
                {next.tags.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full bg-primary-soft px-2.5 py-1 text-[11px] font-medium text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="mt-4 inline-flex items-center gap-3 text-3xl font-bold md:text-4xl">
                {next.title}
                <ArrowUpRight className="h-6 w-6 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {next.summary}
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
      {children}
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-3 mb-8 text-3xl font-bold tracking-tight md:text-4xl">
      {children}
    </h2>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[720px]">
      <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
        {children}
      </p>
    </div>
  );
}

function buildChips(p: Project) {
  return [
    { label: "Role", value: p.role },
    { label: "Timeline", value: p.timeline ?? p.year },
    { label: "Platform", value: p.platform ?? inferPlatform(p) },
    { label: "Tools", value: p.tools ?? "Figma" },
  ];
}

function inferPlatform(p: Project) {
  const t = p.tags.join(" ").toLowerCase();
  if (t.includes("mobile")) return "Mobile";
  if (t.includes("e-commerce") || t.includes("landing") || t.includes("web"))
    return "Web";
  return "Web";
}

const defaultInsights = [
  {
    title: "Users decide in seconds",
    body: "First-fold clarity had an outsized effect on downstream conversion, so messaging and hierarchy became the highest-leverage lever.",
  },
  {
    title: "Trust cues matter more than features",
    body: "Prospects consistently asked 'who else uses this?' before they asked what it does — social proof needed to sit near the primary CTA.",
  },
  {
    title: "Jargon is a silent bounce",
    body: "Every unexplained acronym cost attention. Plain-language rewrites outperformed cleverer copy in every test.",
  },
  {
    title: "One clear next step wins",
    body: "Pages with a single primary action converted better than pages offering three equally-weighted options.",
  },
];

function defaultIdeation(p: Project) {
  const [a, b] = [p.gallery[0] ?? p.heroImage, p.gallery[1] ?? p.heroImage];
  return [
    {
      image: a,
      caption:
        "Early layout explorations testing how much narrative could sit above the fold without crowding the primary CTA.",
    },
    {
      image: b,
      caption:
        "Alternate hero direction pairing a live-data motif with a quieter, editorial type treatment.",
    },
  ];
}

function defaultDecisions(p: Project) {
  const g = p.gallery.length ? p.gallery : [p.heroImage];
  const pick = (i: number) => g[i % g.length];
  return [
    {
      title: "A hero that earns its space",
      body: "The hero leads with an outcome, not the product name. The headline names the problem in the visitor's language and the subhead promises a concrete result — so the value is legible before anyone scrolls.",
      image: pick(0),
    },
    {
      title: "One primary action, repeated with intent",
      body: "Instead of stacking equal CTAs, a single primary action is repeated at the natural decision points: after the hero, after the proof section, and at the close. Secondary paths are demoted to text links.",
      image: pick(1),
    },
    {
      title: "Proof placed where doubt appears",
      body: "Logos, quotes, and metrics sit adjacent to the claims they support — not quarantined in a testimonials strip. Trust is delivered exactly when the visitor is weighing the claim.",
      image: pick(0),
    },
  ];
}

// Ensure tree-shaking keeps the list referenced.
void projects;