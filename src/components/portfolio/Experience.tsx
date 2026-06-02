const experience = [
  {
    company: "Webcoupers Consulting Agency",
    role: "Product Design Intern",
    date: "Oct 2025 – Present",
    bullets: [
      "End-to-end design execution across client projects",
      "User research and iterative testing",
    ],
  },
  {
    company: "NovaBuk",
    role: "UI Designer",
    date: "Oct 2025 – Apr 2026",
    bullets: [
      "Founding design lead, built 2 MVPs",
      "Architected 2 design systems, improving iteration speed by 30%",
    ],
  },
  {
    company: "Harmonics Technology",
    role: "Product Design Intern",
    date: "Mar 2025 – Mar 2026",
    bullets: [
      "Designed features for Fintech and community platforms",
      "UI refinements based on senior designer feedback",
    ],
  },
  {
    company: "Dominion City Church",
    role: "UI Designer",
    date: "Apr – May 2025",
    bullets: [
      "Built mobile app for church community engagement",
      "Applied UX principles for accessible mobile interfaces",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="bg-surface-muted py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            03 — Experience
          </p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">A journey through craft</h2>
        </div>
        <ol className="relative border-l-2 border-border pl-8 md:pl-12">
          {experience.map((exp) => (
            <li key={exp.company} className="mb-10 last:mb-0">
              <span className="absolute -left-[9px] mt-2 h-4 w-4 rounded-full border-4 border-background bg-primary" />
              <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm transition-shadow hover:shadow-md md:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-bold">{exp.company}</h3>
                  <span className="text-xs font-medium text-muted-foreground">{exp.date}</span>
                </div>
                <p className="mt-1 text-sm font-semibold text-primary">{exp.role}</p>
                <ul className="mt-4 space-y-2">
                  {exp.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}