// Option C — Modernist / Swiss. Generous whitespace, sans + mono.
// Forest green accent. Stripe / Linear sensibility. Strong grid, asymmetric.

const OptionC = () => {
  const C = window.CV;
  return (
    <div className="opt-c">
      <style>{`
        .opt-c { --bg: #fafaf7; --ink: #0e1410; --soft: #3a4540; --mute: #7c857f; --rule: #e2e3df; --accent: #1f4d36; --sans: 'Inter Tight', 'Inter', system-ui, sans-serif; --serif: 'Source Serif 4', Georgia, serif; --mono: 'JetBrains Mono', ui-monospace, monospace; background: var(--bg); color: var(--ink); font-family: var(--sans); font-size: 15px; line-height: 1.55; width: 1280px; padding: 0; }
        .opt-c a { color: inherit; text-decoration: none; }
        .opt-c section[id], .opt-c .contact[id] { scroll-margin-top: 80px; }
        html { scroll-behavior: smooth; }
        .opt-c .topbar { position: sticky; top: 0; z-index: 50; background: color-mix(in oklab, var(--bg) 92%, transparent); backdrop-filter: saturate(160%) blur(8px); -webkit-backdrop-filter: saturate(160%) blur(8px); display: grid; grid-template-columns: 1fr auto; align-items: center; padding: 18px 64px; border-bottom: 1px solid var(--rule); }
        .opt-c .topbar .logo { font-family: var(--mono); font-size: 12.5px; letter-spacing: 0.06em; }
        .opt-c .topbar .logo .dot { color: var(--accent); }
        .opt-c .topbar nav { display: flex; gap: 24px; font-family: var(--mono); font-size: 12px; color: var(--soft); flex-wrap: wrap; justify-content: flex-end; }
        .opt-c .topbar nav a { color: inherit; transition: color 0.15s ease; }
        .opt-c .topbar nav a:hover { color: var(--accent); }
        .opt-c .topbar nav .av { color: var(--accent); }
        .opt-c .topbar nav .av::before { content: '●'; margin-right: 6px; font-size: 9px; vertical-align: 2px; }
        .opt-c .hero { padding: 120px 64px 96px; display: grid; grid-template-columns: 80px 1fr 280px; gap: 48px; border-bottom: 1px solid var(--rule); align-items: start; }
        .opt-c .hero .gut { font-family: var(--mono); font-size: 11px; color: var(--mute); letter-spacing: 0.08em; }
        .opt-c .portrait { position: relative; width: 280px; aspect-ratio: 4/5; border: 1px solid var(--rule); overflow: hidden; background: var(--bg); }
        .opt-c .portrait img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: grayscale(0.08) contrast(1.02); }
        .opt-c .portrait .corner { position: absolute; font-family: var(--mono); font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(255,255,255,0.85); text-shadow: 0 1px 2px rgba(0,0,0,0.35); z-index: 2; }
        .opt-c .portrait .tl { top: 12px; left: 14px; }
        .opt-c .portrait .tr { top: 12px; right: 14px; }
        .opt-c .portrait .bl { bottom: 12px; left: 14px; }
        .opt-c .portrait .br { bottom: 12px; right: 14px; color: #6fb593; }
        .opt-c .portrait::after { content: ''; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0) 22%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.32) 100%); pointer-events: none; }
        .opt-c .hero h1 { font-family: var(--sans); font-weight: 500; font-size: 96px; line-height: 0.98; letter-spacing: -0.04em; margin: 0 0 32px; max-width: 16ch; }
        .opt-c .hero h1 .acc { color: var(--accent); }
        .opt-c .hero .stand { font-size: 19px; line-height: 1.5; max-width: 56ch; color: var(--soft); margin: 0 0 36px; font-weight: 400; }
        .opt-c .hero .meta { display: grid; grid-template-columns: repeat(4, max-content); gap: 48px; padding-top: 32px; border-top: 1px solid var(--rule); margin-top: 32px; }
        .opt-c .hero .meta .lab { font-family: var(--mono); font-size: 10.5px; color: var(--mute); letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 8px; }
        .opt-c .hero .meta .v { font-family: var(--sans); font-size: 15px; font-weight: 500; }
        .opt-c section { padding: 96px 64px; border-bottom: 1px solid var(--rule); display: grid; grid-template-columns: 80px 240px 1fr; gap: 32px; }
        .opt-c .sec-num { font-family: var(--mono); font-size: 11px; color: var(--mute); letter-spacing: 0.1em; }
        .opt-c .sec-head { }
        .opt-c .sec-head .lab { font-family: var(--mono); font-size: 10.5px; color: var(--accent); letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 14px; }
        .opt-c .sec-head h2 { font-family: var(--sans); font-weight: 500; font-size: 32px; line-height: 1.1; letter-spacing: -0.02em; margin: 0; max-width: 14ch; }
        .opt-c .body { max-width: 720px; }
        .opt-c .body p { margin: 0 0 16px; max-width: 60ch; font-size: 16px; line-height: 1.6; color: var(--soft); }
        .opt-c .body p.lead { font-size: 19px; color: var(--ink); }
        .opt-c .pillars { display: grid; grid-template-columns: 1fr 1fr; gap: 36px 48px; }
        .opt-c .pillar { padding-top: 18px; border-top: 1.5px solid var(--ink); }
        .opt-c .pillar .num { font-family: var(--mono); font-size: 10.5px; color: var(--accent); letter-spacing: 0.16em; margin-bottom: 10px; }
        .opt-c .pillar h3 { font-size: 18px; font-weight: 600; margin: 0 0 10px; letter-spacing: -0.01em; }
        .opt-c .pillar p { font-size: 14.5px; line-height: 1.6; color: var(--soft); margin: 0; max-width: 42ch; }
        .opt-c .sectors { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1.5px solid var(--ink); }
        .opt-c .sector { padding: 24px 24px 28px; border-right: 1px solid var(--rule); border-bottom: 1px solid var(--rule); }
        .opt-c .sector:nth-child(3n) { border-right: 0; }
        .opt-c .sector:nth-last-child(-n+3) { border-bottom: 0; }
        .opt-c .sector .code { font-family: var(--mono); font-size: 10.5px; color: var(--accent); letter-spacing: 0.18em; margin-bottom: 10px; }
        .opt-c .sector .name { font-size: 19px; font-weight: 500; margin-bottom: 6px; letter-spacing: -0.01em; }
        .opt-c .sector .note { font-family: var(--mono); font-size: 11.5px; color: var(--mute); line-height: 1.55; }
        .opt-c .row { display: grid; grid-template-columns: 110px 1fr 130px; gap: 28px; padding: 18px 0; border-top: 1px solid var(--rule); align-items: baseline; }
        .opt-c .row:first-of-type { border-top: 1.5px solid var(--ink); }
        .opt-c .row:last-of-type { border-bottom: 1.5px solid var(--ink); }
        .opt-c .row .when { font-family: var(--mono); font-size: 11px; color: var(--mute); letter-spacing: 0.06em; }
        .opt-c .row .role-l { font-family: var(--mono); font-size: 10.5px; color: var(--mute); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 4px; }
        .opt-c .row .org { font-size: 19px; font-weight: 500; letter-spacing: -0.01em; line-height: 1.25; }
        .opt-c .row .org .tk { font-family: var(--mono); font-size: 11px; color: var(--accent); margin-left: 10px; letter-spacing: 0.06em; font-weight: 400; }
        .opt-c .row .note { font-size: 14.5px; color: var(--soft); margin-top: 6px; line-height: 1.55; max-width: 60ch; font-family: var(--serif); }
        .opt-c .row .where { font-family: var(--mono); font-size: 10.5px; color: var(--mute); letter-spacing: 0.06em; text-align: right; }
        .opt-c .creds { display: grid; grid-template-columns: 1fr 1fr; gap: 0 56px; border-top: 1.5px solid var(--ink); }
        .opt-c .cred { padding: 22px 0; border-bottom: 1px solid var(--rule); }
        .opt-c .cred .yr { font-family: var(--mono); font-size: 11px; color: var(--accent); letter-spacing: 0.06em; margin-bottom: 6px; }
        .opt-c .cred .t { font-size: 16px; font-weight: 500; letter-spacing: -0.005em; }
        .opt-c .cred .n { font-size: 13.5px; color: var(--soft); margin-top: 6px; line-height: 1.55; max-width: 50ch; font-family: var(--serif); }
        .opt-c .edu { display: grid; grid-template-columns: 1fr 1fr; gap: 0 56px; border-top: 1.5px solid var(--ink); margin-top: 48px; }
        .opt-c .edu .item { padding: 18px 0; border-bottom: 1px solid var(--rule); }
        .opt-c .edu .item .s { font-size: 16px; font-weight: 500; letter-spacing: -0.005em; }
        .opt-c .edu .item .l { font-size: 13px; color: var(--soft); margin-top: 4px; font-family: var(--serif); }
        .opt-c .writings { display: grid; grid-template-columns: 1fr; border-top: 1.5px solid var(--ink); }
        .opt-c .writing { display: grid; grid-template-columns: 80px 1fr 200px; gap: 28px; padding: 22px 0; border-bottom: 1px solid var(--rule); align-items: baseline; }
        .opt-c .writing .yr { font-family: var(--mono); font-size: 11px; color: var(--mute); letter-spacing: 0.06em; }
        .opt-c .writing .t { font-size: 17px; font-weight: 500; letter-spacing: -0.005em; }
        .opt-c .writing .t a { border-bottom: 1px solid var(--accent); padding-bottom: 1px; }
        .opt-c .writing .o { font-family: var(--mono); font-size: 10.5px; color: var(--mute); letter-spacing: 0.12em; text-transform: uppercase; text-align: right; }
        .opt-c .contact { background: var(--ink); color: #f5f5f0; padding: 96px 64px; display: grid; grid-template-columns: 80px 1fr; gap: 32px; }
        .opt-c .contact .gut { font-family: var(--mono); font-size: 11px; color: rgba(245,245,240,0.55); letter-spacing: 0.1em; }
        .opt-c .contact .lab { font-family: var(--mono); font-size: 10.5px; color: var(--accent); letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 14px; }
        .opt-c .contact h2 { font-family: var(--sans); font-weight: 500; font-size: 56px; line-height: 1.05; letter-spacing: -0.03em; margin: 0 0 48px; max-width: 22ch; color: #f5f5f0; }
        .opt-c .contact h2 .acc { color: #6fb593; }
        .opt-c .contact .ch-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; max-width: 920px; border-top: 1px solid rgba(245,245,240,0.18); }
        .opt-c .contact .ch { padding: 24px 0; padding-right: 32px; }
        .opt-c .contact .ch-lab { font-family: var(--mono); font-size: 10.5px; color: rgba(245,245,240,0.55); letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 10px; }
        .opt-c .contact .ch-val { font-size: 19px; font-weight: 500; letter-spacing: -0.01em; }
        .opt-c .contact .ch-val a { border-bottom: 1px solid #6fb593; padding-bottom: 1px; }
        .opt-c .footer { padding: 28px 64px; display: flex; justify-content: space-between; font-family: var(--mono); font-size: 11px; color: var(--mute); letter-spacing: 0.06em; border-top: 1px solid var(--rule); }
      `}</style>

      <div className="topbar">
        <div className="logo"></div>
        <nav>
          <a href="#approach">Approach</a><a href="#what-i-bring">What I bring</a><a href="#sectors">Sectors</a><a href="#current">Current</a><a href="#prior">Prior</a><a href="#background">Background</a><a href="#credentials">Credentials</a><a href="#writings">Writings</a><a href="#enquiries">Contact</a>
        </nav>
      </div>

      <div className="hero">
        <div className="gut">001</div>
        <div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 36 }}>
            Board Chair · NED · Adviser
          </div>
          <h1>Capital and governance,<br /><span className="acc">at the level of the work.</span></h1>
          <p className="stand">Thirty years across strategy, capital and governance. A decade focused on growth-stage healthcare, life sciences, medtech, diagnostics, digital health, data, software and AI. Independent. Commercially direct. Analytically rigorous.</p>
          <div className="meta">
            <div><div className="lab">Pedigree</div><div className="v">McKinsey · Lazard · Macquarie</div></div>
            <div><div className="lab">Education</div><div className="v">Wharton MBA · ESSEC</div></div>
            <div><div className="lab">Director</div><div className="v">GAICD · 2007</div></div>
            <div><div className="lab">Based</div><div className="v">Sydney</div></div>
            <div><div className="lab">Operates</div><div className="v">Australia · Asia</div></div>
          </div>
        </div>
        <figure className="portrait" style={{ margin: 0 }}>
          <img src="assets/portrait.jpg" alt="Stephane D. Chatonsky" />
          <span className="corner tl"></span>
          <span className="corner tr"></span>
          <span className="corner bl"></span>
          <span className="corner br">● live</span>
        </figure>
      </div>

      <section id="approach">
        <div className="sec-num">002</div>
        <div className="sec-head"><div className="lab">Approach</div><h2>A board contribution rooted in execution.</h2></div>
        <div className="body">
          {C.summaryProse.map((p, i) => <p key={i} className={i === 0 ? 'lead' : ''}>{p}</p>)}
          <p>Track record: <span style={{ color: 'var(--ink)' }}>4Cyte Pathology</span> from concept to {'>'}$600m revenue; <span style={{ color: 'var(--ink)' }}>Prospection</span> through $65m across two rounds and into the US and Japan; <span style={{ color: 'var(--ink)' }}>Genetic Signatures</span> through CEO transition and two raises; advising <span style={{ color: 'var(--ink)' }}>Heidi</span>, used by 370,000 clinicians in 10 million consultations per month.</p>
        </div>
      </section>

      <section id="what-i-bring">
        <div className="sec-num">003</div>
        <div className="sec-head"><div className="lab">What I bring</div><h2>Four pillars.</h2></div>
        <div className="pillars">
          {C.pillars.map((p, i) => <div key={i} className="pillar"><div className="num">P / 0{i + 1}</div><h3>{p.label}</h3><p>{p.body}</p></div>)}
        </div>
      </section>

      <section id="sectors">
        <div className="sec-num">004</div>
        <div className="sec-head"><div className="lab">Sectors</div><h2>Where the work concentrates.</h2></div>
        <div className="sectors">
          {C.sectors.map((s) => <div className="sector" key={s.code}><div className="code">{s.code} ·</div><div className="name">{s.name}</div><div className="note">{s.note}</div></div>)}
        </div>
      </section>

      {[
      { n: '005', id: 'current', l: 'Current', t: 'Boards & advisory · today.', rows: C.current },
      { n: '006', id: 'prior', l: 'Prior', t: 'Selected previous boards and advisory roles.', rows: C.prior },
      { n: '007', id: 'background', l: 'Background', t: 'Earlier executive career.', rows: C.executive }].
      map((s) =>
      <section key={s.n} id={s.id}>
          <div className="sec-num">{s.n}</div>
          <div className="sec-head"><div className="lab">{s.l}</div><h2>{s.t}</h2></div>
          <div>
            {s.rows.map((r, i) =>
          <div className="row" key={i}>
                <div className="when">{r.from}<br />{r.to}</div>
                <div>
                  <div className="role-l">{r.role}</div>
                  <div className="org">{r.org}{r.ticker && <span className="tk">{r.ticker}</span>}</div>
                  <div className="note">{r.note}</div>
                </div>
                <div className="where">{r.where}</div>
              </div>
          )}
          </div>
        </section>
      )}

      <section id="credentials">
        <div className="sec-num">008</div>
        <div className="sec-head"><div className="lab">Credentials</div><h2>Independent judgement, on the record.</h2></div>
        <div>
          <div className="creds">
            {C.credentials.map((c, i) => <div key={i} className="cred"><div className="yr">{c.from} — {c.to}</div><div className="t">{c.title}</div><div className="n">{c.note}</div></div>)}
          </div>
          <div className="edu">
            {C.education.map((e, i) => <div key={i} className="item"><div className="s">{e.school}</div><div className="l">{e.line}</div></div>)}
          </div>
        </div>
      </section>

      <section id="writings">
        <div className="sec-num">009</div>
        <div className="sec-head"><div className="lab">Writings</div><h2>Selected articles and commentary.</h2></div>
        <div>
          <div className="writings">
            {C.writings.map((w, i) =>
            <div key={i} className="writing">
                <div className="yr">{w.date}</div>
                <div className="t"><a href={w.url} target="_blank" rel="noopener">{w.title}</a></div>
                <div className="o">{w.outlet}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="contact" id="enquiries">
        <div className="gut">010</div>
        <div>
          <div className="lab">CONTACT</div>
          <h2>Considering a board appointment or <span className="acc">strategic advisory</span> engagement?</h2>
          <div className="ch-grid">
            <div className="ch"><div className="ch-lab">Email</div><div className="ch-val"><a href={`mailto:${C.contact.email}`} style={{ color: '#f5f5f0' }}>{C.contact.email}</a></div></div>
            <div className="ch"><div className="ch-lab">LinkedIn</div><div className="ch-val"><a href={C.contact.linkedinUrl} style={{ color: '#f5f5f0' }}>{C.contact.linkedin}</a></div></div>
            <div className="ch"><div className="ch-lab">Phone</div><div className="ch-val">{C.contact.phone}</div></div>
          </div>
        </div>
      </div>

      <div className="footer">
        <span>Stephane D. Chatonsky</span>
        <span>v.04.26 · MMXXVI</span>
      </div>
    </div>);

};

window.OptionC = OptionC;