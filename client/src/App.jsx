import { useEffect, useRef, useState } from 'react';
import { plans } from '../../shared/plans.js';
import Contact from './Contact.jsx';

function Header() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    function onKey(event) {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        ref.current?.querySelector('button')?.focus();
      }
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);
  return <div ref={ref}><header className="header"><a className="brand" href="#" aria-label="Infinity Loops home"><img className="brand-logo" src="/brand/infinity-loops-logo.svg" alt="Infinity Loops — Digital Marketing Agency" width="821" height="197" /></a><button className="menu-toggle" aria-expanded={open} aria-controls="navigation" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}><span></span><span></span></button><nav className={open ? "is-open" : ""} onClick={(event) => { if (event.target.closest("a")) setOpen(false); }} id="navigation" aria-label="Main navigation"><a href="#services">What we do</a><a href="#approach">Our approach</a><a href="#plans">Our plans</a><a className="button button-small" href="#contact">Let’s talk <span>↗</span></a></nav></header>
</div>;
}

function Hero({ paused, onToggleMotion }) { return <>
<section className="hero wrap">
  <div className="hero-copy"><p className="eyebrow"><span className="status-dot"></span> BIG IDEAS. INFINITE POSSIBILITIES.</p><h1>Good brands<br />deserve a<br /><span className="hero-last">bigger <em>loop.</em><svg viewBox="0 0 280 25" aria-hidden="true"><path d="M5 17 Q140 -4 271 9 M25 24 Q156 8 247 14"/></svg></span></h1><p className="hero-description">We turn your brand into the one they remember.<br className="desktop-break" /> Creative content, meaningful connections, and<br className="desktop-break" /> digital strategies that move you forward.</p><div className="hero-actions"><a className="button" href="#plans">Find your growth plan <span>↗</span></a><a className="text-link" href="#services">Explore what we do <span>↓</span></a></div><div className="hero-note"><span className="mini-orbit">✳</span><p>A little strategy. A lot of creativity.<br /><strong>One connected approach to your growth.</strong></p></div></div>
  <div className="hero-art" role="img" aria-label="Creative brand campaign collage connected by a bold orange infinity loop">
    <div className="art-grid"></div><span className="art-caption">YOUR NEXT CHAPTER STARTS HERE</span>
    <svg className="infinity-art" viewBox="0 0 650 540" aria-hidden="true"><defs><linearGradient id="loop" x1="0" x2="1" y1="0" y2=".7"><stop offset="0" stopColor="#ffb15d"/><stop offset=".43" stopColor="#fc632c"/><stop offset="1" stopColor="#d73709"/></linearGradient><filter id="shadow"><feDropShadow dx="5" dy="19" stdDeviation="13" floodColor="#b34e21" floodOpacity=".19"/></filter></defs><g transform="rotate(-26 325 270)"><path d="M323 267 C243 145 89 114 84 262 C79 410 241 381 323 267 C405 153 557 115 562 262 C567 409 406 389 323 267" fill="none" stroke="url(#loop)" strokeWidth="76" filter="url(#shadow)"/><path d="M323 267 C243 145 89 114 84 262 C79 410 241 381 323 267 C405 153 557 115 562 262 C567 409 406 389 323 267" fill="none" stroke="#ffb979" strokeWidth="2" transform="translate(-13 -24)" opacity=".4"/></g></svg>
    <div className="creative-card"><div className="card-top"><span className="tiny-brand">∞</span><span>THE CREATIVE EDIT</span><span>↗</span></div><div className="creative-card-body"><span>DON’T JUST<br />SHOW UP.</span><strong>Stand<br /><i>out.</i></strong><span className="poster-flower">✳</span><div className="poster-bottom">MAKE YOUR NEXT MOVE.<span>∞</span></div></div><div className="card-bottom"><span>♡ &nbsp; ◇ &nbsp; ➤</span><span>▱</span></div></div>
    <div className="reel-card"><div className="reel-top"><span>● &nbsp; IN THE MAKING</span><span>↗</span></div><div className="reel-title">Made to<br />make you<br /><em>stop.</em></div><div className="play-icon">▶</div><div className="reel-bottom">CONTENT THAT CONNECTS <span>↗</span></div></div>
    <div className="floating-tag"><span>✦</span> Creativity, on repeat.</div><div className="strategy-tag"><span className="tag-dot"></span> STRATEGY MEETS SCROLL-STOPPING</div><span className="art-star">✳</span><div className="orbit-label">IDEATE → CREATE → CONNECT → GROW</div>
  </div>
  <button className="motion-toggle" onClick={onToggleMotion} aria-pressed={paused}>{paused ? '▶ Play motion' : 'Ⅱ Pause motion'}</button>
</section>
<div className="capability-strip"><div className="wrap"><span>SOCIAL MEDIA</span><span className="asterisk">✳</span><span>CONTENT CREATION</span><span className="asterisk">✳</span><span>BRAND STRATEGY</span><span className="asterisk">✳</span><span>PERFORMANCE MARKETING</span><span className="asterisk">✳</span><span>DIGITAL EXPERIENCES</span></div></div>

</>; }

function Services() { return <>
<section className="services wrap section" id="services"><div className="section-heading"><div><p className="eyebrow">WHAT WE BRING TO THE TABLE</p><h2>All the right moves.<br />One creative partner.</h2></div><p>From the first impression to the next enquiry,<br />we help your brand connect the dots.</p></div><div className="service-grid"><article><div className="service-icon">✳</div><h3>Content with character.</h3><p>Posts, carousels, and reels that sound like you, look like you, and give people a reason to stay.</p><span>SOCIAL MEDIA & CONTENT</span></article><article><div className="service-icon">↗</div><h3>Strategy with direction.</h3><p>Market research, competitor insights, and campaign planning that give every creative decision a purpose.</p><span>STRATEGY & ADS MANAGEMENT</span></article><article><div className="service-icon">◉</div><h3>A presence that connects.</h3><p>Custom web experiences, creator collaborations, and brand shoots that bring your story into focus.</p><span>WEBSITES & BRAND EXPERIENCES</span></article></div></section>

</>; }

function Approach() { return <>
<section className="approach" id="approach"><div className="wrap approach-inner"><div className="approach-title"><p className="eyebrow">THE INFINITY APPROACH</p><h2>Good growth<br />is a <em>loop.</em></h2><p>We keep listening, creating, and refining.<br />Because your brand’s next chapter<br />should build on the last.</p><span className="approach-loop" aria-hidden="true">∞</span></div><div className="steps"><article><span>01</span><div><h3>Find your direction</h3><p>Understand your business, your audience, and what you want to achieve.</p></div></article><article><span>02</span><div><h3>Create something worth noticing</h3><p>Turn that direction into thoughtful visuals, compelling stories, and engaging content.</p></div></article><article><span>03</span><div><h3>Put it in front of the right people</h3><p>Bring your brand to life across the platforms that matter to your audience.</p></div></article><article><span>04</span><div><h3>Learn. Refine. Repeat.</h3><p>Use audience response and market insights to shape what comes next.</p></div></article></div></div></section>

</>; }

function FAQs() { return <>
<section className="faq-section wrap"><div><p className="eyebrow">A LITTLE MORE CLARITY</p><h2>Good questions.<br />Clear answers.</h2></div><div className="faq-list"><details><summary>Which package should I start with?<span>+</span></summary><p>Launch gives you a consistent Instagram presence. Grow adds more content and a second platform. Scale brings ads management and business strategy into the mix. Premium is for custom web, creator, and production needs.</p></details><details><summary>Can we tailor a package to my business?<span>+</span></summary><p>Yes. Start with the closest package and tell us your priorities. We can discuss the platforms, content formats, and production support that suit your brand.</p></details><details><summary>Is advertising spend included?<span>+</span></summary><p>Scale includes ads management. Advertising budgets and any additional production or platform fees should be agreed separately before work starts.</p></details><details><summary>What does verification assistance include?<span>+</span></summary><p>Premium can include guidance through a platform’s verification process. The platform makes the final decision, and eligibility requirements and subscription fees may apply.</p></details></div></section>

</>; }

function Footer() { return <>
<footer className="footer wrap"><a className="brand" href="#" aria-label="Infinity Loops home"><img className="brand-logo" src="/brand/infinity-loops-logo.svg" alt="Infinity Loops — Digital Marketing Agency" width="821" height="197" /></a><p>Creativity in motion. Growth on repeat.</p><span>© <span>{new Date().getFullYear()}</span> Infinity Loops</span><a className="back-top" href="#" aria-label="Back to top">↑</a></footer>

</>; }

function Pricing({ onSelect }) {
  return <section className="section plans wrap" id="plans">
    <div className="section-heading"><div><p className="eyebrow">YOUR AMBITION. YOUR PLAN.</p><h2>Small beginnings.<br />Infinite potential.</h2></div><div><p>A clear starting point for your next big move.<br />Choose the support your brand needs.</p><span className="billing-label"><span className="status-dot" /> Monthly packages · Prices in INR</span></div></div>
    <div className="plan-grid">{plans.map((plan) => <article key={plan.name} className={`plan ${plan.featured ? 'featured' : ''} ${plan.name === 'Premium' ? 'premium' : ''}`}>
      {plan.featured && <span className="featured-label">THE GROWTH SWEET SPOT <span>✦</span></span>}
      <div className="plan-top"><span className="plan-label">{plan.label}</span><h3>{plan.name}{plan.name === 'Premium' && <span>✳</span>}</h3><p>{plan.description}</p><div className={`price ${plan.name === 'Premium' ? 'price-range' : ''}`}>{plan.price}<span>/ month{plan.name === 'Premium' ? ' · custom scope' : ''}</span></div></div>
      <button className={`button plan-button ${plan.featured ? '' : 'button-outline'}`} data-plan={plan.name} onClick={() => onSelect(plan.name)}>{plan.name === 'Premium' ? 'Let’s build your plan' : `Choose ${plan.name}`} <span>↗</span></button>
      <ul>{plan.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
    </article>)}</div>
    <p className="plan-note">Let’s align on deliverables, ad spend, shoot requirements, and any platform fees before we begin. Verification is subject to platform eligibility; enquiries and results vary.</p>
  </section>;
}

export default function App() {
  const [plan, setPlan] = useState('Not sure yet');
  const [paused, setPaused] = useState(false);
  const page = useRef(null);
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const elements = [...page.current.querySelectorAll('.section-heading, .service-grid article, .approach-title, .steps article, .plan, .faq-section > div, .contact-copy, #enquiry-form')];
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
  return <div ref={page} className={paused ? "motion-paused" : undefined}><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main"><Hero paused={paused} onToggleMotion={() => setPaused(value => !value)} /><Services /><Approach /><Pricing onSelect={choosePlan} /><FAQs /><Contact plan={plan} setPlan={setPlan} nameInput={nameInput} contactRef={contact} /></main><Footer /></div>;
}
