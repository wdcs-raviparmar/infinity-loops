import { useEffect, useRef } from 'react';
import './services.css';

const services = [
  { key: 'social', title: 'Social Media Management', label: 'SHOW UP CONSISTENTLY', copy: 'Give your Instagram and Facebook a clear plan. We organise your content, write the captions, and keep your brand showing up.', items: ['Content calendars', 'Captions & hashtags', 'Scheduling & publishing'], action: 'Plan my social media' },
  { key: 'content', title: 'Content Creation', label: 'MAKE SOMETHING WORTH WATCHING', copy: 'From the first idea to the final edit, we create posts, carousels, and reels that tell your story in your own voice.', items: ['Posts & carousels', 'Reels & video editing', 'Brand shoots'], action: 'Plan my content' },
  { key: 'ads', title: 'Paid Ads Management', label: 'REACH YOUR NEXT CUSTOMER', copy: 'Put your offer in front of the right people. We plan audiences, develop ad creatives, and refine campaigns as we learn what works.', items: ['Campaign setup', 'Audience targeting', 'Creative testing & optimisation'], action: 'Discuss my campaigns' },
  { key: 'strategy', title: 'Brand Strategy', label: 'START WITH A CLEAR DIRECTION', copy: 'Understand your audience, your competitors, and where your brand fits. Turn that research into a practical marketing plan.', items: ['Market & competitor research', 'Brand positioning', 'Campaign planning'], action: 'Build my strategy' },
  { key: 'web', title: 'Website Design', label: 'GIVE YOUR BRAND A HOME', copy: 'A website that explains your business clearly and makes the next step easy. Designed around your brand, your visitors, and your goals.', items: ['Business websites', 'Landing pages', 'Responsive design'], action: 'Discuss my website' },
];

const serviceImages = {
  social: { src: '/services/social.jpg', alt: 'A person reviewing charts and planning documents at a desk', width: 400, height: 300 },
  content: { src: '/services/content.jpg', alt: 'A film crew preparing a camera and clapperboard in a studio', width: 400, height: 300 },
  ads: { src: '/services/ads.jpg', alt: 'A woman presenting a magazine during a promotional shoot', width: 400, height: 300 },
  strategy: { src: '/services/strategy.webp', alt: 'Cream geometric blocks and spheres arranged against an orange background', width: 800, height: 1200, portrait: true },
  web: { src: '/services/web.webp', alt: 'An architectural composition of stone shapes and glass against a grey background', width: 800, height: 1000, portrait: true },
};

function ServiceImage({ type }) {
  const image = serviceImages[type];
  return <div className={`service-photo ${image.portrait ? 'service-photo--portrait' : ''}`}>
    <div className="service-photo-frame"><img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" /></div>
  </div>;
}

export default function Services({ paused }) {
  const section = useRef(null);
  useEffect(() => {
    const root = section.current;
    const cards = [...root.querySelectorAll('.service-stack-item')];
    const motionOk = matchMedia('(prefers-reduced-motion: no-preference)');
    const phone = matchMedia('(max-width: 800px)');
    const tall = matchMedia('(min-height: 720px)');
    let frame = 0;
    const update = () => {
      frame = 0;
      const enabled = motionOk.matches && (phone.matches || tall.matches) && !paused;
      root.classList.toggle('has-stack-motion', enabled);
      // Read geometry together before writing styles. Native sticky handles the pinning.
      const tops = cards.map(card => card.getBoundingClientRect().top);
      const gap = phone.matches ? 14 : 28;
      // A card taller than the viewport pins by its bottom edge so none of it gets cropped.
      const sticks = cards.map(card => Math.min(gap, innerHeight - card.offsetHeight - gap));
      const start = innerHeight * .92;
      cards.forEach((card, index) => {
        const next = index < cards.length - 1;
        const covered = enabled && next ? Math.max(0, Math.min(1, (start - tops[index + 1]) / (start - sticks[index + 1]))) : 0;
        const enter = enabled ? Math.max(0, Math.min(1, (innerHeight - tops[index]) / innerHeight)) : 1;
        card.style.setProperty('--stick-top', `${sticks[index].toFixed(1)}px`);
        card.style.setProperty('--covered', covered.toFixed(4));
        card.style.setProperty('--enter', enter.toFixed(4));
      });
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    const queries = [motionOk, phone, tall];
    queries.forEach(query => query.addEventListener('change', schedule));
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      queries.forEach(query => query.removeEventListener('change', schedule));
    };
  }, [paused]);

  return <section className="service-showcase section" id="services" ref={section} aria-labelledby="services-title">
    <div className="wrap">
      <div className="service-showcase-heading"><p className="eyebrow"><span className="status-dot" /> WHAT WE BRING TO THE TABLE</p><h2 id="services-title">How we help<br />your business <em>grow.</em></h2><div className="service-showcase-intro"><p>Social media, content, advertising, strategy, and websites.<br />Choose the support your business needs.</p><span>SCROLL TO EXPLORE <b aria-hidden="true">↓</b></span></div></div>
      <div className="service-stack">{services.map(service => <article className={`service-stack-item service-stack-item--${service.key}`} key={service.key} aria-labelledby={`service-${service.key}`}>
        <div className="service-stack-card"><div className="service-stack-copy"><p className="service-stack-label">{service.label}</p><h3 id={`service-${service.key}`}>{service.title}</h3><p className="service-stack-description">{service.copy}</p><ul>{service.items.map(item => <li key={item}>{item}</li>)}</ul><a className="service-stack-link" href="#contact"><span className="service-link-circle" aria-hidden="true">↗︎</span><span>{service.action}</span></a></div><ServiceImage type={service.key} /><span className="service-card-loop" aria-hidden="true">∞</span></div>
      </article>)}</div>
      <div className="service-showcase-footer"><p>Not sure which service you need?</p><a className="text-link" href="#contact">Tell us about your business <span>↗︎</span></a></div>
    </div>
  </section>;
}
