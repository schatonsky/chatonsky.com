// Option A — Editorial / serif-led. Quality publication tone.

const OptionA = () => {
  const C = window.CV;
  return (
    <div className="opt-a">
      <style>{`
        .opt-a { box-sizing: border-box; background: var(--bg, #f6f1e7); color: var(--ink, #1a1612); font-family: var(--serif, 'Source Serif 4', Georgia, serif); font-size: 17px; line-height: 1.55; width: 1280px; padding: 72px 96px 110px; }
        .opt-a *, .opt-a *::before, .opt-a *::after { box-sizing: border-box; }
        .opt-a a { color: inherit; text-decoration: none; }
        .opt-a .top { display: flex; justify-content: space-between; align-items: baseline; padding-bottom: 22px; border-bottom: 1.5px solid var(--ink); font-family: var(--sans, 'Inter', system-ui, sans-serif); font-size: 11.5px; letter-spacing: 0.2em; text-transform: uppercase; }
        .opt-a .top .name { font-weight: 600; letter-spacing: 0.16em; }
        .opt-a .top nav { display: flex; gap: 28px; color: var(--mute, #847a72); }
        .opt-a .dateline { margin: 56px 0 14px; font-family: var(--sans); font-size: 11px; letter-spacing: 0.24em; text-transform: uppercase; color: var(--accent, #6b1d1d); }
        .opt-a h1 { font-weight: 400; font-size: 78px; line-height: 1.0; letter-spacing: -0.022em; margin: 0 0 26px; max-width: 14ch; text-wrap: balance; }
        .opt-a h1 em { font-style: italic; color: var(--accent); font-weight: 400; }
        .opt-a .standfirst { font-size: 22px; line-height: 1.4; color: var(--soft, #4a423d); max-width: 36ch; margin: 0; font-style: italic; font-weight: 300; }
        .opt-a .hero { display: grid; grid-template-columns: 1fr 320px; gap: 56px; padding-bottom: 48px; border-bottom: 1px solid var(--rule, #d9cfc1); }
        .opt-a .portrait { width: 320px; height: 400px; background: repeating-linear-gradient(135deg, #e8dfd0 0 12px, #ece4d6 12px 24px); border: 1px solid var(--rule); display: flex; align-items: flex-end; padding: 14px; font-family: var(--mono, 'JetBrains Mono', monospace); font-size: 10px; color: var(--mute); letter-spacing: 0.1em; }
        .opt-a .pull { margin-top: 24px; padding-top: 18px; border-top: 1px solid var(--rule); font-style: italic; font-size: 17px; line-height: 1.4; color: var(--ink); max-width: 28ch; }
        .opt-a .pull::before { content: '\\201C'; color: var(--accent); }
        .opt-a .pull::after { content: '\\201D'; color: var(--accent); }
        .opt-a section { padding: 56px 0; border-bottom: 1px solid var(--rule); }
        .opt-a .grid { display: grid; grid-template-columns: 200px 1fr; gap: 48px; }
        .opt-a .kicker { font-family: var(--sans); font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--mute); font-weight: 600; }
        .opt-a .stitle { font-size: 13px; font-weight: 600; margin-top: 6px; font-variant: small-caps; letter-spacing: 0.04em; }
        .opt-a h2 { font-weight: 400; font-size: 32px; line-height: 1.2; letter-spacing: -0.01em; margin: 0 0 22px; max-width: 30ch; }
        .opt-a p { margin: 0 0 16px; max-width: 60ch; }
        .opt-a p.lead { font-size: 19px; line-height: 1.5; }
        .opt-a .pillars { display: grid; grid-template-columns: 1fr 1fr; gap: 32px 48px; margin-top: 8px; }
        .opt-a .pillar h3 { font-family: var(--sans); font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent); margin: 0 0 10px; }
        .opt-a .pillar p { font-size: 15.5px; color: var(--soft); margin: 0; line-height: 1.55; }
        .opt-a .sectors { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--rule); border: 1px solid var(--rule); }
        .opt-a .sector { background: var(--paper, #fbf8f2); padding: 22px 20px; }
        .opt-a .sector .c { font-family: var(--mono); font-size: 10px; color: var(--accent); letter-spacing: 0.18em; margin-bottom: 8px; }
        .opt-a .sector .n { font-size: 19px; line-height: 1.2; margin-bottom: 6px; }
        .opt-a .sector .nt { font-family: var(--sans); font-size: 12px; color: var(--mute); line-height: 1.45; }
        .opt-a .row { display: grid; grid-template-columns: 100px 1fr 130px; gap: 24px; padding: 18px 0; border-top: 1px solid var(--rule); align-items: baseline; }
        .opt-a .row:last-child { border-bottom: 1px solid var(--rule); }
        .opt-a .row .when { font-family: var(--mono); font-size: 11px; color: var(--mute); letter-spacing: 0.04em; }
        .opt-a .row .role { font-family: var(--sans); font-size: 11px; color: var(--mute); letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 4px; }
        .opt-a .row .org { font-size: 21px; line-height: 1.25; }
        .opt-a .row .org .tk { font-size: 11px; font-family: var(--mono); color: var(--accent); margin-left: 8px; letter-spacing: 0.06em; }
        .opt-a .row .note { font-size: 14.5px; color: var(--soft); line-height: 1.5; margin-top: 6px; max-width: 56ch; }
        .opt-a .row .where { font-family: var(--sans); font-size: 11px; color: var(--mute); letter-spacing: 0.06em; text-align: right; text-transform: uppercase; }
        .opt-a .creds { padding: 0; margin: 0; list-style: none; }
        .opt-a .creds li { padding: 14px 0; border-top: 1px solid var(--rule); display: grid; grid-template-columns: 1fr 110px; gap: 24px; }
        .opt-a .creds li:last-child { border-bottom: 1px solid var(--rule); }
        .opt-a .creds .t { font-size: 17px; }
        .opt-a .creds .n { font-size: 14px; color: var(--soft); margin-top: 4px; max-width: 60ch; line-height: 1.5; }
        .opt-a .creds .yr { font-family: var(--mono); font-size: 11px; color: var(--mute); letter-spacing: 0.04em; text-align: right; }
        .opt-a .edu { padding: 0; margin: 0; list-style: none; }
        .opt-a .edu li { padding: 14px 0; border-top: 1px solid var(--rule); }
        .opt-a .edu li:last-child { border-bottom: 1px solid var(--rule); }
        .opt-a .edu .s { font-size: 17px; }
        .opt-a .edu .l { font-size: 14px; color: var(--soft); margin-top: 4px; }
        .opt-a .contact { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--rule); border: 1px solid var(--rule); margin-top: 8px; }
        .opt-a .contact > div { background: var(--paper); padding: 22px; }
        .opt-a .contact .lab { font-family: var(--sans); font-size: 10.5px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--mute); margin-bottom: 8px; }
        .opt-a .contact .val { font-size: 19px; }
        .opt-a .contact .val a { border-bottom: 1px solid var(--accent); padding-bottom: 1px; }
        .opt-a .colophon { margin-top: 48px; padding-top: 22px; border-top: 1.5px solid var(--ink); display: flex; justify-content: space-between; font-family: var(--sans); font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--mute); }
      `}</style>

      <div className="top">
        <div className="name">Stephane D. Chatonsky · Board & Advisory</div>
        <nav><span>Approach</span><span>Boards</span><span>Sectors</span><span>Background</span><span>Contact</span></nav>
      </div>

      <div className="dateline">A Board Profile · April 2026</div>

      <div className="hero">
        <div>
          <h1>Board Chair and Non-Executive Director — for <em>healthcare, life sciences and AI</em>.</h1>
          <p className="standfirst">Thirty years across strategy, capital and governance. A decade focused on healthcare, life sciences, medtech, diagnostics, digital health and AI.</p>
        </div>
        <div>
          <div className="portrait">[ portrait — to come ]</div>
          <div className="pull">Capital markets credibility brought to governance — not just oversight.</div>
        </div>
      </div>

      <section>
        <div className="grid">
          <div><div className="kicker">§ 01</div><div className="stitle">On the work</div></div>
          <div>
            <h2>A board contribution rooted in execution, not commentary.</h2>
            {C.summaryProse.map((p,i)=><p key={i} className={i===0?'lead':''}>{p}</p>)}
            <p style={{color:'var(--soft)'}}>Track record: guiding <strong>4Cyte Pathology</strong> from concept to more than $600m annual revenue; chairing <strong>Prospection</strong> through $65m across two rounds and expansion into the United States and Japan; currently serving on ASX-listed and growth-stage boards across microbiome diagnostics, neurotech and clinical trials, and advising <strong>Heidi</strong>, an AI healthtech platform used by 370,000 clinicians.</p>
            <p className="kicker" style={{marginTop:24}}>{C.pedigreeLine}</p>
          </div>
        </div>
      </section>

      <section>
        <div className="grid">
          <div><div className="kicker">§ 02</div><div className="stitle">What I bring</div></div>
          <div className="pillars">
            {C.pillars.map((p,i)=>(<div key={i} className="pillar"><h3>— {p.label}</h3><p>{p.body}</p></div>))}
          </div>
        </div>
      </section>

      <section>
        <div className="grid">
          <div><div className="kicker">§ 03</div><div className="stitle">Sectors</div></div>
          <div className="sectors">
            {C.sectors.map(s=>(<div key={s.code} className="sector"><div className="c">— {s.code}</div><div className="n">{s.name}</div><div className="nt">{s.note}</div></div>))}
          </div>
        </div>
      </section>

      <Roles label="§ 04" title="Current boards & advisory" rows={C.current} />
      <Roles label="§ 05" title="Prior board leadership" rows={C.prior} />
      <Roles label="§ 06" title="Executive history" rows={C.executive} />

      <section>
        <div className="grid">
          <div><div className="kicker">§ 07</div><div className="stitle">Differentiated credentials</div></div>
          <ul className="creds">
            {C.credentials.map((c,i)=>(<li key={i}><div><div className="t">{c.title}</div><div className="n">{c.note}</div></div><div className="yr">{c.from} — {c.to}</div></li>))}
          </ul>
        </div>
      </section>

      <section>
        <div className="grid">
          <div><div className="kicker">§ 08</div><div className="stitle">Education</div></div>
          <ul className="edu">
            {C.education.map((e,i)=>(<li key={i}><div className="s">{e.school}</div><div className="l">{e.line}</div></li>))}
          </ul>
        </div>
      </section>

      <section>
        <div className="grid">
          <div><div className="kicker">§ 09</div><div className="stitle">Enquiries</div></div>
          <div>
            <h2 style={{maxWidth:'24ch'}}>Considering a board appointment, chair role or strategic advisory engagement?</h2>
            <p style={{color:'var(--soft)', maxWidth:'48ch'}}>Direct contact preferred. Discretion assured.</p>
            <div className="contact">
              <div><div className="lab">Email</div><div className="val"><a href={`mailto:${C.contact.email}`}>{C.contact.email}</a></div></div>
              <div><div className="lab">LinkedIn</div><div className="val"><a href={C.contact.linkedinUrl}>{C.contact.linkedin}</a></div></div>
              <div><div className="lab">Phone</div><div className="val">{C.contact.phone}</div></div>
            </div>
          </div>
        </div>
      </section>

      <div className="colophon">
        <span>Stephane D. Chatonsky · MBA, GAICD</span>
        <span>Sydney · Melbourne · MMXXVI</span>
      </div>
    </div>
  );
};

const Roles = ({ label, title, rows }) => (
  <section>
    <div className="grid">
      <div><div className="kicker">{label}</div><div className="stitle">{title}</div></div>
      <div>
        {rows.map((r,i)=>(
          <div className="row" key={i}>
            <div className="when">{r.from}<br/>— {r.to}</div>
            <div>
              <div className="role">{r.role}</div>
              <div className="org">{r.org}{r.ticker && <span className="tk">{r.ticker}</span>}</div>
              <div className="note">{r.note}</div>
            </div>
            <div className="where">{r.where}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

window.OptionA = OptionA;
