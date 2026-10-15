import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const skills = [
  "UI design",
  "Design systems",
  "Landing pages",
  "Wireframing",
  "Front end",
];

const tools = ["Figma", "Stitch", "Lovable", "VS Code", "Wix", "Vercel", "Canva", "WordPress", "Replit"];

export function About() {
  return (
    <section id="about" className="bg-surface py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 sm:px-10 lg:px-16 md:grid-cols-2 md:gap-20">
        <div>
          <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            01 — About
          </Reveal>
          <Reveal as="h2" delay={80} className="mt-3 text-4xl font-bold md:text-5xl">
            About Me
          </Reveal>
          <Reveal as="p" delay={160} className="mt-6 text-lg leading-relaxed text-muted-foreground">
            I'm a product designer based in Lagos. Most of my work is at Webcoupers, where I design and build landing pages and web products for clients and for the agency's own tools. Before that I built two MVPs at NovaBuk. My mantra is that good design should make things easier for people, not harder.
          </Reveal>
          <Reveal delay={240}>
            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 ease-out hover:gap-3"
            >
              Let's Connect
              <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
        <div>
          <Reveal as="h3" className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Skillset
          </Reveal>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((s, i) => (
              <Reveal
                key={s}
                as="span"
                delay={60 + i * 50}
                className="inline-block rounded-full border border-primary/20 bg-primary-soft px-3.5 py-1.5 text-sm font-medium text-primary transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.04]"
              >
                {s}
              </Reveal>
            ))}
          </div>
          <Reveal as="h3" className="mt-10 block text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Tools
          </Reveal>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {tools.map((t, i) => (
              <Reveal
                key={t}
                delay={60 + i * 50}
                className="rounded-lg border border-border bg-background px-3 py-2.5 text-center text-sm font-medium text-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-sm"
              >
                {t}
              </Reveal>
            ))}
          </div>import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const skills = [
  "UI design",
  "Design systems",
  "Landing pages",
  "Wireframing",
  "Front end",
];

const tools = ["Figma", "Stitch", "Lovable", "VS Code", "Wix", "Vercel", "Canva", "WordPress", "Replit"];

export function About() {
  return (
    <section id="about" className="bg-surface py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 sm:px-10 lg:px-16 md:grid-cols-2 md:gap-20">
        <div>
          <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">01 — About</Reveal>
          <Reveal as="h2" delay={80} className="mt-3 text-4xl font-bold md:text-5xl">About Me</Reveal>
          <Reveal as="p" delay={160} className="mt-6 text-lg leading-relaxed text-muted-foreground">
            I'm a product designer based in Lagos. Most of my work is at Webcoupers, where I design and build landing pages and web products for clients and for the agency's own tools. Before that I built two MVPs at NovaBuk. My mantra is that good design should make things easier for people, not harder.

<a
  href="#contact"
  className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 ease-out hover:gap-3"
>
  Let's Connect
</a>

              <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
        <div>
          <Reveal as="h3" className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Skillset
          </Reveal>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((s, i) => (
              <Reveal
                key={s}
                as="span"
                delay={60 + i * 50}
                className="inline-block rounded-full border border-primary/20 bg-primary-soft px-3.5 py-1.5 text-sm font-medium text-primary transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.04]"
              >
                {s}
              </Reveal>
            ))}
          </div>
          <Reveal as="h3" className="mt-10 block text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Tools
          </Reveal>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {tools.map((t, i) => (
              <Reveal
                key={t}
                delay={60 + i * 50}
                className="rounded-lg border border-border bg-background px-3 py-2.5 text-center text-sm font-medium text-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-sm"
              >
                {t}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
