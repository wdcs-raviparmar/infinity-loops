import { useEffect, useRef, useState } from 'react';
import { plans } from '../../shared/plans.js';
import Contact from './Contact.jsx';
import BrandLogo from './BrandLogo.jsx';
import Services from './Services.jsx';
import LoopVideo from './LoopVideo.jsx';
import ReelWall from './ReelWall.jsx';
import { useCopy, languages } from './i18n.jsx';

function LanguageSwitch() {
  const { lang, setLang, c } = useCopy();
  const [open, setOpen] = useState(false);
  const box = useRef(null);
  useEffect(() => {
    if (!open) return;
    const close = event => { if (!box.current?.contains(event.target)) setOpen(false); };
    const onKey = event => { if (event.code === 'Escape') { setOpen(false); box.current?.querySelector('button')?.focus(); } };
    document.addEventListener('pointerdown', close);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('pointerdown', close); document.removeEventListener('keydown', onKey); };
  }, [open]);
  const current = languages.find(item => item.code === lang);
  return <div className="lang-switch" ref={box}>
    <button type="button" className="lang-button" aria-haspopup="listbox" aria-expanded={open} aria-label={`${c.nav.language}: ${current.name}`} onClick={() => setOpen(value => !value)}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.6 2.6 3.9 5.6 3.9 9s-1.3 6.4-3.9 9c-2.6-2.6-3.9-5.6-3.9-9S9.4 5.6 12 3z" /></svg>
      <span>{current.short}</span>
    </button>
    {open && <ul className="lang-menu" role="listbox" aria-label={c.nav.language}>{languages.map(item => <li key={item.code} role="option" aria-selected={item.code === lang}><button type="button" lang={item.code} className={item.code === lang ? 'is-on' : undefined} onClick={() => { setLang(item.code); setOpen(false); }}><b>{item.short}</b>{item.name}</button></li>)}</ul>}
  </div>;
}

function Header({ theme, onToggleTheme }) {
  const { c } = useCopy();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    function onKey(event) {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        ref.current?.querySelector('.menu-toggle')?.focus();
      }
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);
  return <div ref={ref}><header className="header">
    <a className="brand" href="#" aria-label={c.nav.home}><BrandLogo /></a>
    <nav className={open ? "is-open" : ""} onClick={(event) => { if (event.target.closest("a")) setOpen(false); }} id="navigation" aria-label={c.nav.main}><a href="#services">{c.nav.services}</a><a href="#approach">{c.nav.approach}</a><a href="#plans">{c.nav.plans}</a><a className="button button-small" href="#contact">{c.nav.talk}</a></nav>
    <div className="header-controls">
      <LanguageSwitch />
      <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={theme === 'dark' ? c.nav.toLight : c.nav.toDark} title={theme === 'dark' ? c.nav.toLight : c.nav.toDark}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {theme === 'dark' ? <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></> : <path d="M20.5 14.1A8.5 8.5 0 0 1 9.9 3.5a8.5 8.5 0 1 0 10.6 10.6Z" />}
        </svg>
      </button>
      <button className="menu-toggle" aria-expanded={open} aria-controls="navigation" aria-label={open ? c.nav.menuClose : c.nav.menuOpen} onClick={() => setOpen(!open)}><span></span><span></span></button>
    </div>
  </header></div>;
}

// The accent word cycles every few seconds; each word fades up out of a blur and a hand-drawn line draws under it.
function HeroWord({ words }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = setInterval(() => setIndex(value => (value + 1) % words.length), 2800);
    return () => clearInterval(timer);
  }, [words.length]);
  return <span className="hero-last" aria-hidden="true">
    <em key={words[index]} className="hero-word">{words[index]}</em>
    <svg key={`line-${index}`} className="hero-scribble" viewBox="0 0 300 26"><path pathLength="1" d="M6 18 Q150 -2 294 10 M28 24 Q170 9 262 15" /></svg>
  </span>;
}

function Hero({ paused }) {
  const { c } = useCopy();
  const h = c.hero;
  return <>
<div className="hero-stage"><ReelWall paused={paused} />
<section className="hero wrap">
  <div className="hero-copy"><p className="eyebrow"><span className="status-dot"></span> {h.eyebrow}</p><h1 aria-label={h.aria}>{h.line1}<br />{h.line2}<br /><HeroWord key={h.words[0]} words={h.words} /></h1><p className="hero-description">{h.description}</p><div className="hero-actions"><a className="button" href="#plans">{h.cta}</a><a className="text-link" href="#services">{h.more}</a></div></div>
</section></div>
<div className="capability-strip" aria-label={h.more}>
  <ul className="sr-only">{c.capabilities.map(item => <li key={item}>{item}</li>)}</ul>
  <div className="marquee" aria-hidden="true"><div className="marquee-track">{[0, 1, 2].map(copyIndex => <ul key={copyIndex} className="marquee-group">{c.capabilities.map(item => <li key={item}>{item}</li>)}</ul>)}</div></div>
</div>

</>;
}

function Approach({ paused }) {
  const { c } = useCopy();
  const p = c.approach;
  return <>
<section className="approach" id="approach"><LoopVideo className="approach-media" src="/media/approach.mp4" paused={paused} />
  <div className="wrap approach-inner">
    <div className="approach-title">
      <svg className="loop-orbit" viewBox="0 0 220 90" aria-hidden="true"><defs><linearGradient id="orbit-gradient" x1="0" x2="1"><stop offset="0" stopColor="var(--accent-on-dark)" /><stop offset="1" stopColor="var(--t-art-a)" /></linearGradient></defs><path className="orbit-base" d="M110 45C85 5 15 5 15 45s70 40 95 0 95-40 95 0-70 40-95 0z" /><path className="orbit-comet" pathLength="1" d="M110 45C85 5 15 5 15 45s70 40 95 0 95-40 95 0-70 40-95 0z" stroke="url(#orbit-gradient)" /></svg>
      <p className="eyebrow">{p.eyebrow}</p>
      <h2>{p.pre} <em>{p.em}</em></h2>
      <p className="approach-lede">{p.lede}</p>
    </div>
    <ol className="steps">{p.steps.map((step, index) => <li key={step.title} style={{ '--i': index }}><span className="step-no">{String(index + 1).padStart(2, '0')}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>
    <p className="steps-return">{p.again}</p>
  </div>
</section>

</>;
}

function FAQs() {
  const { c } = useCopy();
  const f = c.faq;
  return <>
<section className="faq-section wrap" id="faq">
  <div className="faq-intro">
    <p className="eyebrow">{f.eyebrow}</p>
    <h2>{f.a}<br />{f.b} <em>{f.em}</em></h2>
    <p className="faq-help">{f.help}</p>
    <a className="button" href="#contact">{f.ask}</a>
  </div>
  <div className="faq-list">{f.items.map((item, index) => <details key={item.q} className="faq-item" name="faq"><summary><span className="faq-no">{String(index + 1).padStart(2, '0')}</span><span className="faq-q">{item.q}</span><span className="faq-toggle" aria-hidden="true" /></summary><div className="faq-a"><p>{item.a}</p></div></details>)}</div>
</section>

</>;
}

function Footer() {
  const { c } = useCopy();
  const f = c.footer;
  const items = c.services.items;
  return <>
<footer className="site-footer">
  <div className="wrap footer-main">
    <div className="footer-brand">
      <a className="brand" href="#" aria-label={c.nav.home}><BrandLogo /></a>
      <p className="footer-tagline">{f.tagline}</p>
      <p className="footer-blurb">{f.blurb}</p>
      <a className="button" href="#contact">{f.start}</a>
    </div>
    <nav className="footer-col" aria-label={f.explore}><h4>{f.explore}</h4><a href="#services">{c.nav.services}</a><a href="#approach">{c.nav.approach}</a><a href="#plans">{c.nav.plans}</a><a href="#faq">{f.faq}</a><a href="#contact">{f.contact}</a></nav>
    <nav className="footer-col" aria-label={f.services}><h4>{f.services}</h4>{['social', 'content', 'ads', 'strategy', 'web'].map(key => <a key={key} href="#services">{items[key].title}</a>)}</nav>
    <div className="footer-col"><h4>{f.touch}</h4><a href="mailto:hello@infinityloops.example">hello@infinityloops.example</a><span className="footer-note">{f.note}</span></div>
  </div>
  <div className="footer-giant" aria-hidden="true">Infinity Loops</div>
  <div className="wrap footer-bottom"><span>©︎ {new Date().getFullYear()} Infinity Loops</span><span>{f.bottom}</span><a className="back-top" href="#" aria-label={f.topAria}>{f.top}</a></div>
</footer>

</>;
}

// Spotlight: a soft glow follows the pointer across each plan card.
function spotlight(event) {
  const box = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty('--mx', `${event.clientX - box.left}px`);
  event.currentTarget.style.setProperty('--my', `${event.clientY - box.top}px`);
}

function Pricing({ onSelect }) {
  const { c } = useCopy();
  const p = c.plans;
  return <section className="section plans wrap" id="plans">
    <div className="section-heading"><div><p className="eyebrow">{p.eyebrow}</p><h2>{p.a}<br />{p.b} <em>{p.em}</em></h2></div><div><p>{p.sub1}<br />{p.sub2}</p><span className="billing-label"><span className="status-dot" /> {p.billing}</span></div></div>
    <div className="plan-grid">{plans.map((plan) => { const t = p.byName[plan.name]; return <article key={plan.name} onMouseMove={spotlight} className={`plan ${plan.featured ? 'featured' : ''} ${plan.name === 'Premium' ? 'premium' : ''}`}>
      {plan.featured && <span className="featured-label">{p.featured}</span>}
      <div className="plan-top"><span className="plan-label">{t.label}</span><h3>{plan.name}</h3><p>{t.description}</p><div className={`price ${plan.name === 'Premium' ? 'price-range' : ''}`}>{plan.price}<span>{p.month}{plan.name === 'Premium' ? p.custom : ''}</span></div></div>
      <button className={`button plan-button ${plan.featured ? '' : 'button-outline'}`} data-plan={plan.name} onClick={() => onSelect(plan.name)}>{plan.name === 'Premium' ? p.premiumCta : p.choose.replace('{name}', plan.name)}</button>
      <ul>{t.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
    </article>; })}</div>
    <p className="plan-note">{p.note}</p>
  </section>;
}

export default function App() {
  const { c } = useCopy();
  const [plan, setPlan] = useState('Not sure yet');
  const [paused] = useState(false);
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light');
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', getComputedStyle(document.body).backgroundColor);
  }, [theme]);
  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try { localStorage.setItem('infinity-loops-theme', next); } catch { /* Switching works even when storage is disabled. */ }
  }
  const page = useRef(null);
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const elements = [...page.current.querySelectorAll('.section-heading, .approach-title, .steps article, .plan, .faq-section > div, .contact-copy, #enquiry-form')];
    const reveal = (element) => element.classList.add('is-revealed');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          reveal(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    elements.forEach(element => {
      element.classList.add('scroll-reveal');
      if (element.getBoundingClientRect().top < window.innerHeight) reveal(element);
      else observer.observe(element);
    });
    // Keyboard navigation must never land on an invisible control.
    const onFocus = event => {
      const element = event.target.closest('.scroll-reveal');
      if (element) reveal(element);
    };
    const root = page.current;
    root.addEventListener('focusin', onFocus);
    const hero = root.querySelector('.hero');
    const heroObserver = new IntersectionObserver(entries => {
      hero.classList.toggle('motion-visible', entries[0].isIntersecting);
    });
    heroObserver.observe(hero);
    return () => {
      observer.disconnect();
      heroObserver.disconnect();
      root.removeEventListener('focusin', onFocus);
      elements.forEach(element => element.classList.remove('scroll-reveal', 'is-revealed'));
    };
  }, []);
  const nameInput = useRef(null);
  const contact = useRef(null);
  function choosePlan(value) {
    setPlan(value);
    contact.current?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    nameInput.current?.focus({ preventScroll: true });
  }
  return <div ref={page} className={paused ? "motion-paused" : undefined}><a className="skip-link" href="#main">{c.nav.skip}</a><Header theme={theme} onToggleTheme={toggleTheme} /><main id="main"><Hero paused={paused} /><Services paused={paused} /><Approach paused={paused} /><Pricing onSelect={choosePlan} /><FAQs /><Contact plan={plan} setPlan={setPlan} nameInput={nameInput} contactRef={contact} /></main><Footer /></div>;
}
