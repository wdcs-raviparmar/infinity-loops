// Temporary /theme comparison page. To remove it: delete this folder, the `/theme` branch in
// client/src/main.jsx and the `/theme` route in server/app.js.
import { lazy, Suspense, useEffect, useState } from 'react';
import { themes, groups, cssVars, cssBlock } from './themes.js';
import './theme.css';

const App = lazy(() => import('../App.jsx'));
const readId = () => new URLSearchParams(location.search).get('t');

function useCopy() {
  const [copied, setCopied] = useState('');
  return [copied, async (id, text) => {
    try { await navigator.clipboard.writeText(text); } catch {
      const area = Object.assign(document.createElement('textarea'), { value: text });
      document.body.appendChild(area); area.select(); document.execCommand('copy'); area.remove();
    }
    setCopied(id);
    setTimeout(() => setCopied(''), 1600);
  }];
}

function Mock({ theme }) {
  const gradient = `tp-g-${theme.id}`;
  return <div className="tp-mock">
    <div className="tp-nav"><b><i className="tp-logo" /> Infinity Loops</b><span className="tp-pill">Let’s talk</span></div>
    <div className="tp-hero">
      <div>
        <p className="tp-eyebrow"><i /> BIG IDEAS. INFINITE POSSIBILITIES.</p>
        <h3>Good brands deserve a bigger <em>loop.</em></h3>
        <p className="tp-copy">We turn your brand into the one they remember.</p>
        <div className="tp-actions"><span className="tp-btn">Find your growth plan</span><span className="tp-link">Explore</span></div>
      </div>
      <svg viewBox="0 0 650 540" aria-hidden="true">
        <defs><linearGradient id={gradient} x1="0" x2="1" y1="0" y2=".7"><stop offset="0" style={{ stopColor: 'var(--t-art-a)' }} /><stop offset=".45" style={{ stopColor: 'var(--t-art-b)' }} /><stop offset="1" style={{ stopColor: 'var(--t-art-c)' }} /></linearGradient></defs>
        <g transform="rotate(-26 325 270)"><path d="M323 267 C243 145 89 114 84 262 C79 410 241 381 323 267 C405 153 557 115 562 262 C567 409 406 389 323 267" fill="none" stroke={`url(#${gradient})`} strokeWidth="90" /></g>
      </svg>
    </div>
    <div className="tp-tiles">
      {['social', 'content', 'ads', 'strategy', 'web'].map(key => <span key={key} style={{ background: `var(--card-${key})` }}>{key === 'ads' ? 'Paid Ads' : key[0].toUpperCase() + key.slice(1)}</span>)}
    </div>
    <div className="tp-plans">
      <div><small>LAUNCH</small><b>₹6,000</b><span className="tp-btn tp-btn-out">Choose</span></div>
      <div className="tp-featured"><small>GROW</small><b>₹10,000</b><span className="tp-btn">Choose</span></div>
    </div>
    <div className="tp-deep"><small>THE INFINITY APPROACH</small><b>Good growth is a <em>loop.</em></b></div>
  </div>;
}

function Gallery({ onPick }) {
  const [copied, copy] = useCopy();
  const [dark, setDark] = useState(document.documentElement.dataset.theme === 'dark');
  useEffect(() => {
    const previous = document.documentElement.dataset.theme;
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    return () => { document.documentElement.dataset.theme = previous; };
  }, [dark]);
  return <div className="tp-page">
    <header className="tp-head">
      <div><p>TEMPORARY PAGE · /theme</p><h1>Pick a theme</h1><span>Twenty palettes in three groups: the original set, professional light palettes and dark-tone palettes. “Try on live site” recolours the real website, including the logo and hero art, so you can scroll through everything.</span></div>
      <button className="tp-ghost" onClick={() => setDark(value => !value)}>{dark ? 'Show light' : 'Show dark'}</button>
    </header>
    {groups.map(group => <section key={group} className="tp-group">
      <h2 className="tp-group-title">{group}<small>{group === 'Dark tone' ? 'Dark by default' : group === 'Professional' ? 'Restrained, corporate-grade light palettes' : 'The first set, plus the current look'}</small></h2>
      <div className="tp-grid">
        {themes.filter(theme => theme.group === group).map(theme => <article key={theme.id} className="tp-card theme-scope" data-mode={theme.dark ? 'dark' : undefined} style={cssVars(theme.tokens)}>
          <Mock theme={theme} />
          <div className="tp-swatches" aria-hidden="true">{['ink', 'accent', 'paper', 'tint', 'deep', 'alt', 'alt-soft', 'warm', 'cool'].map(key => <i key={key} title={`${key} ${theme.tokens[key]}`} style={{ background: theme.tokens[key] }} />)}</div>
          <div className="tp-meta">
            <div><h2><span>{String(themes.indexOf(theme)).padStart(2, '0')}</span> {theme.name}{theme.dark && <em className="tp-badge">Dark</em>}</h2><p>{theme.vibe}</p></div>
            <div className="tp-buttons">
              <button className="tp-solid" onClick={() => onPick(theme.id)}>Try on live site</button>
              <button className="tp-ghost" onClick={() => copy(theme.id, cssBlock(theme.tokens))}>{copied === theme.id ? 'Copied' : 'Copy tokens'}</button>
            </div>
          </div>
        </article>)}
      </div>
    </section>)}
  </div>;
}

function Live({ id, onPick, onBack }) {
  const [copied, copy] = useCopy();
  const theme = themes.find(item => item.id === id) || themes[0];
  const [startMode] = useState(() => document.documentElement.dataset.theme);
  // Dark-tone themes open in dark mode. Set before App mounts so it picks the mode up; it is restored on exit.
  if (theme.dark && document.documentElement.dataset.theme !== 'dark') document.documentElement.dataset.theme = 'dark';
  useEffect(() => () => { if (startMode) document.documentElement.dataset.theme = startMode; }, [startMode]);
  useEffect(() => {
    const root = document.documentElement;
    const vars = cssVars(theme.tokens);
    Object.entries(vars).forEach(([key, value]) => root.style.setProperty(key, value));
    const sync = () => document.querySelector('meta[name="theme-color"]')?.setAttribute('content', getComputedStyle(document.body).backgroundColor);
    sync();
    return () => { Object.keys(vars).forEach(key => root.style.removeProperty(key)); sync(); };
  }, [theme]);
  const step = delta => onPick(themes[(themes.indexOf(theme) + delta + themes.length) % themes.length].id);
  return <>
    <Suspense fallback={null}><App key={theme.id} /></Suspense>
    <nav className="tp-bar" aria-label="Theme switcher">
      <button onClick={onBack}>All themes</button>
      <button onClick={() => step(-1)} aria-label="Previous theme">‹</button>
      <strong>{theme.name}</strong>
      <button onClick={() => step(1)} aria-label="Next theme">›</button>
      <span className="tp-dots">{themes.map(item => <button key={item.id} className={item.id === theme.id ? 'on' : ''} title={item.name} aria-label={item.name} onClick={() => onPick(item.id)} style={{ background: `linear-gradient(135deg, ${item.tokens.ink} 50%, ${item.tokens.accent} 50%)` }} />)}</span>
      <button onClick={() => copy('live', cssBlock(theme.tokens))}>{copied === 'live' ? 'Copied' : 'Copy tokens'}</button>
    </nav>
  </>;
}

export default function ThemePage() {
  const [id, setId] = useState(readId);
  useEffect(() => { document.title = 'Theme options — Infinity Loops'; }, []);
  const go = next => {
    history.replaceState(null, '', next ? `/theme?t=${next}` : '/theme');
    setId(next);
    window.scrollTo(0, 0);
  };
  return id ? <Live id={id} onPick={go} onBack={() => go(null)} /> : <Gallery onPick={go} />;
}
