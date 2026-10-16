import { assetUrl } from "@/lib/asset-url";

import novabuk from "@/assets/project-novabuk.jpg";
import webcoupers from "@/assets/project-webcoupers.jpg";
import lima from "@/assets/project-lima.jpg";
import verunAsset from "@/assets/verunnn.png.asset.json";
const verun = assetUrl(verunAsset.url);
import verunheroAsset from "@/assets/verunnn.png.asset.json";
const verunhero = assetUrl(verunheroAsset.url);
import verunfeaturesAsset from "@/assets/verunfeatures.png.asset.json";
const verunfeatures = assetUrl(verunfeaturesAsset.url);
import verunblueAsset from "@/assets/verunblue.png.asset.json";
const verunblue = assetUrl(verunblueAsset.url);
import veruntestimonialsAsset from "@/assets/veruntestimonials.png.asset.json";
const veruntestimonials = assetUrl(veruntestimonialsAsset.url);
import veruncontactformAsset from "@/assets/veruncontactform.png.asset.json";
const veruncontactform = assetUrl(veruncontactformAsset.url);
import verunfinaldesignAsset from "@/assets/verun-finaldesign.mp4.asset.json";
const verunfinaldesign = assetUrl(verunfinaldesignAsset.url);
import capdalHeroAsset from "@/assets/capdal-hero.jpg.asset.json";
const capdalHero = assetUrl(capdalHeroAsset.url);
import capdalAboutAsset from "@/assets/capdal-about.jpg.asset.json";
const capdalAbout = assetUrl(capdalAboutAsset.url);
import capdalServicesAsset from "@/assets/capdal-services.jpg.asset.json";
const capdalServices = assetUrl(capdalServicesAsset.url);
import capdalProjectsAsset from "@/assets/capdal-projects.jpg.asset.json";
const capdalProjects = assetUrl(capdalProjectsAsset.url);
import capdalCareersAsset from "@/assets/capdal-careers.jpg.asset.json";
const capdalCareers = assetUrl(capdalCareersAsset.url);
import capdalContactAsset from "@/assets/capdal-contact.jpg.asset.json";
const capdalContact = assetUrl(capdalContactAsset.url);
import capdalFinalctaAsset from "@/assets/capdal-finalcta.jpg.asset.json";
const capdalFinalcta = assetUrl(capdalFinalctaAsset.url);
import capdalFinaldesignAsset from "@/assets/capdal-finaldesign.mp4.asset.json";
const capdalFinaldesign = assetUrl(capdalFinaldesignAsset.url);
import scrutiaCover from "@/assets/scrutia-cover.png";
import scrutiaHero from "@/assets/scrutia-cover.png";
import scrutiaPlatformOverview from "@/assets/scrutia-platform-overview.png";
import scrutiaCompliance from "@/assets/scrutia-compliance.png";
import scrutiaPricing from "@/assets/scrutia-pricing.png";
import scrutiaProblemAsset from "@/assets/scrutia-problem.jpg.asset.json";
const scrutiaProblem = assetUrl(scrutiaProblemAsset.url);
import scrutiaInfrastructureAsset from "@/assets/scrutia-infrastructure.jpg.asset.json";
const scrutiaInfrastructure = assetUrl(scrutiaInfrastructureAsset.url);
import scrutiaCtaAsset from "@/assets/scrutia-cta.jpg.asset.json";
const scrutiaCta = assetUrl(scrutiaCtaAsset.url);
import scrutiaFinaldesignAsset from "@/assets/scrutia-finaldesign.mp4.asset.json";
const scrutiaFinaldesign = assetUrl(scrutiaFinaldesignAsset.url);
import clarityHeroAsset from "@/assets/clarity-hero.jpg.asset.json";
const clarityHero = assetUrl(clarityHeroAsset.url);
import clarityBentoAsset from "@/assets/clarity-bento.jpg.asset.json";
const clarityBento = assetUrl(clarityBentoAsset.url);
import clarityWorkflowAsset from "@/assets/clarity-workflow.jpg.asset.json";
const clarityWorkflow = assetUrl(clarityWorkflowAsset.url);
import clarityCtaAsset from "@/assets/clarity-cta.jpg.asset.json";
const clarityCta = assetUrl(clarityCtaAsset.url);
import clarityFinaldesignAsset from "@/assets/clarity-finaldesign.mp4.asset.json";
const clarityFinaldesign = assetUrl(clarityFinaldesignAsset.url);


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
  /** Project is not live yet — shows a WIP badge instead of a live link. */
  inDevelopment?: boolean;
  statusNote?: string;
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
  designDecisions?: { title: string; body: string; image: string; isVideo?: boolean }[];
  finalDesigns?: { src: string; isVideo?: boolean }[] | string[];
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
      "The old page didn't say what Verun does. I rebuilt it so a media buyer gets the point in one scroll.",

    client: "Webcoupers",
    role: "Product Designer",
    year: "2025",
    timeline: "Q4",
    platform: "Web (Desktop + Mobile)",
    tools: "Figma",
    liveUrl: "https://verun.app",

    heroImage: verun,
    gallery: [verun, verun],

    tagline: "Landing page for an AI advertising platform.",

    overview:
      "Verun is an AI-powered digital advertising platform built at Webcoupers, designed for marketing teams running campaigns across Meta, Google, and TikTok. It gives advertisers a unified dashboard to monitor performance, compare spend, and get AI-driven recommendations, all without switching between platforms. The existing landing page had grown outdated and no longer reflected the product's real depth or credibility. This project was a full redesign: repositioning Verun clearly and confidently for a crowded market, while making a complex, multi-channel product easy to understand within seconds of landing on the page.",

    challenge:
      "The previous Verun landing page was outdated and wasn't landing clearly with visitors. Verun had real product depth (unified ad intelligence, cross-platform data, AI recommendations), but none of that came through. Marketing teams visiting the site had no quick way to understand why it was different from the dozen other tools they already used.",

    problem:
      "The existing page was outdated and needed a full redesign, not a refresh. Verun had real product depth (unified ad intelligence, cross-platform data, AI recommendations), but none of that was landing clearly, and the page wasn't giving marketing teams a reason to trust or choose it over the dozen other tools they already used.",

    problemBullets: [
      "The existing page felt dated and didn't reflect the product's actual capability or credibility.",
      "Multi-channel ad management is hard to explain, so the value proposition needed distilling without losing its depth.",
      "Marketing teams are sceptical of 'AI-powered' claims. The design needed to earn trust before asking for a sign-up.",
      "A significant portion of traffic arrives on mobile, but the previous experience wasn't designed for it.",
      "Visitors weren't being guided toward a clear next action. CTAs were present but not well-timed within the scroll journey.",
    ],

    roleDetails:
      "This was an internal Webcoupers product redesign. I led the design end-to-end in Figma, from research through to a fully polished, developer-ready hi-fi design, then handed the final design over to a developer for build and deployment at verun.app.",

    responsibilities: [
      "Visual & UI design across all landing page sections",
      "Copywriting direction: headline, subheadline, and feature copy",
      "Competitive research to inform positioning and layout",
      "Full hi-fi design in Figma, handed off developer-ready",
      "Product positioning and value proposition framing",
    ],

    researchIntro:
      "Before opening Stitch, I studied the competitive landscape, including how tools like Smartly, AdEspresso, and Triple Whale present themselves, and looked at how Verun's core users (media buyers and performance marketers) talk about their pain points in the wild. This grounded the redesign in what a modern AdTech landing page needs to do, rather than starting from a blank page.",

    insights: [
      {
        title: "Performance marketers are platform-fatigued",
        body: "Media buyers spend significant time switching between Meta Ads Manager, Google Ads, and TikTok Business, losing context and time with every switch. Unified visibility is a genuine pain reliever, not just a feature.",
      },
      {
        title: "Trust is built through specificity, not claims",
        body: "'AI-powered' is background noise in this space. What builds credibility is specific language that shows what the AI actually does, not just that it exists.",
      },
      {
        title: "Competitor pages over-explain at the top",
        body: "Most rival tools lead with dense feature lists. There was a clear opportunity to lead with outcome and let features follow, reversing the typical information order on a landing page.",
      },
      {
        title: "Social proof is a required trust signal",
        body: "Marketing teams rely heavily on peer validation. A testimonial section wasn't just nice to have. It was a conversion prerequisite before any CTA would land.",
      },
    ],

    hmw: "How might we redesign Verun's outdated landing page so performance marketers, who've seen every AdTech pitch, immediately understand why this platform is worth their attention?",

    designDecisions: [
      {
        title: "Leading with the future, not the feature list",
        body: "The previous page opened by describing what Verun does. The redesign opens with 'The Future Of Digital Advertising', an outcome-forward headline that positions Verun as where advertising is heading, not just another tool in a marketer's stack. This reframes the first impression from functional to aspirational, which matters for a category this crowded.",
        image: verunhero,
      },
      {
        title: "Four features, not a wall of them",
        body: "Verun has more than four capabilities. I cut the grid to four because eight cards made a list nobody would read. Each feature name describes what the user gets, not how it works.",
        image: verunfeatures,
      },
      {
        title: "A navy section halfway down",
        body: "Halfway down, a full-width navy section ends the explaining and starts the pitch. 'Run Smarter Campaigns. Grow Faster.' sits there. I wanted the colour change to mark that.",
        image: verunblue,
      },
      {
        title: "Testimonials after the features",
        body: "Testimonials come after the features. A visitor who has already formed a view of the product is more likely to believe a quote about it.",
        image: veruntestimonials,
      },
      {
        title: "A contact flow with the friction removed",
        body: "The redesigned contact section uses a clean split layout: company details and trust signals on the left, a minimal form on the right (name, job title, email, budget, subject, message). No unnecessary fields, no phone number requirement. By the time a visitor reaches this section, they've already decided to engage, so the form's only job is to not get in their way.",
        image: veruncontactform,
      },
    ],

    finalDesigns: [verunfinaldesign],

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
        label: "Mobile responsive, designed and tested from 375px upward",
      },
    ],

    solution:
      "Redesigned an outdated landing page from the ground up in Figma, reframing the narrative around measurable outcomes, building a high-contrast hero with a live-data dashboard motif, and streamlining the conversion path with a single primary CTA repeated at key scroll milestones, then handed the design off developer-ready for build.",

    results:
      "Shipped a fully redesigned landing page with clearer messaging, a stronger hero, and a simplified conversion flow, now live at verun.app.",

    resultsContext:
      "Verun is currently in active development. The redesigned landing page forms the public-facing foundation for the product's go-to-market as the platform moves toward its first beta release with marketing teams.",

    forwardLooking:
      "Verun is currently in active development. The redesigned landing page is the public foundation for the product's go-to-market, built to support a beta launch with performance marketing teams.",

    reflection:
      "Redesigning an existing product's landing page taught me that restraint in copy is just as important as restraint in design. Every time I was tempted to add another feature callout or explain one more capability, the page got worse. The most effective landing page is the one that says just enough to make someone want to know more, not the one that answers every question upfront. I'd also approach the testimonials section differently next time. Locking in real customer quotes earlier in the process would have let the design flex properly around authentic content rather than retrofitting it at the end.",
  },
  // ─────────────────────────────────────────────────────────────
  // CLARITY
  // ─────────────────────────────────────────────────────────────
  {
    slug: "clarity",
    title: "Clarity",
    tags: ["Web Design", "SaaS", "Product", "Landing Page"],

    summary:
      "Landing page for Webcoupers' internal project management tool, still in development. One page for contributors, team leads and executives.",

    client: "Webcoupers",
    role: "Product Designer",
    year: "2026",
    timeline: "3 Months",
    platform: "Web (Desktop + Mobile)",
    tools: "Stitch · VSCode",
    inDevelopment: true,
    statusNote:
      "Note: Clarity is currently in active development and not yet live. This case study showcases the core design decisions, design system, and product strategy.",

    heroImage: clarityHero,
    gallery: [clarityHero, clarityBento],

    tagline: "Run your projects. Not the other way around.",

    overview:
      "Clarity is a project management and team collaboration platform built internally at Webcoupers. It's designed for organisations that need more than a task list: teams that want visibility across projects, smart priority scoring, and real-time syncing without the overhead of tools like Jira or the chaos of Notion. The landing page needed to introduce Clarity to three distinct audiences simultaneously: contributors who do the work, team leads who oversee it, and executives who need the high-level picture. Getting that positioning right, without making the page feel like it was trying to say everything to everyone, was the central design challenge.",

    challenge:
      "Clarity is a powerful internal tool, but its feature set is broad. The landing page needed to communicate genuine depth (smart difficulty scoring, zero-lag task unblocking, real-time sync, 365-day data history) without overwhelming a visitor who arrived not knowing what Clarity was. The risk was a page that either said too little and felt vague, or said too much and felt like a feature dump.",

    problem:
      "Clarity is a powerful internal tool, but its feature set is broad. The landing page needed to communicate genuine depth without overwhelming a visitor who arrived not knowing what Clarity was. The risk was a page that either said too little and felt vague, or said too much and felt like a feature dump.",

    problemBullets: [
      "Three distinct user types, contributors, team leads, and executives, each needed to see themselves in the product without the page fragmenting into three separate pitches.",
      "The product's headline differentiator (smart difficulty scoring and zero-lag unblocking) is not self-explanatory. It needed showing, not just telling.",
      "Existing project management tools have trained users to expect feature lists. Clarity needed to break that pattern and lead with outcomes instead.",
      "The page had to establish credibility for a new, internal product with no existing user base or brand recognition outside Webcoupers.",
    ],

    roleDetails:
      "Clarity is a Webcoupers internal product. I led the full design of the landing page (visual language, layout, copy direction, component design, and front-end implementation), working iteratively through multiple rounds of refinement.",

    responsibilities: [
      "End-to-end visual and UI design of the landing page",
      "Information architecture: deciding which sections to include and in what order",
      "Copy direction for all headlines, subheads, and feature descriptions",
      "Component and UI design for the product UI mockups shown in-page",
      "Front-end implementation using Stitch and Tailwind CSS",
      "Iterative refinement across multiple design rounds based on internal feedback",
    ],

    researchIntro:
      "Before designing, I reviewed how the leading project management tools position themselves (Notion, Linear, Monday.com, Teamwork) and mapped where Clarity genuinely differed. I also looked at how each of Clarity's three user types (contributors, leads, executives) talks about their pain points with existing tools.",

    insights: [
      {
        title: "Teams don't fail on tools, they fail on visibility",
        body: "The most common complaint across project management tool reviews isn't missing features. It's that nobody knows what's actually happening. Status updates are stale, blockers aren't surfaced, and leads find out about problems too late. Clarity's real-time sync and smart difficulty scoring directly addresses this.",
      },
      {
        title: "Executives and contributors need completely different things",
        body: "An executive needs a 30-second pulse check. A contributor needs to know what to work on next. Most tools try to serve both with the same interface. The landing page needed to surface that Clarity treats these as separate concerns, without making the page feel split.",
      },
      {
        title: "Monday.com and Teamwork lead with workflow, not outcomes",
        body: "Competitor pages show lots of UI and describe lots of features. Very few lead with what actually changes for the team using the product. This was the opportunity: leading with outcomes ('98% weekly velocity', '365d data history') before explaining how they're achieved.",
      },
      {
        title: "Trust for a new product comes from specificity",
        body: "Without customers to quote, I leaned on precise copy and detailed UI mockups. The numbers in the mockups are sample data, since Clarity has no users yet.",
      },
    ],

    hmw: "How might we design a landing page that makes a team lead, a contributor, and an executive all feel like Clarity was built specifically for them, without writing three different pages?",

    designDecisions: [
      {
        title: "A hero that leads with the outcome, not the tool",
        body: 'The hero opens on a deep navy field with the two-line statement "Run your projects. Not the other way around." in heavy display type. The subhead does the qualifying work in one breath ("the command center built for high-velocity product teams"), which keeps the headline free to be a promise instead of a description. A single orange primary action sits beside a quieter "Book a demo", so the page never asks the visitor to weigh two equal choices. Immediately below, a real product window breaks the fold on purpose. Proof that the interface exists arrives before any feature copy has to argue for it.',
        image: clarityHero,
      },
      {
        title: "Bento grid layout for complex features",
        body: "I grouped velocity tracking, AI risk analysis, dependency routing and automated standups into one grid of cards instead of a stacked list. The dark cards are the ones I wanted seen first.",
        image: clarityBento,
      },
      {
        title: "Tabs for each role",
        body: "Tabs for Developers, Designers and Product Ops. Click one and the preview card changes.",
        image: clarityWorkflow,
      },
      {
        title: "A closing block with one main button",
        body: "The page ends on a navy block with the headline 'Ready for absolute focus?', one main button and one quieter one.",
        image: clarityCta,
      },
    ],

    finalDesigns: [clarityFinaldesign],

   stats: [
  {
    value: "3",
    label: "Core user personas aligned into a single narrative structure",
  },
  {
    value: "100%",
    label: "Design system & high-fidelity UI components complete",
  },
  {
    value: "Beta",
    label: "Target milestone for initial internal rollout at Webcoupers",
  },
],

    solution:
      "Designed an outcome-led landing page that addresses three user personas through a single coherent narrative, moving from pain to proof to persona relevance to action. The tabbed product preview, smart feature UI cards, and structured persona section work together to communicate product depth without cognitive overload.",

    results:
      "Shipped a fully designed landing page for Clarity, live and serving as the primary marketing surface as the product moves toward its broader internal rollout at Webcoupers.",

  resultsContext:
  "Clarity is currently in active development. The landing page and UI framework serve as the foundational blueprint as engineering builds toward an internal beta release, paving the way for broader adoption across client organizations.",
    
    forwardLooking:
      "Clarity is in active development at Webcoupers. The landing page is the product's primary marketing surface, designed to grow with the platform as it moves from internal tool to client-facing product.",

    reflection:
  "Designing for an unreleased product meant building high credibility without past performance metrics to lean on. The key was creating an outcome-led story and high-fidelity UI previews that demonstrate value upfront. As Clarity moves through development, I'm eager to gather real user feedback during the upcoming beta phase to refine the onboarding and dashboard flows further.",
  },
  // ─────────────────────────────────────────────────────────────
  // CAPDAL
  // ─────────────────────────────────────────────────────────────
  {
    slug: "capdal",
    title: "Cappa & D'Alberto",
    tags: ["Web Design", "Construction", "Corporate", "Multi-page"],

    summary:
      "Redesign of a construction firm's website, founded 1932. I designed and built the pages in Tailwind.",

    client: "Cappa & D'Alberto",
    role: "Product Designer",
    year: "2026",
    timeline: "Q2 2026",
    platform: "Web (Desktop + Mobile)",
    tools: "Stitch · VSCode",
    liveUrl: "https://capdal.wbcstaging.com",

    heroImage: capdalHero,
    gallery: [capdalHero, capdalProjects],

    tagline: "Nine decades of building Nigeria. A website that finally looked like it.",

    overview:
      "Cappa & D'Alberto is one of Nigeria's oldest and most established construction and engineering firms, with a project portfolio spanning some of the country's most recognisable buildings and infrastructure. The existing website undersold that history. It read as generic and dated, out of step with a company whose actual body of work commands serious institutional trust. The redesign covered every page of the site: home, about, services, projects, and contact, each rebuilt from the ground up.",

    statusNote:
      "Concept & Skill Showcase: Beyond solving the brand's digital presence, I used this multi-page redesign to test-run and refine my skills using AI-powered design tools alongside modern programming languages and front-end frameworks.",

    challenge:
      "The core tension was age versus relevance. Capdal's decades of history are its biggest asset, but a website that leaned too hard into heritage risked looking dated, while one that leaned too hard into 'modern' risked losing the gravitas that comes with being a nearly century-old institution. The site also needed to organise a large amount of content (services, a sizeable project portfolio, company history) without becoming a maze.",

    problem:
      "The existing site didn't reflect the scale or credibility of the company behind it. It needed a full redesign across every page, not a visual refresh: new information architecture, new visual language, and a way to present a large project portfolio that made it easy to browse and filter.",

    problemBullets: [
      "The brand needed to feel established and trustworthy without feeling stuck in the past, with heritage as an asset, not a limitation.",
      "A large, varied project portfolio (spanning different sectors and decades) needed clear filtering and browsing, not a single long list.",
      "Multi-page architecture meant navigation had to stay consistent and predictable across very different types of content: services, projects, company info.",
      "As a B2B institutional site, the design had to speak convincingly to clients evaluating a construction partner for major projects, a very different bar than a consumer landing page.",
    ],

    roleDetails:
      "I designed and built all five pages of the Capdal website end-to-end (Home, About Us, Services, Projects, and Contact Us), covering the visual language, cross-page information architecture, the shared navigation system, and the filterable project portfolio, then implemented the front end directly in Tailwind and HTML.",

    responsibilities: [
      "Designed and implemented 5 distinct pages: Home, About Us, Services, Projects, Contact Us",
      "Cross-page information architecture: deciding what content lived on which page",
      "Shared navigation system designed to stay consistent and predictable across all five pages",
      "Services page card system covering six distinct capabilities",
      "Projects page design including category-based filtering by sector",
      "Front-end implementation of every page using Stitch and Tailwind CSS",
      "Incorporating design review feedback across multiple revision rounds",
    ],

    researchIntro:
      "I looked at how established construction and engineering firms, locally and internationally, balance heritage and modernity on their websites, and audited Capdal's own project archive to understand the range of work the portfolio section would need to hold.",

    insights: [
      {
        title: "Heritage brands earn trust through restraint, not decoration",
        body: "The construction firms that read as most credible online weren't the ones with the most ornamentation. They used generous whitespace, confident typography, and let photography of real projects do the talking.",
      },
      {
        title: "A portfolio this size needs filtering, not scrolling",
        body: "With projects spanning many years and sectors, a single long page would have buried the firm's best work under sheer volume. Category-based filtering let visitors find relevant projects fast.",
      },
      {
        title: "B2B decision-makers scan for proof points first",
        body: "Visitors evaluating a construction partner look for scale, track record, and completed work before anything else, which shaped which content sat above the fold on the homepage.",
      },
    ],

    hmw: "How might we redesign a website for a company built on decades of trust, without making the site feel like it belongs to a different, less established company?",

    finalDesigns: [capdalFinaldesign],

    designDecisions: [
      {
        title: "A homepage that opens with scale, not a sales pitch",
        body: 'The homepage leads with "Builders to the Nation, Since 1932" over hero imagery of a real landmark project, the Wings Office Complex, so credibility is established through visual proof before any copy has to do the convincing. Directly beneath the hero sits a stat bar (90+ Years, 500+ Projects, 1,000+ Professionals, 36 States) that turns nine decades of work into an immediate, scannable trust signal rather than a story a visitor has to read their way into.',
        image: capdalHero,
      },
      {
        title: "A separate About page for the history",
        body: 'Capdal\'s history is its strongest asset, but forcing that legacy onto the homepage would have crowded out everything else. A dedicated About Us page gives the firm\'s origins, milestones, and values room to breathe, cleanly separating "why trust us" from "what we do," so each page can make one argument well instead of two arguments halfway.',
        image: capdalAbout,
      },
      {
        title: "A Services page that organizes six distinct capabilities clearly",
        body: "Civil Engineering, General Construction, Project Management, Interior Fit-out, MEP Systems, and Heritage Restoration are presented in one consistent, scannable card system. A visitor evaluating Capdal for a specific need can locate the relevant capability in seconds rather than reading through a wall of undifferentiated text, and the uniform card treatment signals that each discipline is a first-class offering, not a footnote.",
        image: capdalServices,
      },
      {
        title: "A filterable Projects page for a large, varied portfolio",
        body: "The portfolio spans sectors and decades, from Dover Hotel Annex and Afrexim Tower to AMCE Medical Complex and the National Theatre restoration, so the dedicated Projects page uses category-based filtering (Hospitality, Financial Hub, Healthcare, National Monument) to let visitors browse by relevance. Filtering turns an undifferentiated scroll into a discovery tool, and keeps the firm's best work from being buried by sheer volume.",
        image: capdalProjects,
      },
      {
        title: "A Careers page that sells a legacy, not just a job listing",
        body: "The Careers page opens with 'Build Your Legacy With Nigeria's Engineering Leader,' immediately reframing a job search as joining a 90-year institution rather than filling a vacancy. A stat bar (90+ Years of Excellence, 1.2k+ Active Staff, 450+ Completed Projects, Top 5 Global ESG Rating) repeats the same trust-through-numbers pattern used elsewhere on the site, adapted for a talent audience instead of a client one. A 'Life at Capdal' section pairs a real employee testimonial with three culture pillars (Engineering Precision, Culture of Mentorship, Shaping Landmarks), giving the page an emotional register the rest of the site doesn't need. Below that, open roles are organized into a filterable, categorized card grid (Engineering, Project Management, Skilled Trades, Corporate) with location and employment type shown upfront, so a specific type of candidate can scan straight to relevant roles, plus a general application path for anyone who doesn't see an exact fit.",
        image: capdalCareers,
      },
      {
        title: "Contact: form on the left, company details on the right",
        body: "Form on the left, headquarters details on the right, so someone checking the firm's address doesn't have to read past the form.",
        image: capdalContact,
      },
      {
        title: "Same header and footer on every page",
        body: "Same header and footer on every page, so nobody loses their place.",
        image: capdalFinalcta,
      },
    ],

    stats: [
      {
        value: "5+",
        label: "Full pages redesigned end-to-end across the site",
      },
    ],

    solution:
      "Designed and implemented a full multi-page website redesign that repositions Capdal as a modern, credible construction partner, using photography-led storytelling, a filterable project portfolio, and consistent scroll-aware navigation to organise a large body of institutional content.",

    results:
      "Shipped a complete website redesign, live and serving as Capdal's primary digital presence for prospective clients and partners evaluating the firm's work.",

    resultsContext:
      "Capdal is an active client relationship through Webcoupers. The redesigned site is now the firm's primary public-facing surface.",

    forwardLooking:
      "The new information architecture and design system give Capdal room to keep adding to their project portfolio without needing a future redesign. New work slots into the existing filtering structure.",

    reflection:
      "This project sharpened how I think about heritage in design. The instinct is often to signal 'established' with literal historical cues, but the more convincing move was restraint: clean typography, real photography, and getting out of the way of the work itself. Next time, I'd push even further on differentiating the project categories visually, so the filtering feels like a discovery tool rather than just a sorting mechanism.",
  },
  // ─────────────────────────────────────────────────────────────
  // SCRUTIA
  // ─────────────────────────────────────────────────────────────
  {
    slug: "scrutia",
    title: "Scrutia",
    tags: ["Web Design", "SaaS", "AdTech", "Compliance"],

    summary:
      "Website for an ad-compliance tool. Agencies upload a creative and see whether it breaks ARCON or platform rules before they spend on it. I designed Home, Compliance and Pricing.",

    client: "Scrutia (WBCi)",
    role: "Product Designer",
    year: "2026",
    timeline: "Q3 2026",
    platform: "Web (Desktop + Mobile)",
    tools: "Stitch  · VSCode",
    liveUrl: "https://usescrutia.com",

    heroImage: scrutiaCover,
    gallery: [webcoupers, webcoupers],

    tagline:
      "Pre-vet every ad before ARCON, Meta, Google, TikTok, or X ever see it.",

    overview:
      "Scrutia checks ad creative against ARCON's advertising code and the ad policies of Meta, Google, TikTok and X before it's submitted. I designed the public site: Home, Compliance and Pricing. The readers are agency staff, media buyers and brand teams, who pay when an ad gets rejected.",

    challenge:
      "Scrutia sits at the intersection of regulation, AI, and media buying, three subjects that each invite jargon. The site had to explain what the product actually inspects, prove the engine is credible enough to trust with a client's campaign, and do it without turning into a policy document. It also had to sell a downloadable desktop app with in-app payment, which breaks the usual SaaS sign-up flow the visitor expects.",

    problem:
      "Compliance work in Nigerian advertising is manual, fragmented, and reactive. Teams learn a creative is non-compliant only after ARCON or a platform rejects it, when the budget is committed and the timeline is gone. The site had to make that cost visceral, then position pre-vetting as the obvious fix.",

    problemBullets: [
      "Compliance review is manual. Assets get checked by whoever happens to know the rules, if they get checked at all.",
      "Standards live in scattered places: ARCON's code in one document, Meta, Google, TikTok, and X policies in four more, each updated on its own schedule.",
      "The same creative has to clear multiple gates, so one asset generates duplicate review work across every channel it runs on.",
      "Rejections surface late, after media spend is committed, turning a revision into a restarted approval cycle.",
      "Category-specific risks (restricted claims, missing disclaimers, IP and music rights, ARCON's foreign-talent levy) are easy to miss and expensive to trigger.",
      "Constant firefighting produces compliance fatigue, where teams stop checking properly because checking properly takes too long.",
    ],

    roleDetails:
      "I owned the design of Scrutia's public site end-to-end: UX strategy, information architecture across Home, Compliance, and Pricing, the landing page itself, the component system, and the responsive behaviour. I worked from the product team's regulatory material to decide what a first-time visitor actually needs to understand and in what order.",

    responsibilities: [
      "UX strategy: defining what each page had to prove and to whom",
      "Information architecture across Home, Compliance, and Pricing",
      "Landing page design, including the problem-first narrative structure",
      "Visual hierarchy tuned for scanning rather than reading",
      "Reusable component system: capability cards, engine panels, pricing tiers, comparison table",
      "Responsive layouts for desktop, tablet, and mobile",
      "User journey optimisation from first scroll to download and in-app activation",
    ],

    researchIntro:
      "I worked through Scrutia's own regulatory material and the way agencies currently handle vetting, then looked at how comparable review and compliance products explain automated checking without either overclaiming or drowning the reader in policy detail.",

    insights: [
      {
        title: "The cost of a rejection is felt after the money is spent",
        body: "Teams don't budget for compliance failure because it's invisible until it happens. Leading with the cost of finding out late, not with feature lists, was what made the product's timing argument land.",
      },
      {
        title: "One creative has to clear several unrelated gates",
        body: "ARCON, Meta, Google, TikTok, and X each apply different rules to the same asset. I made one review across all five rulebooks the organising idea because that's the pain: one ad, five sets of rules.",
      },
      {
        title: "Automated review is only trusted when it shows its work",
        body: "I put real output on the page, like a flagged clause and an estimated ARCON fee, instead of writing 'AI-powered'.",
      },
      {
        title: "Agencies buy on volume and control, not on features",
        body: "The compliance engine is the same across every plan; what differs is devices, team seats, white-labelling, and whether the AI keys are managed. Pricing had to make that distinction obvious instead of implying a weaker product at the lower tier.",
      },
      {
        title: "Data residency is a purchase requirement, not a footnote",
        body: "For Nigerian clients, where ad assets are processed matters. Local-first handling, Lagos-based infrastructure, and audit-ready logs needed a dedicated place on the Compliance page rather than a line in the footer.",
      },
    ],

    hmw: "How might we turn compliance from a stressful, after-the-fact scramble into a routine step teams take before they spend, without burying them in the regulation itself?",

    finalDesigns: [{ src: scrutiaFinaldesign, isVideo: true }],

    designDecisions: [
      {
        title: "A hero that names the moment, not the technology",
        body: 'The hero leads with "Pre-Vet Every Ad Before ARCON, Meta, Google, TikTok, or X Ever See It", a sentence that contains the product, the audience, and the timing all at once. Naming the five gates explicitly does more work than any abstract phrase about compliance automation: a media buyer recognises their own problem in the first line. A trust badge sits directly beneath, so the claim and the proof arrive together rather than being separated by a scroll.',
        image: scrutiaHero,
      },
      {
        title: "A platform overview that explains the workflow before the engine",
        body: "The homepage doubles as the platform page, so it opens the product with four plain steps (upload the asset, choose the standards, run the review, read the report) before introducing any of the underlying analysis. Sequencing the workflow first gives visitors a mental model to hang the technical detail on; the same detail presented up front reads as complexity, and complexity in a compliance product reads as more work, not less.",
        image: scrutiaPlatformOverview,
      },
      {
        title: "A compliance section built as discrete engines, not one blob",
        body: "ARCON, the Meta policy sandbox, Google, TikTok, X, and IP/copyright are each presented as their own panel with its own scope and sample finding. Splitting them makes coverage countable, so a visitor can verify their specific channel is handled. It also lets the page grow as pan-African presets for Ghana, Kenya, and South Africa come online, without redesigning the section.",
        image: scrutiaCompliance,
      },
      {
        title: "Pricing framed around volume and control, not capability",
        body: "Solo, Agency, and Enterprise share the same compliance engine, so the tiers are differentiated on devices, team seats, white-label reporting, support speed, and whether AI keys are bring-your-own or managed. A comparison table makes the shared core explicit, which removes the usual fear that the affordable plan is the crippled one, and lets a buyer self-select on team size in a single pass.",
        image: scrutiaPricing,
      },
      {
        title: "Proof placed where the doubt is highest",
        body: "Rather than asserting the product saves time, the page shows it: the 85% ARCON rework reduction stat sits directly beside a real dashboard screenshot, at the exact point in the page where a skeptical visitor is being asked to believe the pain described above is solvable. The three named failure modes (Late Rejection, Regulatory Delay, Overlooked Detail) mirror language agencies already use for these moments, rather than generic problem statements.",
        image: scrutiaProblem,
      },
      {
        title: "Hierarchy tuned for enterprise credibility",
        body: "Media houses evaluating Scrutia need reassurance before they need features, so infrastructure claims (local-first processing, encryption, Lagos-based data residency, audit-ready logs) get typographic weight equal to the product sections rather than being tucked into fine print. Restraint does the rest: generous whitespace and a narrow type scale read as institutional, where dense decoration would read as a startup demo.",
        image: scrutiaInfrastructure,
      },
      {
        title: "CTAs placed at decision points, not at intervals",
        body: "'Get Scrutia' is in the nav and in a closing block on every page. On the homepage it repeats after the proof section and after the problem section. Payment happens inside the desktop app, so the site only hands people off to download.",
        image: scrutiaCta,
      },
    ],

    stats: [
      { value: "3", label: "Core pages designed: Home, Compliance, Pricing" },
      { value: "5", label: "Regulatory and platform gates surfaced in one review" },
      { value: "10", label: "Design decisions documented across the landing experience" },
    ],

    solution:
      "A problem-first landing experience that opens with the cost of a late rejection, explains the review as a four-step workflow, breaks compliance coverage into verifiable per-standard engines, and closes with pricing organised around team size rather than capability, all in a restrained, enterprise-legible visual system.",

    results:
      "The site now explains a technically dense regulatory product in a single scroll: what Scrutia inspects, which standards it covers, how the review runs, and what it costs.",

    resultsContext:
      "Rather than claiming business metrics I can't verify, the honest outcome is qualitative: clearer product comprehension for first-time visitors, better discoverability of the individual compliance engines, sharper positioning around pre-vetting as a timing advantage, stronger credibility from infrastructure and data-residency content given proper prominence, and a pricing structure that removes the main hesitation before download.",

    forwardLooking:
      "The engine-card and tier structures were built to extend. Pan-African presets for Ghana, Kenya, and South Africa, and roadmap items like API access, can slot into the existing system without a redesign.",

    reflection:
      "Every draft that explained the regulation became a page nobody would finish. I cut it to what a visitor needs to decide whether to download. Next time I'd put the product screenshots higher and larger.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project {
  const idx = projects.findIndex((p) => p.slug === slug);
  return projects[(idx + 1) % projects.length];
}
