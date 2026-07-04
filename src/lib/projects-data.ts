import novabuk from "@/assets/project-novabuk.jpg";
import webcoupers from "@/assets/project-webcoupers.jpg";
import lima from "@/assets/project-lima.jpg";
import verun from "@/assets/project-verun.png";

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
  // ─────────────────────────────────────────────────────────────
// VERUN — Complete project data object
// Replace the existing verun entry in src/lib/projects-data.ts
// with everything between the { } below (including the braces).
// ─────────────────────────────────────────────────────────────

  {
    slug: "verun",
    title: "Verun",
    tags: ["Web Design", "SaaS", "AdTech", "Landing Page"],

    summary:
      "Landing page for an AI-powered digital advertising platform built at Webcoupers. Designed a conversion-focused page that makes a technically complex product feel instantly clear and credible to performance marketers.",

    client: "Webcoupers",
    role: "Product Designer",
    year: "2026",
    timeline: "Q1 – Q2 2026",
    platform: "Web (Desktop + Mobile)",
    tools: "Figma · Stitch · Tailwind · Vercel",
    liveUrl: "https://verun.app",

    heroImage: verun,
    gallery: [verun, verun],

    // ── Tagline (shown under the hero title) ──────────────────
    tagline:
      "Making a complex AI advertising platform feel instantly trustworthy — and worth a second look.",

    // ── Overview ──────────────────────────────────────────────
    overview:
      "Verun is an AI-powered digital advertising platform built at Webcoupers, designed for marketing teams running campaigns across Meta, Google, and TikTok. It gives advertisers a unified dashboard to monitor performance, compare spend, and get AI-driven recommendations — all without switching between platforms. The challenge was positioning. Verun sits in a crowded space, and the landing page needed to communicate a complex, multi-channel product clearly and credibly, while standing out enough to make a performance marketer stop and actually read.",

    // ── Challenge (legacy field — keep for fallback) ──────────
    challenge:
      "Verun had real product depth — unified ad intelligence, cross-platform data, AI recommendations — but none of that was landing clearly. Marketing teams visiting the site had no quick way to understand why it was different from the dozen other tools they already used.",

    // ── Problem + bullets ─────────────────────────────────────
    problem:
      "Verun had real product depth — unified ad intelligence, cross-platform data, AI recommendations — but none of that was landing clearly. Marketing teams visiting the site had no quick way to understand why it was different from the dozen other tools they already used.",

    problemBullets: [
      "Multi-channel ad management is hard to explain — the value proposition needed distilling without losing its depth.",
      "Marketing teams are sceptical of 'AI-powered' claims. The design needed to earn trust before asking for a sign-up.",
      "A significant portion of initial traffic arrives on mobile, but the experience wasn't designed for it.",
      "Visitors weren't being guided toward a clear next action — CTAs were present but not well-timed within the scroll journey.",
    ],

    // ── Role ──────────────────────────────────────────────────
    roleDetails:
      "This was an internal Webcoupers product project. I led the design and front-end implementation of the landing page — from initial concept through to the live deployed version at verun.app.",

    responsibilities: [
      "Visual & UI design across all landing page sections",
      "Copywriting direction — headline, subheadline, and feature copy",
      "Front-end implementation using Stitch and Tailwind CSS",
      "Deployment pipeline via GitHub and Vercel",
      "Product positioning and value proposition framing",
    ],

    // ── Research ──────────────────────────────────────────────
    researchIntro:
      "Before touching a frame, I studied the competitive landscape — how tools like Smartly, AdEspresso, and Triple Whale present themselves — and reviewed how Verun's core users (media buyers and performance marketers) talk about their pain points in the wild.",

    insights: [
      {
        title: "Performance marketers are platform-fatigued",
        body: "Media buyers spend significant time switching between Meta Ads Manager, Google Ads, and TikTok Business — losing context and time with every switch. Unified visibility is a genuine pain reliever, not just a feature.",
      },
      {
        title: "Trust is built through specificity, not claims",
        body: "'AI-powered' is background noise in this space. What builds credibility is specific language — showing what the AI actually does, not just that it exists.",
      },
      {
        title: "Competitor pages over-explain at the top",
        body: "Most rival tools lead with dense feature lists. There was a clear opportunity to lead with outcome and let features follow — reversing the typical information order on a landing page.",
      },
      {
        title: "Social proof is a required trust signal",
        body: "Marketing teams rely heavily on peer validation. A testimonial section wasn't just nice to have — it was a conversion prerequisite before any CTA would land.",
      },
    ],

    // ── HMW ───────────────────────────────────────────────────
    hmw: "How might we design a landing page that makes a performance marketer — who has seen every AdTech pitch — feel like Verun is the one tool they've actually been waiting for?",

    // ── Ideation ──────────────────────────────────────────────
    ideation: [
      {
        image: verun,
        caption:
          "Direction 01 — Dark, data-forward aesthetic. Led with a live-looking dashboard at full bleed. Felt product-credible but tested as intimidating for first-time visitors. Moved away from this as the opening impression.",
      },
      {
        image: verun,
        caption:
          "Direction 02 — Light with illustration. More approachable, but performance marketers are a sceptical B2B audience. The tone read as too consumer-facing for a SaaS tool.",
      },
      {
        image: verun,
        caption:
          "Direction 03 — Hybrid: light open, dark mid-page, strong close. Created visual momentum that matched the persuasion arc of a good sales conversation. This became the chosen direction.",
      },
      {
        image: verun,
        caption:
          "Mobile wireframe pass at 375px — surfaced layout decisions that wouldn't scale, particularly the 4-column feature grid which was redesigned as a responsive 2-column stack.",
      },
    ],

    // ── Design Decisions ──────────────────────────────────────
    designDecisions: [
      {
        title: "Leading with outcome, not features",
        body: "The hero headline reads 'The Future of Digital Advertising' — not 'Manage Meta, Google and TikTok in one place.' Performance marketers are pitch-fatigued. Leading with a feature list triggers the same mental skip as every other tool they've seen. By opening with an outcome-forward statement and letting the dashboard mockup do the feature storytelling visually, the page creates curiosity before it creates understanding — the right order for a cold visitor.",
        image: verun,
      },
      {
        title: "Four features, not eight",
        body: "Verun has many capabilities, but the feature section was constrained to four: Unified Ad Performance View, AI Powered Optimisation, Precision Targeting, and Real-Time Tracking. Feature grids with 8+ items create decision fatigue and signal a product that hasn't figured out what it is. Four well-named capabilities communicate confidence. Each feature name was also written to describe an outcome the user gains — not a technical mechanism the product has.",
        image: verun,
      },
      {
        title: "A colour break as a persuasion moment",
        body: "The mid-page section — 'Run Smarter Campaigns. Grow Faster.' — breaks into a full-width navy background. Colour changes in a scroll journey signal a shift in register: the page is no longer introducing itself, it's making its case. Placed after features and before testimonials, this acts as the conviction layer — where the product stops explaining and starts asserting.",
        image: verun,
      },
      {
        title: "Testimonials after conviction, not before",
        body: "Most SaaS pages put social proof near the top. For Verun, testimonials were placed after the feature and positioning sections. A cold visitor reading 'Trusted by Marketing Leaders' before they understand the product is being asked to trust something they haven't formed an opinion about yet. Social proof lands harder once the visitor already has a hypothesis — the testimonial then confirms what they were already starting to believe.",
        image: verun,
      },
      {
        title: "A contact form that removes friction",
        body: "The contact block uses a split layout — trust signals on the left, a clean minimal form on the right. Fields kept to: name, title, email, website, message. No phone number required, no dropdown selects. Every additional field is a small act of attrition. The visitor who reaches the form has already done the hard work of considering. The form's only job is to remove every remaining reason not to submit.",
        image: verun,
      },
    ],

    // ── Final Designs ─────────────────────────────────────────
    finalDesigns: [verun],

    // ── Stats ─────────────────────────────────────────────────
    stats: [
      {
        value: "4+",
        label: "Ad platforms represented in the unified dashboard view",
      },
      {
        value: "1st",
        label: "Internal Webcoupers AdTech product with a fully deployed public landing page",
      },
      {
        value: "100%",
        label: "Mobile responsive — designed and tested from 375px upward",
      },
    ],

    // ── Results ───────────────────────────────────────────────
    solution:
      "Reframed the narrative around measurable outcomes, built a high-contrast hero with a live-data dashboard motif, and streamlined the conversion path with a single primary CTA repeated at key scroll milestones.",

    results:
      "Shipped a fully rebuilt landing page with clearer messaging, a stronger hero, and a simplified conversion flow — live at verun.app.",

    resultsContext:
      "Verun is currently in active development. The landing page forms the public-facing foundation for the product's go-to-market as the platform moves toward its first beta release with marketing teams.",

    forwardLooking:
      "Verun is currently in active development. The landing page is the public foundation for the product's go-to-market — built to support a beta launch with performance marketing teams.",

    // ── Reflection ────────────────────────────────────────────
    reflection:
      "Designing for a technical B2B product taught me that restraint in copy is just as important as restraint in design. Every time I was tempted to add another feature callout or explain one more capability, the page got worse. The most effective landing page is the one that says just enough to make someone want to know more — not the one that answers every question upfront. I'd also approach the testimonials section differently next time — locking in real customer quotes earlier in the process would have let the design flex properly around authentic content rather than retrofitting it at the end.",
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
