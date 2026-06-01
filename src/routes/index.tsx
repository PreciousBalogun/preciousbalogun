import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
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
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-surface py-8 text-center text-sm text-muted-foreground">
        © 2026 Precious Balogun. Designed with intention.
      </footer>
    </div>
  );
}
