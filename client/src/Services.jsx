import { useEffect, useRef } from 'react';
import './services.css';
import LoopVideo from './LoopVideo.jsx';
import { useCopy } from './i18n.jsx';

const serviceKeys = ['social', 'content', 'ads', 'strategy', 'web'];

const serviceSrc = { social: '/media/social.mp4', content: '/media/content.mp4', ads: '/media/ads.mp4', strategy: '/media/strategy.mp4', web: '/media/web.mp4' };

function ServiceImage({ type, paused, label }) {
  return <div className="service-photo">
    <div className="service-photo-frame"><LoopVideo src={serviceSrc[type]} label={label} paused={paused} /></div>
  </div>;
}

export default function Services({ paused }) {
  const { c } = useCopy();
  const t = c.services;
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
      const gap = phone.matches ? 16 : 28;
      const top = phone.matches ? 88 : 104; // clears the floating glass header
      // A card taller than the viewport pins by its bottom edge so none of it gets cropped.
      const sticks = cards.map(card => Math.min(top, innerHeight - card.offsetHeight - gap));
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
      <div className="service-showcase-heading"><p className="eyebrow"><span className="status-dot" /> {t.eyebrow}</p><h2 id="services-title">{t.a} <br />{t.b} <em>{t.em}</em></h2><div className="service-showcase-intro"><p>{t.intro1}<br />{t.intro2}</p><span>{t.scroll}</span></div></div>
      <div className="service-stack">{serviceKeys.map(key => { const service = t.items[key]; return <article className={`service-stack-item service-stack-item--${key}`} key={key} aria-labelledby={`service-${key}`}>
        <div className="service-stack-card"><div className="service-stack-copy"><p className="service-stack-label">{service.label}</p><h3 id={`service-${key}`}>{service.title}</h3><p className="service-stack-description">{service.copy}</p><ul>{service.list.map(item => <li key={item}>{item}</li>)}</ul><a className="service-stack-link" href="#contact"><span>{service.action}</span></a></div><ServiceImage type={key} paused={paused} label={service.media} /></div>
      </article>; })}</div>
      <div className="service-showcase-footer"><p>{t.footerQ}</p><a className="text-link" href="#contact">{t.footerLink}</a></div>
    </div>
  </section>;
}
