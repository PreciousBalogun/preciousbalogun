import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Precious brings a rare combination of design rigor and product intuition. She translated vague requirements into a coherent design system that our engineers could ship without friction.",
    name: "Adaeze Okafor",
    title: "Product Lead, NovaBuk",
    initials: "AO",
  },
  {
    quote:
      "Working with Precious was a turning point for our analytics surface. Her research-led approach surfaced problems we didn't know we had — and her solutions just felt right.",
    name: "Daniel Ade",
    title: "Engagement Manager, Webcoupers",
    initials: "DA",
  },
  {
    quote:
      "Calm, sharp, and genuinely collaborative. Precious raises the bar of every team she joins and her attention to detail is unmatched.",
    name: "Tomi Bankole",
    title: "Senior Designer, Harmonics",
    initials: "TB",
  },
];

export function Recommendations() {
  return (
    <section id="recommendations" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            04 — Recommendations
          </p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Kind words from collaborators</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            A few thoughts from teammates and clients I've had the pleasure of working with.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col rounded-2xl border border-border bg-background p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <Quote className="h-6 w-6 text-primary" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-soft text-sm font-semibold text-primary">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.title}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}