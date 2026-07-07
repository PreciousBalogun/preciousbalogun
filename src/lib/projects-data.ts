import novabuk from "@/assets/project-novabuk.jpg";
import webcoupers from "@/assets/project-webcoupers.jpg";
import lima from "@/assets/project-lima.jpg";
import verun from "@/assets/project-verun.png";
const capdal = "/placeholder.svg";

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
  // ─────────────────────────────────────────────────────────────
// CLARITY — Complete project data object
// Replace the existing clarity entry in src/lib/projects-data.ts
// with everything between the { } below (including the braces).
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

    // ── Tagline ───────────────────────────────────────────────
    tagline:
      "Run your projects. Not the other way around.",

    // ── Overview ──────────────────────────────────────────────
    overview:
      "Clarity is a project management and team collaboration platform built internally at Webcoupers. It's designed for organisations that need more than a task list — teams that want visibility across projects, smart priority scoring, and real-time syncing without the overhead of tools like Jira or the chaos of Notion. The landing page needed to introduce Clarity to three distinct audiences simultaneously: contributors who do the work, team leads who oversee it, and executives who need the high-level picture. Getting that positioning right — without making the page feel like it was trying to say everything to everyone — was the central design challenge.",

    // ── Challenge ─────────────────────────────────────────────
    challenge:
      "Clarity is a powerful internal tool, but its feature set is broad. The landing page needed to communicate genuine depth — smart difficulty scoring, zero-lag task unblocking, real-time sync, 365-day data history — without overwhelming a visitor who arrived not knowing what Clarity was. The risk was a page that either said too little and felt vague, or said too much and felt like a feature dump.",

    // ── Problem + bullets ─────────────────────────────────────
    problem:
      "Clarity is a powerful internal tool, but its feature set is broad. The landing page needed to communicate genuine depth without overwhelming a visitor who arrived not knowing what Clarity was. The risk was a page that either said too little and felt vague, or said too much and felt like a feature dump.",

    problemBullets: [
      "Three distinct user types — contributors, team leads, and executives — each needed to see themselves in the product without the page fragmenting into three separate pitches.",
      "The product's headline differentiator (smart difficulty scoring and zero-lag unblocking) is not self-explanatory — it needed showing, not just telling.",
      "Existing project management tools have trained users to expect feature lists. Clarity needed to break that pattern and lead with outcomes instead.",
      "The page had to establish credibility for a new, internal product with no existing user base or brand recognition outside Webcoupers.",
    ],

    // ── Role ──────────────────────────────────────────────────
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

    // ── Research ──────────────────────────────────────────────
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

    // ── HMW ───────────────────────────────────────────────────
    hmw: "How might we design a landing page that makes a team lead, a contributor, and an executive all feel like Clarity was built specifically for them — without writing three different pages?",

    // ── Ideation ──────────────────────────────────────────────
    ideation: [
      {
        image: lima,
        caption:
          "Direction 01 — Feature-forward layout. Led with a full feature grid above the fold. Covered the product depth well but felt like every other project management tool landing page. Abandoned early.",
      },
      {
        image: lima,
        caption:
          "Direction 02 — Dashboard-first hero. Opened with a full product UI screenshot to let the interface speak for itself. Lost the narrative — visitors didn't know what they were looking at without context.",
      },
      {
        image: lima,
        caption:
          "Direction 03 — Outcome-led hero with tabbed product preview. Headline leads with the outcome, product UI sits below it in a tab-switcher showing different views (My Tasks, Team Activity, Reporting). This became the chosen direction.",
      },
      {
        image: lima,
        caption:
          "Persona-based section exploration — testing a 3-row 'Built for everyone in the room' layout that addresses Contributors, Team Leads, and Executives separately. Allowed one page to speak to three audiences without fragmenting.",
      },
    ],

    // ── Design Decisions ──────────────────────────────────────
    designDecisions: [
      {
        title: "A headline that calls out the pain, not the product",
        body: "'Run your projects. Not the other way around.' This headline doesn't mention Clarity, doesn't list features, and doesn't explain what the product is. It names a feeling that every project lead recognises — the sensation of being managed by your own task list rather than in control of it. Getting a visitor to nod before they read a second word is the hardest thing a headline can do, and this one does it.",
        image: lima,
      },
      {
        title: "A tabbed product preview instead of a static screenshot",
        body: "The hero product UI uses a tab switcher — Projects, My Tasks, Team Activity, Reporting. This does two things: it shows that Clarity has real depth (multiple views, not just a task list), and it lets visitors self-select into the view most relevant to their role. A team lead gravitates to Team Activity. A contributor goes to My Tasks. One UI element, three audiences.",
        image: lima,
      },
      {
        title: "Showing smart difficulty scoring, not just naming it",
        body: "The 'Work grouped by outcome' and 'Smart difficulty scoring' feature blocks are shown as actual UI cards — not icon + headline + two-line description. You can see the interface, the scoring labels, the task structure. This matters because 'smart difficulty scoring' means nothing to someone who hasn't seen it. Showing the UI in context makes the feature legible before the copy explains it.",
        image: lima,
      },
      {
        title: "Metrics placed where scepticism peaks",
        body: "The stats block — 98% weekly velocity, Realtime sync interval, 365d data history — sits after the feature showcase, not at the top. Visitors who reach this section have already formed a view of what the product is. Numbers at this point confirm rather than convince. Placed at the top, the same numbers would have felt unearned — a claim before a reason.",
        image: lima,
      },
      {
        title: "'Built for everyone in the room' — one page, three audiences",
        body: "Rather than building three separate landing pages or burying persona content in FAQs, the page has a dedicated section that speaks directly to Contributors, Team Leads, and Executives with a distinct value proposition for each. This section is structured as a table — role on the left, what Clarity does for that role on the right — so visitors can scan straight to their own row and feel like the product was designed with them in mind.",
        image: lima,
      },
    ],

    // ── Final Designs ─────────────────────────────────────────
    finalDesigns: [lima],

    // ── Stats ─────────────────────────────────────────────────
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

    // ── Results ───────────────────────────────────────────────
    solution:
      "Designed an outcome-led landing page that addresses three user personas through a single coherent narrative — moving from pain to proof to persona relevance to action. The tabbed product preview, smart feature UI cards, and structured persona section work together to communicate product depth without cognitive overload.",

    results:
      "Shipped a fully designed landing page for Clarity — live and serving as the primary marketing surface as the product moves toward its broader internal rollout at Webcoupers.",

    resultsContext:
      "Clarity is an active internal Webcoupers product. The landing page is the primary public-facing surface as the team scales the platform and prepares for broader adoption across client organisations.",

    forwardLooking:
      "Clarity is in active development at Webcoupers. The landing page is the product's primary marketing surface — designed to grow with the platform as it moves from internal tool to client-facing product.",

    // ── Reflection ────────────────────────────────────────────
    reflection:
      "The most interesting constraint on this project was designing for three completely different users without letting the page feel schizophrenic. The solution — persona-specific sections within a single narrative arc — taught me that audience segmentation doesn't have to mean content fragmentation. You can write one story that different people enter at different points. I'd push the product UI mockups even further next time — the sections where you can actually see the Clarity interface are where the page earns the most trust, and I'd want more of them, earlier.",
  },
  
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

    // ── Tagline ───────────────────────────────────────────────
    tagline:
      "Nine decades of building Nigeria. A website that finally looked like it.",

    // ── Overview ──────────────────────────────────────────────
    overview:
      "Cappa & D'Alberto is one of Nigeria's oldest and most established construction and engineering firms, with a project portfolio spanning some of the country's most recognisable buildings and infrastructure. The existing website undersold that history — it read as generic and dated, out of step with a company whose actual body of work commands serious institutional trust. The redesign covered every page of the site: home, about, services, projects, and contact, each rebuilt from the ground up.",

    // ── Challenge ─────────────────────────────────────────────
    challenge:
      "The core tension was age versus relevance. Capdal's decades of history are its biggest asset — but a website that leaned too hard into heritage risked looking dated, while one that leaned too hard into 'modern' risked losing the gravitas that comes with being a nearly century-old institution. The site also needed to organise a large amount of content — services, a sizeable project portfolio, company history — without becoming a maze.",

    // ── Problem + bullets ─────────────────────────────────────
    problem:
      "The existing site didn't reflect the scale or credibility of the company behind it. It needed a full redesign across every page, not a visual refresh — new information architecture, new visual language, and a way to present a large project portfolio that made it easy to browse and filter.",

    problemBullets: [
      "The brand needed to feel established and trustworthy without feeling stuck in the past — heritage as an asset, not a limitation.",
      "A large, varied project portfolio (spanning different sectors and decades) needed clear filtering and browsing, not a single long list.",
      "Multi-page architecture meant navigation had to stay consistent and predictable across very different types of content — services, projects, company info.",
      "As a B2B institutional site, the design had to speak convincingly to clients evaluating a construction partner for major projects — a very different bar than a consumer landing page.",
    ],

    // ── Role ──────────────────────────────────────────────────
    roleDetails:
      "I designed every page on the Capdal website end-to-end — visual language, layout, navigation system, and the project portfolio structure — and implemented the front end directly in Tailwind and HTML.",

    responsibilities: [
      "Full visual and UI design across every page of the site",
      "Information architecture for a multi-page, content-heavy site",
      "Scroll-triggered navigation behaviour design and implementation",
      "Project portfolio design, including filtering logic by sector/category",
      "Front-end implementation using Stitch and Tailwind CSS",
      "Incorporating design review feedback across multiple revision rounds",
    ],

    // ── Research ──────────────────────────────────────────────
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

    // ── HMW ───────────────────────────────────────────────────
    hmw: "How might we redesign a website for a company built on decades of trust — without making the site feel like it belongs to a different, less established company?",

    // ── Ideation ──────────────────────────────────────────────
    ideation: [
      {
        image: capdal,
        caption:
          "Early direction exploring a heavier, more traditional corporate layout — felt closer to the existing site than a genuine redesign. Abandoned.",
      },
      {
        image: capdal,
        caption:
          "Photography-led direction — large project imagery leading each section, minimal chrome around it. This became the foundation for the final design.",
      },
      {
        image: capdal,
        caption:
          "Navigation exploration — testing a scroll-triggered header that condenses on scroll to keep navigation accessible across long, content-heavy pages.",
      },
    ],

    // ── Design Decisions ──────────────────────────────────────
    designDecisions: [
      {
        title: "Photography as the primary trust signal",
        body: "Rather than relying on copy to establish credibility, the redesign puts large-format photography of actual completed projects front and centre on the homepage and throughout the site — letting the built work speak for itself.",
        image: capdal,
      },
      {
        title: "A scroll-triggered navbar for long, content-heavy pages",
        body: "Given how content-dense pages like Projects and Services are, the navbar condenses and stays accessible as users scroll, so orientation is never lost on a long page.",
        image: capdal,
      },
      {
        title: "Filterable project portfolio by sector",
        body: "The projects page uses category filtering so visitors — whether evaluating residential, commercial, or infrastructure work — can get to relevant examples in one or two clicks instead of scrolling a long undifferentiated list.",
        image: capdal,
      },
      {
        title: "Typography carrying the 'established' feel",
        body: "Rather than heritage cues like ornamental borders or dated serif treatments, confidence and history are communicated through restrained, deliberate typographic hierarchy — a more contemporary way to say 'we've been doing this a long time.'",
        image: capdal,
      },
    ],

    // ── Final Designs ─────────────────────────────────────────
    finalDesigns: [capdal],

    // ── Stats ─────────────────────────────────────────────────
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

    // ── Results ───────────────────────────────────────────────
    solution:
      "Designed and implemented a full multi-page website redesign that repositions Capdal as a modern, credible construction partner — using photography-led storytelling, a filterable project portfolio, and consistent scroll-aware navigation to organise a large body of institutional content.",

    results:
      "Shipped a complete website redesign, live and serving as Capdal's primary digital presence for prospective clients and partners evaluating the firm's work.",

    resultsContext:
      "Capdal is an active client relationship through Webcoupers. The redesigned site is now the firm's primary public-facing surface.",

    forwardLooking:
      "The new information architecture and design system give Capdal room to keep adding to their project portfolio without needing a future redesign — new work slots into the existing filtering structure.",

    // ── Reflection ────────────────────────────────────────────
    reflection:
      "This project sharpened how I think about heritage in design — the instinct is often to signal 'established' with literal historical cues, but the more convincing move was restraint: clean typography, real photography, and getting out of the way of the work itself. Next time, I'd push even further on differentiating the project categories visually, so the filtering feels like a discovery tool rather than just a sorting mechanism.",
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
