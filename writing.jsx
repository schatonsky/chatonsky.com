// Writing — dedicated blog & apps hub at /writing.
// Modernist / Swiss, forest green. Reuses CV.apps and CV.writings as the
// single source of truth: to add a post or a tool, edit those arrays in cv-data.jsx.

const Writing = () => {
  const C = window.CV;
  const apps = C.apps || [];
  const writings = C.writings || [];
  const talks = C.talks || [];

  return (
    <div className="opt-c wr">
      <style>{`
        .opt-c { --bg: #fafaf7; --ink: #0e1410; --soft: #3a4540; --mute: #7c857f; --rule: #e2e3df; --accent: #1f4d36; --sans: 'Inter Tight', 'Inter', system-ui, sans-serif; --serif: 'Source Serif 4', Georgia, serif; --mono: 'JetBrains Mono', ui-monospace, monospace; background: var(--bg); color: var(--ink); font-family: var(--sans); font-size: 15px; line-height: 1.55; width: 1280px; max-width: 100%; padding: 0; margin: 0 auto; }
        .opt-c a { color: inherit; text-decoration: none; }
        html { scroll-behavior: smooth; }
        .opt-c .topbar { position: sticky; top: 0; z-index: 50; background: color-mix(in oklab, var(--bg) 92%, transparent); backdrop-filter: saturate(160%) blur(8px); -webkit-backdrop-filter: saturate(160%) blur(8px); display: grid; grid-template-columns: 1fr auto; align-items: center; padding: 18px 64px; border-bottom: 1px solid var(--rule); }
        .opt-c .topbar .logo { font-family: var(--mono); font-size: 12.5px; letter-spacing: 0.06em; }
        .opt-c .topbar .logo .dot { color: var(--accent); }
        .opt-c .topbar nav { display: flex; gap: 24px; font-family: var(--mono); font-size: 12px; color: var(--soft); flex-wrap: wrap; justify-content: flex-end; }
        .opt-c .topbar nav a { color: inherit; transition: color 0.15s ease; }
        .opt-c .topbar nav a:hover { color: var(--accent); }

        .opt-c .wr-hero { padding: 96px 64px 56px; border-bottom: 1px solid var(--rule); }
        .opt-c .wr-hero .lab { font-family: var(--mono); font-size: 10.5px; color: var(--accent); letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 18px; }
        .opt-c .wr-hero h1 { font-family: var(--sans); font-weight: 500; font-size: 72px; line-height: 1.0; letter-spacing: -0.035em; margin: 0 0 24px; max-width: 15ch; }
        .opt-c .wr-hero h1 .acc { color: var(--accent); }
        .opt-c .wr-hero .stand { font-size: 19px; line-height: 1.5; max-width: 60ch; color: var(--soft); margin: 0; }

        .opt-c section { padding: 72px 64px; border-bottom: 1px solid var(--rule); display: grid; grid-template-columns: 80px 240px 1fr; gap: 32px; }
        .opt-c .sec-num { font-family: var(--mono); font-size: 11px; color: var(--mute); letter-spacing: 0.1em; }
        .opt-c .sec-head .lab { font-family: var(--mono); font-size: 10.5px; color: var(--accent); letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 14px; }
        .opt-c .sec-head h2 { font-family: var(--sans); font-weight: 500; font-size: 32px; line-height: 1.1; letter-spacing: -0.02em; margin: 0; max-width: 14ch; }

        .opt-c .appcard { border: 1px solid var(--rule); border-left: 3px solid var(--accent); background: #fff; padding: 28px 32px; margin-bottom: 24px; display: grid; grid-template-columns: 1fr max-content; gap: 24px; align-items: center; }
        .opt-c .appcard:last-child { margin-bottom: 0; }
        .opt-c .appcard .ac-lab { font-family: var(--mono); font-size: 10.5px; color: var(--accent); letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 10px; }
        .opt-c .appcard h3 { font-size: 21px; font-weight: 500; letter-spacing: -0.01em; margin: 0 0 8px; }
        .opt-c .appcard p { font-size: 14.5px; line-height: 1.6; color: var(--soft); margin: 0; max-width: 52ch; }
        .opt-c .appcard .ac-btn { font-family: var(--mono); font-size: 12px; letter-spacing: 0.08em; padding: 13px 24px; background: var(--accent); color: #f5f5f0; white-space: nowrap; transition: background 0.15s ease; }
        .opt-c .appcard .ac-btn:hover { background: #163a28; }

        .opt-c .writings { display: grid; grid-template-columns: 1fr; border-top: 1.5px solid var(--ink); }
        .opt-c .writing { display: grid; grid-template-columns: 80px 1fr 200px; gap: 28px; padding: 22px 0; border-bottom: 1px solid var(--rule); align-items: baseline; }
        .opt-c .writing .yr { font-family: var(--mono); font-size: 11px; color: var(--mute); letter-spacing: 0.06em; }
        .opt-c .writing .t { font-size: 17px; font-weight: 500; letter-spacing: -0.005em; }
        .opt-c .writing .t a { border-bottom: 1px solid var(--accent); padding-bottom: 1px; }
        .opt-c .writing .t a:hover { color: var(--accent); }
        .opt-c .writing .o { font-family: var(--mono); font-size: 10.5px; color: var(--mute); letter-spacing: 0.12em; text-transform: uppercase; text-align: right; }

        .opt-c .footer { padding: 28px 64px; display: flex; justify-content: space-between; font-family: var(--mono); font-size: 11px; color: var(--mute); letter-spacing: 0.06em; }
        .opt-c .footer a:hover { color: var(--accent); }

        @media (max-width: 768px) {
          .opt-c { width: 100%; }
          .opt-c .topbar { padding: 14px 24px; }
          .opt-c .topbar nav { gap: 14px; font-size: 11px; }
          .opt-c .wr-hero { padding: 56px 24px 40px; }
          .opt-c .wr-hero h1 { font-size: 40px; }
          .opt-c .wr-hero .stand { font-size: 17px; }
          .opt-c section { grid-template-columns: 1fr; gap: 20px; padding: 48px 24px; }
          .opt-c .appcard { grid-template-columns: 1fr; padding: 22px 20px; gap: 18px; }
          .opt-c .appcard .ac-btn { justify-self: start; }
          .opt-c .writing { grid-template-columns: 1fr; gap: 6px; }
          .opt-c .writing .o { text-align: left; }
          .opt-c .footer { padding: 24px; flex-direction: column; gap: 8px; }
        }
      `}</style>

      <div className="topbar">
        <div className="logo">SC<span className="dot">.</span> / writings</div>
        <nav>
          <a href="/">← chatonsky.com</a>
          <a href="#writings">Writings</a>
          {talks.length > 0 && <a href="#talks">Talks</a>}
          <a href="#things">Things</a>
          <a href="/#enquiries">Contact</a>
        </nav>
      </div>

      <div className="wr-hero">
        <div className="lab">Writings, Talks &amp; Things</div>
        <h1>What I write, say <span className="acc">and build.</span></h1>
        <p className="stand">A running index of long-form essays and commentary on governance, capital and AI — alongside talks and practical tools for directors.</p>
      </div>

      <section id="writings">
        <div className="sec-num">01</div>
        <div className="sec-head"><div className="lab">Writings</div><h2>Essays &amp; commentary.</h2></div>
        <div>
          <div className="writings">
            {writings.map((w, i) =>
              <div key={i} className="writing">
                <div className="yr">{w.date}</div>
                <div className="t"><a href={w.url} target="_blank" rel="noopener">{w.title}</a></div>
                <div className="o">{w.outlet}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {talks.length > 0 &&
      <section id="talks">
        <div className="sec-num">02</div>
        <div className="sec-head"><div className="lab">Talks</div><h2>Panels &amp; presentations.</h2></div>
        <div>
          <div className="writings">
            {talks.map((t, i) =>
              <div key={i} className="writing">
                <div className="yr">{t.date}</div>
                <div className="t">{t.url ? <a href={t.url} target="_blank" rel="noopener">{t.title}</a> : t.title}</div>
                <div className="o">{t.venue}</div>
              </div>
            )}
          </div>
        </div>
      </section>}

      <section id="things">
        <div className="sec-num">{talks.length > 0 ? '03' : '02'}</div>
        <div className="sec-head"><div className="lab">Things</div><h2>Tools built for boards and education.</h2></div>
        <div>
          {apps.length === 0 && <p style={{ color: 'var(--mute)', fontFamily: 'var(--serif)' }}>More tools coming soon.</p>}
          {apps.map((a, i) =>
            <div className="appcard" key={i}>
              <div>
                <div className="ac-lab">Thing / {a.code}{a.tag ? ' · ' + a.tag : ''}</div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
              <a className="ac-btn" href={a.url} {...(a.url && a.url.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {})}>{(a.cta || 'Open')} &rarr;</a>
            </div>
          )}
        </div>
      </section>

      <div className="footer">
        <span>Stephane D. Chatonsky</span>
        <span><a href="/">chatonsky.com</a> · v.04.26 · MMXXVI</span>
      </div>
    </div>
  );
};

window.Writing = Writing;
