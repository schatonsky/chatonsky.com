// Board AI Governance Assessment — chatonsky.com/assessment
// Same design system as option-c.jsx: Swiss, forest green, Inter Tight + JetBrains Mono.
// Runs entirely in the browser. No answers are stored or transmitted.

const AIDATA = {
  dimensions: [
    {
      code: 'D1',
      name: 'Strategy & Value',
      intro: 'How AI features in the board’s strategic thinking.',
      questions: [
        {
          q: 'How does AI feature in the board’s strategy discussions?',
          opts: [
            'It doesn’t, or only when a director raises it',
            'Occasionally, mainly as a technology or IT topic',
            'Regularly, as part of strategy reviews',
            'Every major strategic decision is tested for AI implications'],
        },
        {
          q: 'How well does the board understand AI’s potential to disrupt your business model or sector?',
          opts: [
            'We have not examined it',
            'General awareness, but no structured analysis',
            'We have reviewed management’s analysis of AI-driven disruption',
            'We regularly stress-test the business model against AI scenarios'],
        },
        {
          q: 'How clear is the board’s view of the value and cost of the company’s AI initiatives?',
          opts: [
            'We have no visibility of AI initiatives',
            'We see activity, but not value, cost or return',
            'We receive periodic reporting on major AI initiatives and their benefits',
            'AI investments are tracked with clear metrics, owners and expected returns'],
        },
        {
          q: 'Does the board consider how the company’s AI capability compares with competitors and new entrants?',
          opts: [
            'No',
            'Anecdotally, without evidence',
            'Yes, through periodic competitive reviews',
            'Yes — benchmarked regularly, including threats from AI-native entrants'],
        }],

      action: 'Put AI on the strategy agenda. Ask management for a view of AI-driven disruption to the business model, an inventory of current AI initiatives with value and cost, and an honest comparison against competitors and AI-native entrants.',
    },
    {
      code: 'D2',
      name: 'Oversight & Accountability',
      intro: 'Whether ownership of AI oversight is explicit and structured.',
      questions: [
        {
          q: 'Where does responsibility for AI oversight sit?',
          opts: [
            'Nowhere explicitly',
            'Assumed to sit with a committee, but charters are silent',
            'Explicitly allocated to the board or a committee, with charters updated',
            'Clear allocation, with defined escalation paths and periodic effectiveness review'],
        },
        {
          q: 'Does the company have a board-endorsed AI or responsible-AI policy?',
          opts: [
            'No policy exists',
            'A draft or informal guidelines exist',
            'Yes — a policy is in place and endorsed by the board',
            'Yes — and compliance with it is monitored and reported to the board'],
        },
        {
          q: 'How often does AI appear on the board agenda with quality supporting papers?',
          opts: [
            'Never, or almost never',
            'Ad hoc, when something happens',
            'At least annually, as a scheduled item',
            'A standing or regular item, with decision-useful papers'],
        },
        {
          q: 'Is there clear executive accountability for AI outcomes?',
          opts: [
            'No one owns it',
            'Ownership is diffuse across functions',
            'A named executive is accountable and reports to the board',
            'Named accountability, with AI outcomes reflected in executive scorecards'],
        }],

      action: 'Fix ownership first. Allocate AI oversight explicitly — full board or a committee — update the charter, endorse an AI policy, name an accountable executive, and schedule AI on the forward agenda.',
    },
    {
      code: 'D3',
      name: 'Risk & Assurance',
      intro: 'Whether AI risk is identified, controlled and independently assured.',
      questions: [
        {
          q: 'Has the board set a risk appetite for the use of AI?',
          opts: [
            'The topic has not been raised',
            'Discussed, but nothing has been agreed',
            'Risk appetite for AI has been discussed and broadly agreed',
            'A formal AI risk appetite is set, documented and applied to decisions'],
        },
        {
          q: 'Are AI-specific risks — model error, bias, privacy, security, third-party AI, IP — captured in the risk framework?',
          opts: [
            'Not identified',
            'Partially — some risks noted informally',
            'Yes — key AI risks are in the risk register with owners',
            'Yes — with controls, indicators and regular reporting to the board'],
        },
        {
          q: 'Does the board receive assurance over AI systems and controls?',
          opts: [
            'No assurance',
            'Management assertions only',
            'Periodic internal reviews or audits cover AI',
            'Structured assurance, including independent or external review'],
        },
        {
          q: 'Is the organisation ready for an AI-related incident — a harmful output, a data leak through AI tools, a model failure?',
          opts: [
            'No process exists',
            'General incident processes would apply, but are untested for AI',
            'AI scenarios are included in incident and crisis plans',
            'AI incident plans are tested, with clear board escalation triggers'],
        }],

      action: 'Bring AI into the risk framework. Ask the executive who owns risk for an AI risk appetite proposal, register entries with owners, an assurance plan, and an AI incident scenario in the next crisis exercise.',
    },
    {
      code: 'D4',
      name: 'Data, Ethics & Regulation',
      intro: 'The data, principles and regulatory awareness beneath AI use.',
      questions: [
        {
          q: 'How confident is the board in the governance of data used by AI — its quality, provenance and rights?',
          opts: [
            'We have not asked the question',
            'Limited confidence — data governance is immature',
            'Reasonable confidence — data governance covers AI uses',
            'High confidence — quality, provenance and rights are actively managed and reported'],
        },
        {
          q: 'Are responsible-AI principles — fairness, transparency, human oversight — in place and monitored?',
          opts: [
            'No principles exist',
            'Principles are drafted but not operational',
            'Principles are adopted and applied to new AI uses',
            'Principles are embedded, monitored and reported against'],
        },
        {
          q: 'How well is the board informed about AI regulation across your operating jurisdictions?',
          opts: [
            'Not at all',
            'Occasional general updates',
            'Regular briefings on relevant regulatory developments',
            'Systematic horizon-scanning with compliance gap analysis'],
        },
        {
          q: 'Does the board consider AI’s impact on customers, employees and other stakeholders?',
          opts: [
            'Not considered',
            'Considered informally, without analysis',
            'Yes — impacts are assessed for significant AI deployments',
            'Yes — with defined thresholds for disclosure and stakeholder engagement'],
        }],

      action: 'Commission a data-and-ethics review: where AI-relevant data comes from and what rights attach to it, which responsible-AI principles apply, and which regulations are coming in each operating jurisdiction.',
    },
    {
      code: 'D5',
      name: 'Board Capability & Culture',
      intro: 'Whether the board itself is equipped to govern AI.',
      questions: [
        {
          q: 'What is the level of AI literacy around the board table?',
          opts: [
            'Low across the board',
            'One or two directors are conversant; most are not',
            'Most directors have working literacy; AI features in the skills matrix',
            'Strong collective literacy, refreshed regularly and reflected in renewal planning'],
        },
        {
          q: 'Does the board undertake structured learning on AI?',
          opts: [
            'None',
            'Occasional self-directed reading',
            'Periodic briefings from management or external experts',
            'A deliberate program — briefings, deep-dives, site visits, external perspectives'],
        },
        {
          q: 'Can the board access independent AI expertise when it needs it?',
          opts: [
            'No identified access',
            'We would find someone if needed',
            'Yes — trusted advisers or an expert panel are available',
            'Yes — independent expertise is used routinely on major AI decisions'],
        },
        {
          q: 'Does the board experience AI first-hand in its own work, with appropriate safeguards?',
          opts: [
            'Not at all',
            'Some directors experiment individually',
            'AI tools are used in parts of the board process, with guardrails',
            'The board deliberately uses AI in its work and reviews the lessons'],
        }],

      action: 'Invest in the board itself: baseline director literacy, commit to a twelve-month learning program, secure access to independent expertise, and get hands-on with the tools the company is deploying.',
    },
    {
      code: 'D6',
      name: 'Cost & Dependency',
      intro: 'Whether the board controls AI’s cost trajectory, supplier concentration and exit options.',
      questions: [
        {
          q: 'How does the board see AI spend reported?',
          opts: [
            'We do not see AI spend separately at all',
            'Occasionally, or only unit costs — such as falling per-token prices',
            'Total AI spend is reported to the board periodically',
            'Total spend and its growth rate are reported alongside unit costs, with a forward view'],
        },
        {
          q: 'How well does the board understand the company’s dependency on individual AI providers?',
          opts: [
            'We have not looked at it',
            'We know who the main providers are, but little more',
            'Dependency is mapped and treated as a supplier-concentration risk',
            'Actively managed — concentration limits, contract terms and contingency plans are in place'],
        },
        {
          q: 'Has the board tested what a sharp rise in AI provider prices would do to margins?',
          opts: [
            'No',
            'Discussed informally, without analysis',
            'Management has modelled a price-shock scenario',
            'Modelled and stress-tested, with agreed responses beyond simply paying'],
        },
        {
          q: 'Could the company switch AI providers if it had to?',
          opts: [
            'We do not know',
            'Probably not without major re-engineering',
            'Partially — some workloads are portable by design',
            'Yes — abstraction layers and multi-model designs keep switching a real choice'],
        }],

      action: 'Ask for the chart that matters: total AI spend and its growth rate, shown next to falling unit prices. Map provider concentration, model a price shock, and ask where optionality — abstraction layers, more than one model, portability — is affordable, before dependency is locked in.',
    }],

  levels: [
    {
      min: 1.0, max: 1.749, name: 'Emerging',
      text: 'AI has not yet entered the board’s governance system in any structured way. That is still common — but the gap between AI’s pace and the board’s oversight is now a governance risk in itself. The priority is to get AI onto the agenda deliberately: one substantive session in the next quarter covering strategic exposure, current use across the organisation, and who owns oversight.',
    },
    {
      min: 1.75, max: 2.499, name: 'Developing',
      text: 'Foundations are forming, but oversight still depends on individuals rather than structures. The priority is to formalise: explicit ownership in a charter, a board-endorsed AI policy, AI risks in the risk framework, and a scheduled agenda cadence — so that oversight survives changes in personnel and attention.',
    },
    {
      min: 2.5, max: 3.249, name: 'Established',
      text: 'The structures of AI governance are in place. The frontier now is depth: independent assurance over AI systems, value tracking on AI investments, regulatory horizon-scanning, and lifting collective literacy so the board can challenge management with confidence rather than take AI reporting on trust.',
    },
    {
      min: 3.25, max: 4.0, name: 'Leading',
      text: 'AI governance is mature and embedded — a position few boards have reached. The task is to keep it: regulation, model capability and competitive dynamics are all moving quickly, so refresh risk appetite, assurance scope and board education on a rolling basis, and test whether practice still matches policy.',
    }],

};

// ---- Benchmarking (opt-in) ----
// mode 'demo' shows sample data and stores nothing. Switched to 'live' + Supabase
// wiring only after the backend is approved.
const BENCH_MODE = 'demo';
// Benchmark UI switch: false = show "register your interest" instead of the
// live form. Flip to true (and BENCH_MODE to 'live') once the backend exists.
const BENCH_LIVE = false;
const ASSESS_URL = 'https://chatonsky.com/assessment';
const SECTORS = [
'Healthcare & life sciences',
'Financial services',
'Technology & software',
'Consumer & retail',
'Industrials & manufacturing',
'Energy & resources',
'Property & construction',
'Professional services',
'Government, education & not-for-profit',
'Other'];

const SIZES = ['Under $50m', '$50m – $250m', '$250m – $1b', 'Over $1b'];

const fetchBenchmarks = (payload) => {
  if (BENCH_MODE === 'demo') {
    // Sample cohorts so the full experience can be previewed, including the
    // "not enough responses yet" state for the size cohort.
    return new Promise((resolve) => setTimeout(() => resolve({
      sample: true,
      all: { n: 142, dims: [2.31, 2.05, 1.86, 2.12, 1.94, 1.68] },
      sector: { n: 23, dims: [2.52, 2.18, 2.01, 2.34, 2.08, 1.83] },
      size: { n: 8, dims: null },
    }), 700));
  }
  return Promise.reject(new Error('Benchmark backend not configured yet'));
};

const BoardAIAssessment = () => {
  const { useState } = React;
  // stage: -1 intro, 0..4 dimension steps, 5 results
  const [stage, setStage] = useState(-1);
  const [answers, setAnswers] = useState({}); // key "d-q" -> 1..4
  const D = AIDATA.dimensions;

  const setAns = (d, q, v) => setAnswers((prev) => ({ ...prev, [d + '-' + q]: v }));
  const dimComplete = (d) => D[d].questions.every((_, q) => answers[d + '-' + q]);
  const dimScore = (d) => {
    const vals = D[d].questions.map((_, q) => answers[d + '-' + q] || 0);
    return vals.reduce((a, b) => a + b, 0) / vals.length;
  };
  const overall = () => D.reduce((a, _, d) => a + dimScore(d), 0) / D.length;
  const levelFor = (s) => AIDATA.levels.find((l) => s >= l.min && s <= l.max) || AIDATA.levels[0];
  const answered = Object.keys(answers).length;

  // Share / forward
  const [copied, setCopied] = useState(false);
  const mailtoShare = 'mailto:?subject=' + encodeURIComponent('How well does your board govern AI?') +
  '&body=' + encodeURIComponent('Worth six minutes: a free 24-question self-assessment of board AI governance, with instant results and priority actions.\n\n' + ASSESS_URL);
  const liShare = 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(ASSESS_URL);
  const copyLink = () => {
    navigator.clipboard.writeText(ASSESS_URL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  const ShareBlock = () =>
  <div className="share">
      <div className="sh-lab">Forward this assessment</div>
      <div className="sh-btns">
        <a className="btn ghost sm" href={mailtoShare}>Email it &rarr;</a>
        <button className="btn ghost sm" onClick={copyLink}>{copied ? 'Link copied ✓' : 'Copy link'}</button>
        <a className="btn ghost sm" href={liShare} target="_blank" rel="noopener">Share on LinkedIn</a>
      </div>
    </div>;

  // Benchmark opt-in
  const [bench, setBench] = useState({ email: '', sector: '', size: '', consent: false });
  const [benchState, setBenchState] = useState('idle'); // idle | loading | done
  const [benchErr, setBenchErr] = useState('');
  const [benchData, setBenchData] = useState(null);
  const submitBench = () => {
    if (!/^\S+@\S+\.\S+$/.test(bench.email)) { setBenchErr('Enter a valid email address.'); return; }
    if (!bench.sector) { setBenchErr('Select your sector.'); return; }
    if (!bench.size) { setBenchErr('Select your annual revenue band.'); return; }
    if (!bench.consent) { setBenchErr('Please tick the consent box to proceed.'); return; }
    setBenchErr('');
    setBenchState('loading');
    fetchBenchmarks({
      email: bench.email.trim(), sector: bench.sector, size: bench.size,
      answers, scores: D.map((_, i) => dimScore(i)), overall: overall(),
    }).
    then((d) => { setBenchData(d); setBenchState('done'); }).
    catch(() => { setBenchState('idle'); setBenchErr('Something went wrong. Please try again.'); });
  };
  const [showResp, setShowResp] = useState(false);
  const resetAll = () => {
    setAnswers({}); setStage(-1);
    setBench({ email: '', sector: '', size: '', consent: false });
    setBenchState('idle'); setBenchErr(''); setBenchData(null);
    setShowResp(false);
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'instant' });

  return (
    <div className="asmt">
      <style>{`
        .asmt { --bg: #fafaf7; --ink: #0e1410; --soft: #3a4540; --mute: #7c857f; --rule: #e2e3df; --accent: #1f4d36; --accent-soft: #6fb593; --sans: 'Inter Tight', 'Inter', system-ui, sans-serif; --serif: 'Source Serif 4', Georgia, serif; --mono: 'JetBrains Mono', ui-monospace, monospace; background: var(--bg); color: var(--ink); font-family: var(--sans); font-size: 15px; line-height: 1.55; min-height: 100vh; }
        .asmt a { color: inherit; text-decoration: none; }
        .asmt .topbar { position: sticky; top: 0; z-index: 50; background: color-mix(in oklab, var(--bg) 92%, transparent); backdrop-filter: saturate(160%) blur(8px); -webkit-backdrop-filter: saturate(160%) blur(8px); display: flex; justify-content: space-between; align-items: center; padding: 18px 64px; border-bottom: 1px solid var(--rule); font-family: var(--mono); font-size: 12px; }
        .asmt .topbar .back { color: var(--soft); transition: color .15s ease; }
        .asmt .topbar .back:hover { color: var(--accent); }
        .asmt .topbar .tag { color: var(--accent); letter-spacing: .14em; text-transform: uppercase; font-size: 10.5px; }
        .asmt .wrap { max-width: 880px; margin: 0 auto; padding: 72px 64px 96px; }
        .asmt .kicker { font-family: var(--mono); font-size: 11px; color: var(--accent); letter-spacing: .18em; text-transform: uppercase; margin-bottom: 24px; }
        .asmt h1 { font-weight: 500; font-size: 56px; line-height: 1.02; letter-spacing: -.03em; margin: 0 0 28px; }
        .asmt h1 .acc { color: var(--accent); }
        .asmt .stand { font-size: 18px; line-height: 1.55; color: var(--soft); max-width: 58ch; margin: 0 0 20px; }
        .asmt .facts { display: grid; grid-template-columns: repeat(3, max-content); gap: 40px; padding-top: 28px; border-top: 1px solid var(--rule); margin-top: 36px; margin-bottom: 44px; }
        .asmt .facts .lab { font-family: var(--mono); font-size: 10.5px; color: var(--mute); letter-spacing: .14em; text-transform: uppercase; margin-bottom: 6px; }
        .asmt .facts .v { font-size: 15px; font-weight: 500; }
        .asmt .dims-list { border-top: 1.5px solid var(--ink); margin: 0 0 44px; }
        .asmt .dims-list .dl { display: grid; grid-template-columns: 56px 220px 1fr; gap: 20px; padding: 14px 0; border-bottom: 1px solid var(--rule); align-items: baseline; }
        .asmt .dims-list .dc { font-family: var(--mono); font-size: 11px; color: var(--accent); letter-spacing: .1em; }
        .asmt .dims-list .dn { font-weight: 500; font-size: 15.5px; }
        .asmt .dims-list .di { font-size: 13.5px; color: var(--mute); font-family: var(--serif); }
        .asmt .btn { display: inline-block; font-family: var(--mono); font-size: 12.5px; letter-spacing: .08em; padding: 14px 28px; background: var(--accent); color: #f5f5f0; border: 1px solid var(--accent); cursor: pointer; transition: background .15s ease; }
        .asmt .btn:hover { background: #163a28; }
        .asmt .btn.ghost { background: transparent; color: var(--ink); border-color: var(--rule); }
        .asmt .btn.ghost:hover { border-color: var(--accent); color: var(--accent); background: transparent; }
        .asmt .btn[disabled] { opacity: .35; cursor: not-allowed; }
        .asmt .privacy { font-family: var(--mono); font-size: 11px; color: var(--mute); letter-spacing: .04em; margin-top: 20px; max-width: 58ch; line-height: 1.7; }
        .asmt .progress { display: flex; gap: 6px; margin-bottom: 40px; }
        .asmt .progress .seg { height: 3px; flex: 1; background: var(--rule); }
        .asmt .progress .seg.done { background: var(--accent); }
        .asmt .progress .seg.now { background: var(--accent-soft); }
        .asmt .stephead { margin-bottom: 40px; }
        .asmt .stephead .sn { font-family: var(--mono); font-size: 11px; color: var(--mute); letter-spacing: .1em; margin-bottom: 12px; }
        .asmt .stephead h2 { font-weight: 500; font-size: 34px; letter-spacing: -.02em; line-height: 1.08; margin: 0 0 10px; }
        .asmt .stephead p { font-size: 15.5px; color: var(--soft); font-family: var(--serif); margin: 0; }
        .asmt .qblock { margin-bottom: 40px; }
        .asmt .qblock .qt { font-size: 17.5px; font-weight: 500; letter-spacing: -.01em; margin-bottom: 16px; max-width: 60ch; }
        .asmt .opt { display: grid; grid-template-columns: 44px 1fr; gap: 14px; align-items: center; padding: 13px 16px; border: 1px solid var(--rule); border-top: 0; cursor: pointer; transition: background .12s ease, border-color .12s ease; background: #fff; }
        .asmt .opt:first-of-type { border-top: 1px solid var(--rule); }
        .asmt .opt:hover { background: #f3f5f1; }
        .asmt .opt .lv { font-family: var(--mono); font-size: 10.5px; color: var(--mute); letter-spacing: .08em; }
        .asmt .opt .ot { font-size: 14.5px; color: var(--soft); line-height: 1.45; }
        .asmt .opt.sel { background: var(--accent); border-color: var(--accent); }
        .asmt .opt.sel .lv { color: rgba(245,245,240,.7); }
        .asmt .opt.sel .ot { color: #f5f5f0; }
        .asmt .navrow { display: flex; justify-content: space-between; align-items: center; margin-top: 48px; padding-top: 28px; border-top: 1px solid var(--rule); }
        .asmt .navrow .hint { font-family: var(--mono); font-size: 11px; color: var(--mute); }
        /* results */
        .asmt .res-level { display: grid; grid-template-columns: 1fr max-content; gap: 32px; align-items: end; padding: 36px 0; border-top: 1.5px solid var(--ink); border-bottom: 1px solid var(--rule); margin-bottom: 8px; }
        .asmt .res-level .name { font-weight: 500; font-size: 64px; letter-spacing: -.03em; line-height: 1; color: var(--accent); }
        .asmt .res-level .score { font-family: var(--mono); font-size: 13px; color: var(--mute); text-align: right; }
        .asmt .res-level .score b { display: block; font-size: 34px; color: var(--ink); font-weight: 500; letter-spacing: -.02em; }
        .asmt .res-text { font-size: 16.5px; line-height: 1.6; color: var(--soft); max-width: 62ch; margin: 24px 0 52px; font-family: var(--serif); }
        .asmt .bars { border-top: 1.5px solid var(--ink); margin-bottom: 52px; }
        .asmt .bar-row { display: grid; grid-template-columns: 240px 1fr 64px; gap: 24px; align-items: center; padding: 16px 0; border-bottom: 1px solid var(--rule); }
        .asmt .bar-row .bn { font-size: 14.5px; font-weight: 500; }
        .asmt .bar-row .bn .bc { font-family: var(--mono); font-size: 10.5px; color: var(--accent); margin-right: 10px; letter-spacing: .1em; }
        .asmt .bar-track { height: 8px; background: var(--rule); position: relative; }
        .asmt .bar-fill { position: absolute; inset: 0 auto 0 0; background: var(--accent); }
        .asmt .bar-row .bv { font-family: var(--mono); font-size: 12px; text-align: right; color: var(--soft); }
        .asmt .rec-h { font-family: var(--mono); font-size: 10.5px; color: var(--accent); letter-spacing: .18em; text-transform: uppercase; margin-bottom: 18px; }
        .asmt .rec { display: grid; grid-template-columns: 240px 1fr; gap: 24px; padding: 20px 0; border-top: 1px solid var(--rule); }
        .asmt .rec:last-of-type { border-bottom: 1px solid var(--rule); }
        .asmt .rec .rn { font-size: 14.5px; font-weight: 500; }
        .asmt .rec .rn .rc { font-family: var(--mono); font-size: 10.5px; color: var(--accent); margin-right: 10px; letter-spacing: .1em; }
        .asmt .rec p { margin: 0; font-size: 14.5px; line-height: 1.6; color: var(--soft); max-width: 56ch; }
        .asmt .cta { background: var(--ink); color: #f5f5f0; padding: 44px 48px; margin-top: 60px; }
        .asmt .cta .lab { font-family: var(--mono); font-size: 10.5px; color: var(--accent-soft); letter-spacing: .18em; text-transform: uppercase; margin-bottom: 14px; }
        .asmt .cta h3 { font-weight: 500; font-size: 28px; letter-spacing: -.02em; margin: 0 0 12px; line-height: 1.15; }
        .asmt .cta p { color: rgba(245,245,240,.75); font-size: 15px; max-width: 56ch; margin: 0 0 24px; }
        .asmt .cta a.mail { font-family: var(--mono); font-size: 13px; border-bottom: 1px solid var(--accent-soft); padding-bottom: 2px; color: #f5f5f0; }
        .asmt .res-actions { display: flex; gap: 14px; margin-top: 36px; flex-wrap: wrap; }
        .asmt .disclaimer { font-family: var(--mono); font-size: 10.5px; color: var(--mute); line-height: 1.7; margin-top: 48px; max-width: 70ch; letter-spacing: .02em; }
        .asmt .footer { padding: 28px 64px; display: flex; justify-content: space-between; font-family: var(--mono); font-size: 11px; color: var(--mute); letter-spacing: .06em; border-top: 1px solid var(--rule); }
        /* share + benchmark */
        .asmt .share { margin-top: 48px; padding-top: 26px; border-top: 1px solid var(--rule); }
        .asmt .sh-lab { font-family: var(--mono); font-size: 10.5px; color: var(--accent); letter-spacing: .18em; text-transform: uppercase; margin-bottom: 14px; }
        .asmt .sh-btns { display: flex; gap: 12px; flex-wrap: wrap; }
        .asmt .btn.sm { padding: 10px 18px; font-size: 11.5px; }
        .asmt .bench { border: 1px solid var(--rule); border-left: 3px solid var(--accent); background: #fff; padding: 36px 40px; margin-top: 56px; }
        .asmt .bench h3 { font-weight: 500; font-size: 24px; letter-spacing: -.02em; margin: 0 0 10px; }
        .asmt .bench .b-intro { font-size: 15px; line-height: 1.55; color: var(--soft); max-width: 58ch; margin: 0 0 24px; }
        .asmt .bf-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px; }
        .asmt .bench input[type=email], .asmt .bench select { font-family: var(--sans); font-size: 14px; color: var(--ink); padding: 12px 14px; border: 1px solid var(--rule); background: var(--bg); width: 100%; box-sizing: border-box; border-radius: 0; }
        .asmt .bench input[type=email]:focus, .asmt .bench select:focus { outline: none; border-color: var(--accent); }
        .asmt .consent { display: grid; grid-template-columns: 16px 1fr; gap: 10px; font-size: 12.5px; line-height: 1.55; color: var(--soft); margin: 6px 0 20px; cursor: pointer; }
        .asmt .consent input { margin-top: 2px; accent-color: var(--accent); }
        .asmt .berr { font-family: var(--mono); font-size: 11.5px; color: #8a2f2f; margin-bottom: 14px; }
        .asmt .sample-tag { display: inline-block; font-family: var(--mono); font-size: 10px; letter-spacing: .1em; text-transform: uppercase; background: #f2ecdc; color: #7a5c1e; padding: 5px 10px; margin-bottom: 16px; }
        .asmt .bgrp { padding: 14px 0 10px; border-bottom: 1px solid var(--rule); }
        .asmt .bgrp .gname { font-size: 14px; font-weight: 500; margin-bottom: 8px; }
        .asmt .bs-row { display: grid; grid-template-columns: 160px 1fr 52px; gap: 12px; align-items: center; padding: 3px 0; }
        .asmt .bs-row .sl { font-family: var(--mono); font-size: 10px; color: var(--mute); letter-spacing: .04em; }
        .asmt .bs-track { height: 6px; background: var(--rule); position: relative; }
        .asmt .bs-fill { position: absolute; top: 0; left: 0; bottom: 0; }
        .asmt .bs-row .sv { font-family: var(--mono); font-size: 11px; text-align: right; color: var(--soft); }
        .asmt .b-wait { font-family: var(--mono); font-size: 11px; color: var(--mute); line-height: 1.7; margin: 14px 0 0; max-width: 70ch; }
        /* responses appendix */
        .asmt .print-head { display: none; }
        .asmt .responses { margin-top: 48px; }
        .asmt .resp-dim { margin-bottom: 28px; }
        .asmt .rd-name { font-size: 15px; font-weight: 600; letter-spacing: -.01em; padding-bottom: 8px; border-bottom: 1.5px solid var(--ink); margin-bottom: 4px; }
        .asmt .rd-name .rd-s { font-family: var(--mono); font-size: 11px; font-weight: 400; color: var(--accent); margin-left: 10px; }
        .asmt .qa { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; padding: 10px 0; border-bottom: 1px solid var(--rule); align-items: baseline; }
        .asmt .qa .qa-q { font-size: 13.5px; font-weight: 500; line-height: 1.45; }
        .asmt .qa .qa-a { font-size: 13px; color: var(--soft); line-height: 1.45; }
        .asmt .qa .qa-l { font-family: var(--mono); font-size: 10px; color: var(--accent); letter-spacing: .08em; margin-right: 8px; }
        @media (max-width: 768px) {
          .asmt .topbar { padding: 14px 24px; }
          .asmt .wrap { padding: 48px 24px 64px; }
          .asmt h1 { font-size: 38px; }
          .asmt .facts { grid-template-columns: repeat(2, max-content); gap: 20px 36px; }
          .asmt .dims-list .dl { grid-template-columns: 44px 1fr; }
          .asmt .dims-list .di { grid-column: 2; }
          .asmt .stephead h2 { font-size: 27px; }
          .asmt .res-level { grid-template-columns: 1fr; gap: 16px; align-items: start; }
          .asmt .res-level .name { font-size: 44px; }
          .asmt .res-level .score { text-align: left; }
          .asmt .bar-row { grid-template-columns: 1fr; gap: 8px; }
          .asmt .bar-row .bv { text-align: left; }
          .asmt .rec { grid-template-columns: 1fr; gap: 8px; }
          .asmt .cta { padding: 32px 24px; }
          .asmt .footer { padding: 24px; flex-direction: column; gap: 8px; }
          .asmt .bench { padding: 24px 20px; }
          .asmt .bf-grid { grid-template-columns: 1fr; }
          .asmt .bs-row { grid-template-columns: 112px 1fr 44px; }
        }
        @media print {
          .asmt .topbar, .asmt .res-actions, .asmt .cta, .asmt .footer, .asmt .share, .asmt .bform { display: none; }
          .asmt { background: #fff; font-size: 11px; line-height: 1.4; }
          .asmt .wrap { padding: 0; max-width: none; }
          .asmt .print-head { display: flex; justify-content: space-between; font-family: var(--mono); font-size: 9px; color: var(--mute); letter-spacing: .08em; text-transform: uppercase; border-bottom: 1px solid var(--ink); padding-bottom: 6px; margin-bottom: 14px; }
          .asmt .kicker { margin-bottom: 6px; font-size: 9px; }
          .asmt h1 { font-size: 22px !important; margin: 0 0 10px; }
          .asmt .res-level { padding: 10px 0; margin-bottom: 4px; gap: 16px; }
          .asmt .res-level .name { font-size: 26px; }
          .asmt .res-level .score b { font-size: 18px; }
          .asmt .res-level .score { font-size: 10px; }
          .asmt .res-text { font-size: 10.5px; margin: 8px 0 18px; line-height: 1.45; }
          .asmt .rec-h { margin-bottom: 8px; font-size: 9px; }
          .asmt .bars { margin-bottom: 18px; }
          .asmt .bar-row { padding: 5px 0; grid-template-columns: 180px 1fr 44px; gap: 14px; }
          .asmt .bar-row .bn { font-size: 10.5px; }
          .asmt .bar-track { height: 5px; }
          .asmt .rec { padding: 6px 0; gap: 14px; grid-template-columns: 180px 1fr; break-inside: avoid; }
          .asmt .rec .rn { font-size: 10.5px; }
          .asmt .rec p { font-size: 10px; line-height: 1.45; max-width: none; }
          .asmt .bench { border: 0; padding: 0; margin-top: 18px; }
          .asmt .bench h3 { font-size: 14px; margin-bottom: 4px; }
          .asmt .bench .b-intro { font-size: 10px; margin-bottom: 8px; }
          .asmt .sample-tag { font-size: 8px; padding: 3px 6px; margin-bottom: 8px; }
          .asmt .bgrp { padding: 5px 0 3px; break-inside: avoid; }
          .asmt .bgrp .gname { font-size: 10px; margin-bottom: 3px; }
          .asmt .bs-row { padding: 1px 0; grid-template-columns: 130px 1fr 40px; gap: 10px; }
          .asmt .bs-row .sl { font-size: 8px; }
          .asmt .bs-track { height: 4px; }
          .asmt .bs-row .sv { font-size: 9px; }
          .asmt .b-wait { font-size: 9px; margin-top: 8px; }
          .asmt .responses { display: block !important; margin-top: 18px; }
          .asmt .resp-dim { margin-bottom: 12px; break-inside: avoid; }
          .asmt .rd-name { font-size: 11px; padding-bottom: 4px; margin-bottom: 2px; }
          .asmt .rd-name .rd-s { font-size: 9px; }
          .asmt .qa { padding: 4px 0; gap: 12px; break-inside: avoid; }
          .asmt .qa .qa-q { font-size: 9.5px; }
          .asmt .qa .qa-a { font-size: 9.5px; }
          .asmt .qa .qa-l { font-size: 8px; }
          .asmt .disclaimer { font-size: 8px; margin-top: 14px; line-height: 1.5; }
        }
      `}</style>

      <div className="topbar">
        <a className="back" href="/">&larr; chatonsky<span style={{ color: 'var(--accent)' }}>.</span>com</a>
        <span className="tag">Board AI Governance Assessment</span>
      </div>

      <div className="wrap">
        {stage === -1 &&
        <div>
            <div className="kicker">A self-assessment for directors</div>
            <h1>How well does your board <span className="acc">govern AI?</span></h1>
            <p className="stand">AI is moving faster than most governance systems. This assessment measures your board’s oversight of AI across six dimensions — from strategy and risk to cost, dependency and the board’s own capability — and returns a maturity profile with priority actions.</p>
            <div className="facts">
              <div><div className="lab">Questions</div><div className="v">24</div></div>
              <div><div className="lab">Time</div><div className="v">&asymp; 6 minutes</div></div>
              <div><div className="lab">Cost</div><div className="v">None</div></div>
            </div>
            <div className="dims-list">
              {D.map((d) =>
            <div className="dl" key={d.code}>
                  <div className="dc">{d.code} &middot;</div>
                  <div className="dn">{d.name}</div>
                  <div className="di">{d.intro}</div>
                </div>
            )}
            </div>
            <button className="btn" onClick={() => { setStage(0); scrollTop(); }}>Start the assessment &rarr;</button>
            <p className="privacy">Runs in your browser. Nothing is stored or transmitted unless you choose the optional benchmark comparison at the end. Refreshing the page clears your answers.</p>
            <ShareBlock />
          </div>
        }

        {stage >= 0 && stage < D.length &&
        <div>
            <div className="progress">
              {D.map((_, i) => <div key={i} className={'seg' + (i < stage ? ' done' : i === stage ? ' now' : '')}></div>)}
            </div>
            <div className="stephead">
              <div className="sn">Section {stage + 1} of {D.length}</div>
              <h2><span style={{ color: 'var(--accent)' }}>{D[stage].code}</span> &nbsp;{D[stage].name}</h2>
              <p>{D[stage].intro}</p>
            </div>
            {D[stage].questions.map((qu, qi) =>
          <div className="qblock" key={qi}>
                <div className="qt">{qu.q}</div>
                {qu.opts.map((o, oi) =>
            <div
              key={oi}
              className={'opt' + (answers[stage + '-' + qi] === oi + 1 ? ' sel' : '')}
              onClick={() => setAns(stage, qi, oi + 1)}>
                    <span className="lv">L{oi + 1}</span>
                    <span className="ot">{o}</span>
                  </div>
            )}
              </div>
          )}
            <div className="navrow">
              <button className="btn ghost" onClick={() => { setStage(stage - 1); scrollTop(); }}>
                &larr; {stage === 0 ? 'Intro' : 'Back'}
              </button>
              <span className="hint">{answered} / {D.length * 4} answered</span>
              <button
              className="btn"
              disabled={!dimComplete(stage)}
              onClick={() => { setStage(stage + 1); scrollTop(); }}>
                {stage === D.length - 1 ? 'See results →' : 'Next →'}
              </button>
            </div>
          </div>
        }

        {stage === D.length && (() => {
          const s = overall();
          const lv = levelFor(s);
          const weak = D.map((d, i) => ({ ...d, score: dimScore(i) })).
          filter((d) => d.score < 2.75).
          sort((a, b) => a.score - b.score);
          return (
            <div>
              <div className="print-head">
                <span>Board AI Governance Assessment &middot; chatonsky.com/assessment</span>
                <span>{new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>
              <div className="kicker">Your results</div>
              <h1 style={{ fontSize: 44 }}>Board AI governance maturity</h1>
              <div className="res-level">
                <div className="name">{lv.name}</div>
                <div className="score"><b>{s.toFixed(2)}</b> out of 4.00</div>
              </div>
              <p className="res-text">{lv.text}</p>

              <div className="rec-h">Profile by dimension</div>
              <div className="bars">
                {D.map((d, i) => {
                  const ds = dimScore(i);
                  return (
                    <div className="bar-row" key={d.code}>
                      <div className="bn"><span className="bc">{d.code}</span>{d.name}</div>
                      <div className="bar-track"><div className="bar-fill" style={{ width: (ds / 4 * 100) + '%' }}></div></div>
                      <div className="bv">{ds.toFixed(2)}</div>
                    </div>);
                })}
              </div>

              {weak.length > 0 &&
              <div>
                  <div className="rec-h">Priority actions</div>
                  {weak.map((d) =>
                <div className="rec" key={d.code}>
                      <div className="rn"><span className="rc">{d.code}</span>{d.name} &middot; {d.score.toFixed(2)}</div>
                      <p>{d.action}</p>
                    </div>
                )}
                </div>
              }
              {weak.length === 0 &&
              <div>
                  <div className="rec-h">Priority actions</div>
                  <div className="rec">
                    <div className="rn">Sustain the position</div>
                    <p>No dimension scored below 2.75. The work now is maintenance under change: revisit risk appetite and assurance scope as models and regulation evolve, and re-run this assessment annually.</p>
                  </div>
                </div>
              }

              <div className="bench">
                {!BENCH_LIVE &&
                <div className="bform">
                    <div className="rec-h">Benchmark — coming</div>
                    <h3>Compare your board against others</h3>
                    <p className="b-intro">Benchmarking is coming: your results against how other directors have assessed their own boards — across all respondents, your sector, and companies of your size. Register your interest and you will be notified when it goes live.</p>
                    <a className="btn" href={'mailto:stephane@chatonsky.com?subject=' + encodeURIComponent('Board AI benchmark — register my interest') + '&body=' + encodeURIComponent('Please let me know when the benchmark comparison goes live.\n\nSector:\nAnnual revenue band:\n')}>Register your interest &rarr;</a>
                  </div>
                }
                {BENCH_LIVE && benchState !== 'done' &&
                <div className="bform">
                    <div className="rec-h">Optional — Benchmark</div>
                    <h3>How does your board compare?</h3>
                    <p className="b-intro">See your results against how other directors have assessed their own boards — across all respondents, your sector, and companies of your size. In return, your scores join the anonymous benchmark panel. Responses reflect each director’s individual perception of their board.</p>
                    <div className="bf-grid">
                      <input type="email" placeholder="Email address" value={bench.email}
                    onChange={(e) => setBench({ ...bench, email: e.target.value })} />
                      <select value={bench.sector} onChange={(e) => setBench({ ...bench, sector: e.target.value })}>
                        <option value="">Sector&hellip;</option>
                        {SECTORS.map((x) => <option key={x} value={x}>{x}</option>)}
                      </select>
                      <select value={bench.size} onChange={(e) => setBench({ ...bench, size: e.target.value })}>
                        <option value="">Annual revenue&hellip;</option>
                        {SIZES.map((x) => <option key={x} value={x}>{x}</option>)}
                      </select>
                    </div>
                    <label className="consent">
                      <input type="checkbox" checked={bench.consent}
                    onChange={(e) => setBench({ ...bench, consent: e.target.checked })} />
                      <span>I agree that my answers, email address, sector and revenue band are stored to build the benchmark panel, that I will be emailed my cohort comparison when the sample is large enough, and that individual responses are never published or shared.</span>
                    </label>
                    {benchErr && <div className="berr">{benchErr}</div>}
                    <button className="btn" disabled={benchState === 'loading'} onClick={submitBench}>
                      {benchState === 'loading' ? 'Comparing…' : 'Compare my results →'}
                    </button>
                  </div>
                }
                {benchState === 'done' && benchData && (() => {
                  const avg = (a) => a.reduce((x, y) => x + y, 0) / a.length;
                  const groups = [{ name: 'Overall', you: s, idx: -1 },
                  ...D.map((d, i) => ({ name: d.code + ' · ' + d.name, you: dimScore(i), idx: i }))];
                  const cohorts = [
                  { label: 'All respondents', data: benchData.all, color: '#c2c8c2' },
                  { label: 'Your sector', data: benchData.sector, color: 'var(--accent-soft)' },
                  { label: 'Your size', data: benchData.size, color: '#8a948d' }];
                  const allAvg = avg(benchData.all.dims);
                  const diff = s - allAvg;
                  return (
                    <div>
                      <div className="rec-h">Benchmark</div>
                      {benchData.sample && <div className="sample-tag">Sample data — preview only. Nothing was sent or stored.</div>}
                      <h3>How you compare</h3>
                      <p className="b-intro">Your board scores <b>{s.toFixed(2)}</b> — {
                      Math.abs(diff) < 0.1 ? 'in line with' :
                      diff > 0 ? diff.toFixed(2) + ' above' : Math.abs(diff).toFixed(2) + ' below'
                      } the average of {benchData.all.n} directors who have assessed their own boards.</p>
                      {groups.map((g) =>
                      <div className="bgrp" key={g.name}>
                          <div className="gname">{g.name}</div>
                          <div className="bs-row">
                            <span className="sl">You</span>
                            <div className="bs-track"><div className="bs-fill" style={{ width: g.you / 4 * 100 + '%', background: 'var(--accent)' }}></div></div>
                            <span className="sv">{g.you.toFixed(2)}</span>
                          </div>
                          {cohorts.map((c) => {
                          const ok = c.data && c.data.dims && c.data.n >= 10;
                          if (!ok) return null;
                          const v = g.idx === -1 ? avg(c.data.dims) : c.data.dims[g.idx];
                          return (
                            <div className="bs-row" key={c.label}>
                                <span className="sl">{c.label} (n={c.data.n})</span>
                                <div className="bs-track"><div className="bs-fill" style={{ width: v / 4 * 100 + '%', background: c.color }}></div></div>
                                <span className="sv">{v.toFixed(2)}</span>
                              </div>);
                        })}
                        </div>
                      )}
                      {cohorts.filter((c) => !c.data || !c.data.dims || c.data.n < 10).map((c) =>
                      <p className="b-wait" key={c.label}>{c.label}: not enough responses yet{c.data && c.data.n ? ' (' + c.data.n + ' of the 10 needed)' : ''}. You will receive this comparison by email once the panel is large enough.</p>
                      )}
                    </div>);
                })()}
              </div>

              <div className="responses" style={{ display: showResp ? 'block' : 'none' }}>
                <div className="rec-h">Your responses</div>
                {D.map((d, di) =>
                <div className="resp-dim" key={d.code}>
                    <div className="rd-name">{d.code} &middot; {d.name}<span className="rd-s">{dimScore(di).toFixed(2)} / 4.00</span></div>
                    {d.questions.map((qu, qi) => {
                    const a = answers[di + '-' + qi];
                    return (
                      <div className="qa" key={qi}>
                          <div className="qa-q">{qu.q}</div>
                          <div className="qa-a"><span className="qa-l">L{a}</span>{qu.opts[a - 1]}</div>
                        </div>);
                  })}
                  </div>
                )}
              </div>

              <div className="res-actions">
                <button className="btn ghost" onClick={() => window.print()}>Print / save as PDF</button>
                <button className="btn ghost" onClick={() => setShowResp(!showResp)}>{showResp ? 'Hide responses' : 'Show all responses'}</button>
                <button className="btn ghost" onClick={() => { resetAll(); scrollTop(); }}>Start again</button>
              </div>

              <div className="cta">
                <div className="lab">Continue the conversation</div>
                <h3>Want to work through what these results mean for your board?</h3>
                <p>I chair and serve on boards navigating exactly these questions — across healthcare, life sciences, data, software and AI. I am happy to compare notes.</p>
                <a className="mail" href="mailto:stephane@chatonsky.com?subject=Board%20AI%20Governance%20Assessment">stephane@chatonsky.com</a>
              </div>

              <ShareBlock />

              <p className="disclaimer">This assessment is general information, not legal, financial or professional advice. It reflects one practitioner’s framework for board oversight of AI and should be read alongside your own advisers’ guidance and the regulatory requirements of your jurisdictions. No answers or results are collected or stored unless you opt in to the benchmark panel, in which case your answers, email, sector and revenue band are stored securely, used only for benchmarking and follow-up about your results, and never published individually.</p>
            </div>);
        })()}
      </div>

      <div className="footer">
        <span>Stephane D. Chatonsky &middot; Board AI Governance Assessment</span>
        <span>v.01 &middot; MMXXVI</span>
      </div>
    </div>);
};

window.BoardAIAssessment = BoardAIAssessment;
