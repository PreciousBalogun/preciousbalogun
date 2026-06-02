import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Recommendations } from "@/components/portfolio/Recommendations";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Precious Balogun — Product Designer" },
      { name: "description", content: "Product Designer specialising in design systems, MVPs, and user-centered digital experiences across Fintech and Agency environments." },
      { property: "og:title", content: "Precious Balogun — Product Designer" },
      { property: "og:description", content: "Designing with purpose. Portfolio of Precious Balogun, Lagos-based product designer." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Recommendations />
        <Contact />
      </main>
      <footer className="bg-surface py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-6 text-center text-sm text-muted-foreground">
          <a
            href="https://substack.com/@preciousbalogun"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Substack"
            className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-foreground transition-colors hover:text-primary"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
              <path d="M3 4.5h18V7H3V4.5Zm0 4.25h18v2.5H3v-2.5ZM3 13h18v8l-9-4-9 4v-8Z" />
            </svg>
            <span className="text-sm font-medium">Substack</span>
          </a>
          <p>© 2026 Precious Balogun. Designed with intention.</p>
        </div>
      </footer>
    </div>
  );
}
