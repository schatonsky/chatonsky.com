// Option B — Institutional / classical. Restrained, trust-forward.
// Deep navy single accent. Centered masthead, classical grid.

const OptionB = () => {
  const C = window.CV;
  return (
    <div className="opt-b">
      <style>{`
        .opt-b { --bg: #ffffff; --paper: #f7f6f2; --ink: #131720; --soft: #3b4250; --mute: #7a8090; --rule: #d9dce3; --accent: #1c3556; --serif: 'Source Serif 4', Georgia, serif; --sans: 'Inter Tight', 'Inter', system-ui, sans-serif; --mono: 'JetBrains Mono', ui-monospace, monospace; background: var(--bg); color: var(--ink); font-family: var(--serif); font-size: 16px; line-height: 1.6; width: 1280px; padding: 0 0 80px; }
        .opt-b a { color: inherit; text-decoration: none; }
        .opt-b .crest { padding: 56px 0 0; text-align: center; border-bottom: 1px solid var(--rule); }
        .opt-b .crest .mark { font-family: var(--serif); font-size: 26px; letter-spacing: 0.04em; font-weight: 500; }
        .opt-b .crest .mark::before, .opt-b .crest .mark::after { content: '·'; color: var(--accent); margin: 0 18px; }
        .opt-b .crest .sub { font-family: var(--sans); font-size: 11px; letter-spacing: 0.32em; text-transform: uppercase; color: var(--mute); margin: 12px 0 28px; }
        .opt-b .crest nav { display: flex; justify-content: center; gap: 40px; padding: 18px 0; border-top: 1px solid var(--rule); font-family: var(--sans); font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--soft); }
        .opt-b .crest nav span { cursor: pointer; }
        .opt-b .container { max-width: 1080px; margin: 0 auto; padding: 0 80px; }
        .opt-b .hero { padding: 96px 0 80px; text-align: center; border-bottom: 1px solid var(--rule); }
        .opt-b .hero .eyebrow { font-family: var(--sans); font-size: 11px; letter-spacing: 0.32em; text-transform: uppercase; color: var(--accent); margin-bottom: 36px; }
        .opt-b h1 { font-family: var(--serif); font-weight: 400; font-size: 60px; line-height: 1.1; letter-spacing: -0.012em; margin: 0 auto 28px; max-width: 18ch; text-wrap: balance; }
        .opt-b .standfirst { font-size: 20px; line-height: 1.55; color: var(--soft); max-width: 60ch; margin: 0 auto; }
        .opt-b .pedigree-bar { display: flex; justify-content: center; gap: 0; padding: 24px 0; border-top: 1px solid var(--rule); border-bottom: 1px solid var(--rule); margin-top: 56px; font-family: var(--sans); font-size: 11px; letter-spacing: 0.24em; text-transform: uppercase; color: var(--soft); }
        .opt-b .pedigree-bar span { padding: 0 24px; border-right: 1px solid var(--rule); }
        .opt-b .pedigree-bar span:last-child { border-right: 0; }
        .opt-b section { padding: 80px 0; border-bottom: 1px solid var(--rule); }
        .opt-b section.alt { background: var(--paper); }
        .opt-b .head { text-align: center; margin-bottom: 56px; }
        .opt-b .head .num { font-family: var(--sans); font-size: 11px; letter-spacing: 0.32em; text-transform: uppercase; color: var(--accent); margin-bottom: 18px; }
        .opt-b .head h2 { font-family: var(--serif); font-weight: 400; font-size: 38px; line-height: 1.2; letter-spacing: -0.01em; margin: 0 auto 16px; max-width: 24ch; }
        .opt-b .head .lede { font-size: 17px; color: var(--soft); max-width: 56ch; margin: 0 auto; line-height: 1.6; }
        .opt-b .pillars { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1px; background: var(--rule); border: 1px solid var(--rule); }
        .opt-b .pillar { background: var(--bg); padding: 36px 32px; }
        .opt-b .pillar .num { font-family: var(--mono); font-size: 11px; color: var(--accent); letter-spacing: 0.16em; margin-bottom: 12px; }
        .opt-b .pillar h3 { font-family: var(--serif); font-size: 22px; font-weight: 500; margin: 0 0 12px; letter-spacing: -0.005em; }
        .opt-b .pillar p { font-size: 15px; line-height: 1.6; color: var(--soft); margin: 0; }
        .opt-b section.alt .pillar { background: var(--paper); }
        .opt-b .sectors { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--rule); border: 1px solid var(--rule); }
        .opt-b .sector { background: var(--bg); padding: 28px 24px; }
        .opt-b .sector .code { font-family: var(--mono); font-size: 11px; color: var(--accent); letter-spacing: 0.18em; margin-bottom: 12px; }
        .opt-b .sector .name { font-family: var(--serif); font-size: 21px; font-weight: 500; margin-bottom: 6px; }
        .opt-b .sector .note { font-family: var(--sans); font-size: 12.5px; color: var(--mute); line-height: 1.5; }
        .opt-b .role { display: grid; grid-template-columns: 130px 1fr 160px; gap: 32px; padding: 22px 0; border-top: 1px solid var(--rule); align-items: baseline; }
        .opt-b .role:last-child { border-bottom: 1px solid var(--rule); }
        .opt-b .role .when { font-family: var(--mono); font-size: 11px; letter-spacing: 0.06em; color: var(--mute); }
        .opt-b .role .role-label { font-family: var(--sans); font-size: 11px; color: var(--mute); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 4px; }
        .opt-b .role .org { font-family: var(--serif); font-size: 21px; font-weight: 500; line-height: 1.25; }
        .opt-b .role .org .tk { font-family: var(--mono); font-size: 11px; color: var(--accent); margin-left: 10px; letter-spacing: 0.06em; font-weight: 400; }
        .opt-b .role .note { font-size: 14.5px; color: var(--soft); margin-top: 6px; line-height: 1.55; max-width: 60ch; }
        .opt-b .role .where { font-family: var(--sans); font-size: 11px; color: var(--mute); letter-spacing: 0.08em; text-transform: uppercase; text-align: right; }
        .opt-b .creds { display: grid; grid-template-columns: 1fr 1fr; gap: 32px 56px; }
        .opt-b .cred { padding: 22px 0; border-top: 1px solid var(--rule); }
        .opt-b .cred .yr { font-family: var(--mono); font-size: 11px; color: var(--accent); letter-spacing: 0.08em; margin-bottom: 6px; }
        .opt-b .cred .t { font-family: var(--serif); font-size: 17px; font-weight: 500; }
        .opt-b .cred .n { font-size: 14px; color: var(--soft); margin-top: 6px; line-height: 1.55; }
        .opt-b .edu { display: grid; grid-template-columns: 1fr 1fr; gap: 12px 48px; }
        .opt-b .edu .item { padding: 18px 0; border-top: 1px solid var(--rule); }
        .opt-b .edu .item .s { font-family: var(--serif); font-size: 17px; font-weight: 500; }
        .opt-b .edu .item .l { font-size: 13.5px; color: var(--soft); margin-top: 4px; }
        .opt-b .contact-card { background: var(--accent); color: #fff; padding: 56px 64px; text-align: center; }
        .opt-b .contact-card .e { font-family: var(--sans); font-size: 11px; letter-spacing: 0.32em; text-transform: uppercase; color: rgba(255,255,255,0.7); margin-bottom: 24px; }
        .opt-b .contact-card h2 { font-family: var(--serif); font-weight: 400; font-size: 36px; line-height: 1.2; letter-spacing: -0.01em; margin: 0 auto 36px; max-width: 24ch; }
        .opt-b .contact-card .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: rgba(255,255,255,0.18); max-width: 880px; margin: 0 auto; }
        .opt-b .contact-card .item { background: var(--accent); padding: 24px; }
        .opt-b .contact-card .lab { font-family: var(--sans); font-size: 10.5px; letter-spacing: 0.24em; text-transform: uppercase; color: rgba(255,255,255,0.6); margin-bottom: 8px; }
        .opt-b .contact-card .val { font-family: var(--serif); font-size: 18px; }
        .opt-b .colophon { padding: 32px 0; text-align: center; font-family: var(--sans); font-size: 11px; letter-spacing: 0.24em; text-transform: uppercase; color: var(--mute); }
      `}</style>

      <header className="crest">
        <div className="mark">Stephane D. Chatonsky</div>
        <div className="sub">Board Chair · Non-Executive Director · MBA · GAICD</div>
        <nav><span>Approach</span><span>Boards</span><span>Sectors</span><span>Background</span><span>Credentials</span><span>Contact</span></nav>
      </header>

      <div className="container">
        <div className="hero">
          <div className="eyebrow">Board & Advisory Practice · Sydney · Melbourne</div>
          <h1>Capital, governance and clinical judgement at board level.</h1>
          <p className="standfirst">Thirty years across strategy, capital and governance. A decade of deep focus on healthcare, life sciences, medtech, diagnostics, digital health and AI — at chair, audit-committee and director level.</p>
          <div className="pedigree-bar"><span>McKinsey</span><span>Lazard Frères</span><span>Macquarie</span><span>LeapFrog</span><span>Wharton MBA</span></div>
        </div>

        <section>
          <div className="head">
            <div className="num">§ I — On the work</div>
            <h2>A board contribution rooted in execution, not commentary.</h2>
            <p className="lede">{C.summaryProse[0]}</p>
            <p className="lede" style={{marginTop:14}}>{C.summaryProse[1]}</p>
          </div>
        </section>

        <section className="alt">
          <div className="head">
            <div className="num">§ II — What I bring</div>
            <h2>Four pillars of board contribution.</h2>
          </div>
          <div className="pillars">
            {C.pillars.map((p,i)=>(<div key={i} className="pillar"><div className="num">0{i+1}</div><h3>{p.label}</h3><p>{p.body}</p></div>))}
          </div>
        </section>

        <section>
          <div className="head">
            <div className="num">§ III — Sectors</div>
            <h2>Where the work concentrates.</h2>
          </div>
          <div className="sectors">
            {C.sectors.map(s=>(<div className="sector" key={s.code}><div className="code">{s.code}</div><div className="name">{s.name}</div><div className="note">{s.note}</div></div>))}
          </div>
        </section>

        <RoleSection label="§ IV — Current boards & advisory" title="Active mandates today." rows={C.current} alt />
        <RoleSection label="§ V — Prior board leadership" title="Selected previous appointments." rows={C.prior} />
        <RoleSection label="§ VI — Executive history" title="Earlier executive career." rows={C.executive} alt />

        <section>
          <div className="head">
            <div className="num">§ VII — Credentials & education</div>
            <h2>Independent judgement, on the record.</h2>
          </div>
          <div className="creds">
            {C.credentials.map((c,i)=>(<div className="cred" key={i}><div className="yr">{c.from} — {c.to}</div><div className="t">{c.title}</div><div className="n">{c.note}</div></div>))}
          </div>
          <div style={{marginTop:48}}>
            <div className="num" style={{fontFamily:'var(--sans)',fontSize:11,letterSpacing:'0.24em',textTransform:'uppercase',color:'var(--accent)',marginBottom:18}}>Education</div>
            <div className="edu">
              {C.education.map((e,i)=>(<div className="item" key={i}><div className="s">{e.school}</div><div className="l">{e.line}</div></div>))}
            </div>
          </div>
        </section>
      </div>

      <div style={{padding:'0 80px',marginTop:0}}>
        <div className="contact-card">
          <div className="e">§ VIII — Enquiries</div>
          <h2>Considering a board appointment, chair role or strategic advisory engagement?</h2>
          <div className="grid">
            <div className="item"><div className="lab">Email</div><div className="val"><a href={`mailto:${C.contact.email}`} style={{color:'#fff'}}>{C.contact.email}</a></div></div>
            <div className="item"><div className="lab">LinkedIn</div><div className="val"><a href={C.contact.linkedinUrl} style={{color:'#fff'}}>{C.contact.linkedin}</a></div></div>
            <div className="item"><div className="lab">Phone</div><div className="val">{C.contact.phone}</div></div>
          </div>
        </div>
      </div>

      <div className="colophon">© MMXXVI · Stephane D. Chatonsky · All enquiries handled directly</div>
    </div>
  );
};

const RoleSection = ({ label, title, rows, alt }) => (
  <section className={alt ? 'alt' : ''}>
    <div className="head">
      <div className="num">{label}</div>
      <h2>{title}</h2>
    </div>
    <div>
      {rows.map((r,i)=>(
        <div className="role" key={i}>
          <div className="when">{r.from} — {r.to}</div>
          <div>
            <div className="role-label">{r.role}</div>
            <div className="org">{r.org}{r.ticker && <span className="tk">{r.ticker}</span>}</div>
            <div className="note">{r.note}</div>
          </div>
          <div className="where">{r.where}</div>
        </div>
      ))}
    </div>
  </section>
);

window.OptionB = OptionB;
