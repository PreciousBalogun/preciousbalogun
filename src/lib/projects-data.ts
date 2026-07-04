import novabuk from "@/assets/project-novabuk.jpg";
import webcoupers from "@/assets/project-webcoupers.jpg";
import lima from "@/assets/project-lima.jpg";
import verun from "@/assets/project-verun.png.jpg";

export type Project = {
  slug: string;
  title: string;
  tags: string[];
  summary: string;
  client: string;
  role: string;
  year: string;
  heroImage: string;
  gallery: string[];
  overview: string;
  challenge: string;
  solution: string;
  results: string;
  liveUrl?: string;
  // Extended case-study fields (all optional; sensible fallbacks used when absent)
  tagline?: string;
  timeline?: string;
  platform?: string;
  tools?: string;
  problem?: string;
  problemBullets?: string[];
  roleDetails?: string;
  responsibilities?: string[];
  researchIntro?: string;
  insights?: { title: string; body: string }[];
  hmw?: string;
  ideation?: { image: string; caption: string }[];
  designDecisions?: { title: string; body: string; image: string }[];
  finalDesigns?: string[];
  prototypeUrl?: string;
  stats?: { value: string; label: string }[];
  resultsContext?: string;
  forwardLooking?: string;
  reflection?: string;
};

export const projects: Project[] = [
  {
    slug: "verun",
    title: "Verun",
    tags: ["Web Design", "SaaS", "Landing Page"],
    summary:
      "Landing page for an AI-powered digital advertising platform. Designed a bold, high-contrast hero and conversion flow that communicates real-time optimization and performance analytics at a glance.",
    client: "Verun",
    role: "Web Design, UI/UX",
    year: "2026",
    heroImage: verun,
gallery: [verun, verun],
    overview:
      "Longer-form intro paragraph about the project context. Verun needed a marketing surface that could quickly establish credibility in the crowded ad-tech space while explaining a technically dense product to non-technical buyers.",
    challenge:
      "The existing site buried the product's core value in jargon and failed to convert visitors into demo requests. Prospects couldn't tell what Verun did in the first five seconds.",
    solution:
      "Reframed the narrative around measurable outcomes, built a high-contrast hero with a live-data motif, and streamlined the path to a demo request with a single primary CTA repeated at key scroll milestones.",
    results:
      "Shipped a rebuilt landing page with clearer messaging, a stronger hero, and a simplified conversion flow.",
  },
  {
    slug: "clarity",
    title: "Clarity",
    tags: ["Web Design", "Lovable", "Landing Page"],
    summary:
      "A residential cleaning services website for a San Mateo, CA-based business. Designed and built a clean, conversion-focused one-pager with service listings, a quote request form, and trust indicators.",
    client: "Clarity",
    role: "Web Design, UI/UX",
    year: "2026",
    heroImage: lima,
    gallery: [lima, lima],
    overview:
      "Clarity is a residential cleaning business serving the San Mateo area that needed a simple, trustworthy web presence to convert local search traffic into booked appointments.",
    challenge:
      "The client had no digital presence and was losing leads to competitors with even a basic website. They needed something fast, credible, and easy to update.",
    solution:
      "Designed a focused one-pager anchored around a quote-request form, with clear service tiers, transparent pricing signals, and local trust indicators like reviews and service-area callouts.",
    results:
      "Live site with an integrated quote form, ready for local SEO and paid acquisition.",
  },
  {
    slug: "capdal",
    title: "Capdal (Cappa & D'Alberto)",
    tags: ["Web Design", "Redesign", "Branding"],
    summary:
      "End-to-end redesign of the Capdal marketing site — rebuilt information architecture, visual system, and key conversion surfaces for a sharper, more trustworthy brand presence.",
    client: "Cappa & D'Alberto",
    role: "Web Design, UI/UX",
    year: "2026",
    heroImage: webcoupers,
    gallery: [webcoupers, webcoupers],
    overview:
      "Placeholder overview for the Capdal redesign engagement — context on the company, its market, and why the redesign was commissioned.",
    challenge:
      "Placeholder challenge copy — the legacy site did not reflect the firm's stature and made it hard for prospective clients to understand its capabilities.",
    solution:
      "Placeholder solution copy — rebuilt IA, refined the visual language, and rewrote key landing surfaces around the firm's flagship service lines.",
    results:
      "Placeholder results copy — cleaner brand presence, ready for a phased rollout.",
  },
  {
    slug: "wbci",
    title: "WBCi",
    tags: ["Web Design", "Product"],
    summary: "Placeholder summary for the WBCi project.",
    client: "WBCi",
    role: "Web Design, UI/UX",
    year: "2026",
    heroImage: novabuk,
    gallery: [novabuk, novabuk],
    overview: "Placeholder overview paragraph for WBCi.",
    challenge: "Placeholder challenge copy for WBCi.",
    solution: "Placeholder solution copy for WBCi.",
    results: "Placeholder results copy for WBCi.",
  },
  {
    slug: "10over10-cosmetics",
    title: "10over10 Cosmetics",
    tags: ["Web Design", "E-commerce", "Branding"],
    summary: "Placeholder summary for 10over10 Cosmetics.",
    client: "10over10 Cosmetics",
    role: "Web Design, UI/UX",
    year: "2026",
    heroImage: lima,
    gallery: [lima, lima],
    overview: "Placeholder overview paragraph for 10over10 Cosmetics.",
    challenge: "Placeholder challenge copy for 10over10 Cosmetics.",
    solution: "Placeholder solution copy for 10over10 Cosmetics.",
    results: "Placeholder results copy for 10over10 Cosmetics.",
  },
  {
    slug: "studysnap",
    title: "StudySnap",
    tags: ["Product Design", "Mobile", "EdTech"],
    summary: "Placeholder summary for StudySnap.",
    client: "StudySnap",
    role: "Product Design, UI/UX",
    year: "2026",
    heroImage: webcoupers,
    gallery: [webcoupers, webcoupers],
    overview: "Placeholder overview paragraph for StudySnap.",
    challenge: "Placeholder challenge copy for StudySnap.",
    solution: "Placeholder solution copy for StudySnap.",
    results: "Placeholder results copy for StudySnap.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project {
  const idx = projects.findIndex((p) => p.slug === slug);
  return projects[(idx + 1) % projects.length];
}
