import novabuk from "@/assets/project-novabuk.jpg";
import webcoupers from "@/assets/project-webcoupers.jpg";
import lima from "@/assets/project-lima.jpg";
import verun from "@/assets/verunnn.png";
import verunhero from "@/assets/verunnn.png";
import verunfeatures from "@/assets/verunfeatures.png";
import verunblue from "@/assets/verunblue.png";
import veruntestimonials from "@/assets/veruntestimonials.png";
import veruncontactform from "@/assets/veruncontactform.png";
import capdal from "@/assets/project-naan.jpg";

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
  // VERUN
  // ─────────────────────────────────────────────────────────────
  {
    slug: "verun",
    title: "Verun",
    tags: ["Web Design", "SaaS", "AdTech", "Landing Page"],

    summary:
      "Redesign of the landing page for Verun, an AI-powered digital advertising platform built at Webcoupers. The previous page was outdated and underselling the product — this redesign makes a technically complex platform feel instantly clear and credible to performance marketers.",

    client: "Webcoupers",
    role: "Product Designer",
    year: "2026",
    timeline: "Q1 – Q2 2026",
    platform: "Web (Desktop + Mobile)",
    tools: "Figma · Stitch · Tailwind · Vercel",
    liveUrl: "https://verun.app",

    heroImage: verun,
    gallery: [verun, verun],

    tagline:
      "Redesigning an outdated AdTech landing page into something instantly trustworthy — and worth a second look.",

    overview:
      "Verun is an AI-powered digital advertising platform built at Webcoupers, designed for marketing teams running campaigns across Meta, Google, and TikTok. It gives advertisers a unified dashboard to monitor performance, compare spend, and get AI-driven recommendations — all without switching between platforms. The existing landing page had grown outdated and no longer reflected the product's real depth or credibility. This project was a full redesign: repositioning Verun clearly and confidently for a crowded market, while making a complex, multi-channel product easy to understand within seconds of landing on the page.",

    challenge:
      "The previous Verun landing page was outdated and wasn't landing clearly with visitors. Verun had real product depth — unified ad intelligence, cross-platform data, AI recommendations — but none of that came through. Marketing teams visiting the site had no quick way to understand why it was different from the dozen other tools they already used.",

    problem:
      "The existing page was outdated and needed a full redesign, not a refresh. Verun had real product depth — unified ad intelligence, cross-platform data, AI recommendations — but none of that was landing clearly, and the page wasn't giving marketing teams a reason to trust or choose it over the dozen other tools they already used.",

    problemBullets: [
      "The existing page felt dated and didn't reflect the product's actual capability or credibility.",
      "Multi-channel ad management is hard to explain — the value proposition needed distilling without losing its depth.",
      "Marketing teams are sceptical of 'AI-powered' claims. The design needed to earn trust before asking for a sign-up.",
      "A significant portion of traffic arrives on mobile, but the previous experience wasn't designed for it.",
      "Visitors weren't being guided toward a clear next action — CTAs were present but not well-timed within the scroll journey.",
    ],

    roleDetails:
      "This was an internal Webcoupers product redesign. I led the design end-to-end in Figma — from research through to a fully polished, developer-ready hi-fi design — then handed the final design over to a developer for build and deployment at verun.app.",

    responsibilities: [
      "Visual & UI design across all landing page sections",
      "Copywriting direction — headline, subheadline, and feature copy",
      "Competitive research to inform positioning and layout",
      "Full hi-fi design in Figma, handed off developer-ready",
      "Product positioning and value proposition framing",
    ],

    researchIntro:
      "Before opening Figma, I studied the competitive landscape — how tools like Smartly, AdEspresso, and Triple Whale present themselves — and looked at how Verun's core users (media buyers and performance marketers) talk about their pain points in the wild. This grounded the redesign in what a modern AdTech landing page needs to do, rather than starting from a blank page.",

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

    hmw: "How might we redesign Verun's outdated landing page so performance marketers — who've seen every AdTech pitch — immediately understand why this platform is worth their attention?",

    designDecisions: [
      {
        title: "Leading with the future, not the feature list",
        body: "The previous page opened by describing what Verun does. The redesign opens with 'The Future Of Digital Advertising' — an outcome-forward headline that positions Verun as where advertising is heading, not just another tool in a marketer's stack. This reframes the first impression from functional to aspirational, which matters for a category this crowded.",
        image: verunhero,
      },
      {
        title: "Four features, not a wall of them",
        body: "The outdated version tried to communicate everything Verun could do in one dense block. The redesign narrows the feature grid to four: Unified Ad Performance View, AI Powered Optimization, Precision Targeting, and Real-Time Tracking & Analytics — each named around the outcome it delivers, not the mechanism behind it. Fewer, clearer claims read as more credible than an exhaustive list.",
        image: verunfeatures,
      },
      {
        title: "A colour break to signal conviction",
        body: "Midway down the page, the layout shifts into a full-width blue section — 'Run Smarter Campaigns. Grow Faster.' This colour change marks a deliberate shift in register: the page stops introducing Verun and starts making its case, reinforced with a checklist of concrete capabilities (best-time monitoring, cross-platform intelligence, AI-driven recommendations, multi-user access).",
        image: verunblue,
      },
      {
        title: "Trust signals placed where scepticism peaks",
        body: "The old page buried or omitted social proof. The redesign places a 'Trusted by Marketing Leaders' testimonial section right after the feature and conviction sections — timed for the moment a sceptical performance marketer is deciding whether to believe the claims they've just read, rather than asking for trust upfront.",
        image: veruntestimonials,
      },
      {
        title: "A contact flow with the friction removed",
        body: "The redesigned contact section uses a clean split layout — company details and trust signals on the left, a minimal form on the right (name, job title, email, budget, subject, message). No unnecessary fields, no phone number requirement. By the time a visitor reaches this section, they've already decided to engage — the form's only job is to not get in their way.",
        image: veruncontactform,
      },
    ],

    finalDesigns: [verun],

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

    solution:
      "Redesigned an outdated landing page from the ground up in Figma — reframing the narrative around measurable outcomes, building a high-contrast hero with a live-data dashboard motif, and streamlining the conversion path with a single primary CTA repeated at key scroll milestones — then handed the design off developer-ready for build.",

    results:
      "Shipped a fully redesigned landing page with clearer messaging, a stronger hero, and a simplified conversion flow — live at verun.app.",

    resultsContext:
      "Verun is currently in active development. The redesigned landing page forms the public-facing foundation for the product's go-to-market as the platform moves toward its first beta release with marketing teams.",

    forwardLooking:
      "Verun is currently in active development. The redesigned landing page is the public foundation for the product's go-to-market — built to support a beta launch with performance marketing teams.",

    reflection:
      "Redesigning an existing product's landing page taught me that restraint in copy is just as important as restraint in design. Every time I was tempted to add another feature callout or explain one more capability, the page got worse. The most effective landing page is the one that says just enough to make someone want to know more — not the one that answers every question upfront. I'd also approach the testimonials section differently next time — locking in real customer quotes earlier in the process would have let the design flex properly around authentic content rather than retrofitting it at the end.",
  },
  // ─────────────────────────────────────────────────────────────
  // CLARITY
  // ─────────────────────────────────────────────────────────────
  {
    slug: "clarity",
    title: "Clarity",
    tags: ["Web Design", "SaaS", "Product", "Landing Page"],

    summary:
      "Landing page for Clarity — a project management and team collaboration tool built at Webcoupers. Designed a focused, conversion-led page that communicates the product's core value to team leads, contributors, and executives without overwhelming them.",

    client: "Webcoupers",
    role: "Product Designer",
    year: "2026",
    timeline: "Q1 – Q2 2026",
    platform: "Web (Desktop + Mobile)",
    tools: "Figma · Stitch · Tailwind · Vercel",
    liveUrl: "https://clarity.webcoupers.com",

    heroImage: lima,
    gallery: [lima, lima],

    tagline: "Run your projects. Not the other way around.",

    overview:
      "Clarity is a project management and team collaboration platform built internally at Webcoupers. It's designed for organisations that need more than a task list — teams that want visibility across projects, smart priority scoring, and real-time syncing without the overhead of tools like Jira or the chaos of Notion. The landing page needed to introduce Clarity to three distinct audiences simultaneously: contributors who do the work, team leads who oversee it, and executives who need the high-level picture. Getting that positioning right — without making the page feel like it was trying to say everything to everyone — was the central design challenge.",

    challenge:
      "Clarity is a powerful internal tool, but its feature set is broad. The landing page needed to communicate genuine depth — smart difficulty scoring, zero-lag task unblocking, real-time sync, 365-day data history — without overwhelming a visitor who arrived not knowing what Clarity was. The risk was a page that either said too little and felt vague, or said too much and felt like a feature dump.",

    problem:
      "Clarity is a powerful internal tool, but its feature set is broad. The landing page needed to communicate genuine depth without overwhelming a visitor who arrived not knowing what Clarity was. The risk was a page that either said too little and felt vague, or said too much and felt like a feature dump.",

    problemBullets: [
      "Three distinct user types — contributors, team leads, and executives — each needed to see themselves in the product without the page fragmenting into three separate pitches.",
      "The product's headline differentiator (smart difficulty scoring and zero-lag unblocking) is not self-explanatory — it needed showing, not just telling.",
      "Existing project management tools have trained users to expect feature lists. Clarity needed to break that pattern and lead with outcomes instead.",
      "The page had to establish credibility for a new, internal product with no existing user base or brand recognition outside Webcoupers.",
    ],

    roleDetails:
      "Clarity is a Webcoupers internal product. I led the full design of the landing page — visual language, layout, copy direction, component design, and front-end implementation — working iteratively through multiple rounds of refinement.",

    responsibilities: [
      "End-to-end visual and UI design of the landing page",
      "Information architecture — deciding which sections to include and in what order",
      "Copy direction for all headlines, subheads, and feature descriptions",
      "Component and UI design for the product UI mockups shown in-page",
      "Front-end implementation using Stitch and Tailwind CSS",
      "Iterative refinement across multiple design rounds based on internal feedback",
    ],

    researchIntro:
      "Before designing, I reviewed how the leading project management tools position themselves — Notion, Linear, Monday.com, Teamwork — and mapped where Clarity genuinely differed. I also looked at how each of Clarity's three user types (contributors, leads, executives) talks about their pain points with existing tools.",

    insights: [
      {
        title: "Teams don't fail on tools — they fail on visibility",
        body: "The most common complaint across project management tool reviews isn't missing features — it's that nobody knows what's actually happening. Status updates are stale, blockers aren't surfaced, and leads find out about problems too late. Clarity's real-time sync and smart difficulty scoring directly addresses this.",
      },
      {
        title: "Executives and contributors need completely different things",
        body: "An executive needs a 30-second pulse check. A contributor needs to know what to work on next. Most tools try to serve both with the same interface. The landing page needed to surface that Clarity treats these as separate concerns — without making the page feel split.",
      },
      {
        title: "Monday.com and Teamwork lead with workflow, not outcomes",
        body: "Competitor pages show lots of UI and describe lots of features. Very few lead with what actually changes for the team using the product. This was the opportunity — leading with outcomes ('98% weekly velocity', '365d data history') before explaining how they're achieved.",
      },
      {
        title: "Trust for a new product comes from specificity",
        body: "Without existing customers to quote, trust had to come from the design itself — precise copy, detailed UI mockups that show real use cases, and concrete numbers that feel earned rather than aspirational.",
      },
    ],

    hmw: "How might we design a landing page that makes a team lead, a contributor, and an executive all feel like Clarity was built specifically for them — without writing three different pages?",

    finalDesigns: [lima],

    stats: [
      {
        value: "3",
        label: "Distinct user personas addressed in a single, cohesive landing page",
      },
      {
        value: "98%",
        label: "Weekly velocity metric surfaced as a headline trust signal in the product",
      },
      {
        value: "365d",
        label: "Data history — a key differentiator called out as a concrete product stat",
      },
    ],

    solution:
      "Designed an outcome-led landing page that addresses three user personas through a single coherent narrative — moving from pain to proof to persona relevance to action. The tabbed product preview, smart feature UI cards, and structured persona section work together to communicate product depth without cognitive overload.",

    results:
      "Shipped a fully designed landing page for Clarity — live and serving as the primary marketing surface as the product moves toward its broader internal rollout at Webcoupers.",

    resultsContext:
      "Clarity is an active internal Webcoupers product. The landing page is the primary public-facing surface as the team scales the platform and prepares for broader adoption across client organisations.",

    forwardLooking:
      "Clarity is in active development at Webcoupers. The landing page is the product's primary marketing surface — designed to grow with the platform as it moves from internal tool to client-facing product.",

    reflection:
      "The most interesting constraint on this project was designing for three completely different users without letting the page feel schizophrenic. The solution — persona-specific sections within a single narrative arc — taught me that audience segmentation doesn't have to mean content fragmentation. You can write one story that different people enter at different points. I'd push the product UI mockups even further next time — the sections where you can actually see the Clarity interface are where the page earns the most trust, and I'd want more of them, earlier.",
  },
  // ─────────────────────────────────────────────────────────────
  // CAPDAL
  // ─────────────────────────────────────────────────────────────
  {
    slug: "capdal",
    title: "Cappa & D'Alberto",
    tags: ["Web Design", "Construction", "Corporate", "Multi-page"],

    summary:
      "Full website redesign for Cappa & D'Alberto (Capdal) — one of Nigeria's oldest construction and engineering firms. Designed every page of the site, translating decades of institutional credibility into a modern, navigable digital presence.",

    client: "Cappa & D'Alberto",
    role: "Product Designer",
    year: "2026",
    timeline: "Q1 2026",
    platform: "Web (Desktop + Mobile)",
    tools: "Figma · Stitch · Tailwind · Vercel",
    liveUrl: "https://capdal.wbcstaging.com",

    heroImage: capdal,
    gallery: [capdal, capdal],

    tagline: "Nine decades of building Nigeria. A website that finally looked like it.",

    overview:
      "Cappa & D'Alberto is one of Nigeria's oldest and most established construction and engineering firms, with a project portfolio spanning some of the country's most recognisable buildings and infrastructure. The existing website undersold that history — it read as generic and dated, out of step with a company whose actual body of work commands serious institutional trust. The redesign covered every page of the site: home, about, services, projects, and contact, each rebuilt from the ground up.",

    challenge:
      "The core tension was age versus relevance. Capdal's decades of history are its biggest asset — but a website that leaned too hard into heritage risked looking dated, while one that leaned too hard into 'modern' risked losing the gravitas that comes with being a nearly century-old institution. The site also needed to organise a large amount of content — services, a sizeable project portfolio, company history — without becoming a maze.",

    problem:
      "The existing site didn't reflect the scale or credibility of the company behind it. It needed a full redesign across every page, not a visual refresh — new information architecture, new visual language, and a way to present a large project portfolio that made it easy to browse and filter.",

    problemBullets: [
      "The brand needed to feel established and trustworthy without feeling stuck in the past — heritage as an asset, not a limitation.",
      "A large, varied project portfolio (spanning different sectors and decades) needed clear filtering and browsing, not a single long list.",
      "Multi-page architecture meant navigation had to stay consistent and predictable across very different types of content — services, projects, company info.",
      "As a B2B institutional site, the design had to speak convincingly to clients evaluating a construction partner for major projects — a very different bar than a consumer landing page.",
    ],

    roleDetails:
      "I designed and built all five pages of the Capdal website end-to-end — Home, About Us, Services, Projects, and Contact Us — covering the visual language, cross-page information architecture, the shared navigation system, and the filterable project portfolio, then implemented the front end directly in Tailwind and HTML.",

    responsibilities: [
      "Designed and implemented 5 distinct pages: Home, About Us, Services, Projects, Contact Us",
      "Cross-page information architecture — deciding what content lived on which page",
      "Shared navigation system designed to stay consistent and predictable across all five pages",
      "Services page card system covering six distinct capabilities",
      "Projects page design including category-based filtering by sector",
      "Front-end implementation of every page using Stitch and Tailwind CSS",
      "Incorporating design review feedback across multiple revision rounds",
    ],

    researchIntro:
      "I looked at how established construction and engineering firms — locally and internationally — balance heritage and modernity on their websites, and audited Capdal's own project archive to understand the range of work the portfolio section would need to hold.",

    insights: [
      {
        title: "Heritage brands earn trust through restraint, not decoration",
        body: "The construction firms that read as most credible online weren't the ones with the most ornamentation — they used generous whitespace, confident typography, and let photography of real projects do the talking.",
      },
      {
        title: "A portfolio this size needs filtering, not scrolling",
        body: "With projects spanning many years and sectors, a single long page would have buried the firm's best work under sheer volume. Category-based filtering let visitors find relevant projects fast.",
      },
      {
        title: "B2B decision-makers scan for proof points first",
        body: "Visitors evaluating a construction partner look for scale, track record, and completed work before anything else — this shaped which content sat above the fold on the homepage.",
      },
    ],

    hmw: "How might we redesign a website for a company built on decades of trust — without making the site feel like it belongs to a different, less established company?",

    finalDesigns: [capdal],

    // NOTE: placeholder images — ideally swap each entry for a real per-page
    // screenshot (homepage, about page, services page, projects page, contact
    // page), following the same pattern used for Verun's design decisions.
    designDecisions: [
      {
        title: "A homepage that opens with scale, not a sales pitch",
        body: "The homepage leads with \"Builders to the Nation, Since 1932\" over hero imagery of a real landmark project — the Wings Office Complex — so credibility is established through visual proof before any copy has to do the convincing. Directly beneath the hero sits a stat bar (90+ Years, 500+ Projects, 1,000+ Professionals, 36 States) that turns nine decades of work into an immediate, scannable trust signal rather than a story a visitor has to read their way into.",
        image: capdal,
      },
      {
        title: "An About Us page built to carry institutional weight",
        body: "Capdal's history is its strongest asset, but forcing that legacy onto the homepage would have crowded out everything else. A dedicated About Us page gives the firm's origins, milestones, and values room to breathe — cleanly separating \"why trust us\" from \"what we do,\" so each page can make one argument well instead of two arguments halfway.",
        image: capdal,
      },
      {
        title: "A Services page that organizes six distinct capabilities clearly",
        body: "Civil Engineering, General Construction, Project Management, Interior Fit-out, MEP Systems, and Heritage Restoration are presented in one consistent, scannable card system. A visitor evaluating Capdal for a specific need can locate the relevant capability in seconds rather than reading through a wall of undifferentiated text — and the uniform card treatment signals that each discipline is a first-class offering, not a footnote.",
        image: capdal,
      },
      {
        title: "A filterable Projects page for a large, varied portfolio",
        body: "The portfolio spans sectors and decades — Dover Hotel Annex, Afrexim Tower, AMCE Medical Complex, the National Theatre restoration — so the dedicated Projects page uses category-based filtering (Hospitality, Financial Hub, Healthcare, National Monument) to let visitors browse by relevance. Filtering turns an undifferentiated scroll into a discovery tool, and keeps the firm's best work from being buried by sheer volume.",
        image: capdal,
      },
      {
        title: "A Careers page that sells a legacy, not just a job listing",
        body: "The Careers page opens with 'Build Your Legacy With Nigeria's Engineering Leader,' immediately reframing a job search as joining a 90-year institution rather than filling a vacancy. A stat bar (90+ Years of Excellence, 1.2k+ Active Staff, 450+ Completed Projects, Top 5 Global ESG Rating) repeats the same trust-through-numbers pattern used elsewhere on the site, adapted for a talent audience instead of a client one. A 'Life at Capdal' section pairs a real employee testimonial with three culture pillars (Engineering Precision, Culture of Mentorship, Shaping Landmarks), giving the page an emotional register the rest of the site doesn't need. Below that, open roles are organized into a filterable, categorized card grid (Engineering, Project Management, Skilled Trades, Corporate) with location and employment type shown upfront — so a specific type of candidate can scan straight to relevant roles — plus a general application path for anyone who doesn't see an exact fit.",
        image: capdal,
      },
      {
        title: "A Contact page split between conversation and credibility",
        body: "The Contact page pairs a straightforward Inquiry Form (Full Name, Email, Subject, Message) with a dark 'Our Headquarters' panel holding the firm's address, phone, and email alongside social links — keeping the warmer, conversational form separate from the harder, reference-style company details a serious inquiry needs to verify. A location marker section beneath reinforces the Lagos Island HQ visually, and the page closes into the same footer newsletter signup used sitewide, giving even a one-off inquiry a path to stay connected to the firm's ongoing work.",
        image: capdal,
      },
      {
        title: "Consistent navigation as the connective thread across five pages",
        body: "With content deliberately spread across five distinct pages, the navigation bar and underlying page structure had to stay predictable throughout. The same header, the same hierarchy, and the same footer anchor every page, so users always know where they are and how to get back — moving between Home, About Us, Services, Projects, and Contact Us never costs them orientation.",
        image: capdal,
      },
    ],

    stats: [
      {
        value: "5+",
        label: "Full pages redesigned end-to-end across the site",
      },
      {
        value: "90+",
        label: "Years of company history reframed for a modern audience",
      },
    ],

    solution:
      "Designed and implemented a full multi-page website redesign that repositions Capdal as a modern, credible construction partner — using photography-led storytelling, a filterable project portfolio, and consistent scroll-aware navigation to organise a large body of institutional content.",

    results:
      "Shipped a complete website redesign, live and serving as Capdal's primary digital presence for prospective clients and partners evaluating the firm's work.",

    resultsContext:
      "Capdal is an active client relationship through Webcoupers. The redesigned site is now the firm's primary public-facing surface.",

    forwardLooking:
      "The new information architecture and design system give Capdal room to keep adding to their project portfolio without needing a future redesign — new work slots into the existing filtering structure.",

    reflection:
      "This project sharpened how I think about heritage in design — the instinct is often to signal 'established' with literal historical cues, but the more convincing move was restraint: clean typography, real photography, and getting out of the way of the work itself. Next time, I'd push even further on differentiating the project categories visually, so the filtering feels like a discovery tool rather than just a sorting mechanism.",
  },
  // ─────────────────────────────────────────────────────────────
  // STUDYSNAP
  // ─────────────────────────────────────────────────────────────
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
