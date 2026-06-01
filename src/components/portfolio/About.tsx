import { ArrowRight } from "lucide-react";

const skills = [
  "UI/UX Design",
  "Product Strategy",
  "Wireframing",
  "Prototyping",
  "Design Systems",
  "User Research",
  "Usability Testing",
  "Information Architecture",
];

const tools = ["Figma", "Stitch", "Lovable", "VS Code", "Wix", "Vercel", "Canva", "WordPress"];

export function About() {
  return (
    <section id="about" className="bg-surface py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">01 — About</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">About Me</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            I'm a detail-oriented Product Designer with experience building design
            systems from scratch and delivering MVPs in Fintech and agency environments.
            I've worked across startups and consulting firms, collaborating with
            cross-functional teams to turn complex business problems into clean,
            user-centered solutions.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
          >
            Let's Connect <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Skillset
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-primary/20 bg-primary-soft px-3.5 py-1.5 text-sm font-medium text-primary"
              >
                {s}
              </span>
            ))}
          </div>
          <h3 className="mt-10 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Tools
          </h3>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {tools.map((t) => (
              <div
                key={t}
                className="rounded-lg border border-border bg-background px-3 py-2.5 text-center text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}