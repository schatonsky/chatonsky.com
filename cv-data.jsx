// Shared CV data — single source of truth across all three site explorations.
const CV = {
  name: "Stephane D. Chatonsky",
  postnoms: "MBA, GAICD",
  shortTagline: "Board Chair & Non-Executive Director",
  longTagline: "Healthcare, life sciences and AI — at board level.",
  pedigreeLine: "McKinsey · Lazard · Macquarie · LeapFrog · Wharton MBA",

  hero: {
    primary: "Board Chair & Non-Executive Director.",
    secondary:
      "Thirty years across strategy, capital and governance. A decade focused on healthcare, life sciences, medtech, diagnostics, digital health and AI.",
  },

  summaryProse: [
    "Independent, commercially direct and analytically rigorous. Trained at McKinsey, Lazard Frères and Macquarie — combining strategy consulting, investment banking, venture capital and private equity with hands-on board leadership.",
    "Effective with founder-CEOs, institutional investors and scientific boards. Bringing genuine capital markets credibility to governance, not just oversight.",
  ],

  // Four pillars from CV — kept, can be displayed prose-or-list
  pillars: [
    {
      label: "Sector depth",
      body:
        "A decade of board, investment and advisory roles across life sciences, clinical trials, medtech, diagnostics, digital health and AI — able to interrogate clinical, regulatory and commercial assumptions directly.",
    },
    {
      label: "Governance with a commercial edge",
      body:
        "Audit & Risk Chair experience bringing financial discipline without bureaucratic drag. Spin-out governance (Cerulea, Neo-Bionica), international expansion (Prospection), high-growth scaling (4Cyte, Heidi).",
    },
    {
      label: "Capital markets fluency",
      body:
        "From Investment Banking to Venture Capital/Private Equity to Board. Investment banking at Lazard, venture capital at Macquarie, private equity at LeapFrog. Advises on capital structure, M&A and liquidity events from direct execution experience.",
    },
    {
      label: "Independent judgment",
      body:
        "Federal Court expert witness in venture capital and corporate valuation. Academic appointments at UNSW, UQ and Macquarie. Proven under scrutiny in regulated, capital-intensive environments.",
    },
  ],

  // Sectors — for the small matrix/index treatment
  sectors: [
    { code: "LS", name: "Life sciences", note: "Microbiome, advanced therapeutics, molecular diagnostics" },
    { code: "MT", name: "Medtech", note: "Vascular imaging, neurotech, devices" },
    { code: "DX", name: "Diagnostics", note: "Pathology, PCR, FDA-pathway technologies" },
    { code: "DH", name: "Digital health", note: "Healthcare data analytics, platforms" },
    { code: "AI", name: "AI & Data", note: "Clinical automation, decision support, analytics" },
    { code: "TS", name: "Tech & Software", note: "SaaS platforms, enterprise software, scale-ups" },
  ],

  current: [
    {
      role: "Non-Executive Director",
      org: "13SICK",
      where: "Sydney",
      from: "Sep 2026",
      to: "Present",
      note: "Australia’s largest after-hours home doctor network, providing bulk billed home visits and telehealth nationally. Backed by Black Kite Partners and MA Financial.",
    },
    {
      role: "Non-Executive Director",
      org: "Xylo",
      where: "Sydney & USA",
      from: "Aug 2026",
      to: "Present",
      note: "Next-generation therapeutics company using advanced neuroscience and computational drug discovery to rewire neural circuits and restore brain function. Nominee of Main Sequence Ventures.",
    },
    {
      role: "Non-Executive Director, Audit & Risk Committee",
      org: "Microba Life Sciences",
      ticker: "ASX: MAP",
      where: "Brisbane",
      from: "Nov 2025",
      to: "Present",
      note: "Listed precision microbiome company advancing health through gut microbiome technology.",
    },
    {
      role: "Senior Adviser",
      org: "Vexev",
      where: "Sydney",
      from: "Oct 2025",
      to: "Present",
      note: "Blackbird-backed medtech start-up — AI-driven vascular imaging. Advising on capital raising.",
    },
    {
      role: "Senior Adviser",
      org: "Heidi",
      where: "Melbourne",
      from: "Jan 2024",
      to: "Present",
      note: "AI healthtech automating clinical admin for 500,000 clinicians and 12m consultations / month. Global BD, product and capital strategy.",
    },
    {
      role: "Expert-in-Residence",
      org: "Cicada Innovations",
      where: "Sydney & Melbourne",
      from: "Dec 2023",
      to: "Present",
      note: "Advising advanced therapeutics and medical devices ventures on commercialisation and investment readiness.",
    },
    {
      role: "Syndicate Chair",
      org: "The CEO Institute",
      where: "Sydney",
      from: "Jan 2014",
      to: "Present",
      note: "Chairing peer groups of chief executives across multiple sectors.",
    },
  ],

  prior: [
    {
      role: "Non-Executive Director",
      org: "Cerulea Clinical Trials",
      where: "Melbourne",
      from: "2024",
      to: "2026",
      note: "Nominee of Breakthrough Victoria. Steered CEO transition and commercial growth.",
    },
    {
      role: "Non-Executive Director",
      org: "Neo-Bionica",
      where: "Melbourne",
      from: "2024",
      to: "2026",
      note: "OKR implementation and shareholder engagement.",
    },
    {
      role: "Board Chair",
      org: "Produqt (Brainmates)",
      where: "Sydney",
      from: "2022",
      to: "2025",
      note: "Led governance reset and shift to product-led offering and delivery model.",
    },
    {
      role: "Non-Executive Director, Chair Audit & Risk",
      org: "Genetic Signatures",
      ticker: "ASX: GSS",
      where: "Sydney",
      from: "2023",
      to: "2024",
      note: "Navigated CEO transition, supported two capital raises and a key regulatory milestone (FDA-approved PCR).",
    },
    {
      role: "Board Chair",
      org: "Health Analytics (Prospection)",
      where: "Sydney",
      from: "2018",
      to: "2023",
      note: "Led governance and capital strategy through $65m across two venture capital and private equity rounds; enabled US and Japan expansion.",
    },
    {
      role: "Non-Executive Director",
      org: "4Cyte Pathology",
      where: "Sydney",
      from: "2018",
      to: "2022",
      note: "Series A capital raise and governance through growth from concept to >$600m annual revenue.",
    },
    {
      role: "Senior Adviser",
      org: "Primary Health Care (Healius)",
      ticker: "ASX: HLS",
      where: "Philippines & Indonesia",
      from: "2014",
      to: "2018",
      note: "Initiated and led Asia expansion for one of Australia's largest listed healthcare providers.",
    },
    {
      role: "Non-Executive Director",
      org: "eBev",
      where: "Sydney",
      from: "2015",
      to: "2017",
      note: "B2B digital marketplace — capital raising and early-stage growth.",
    },
    {
      role: "Non-Executive Director, Chair Audit & Risk",
      org: "The Pathways Foundation",
      where: "Mullumbimby",
      from: "2005",
      to: "2009",
      note: "Governance, finance and risk for an award-winning national youth development NFP.",
    },
  ],

  executive: [
    {
      role: "Co-Founder & Managing Director",
      org: "Ivest",
      where: "Australia & SE Asia",
      from: "2013",
      to: "2020",
      note: "Independent advisory firm — cross-border M&A, JV and financing transactions in high-growth Southeast Asia.",
    },
    {
      role: "General Partner & Asia Lead",
      org: "LeapFrog Investments",
      where: "Australia & SE Asia",
      from: "2010",
      to: "2013",
      note: "Established and led Southeast Asia investment strategy. Subsequently Global Advisory Board (2013–15).",
    },
    {
      role: "Founder & Managing Director",
      org: "Chatonsky & Associates",
      where: "Sydney",
      from: "2003",
      to: "2009",
      note: "Boutique advisory to growth-stage and mid-market companies, PE funds and family offices; 10+ transactions.",
    },
    {
      role: "Director, Group Strategy & M&A",
      org: "Telecom New Zealand (Spark)",
      ticker: "NZX: SPK",
      where: "AU / NZ",
      from: "2001",
      to: "2003",
      note: "Group strategy and M&A for regional tech transformation and emerging digital markets.",
    },
    {
      role: "Vice President, Venture Capital & Tech IB",
      org: "Macquarie Bank",
      ticker: "ASX: MQG",
      where: "Sydney",
      from: "1999",
      to: "2001",
      note: "Originated and executed venture capital transactions across emerging technology sectors.",
    },
    {
      role: "Senior Associate",
      org: "McKinsey & Company",
      where: "AU, NZ, Singapore, France",
      from: "1997",
      to: "1999",
      note: "Strategy, transformation and operational performance — technology, telecoms and financial services.",
    },
    {
      role: "Vice President, Equity Capital Markets",
      org: "Lazard Frères",
      ticker: "NYSE: LAZ",
      where: "Paris",
      from: "1992",
      to: "1995",
      note: "IPOs and equity offerings for European clients.",
    },
  ],

  credentials: [
    {
      title: "Expert Witness, Federal Court of Australia",
      from: "2007",
      to: "Present",
      note: "Venture capital, private equity and corporate valuation. Evidence in complex commercial disputes including Australia's largest civil personal claim and a landmark AFR defamation matter.",
    },
    {
      title: "Adjunct Faculty, UNSW",
      from: "2005",
      to: "Present",
      note: "MBA and Bachelor of Commerce programs.",
    },
    {
      title: "Honorary Fellow, Macquarie University",
      from: "2000",
      to: "2023",
      note: "Faculty of Applied Finance — authored and taught postgraduate courses in Private Equity and Venture Capital.",
    },
    {
      title: "Adjunct Faculty, University of Queensland Business School",
      from: "2024",
      to: "2025",
      note: "Master of Finance & Investment Management.",
    },
  ],

  education: [
    { school: "The Wharton School, University of Pennsylvania", line: "MBA, Corporate Finance — 1997" },
    { school: "ESSEC Business School, Paris", line: "Master in Management, Marketing — 1989" },
    { school: "Australian Institute of Company Directors", line: "Company Directors Course (2007); The Board's Role in Cyber (2024)" },
    { school: "INSEAD — Executive Education", line: "Advanced Negotiations (2023); International Management (2016); Negotiation Dynamics (2011)" },
    { school: "Harvard — Executive Education", line: "Competition and Strategy (2002); Structuring Effective Private Equity Partnerships (2000)" },
  ],

  contact: {
    email: "stephane@chatonsky.com",
    phone: "+61 414 748 158",
    linkedin: "linkedin.com/in/schatonsky",
    linkedinUrl: "https://www.linkedin.com/in/schatonsky/",
  },

  // Talks — single source of truth. Add an object here and it appears under
  // "Talks" on the /writing page automatically. Leave empty to hide the section.
  // Shape: { title, venue, date, url } (url optional).
  talks: [],

  // Apps & tools ("Things") — single source of truth. To add a new tool, add one
  // object here. It appears automatically on the /writing page and on the home teaser.
  apps: [
    {
      code: "01",
      tag: "Free for directors",
      title: "Board AI Governance Assessment",
      desc: "Twenty-four questions, six dimensions, six minutes. Measure your board's oversight of AI — from strategy and risk to cost and dependency — and get a maturity profile with priority actions.",
      url: "/assessment",
      cta: "Start",
    },
    {
      code: "02",
      tag: "AI for education",
      title: "Eruleo",
      desc: "An AI-powered teaching platform for higher education, launching soon with UNSW students. An AI coach that gives individualised feedback on group role-plays, auto-generated weekly recall quizzes, and tools that scale group presentations and interactive concept labs across large classes.",
      url: "https://eruleo.com",
      cta: "Visit",
    },
    {
      code: "03",
      tag: "Free to use",
      title: "Cap Table, Dilution & Returns",
      desc: "Build a company round by round and watch who owns what as the money comes in. Price a round below the last and anti-dilution kicks in. Then run an exit through the liquidation waterfall to see every investor's proceeds, multiple and IRR — and what the terms cost the founders.",
      url: "/captable",
      cta: "Open",
      beta: true,
    },
  ],

  writings: [
    { title: "Poor AI governance is driving hidden costs", outlet: "AICD", date: "2026", url: "https://www.aicd.com.au/innovative-technology/digital-business/artificial-intelligence/poor-ai-driving-hidden-costs.html" },
    { title: "A tax break for startup employees that reaches almost none of them", outlet: "Treasury submission", date: "2026", url: "/assets/ibcc-submission-treasury-2026.pdf" },
    { title: "Will AI be the risk we chose not to see?", outlet: "The Ethics Centre", date: "2026", url: "https://ethics.org.au/will-ai-be-the-risk-we-chose-not-to-see/" },
    { title: "The $13 Trillion Question: What You Have to Believe About AI", outlet: "LinkedIn", date: "2026", url: "https://www.linkedin.com/pulse/13-trillion-question-what-you-have-believe-ai-stephane-chatonsky-qkpbc" },
    { title: "Tokens keep getting cheaper. So why is your AI bill about to explode?", outlet: "LinkedIn", date: "2026", url: "https://www.linkedin.com/pulse/tokens-keep-getting-cheaper-so-why-your-ai-bill-stephane-chatonsky-yjvac" },
    { title: "Sitting With the Second Existential Risk: the case for an IPCC for AI", outlet: "LinkedIn / Web", date: "2026", url: "https://ipccforai.org/" },
    { title: "The Importance of Spending Time: Reflections from 19 Years with my son", outlet: "LinkedIn", date: "2025", url: "https://www.linkedin.com/pulse/importance-spending-time-reflections-from-19-years-my-chatonsky-hhepc/" },
    { title: "Living in AI's Age of Dissociative Identity: Embracing and Fearing the Future at Once", outlet: "LinkedIn", date: "2025", url: "https://www.linkedin.com/pulse/living-ais-age-dissociative-identity-embracing-future-chatonsky-rxcae/" },
    { title: "Harnessing Data and Technology for Faster and Smarter Patient Recruitment", outlet: "LinkedIn", date: "2024", url: "https://www.linkedin.com/pulse/harnessing-data-technology-faster-smarter-patient-stephane-chatonsky-q2ohc/" },
    { title: "In healthcare, the data and technology exist. Why not use it?", outlet: "LinkedIn", date: "2024", url: "https://www.linkedin.com/pulse/healthcare-data-technology-exist-why-use-stephane-chatonsky-rmv0e/" },
  ],

  // Understated proof points — woven into prose, not big numbers
  proof: [
    "4Cyte Pathology — concept to >$600m annual revenue",
    "Prospection — $65m across two rounds; US and Japan expansion",
    "Genetic Signatures — two capital raises through CEO transition",
    "Heidi — 500,000 clinicians, 12m consultations / month",
  ],
};

export default CV;
