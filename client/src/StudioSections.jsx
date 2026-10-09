import { useEffect, useRef, useState } from 'react';
import { plans } from '../../shared/plans.js';

const services = [
  { name: 'Content that connects.', tag: 'SOCIAL & CONTENT', description: 'Give people something worth stopping for. We shape your ideas into content with a clear voice, a strong hook, and a reason to stay.', items: ['Social posts & carousels', 'Reels & cinematic shoots', 'Captions & hashtags'], cue: 'An idea, made impossible to scroll past.', kind: 'content' },
  { name: 'Strategy with direction.', tag: 'RESEARCH & PLANNING', description: 'Start with a direction, then make every creative decision count. We connect your audience, your positioning, and your next move.', items: ['Market trend research', 'Competitor analysis', 'Business consulting'], cue: 'The right message. For the right people.', kind: 'strategy' },
  { name: 'Marketing that moves.', tag: 'CAMPAIGNS & ADS', description: 'Connect the creative to the campaign. We help plan, manage, and refine how your brand reaches people across the platforms that matter.', items: ['Ads management', 'Platform planning', 'Enquiry-generation strategy'], cue: 'Turn attention into a clear next step.', kind: 'marketing' },
  { name: 'A bigger digital presence.', tag: 'WEB & PRODUCTION', description: 'Bring the whole brand into focus. From a custom webpage to creator collaborations and brand shoots, build a presence that feels connected.', items: ['Custom webpages', 'Influencer collaborations', 'Model & brand shoots'], cue: 'Every touchpoint, part of the same story.', kind: 'digital' },
];

function ServiceArtwork({ kind }) {
  return <div className={`service-artwork artwork-${kind}`} aria-hidden="true">
    <span className="artwork-orbit orbit-one" /><span className="artwork-orbit orbit-two" />
    {kind === 'content' && <><div className="concept-poster"><span>THE CREATIVE EDIT / ∞</span><strong>MAKE<br />YOUR<br /><i>MOVE.</i></strong><div className="poster-stamp">✳</div><small>ONE IDEA. MANY POSSIBILITIES.</small></div><div className="concept-reel"><span>9:16 / REEL STORYBOARD</span><strong>Hook.<br />Story.<br /><i>Action.</i></strong><span className="concept-play">▶</span><div className="reel-timeline"><i /><i /><i /></div></div></>}
    {kind === 'strategy' && <><div className="strategy-centre">YOUR<br /><strong>BRAND.</strong><span>∞</span></div><span className="strategy-note note-a">Audience<br /><strong>Who are we talking to?</strong></span><span className="strategy-note note-b">Positioning<br /><strong>What makes you different?</strong></span><span className="strategy-note note-c">Direction<br /><strong>What comes next?</strong></span><span className="strategy-spark">✳</span></>}
    {kind === 'marketing' && <><div className="campaign-target"><span /><span /><span /><i>↗</i></div><div className="campaign-board"><span>THE CAMPAIGN CONNECTION</span><strong>Attention.<br />With intention.</strong><div><b>01</b> Find the hook</div><div><b>02</b> Shape the message</div><div><b>03</b> Make the next step clear</div></div><span className="campaign-label">CREATE → CONNECT → REFINE</span></>}
    {kind === 'digital' && <><div className="concept-browser"><div className="browser-chrome"><i /><i /><i /><span>YOUR BRAND, CONNECTED</span></div><div className="browser-content"><span>∞ / THE NEXT CHAPTER</span><strong>Good ideas.<br /><i>Great presence.</i></strong><div className="browser-wireframe"><span /><span /><span /></div><span className="browser-cta">LET’S CONNECT ↗</span></div></div><span className="digital-sticker">Made for<br /><strong>your world.</strong> ↗</span></>}
  </div>;
}

export function Services() {
  const [active, setActive] = useState(0);
  const selected = services[active];
  return <section className="services-studio section wrap" id="services">
    <div className="studio-heading"><div><p className="eyebrow"><span className="status-dot" /> WHAT WE BRING TO THE TABLE</p><h2>HOW WE<br /><span className="accent-word">GROW YOU.</span></h2></div><p>Content. Direction. Connection.<br />Different skills, working toward<br />one stronger brand.</p></div>
    <div className="service-workbench"><div className="service-rows">{services.map((service, index) => <article className={`service-row ${index === active ? 'is-active' : ''}`} key={service.kind}>
      <h3><button type="button" aria-expanded={index === active} aria-controls={`service-detail-${service.kind}`} onClick={() => setActive(index)}><span className="service-symbol" aria-hidden="true">{['✳', '↗', '◎', '∞'][index]}</span><span>{service.name}<small>{service.tag}</small></span><span className="service-arrow" aria-hidden="true">{index === active ? '−' : '+'}</span></button></h3>
      <div id={`service-detail-${service.kind}`} className="service-detail" hidden={index !== active}><p>{service.description}</p><ul>{service.items.map(item => <li key={item}>{item}</li>)}</ul><div className="mobile-service-art"><ServiceArtwork kind={service.kind} /></div><a className="service-enquiry" href="#contact">Let’s talk about {service.kind === 'digital' ? 'your presence' : service.kind} <span aria-hidden="true">↗</span></a></div>
    </article>)}</div><div className="service-stage"><div className="stage-topline"><span>THE INFINITY TOOLKIT</span><span>✳</span></div><div className="stage-scene" key={selected.kind}><ServiceArtwork kind={selected.kind} /><p className="stage-cue">{selected.cue}</p></div><div className="stage-bottomline"><span>Concept illustration · Not client work</span><span>∞</span></div></div></div>
  </section>;
}

const growthSteps = [
  { name: 'Discover', title: 'Find your direction.', description: 'We get to know your business, your audience, and the goals that matter. Research gives the creative a starting point.', detail: 'Your brand + your audience + your goals', label: 'THE STARTING POINT' },
  { name: 'Create', title: 'Make it worth noticing.', description: 'We turn the direction into posts, reels, and campaign ideas. You review the content before it goes out into the world.', detail: 'Ideas → content → your approval', label: 'THE CREATIVE PART' },
  { name: 'Connect', title: 'Meet the right people.', description: 'We bring the content to your chosen platforms, with campaign support shaped around your package and priorities.', detail: 'The right message, in the right places', label: 'THE CONNECTION' },
  { name: 'Refine', title: 'Learn. Improve. Repeat.', description: 'We look at audience response and market insights, then use what we learn to shape the next round of content.', detail: 'Listen → learn → make the next move', label: 'THE NEXT CHAPTER' },
];

export function LoopGraphic({ active = 0, className = '' }) {
  return <svg className={`studio-loop ${className}`} viewBox="0 0 640 320" fill="none" aria-hidden="true">
    <path className="loop-base" d="M320 160C230 18 70 12 70 160S230 302 320 160C410 18 570 12 570 160S410 302 320 160" pathLength="100" />
    <path className="loop-progress" d="M320 160C230 18 70 12 70 160S230 302 320 160C410 18 570 12 570 160S410 302 320 160" pathLength="100" style={{ strokeDasharray: `${(active + 1) * 25} 100` }} />
    {[[90, 90], [230, 240], [550, 90], [410, 240]].map(([x, y], index) => <g key={index} className={`loop-node ${index === active ? 'is-current' : ''}`}><circle className="node-halo" cx={x} cy={y} r="20" /><circle cx={x} cy={y} r="8" /></g>)}
  </svg>;
}

export function Approach() {
  const [active, setActive] = useState(0);
  const steps = useRef(null);
  const section = useRef(null);
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(Number(entry.target.dataset.step)); });
    }, { rootMargin: '-35% 0px -40% 0px', threshold: 0 });
    const visibility = new IntersectionObserver(entries => section.current?.classList.toggle('motion-visible', entries[0].isIntersecting));
    [...steps.current.children].forEach(step => observer.observe(step));
    visibility.observe(section.current);
    return () => { observer.disconnect(); visibility.disconnect(); };
  }, []);
  return <section className="growth-studio" id="approach" ref={section}><div className="wrap">
    <div className="studio-heading"><div><p className="eyebrow">THE INFINITY APPROACH</p><h2>A CLEAR DIRECTION.<br /><span className="outline-word">A CONTINUOUS LOOP.</span></h2></div><p>From your first brief to your next move.<br />Here’s how we work together.</p></div>
    <div className="growth-layout"><div className="growth-visual"><div className="growth-diagram"><div className="diagram-label"><span className="status-dot" /> GOOD GROWTH KEEPS MOVING</div><LoopGraphic active={active} /><span className="diagram-centre">∞<small>ONE CONNECTED APPROACH</small></span></div><div className="growth-caption" key={active}><span>{String(active + 1).padStart(2, '0')} / {growthSteps[active].label}</span><strong>{growthSteps[active].detail}</strong></div></div>
    <ol className="growth-steps" ref={steps}>{growthSteps.map((step, index) => <li data-step={index} className={`growth-step ${active === index ? 'is-active' : ''}`} key={step.name}><h3><button type="button" onClick={() => setActive(index)} aria-pressed={active === index}><span className="step-number">0{index + 1}</span>{step.name}<span className="step-arrow" aria-hidden="true">↗</span></button></h3><div className="step-copy"><h4>{step.title}</h4><p>{step.description}</p></div></li>)}</ol></div>
    <div className="growth-endnote"><span>DISCOVER → CREATE → CONNECT → REFINE</span><a href="#contact">Let’s find your starting point <span>↗</span></a></div>
  </div></section>;
}

const featureGroups = [
  [{ title: 'The content', indexes: [0, 1, 2] }, { title: 'The reach', indexes: [3] }],
  [{ title: 'The content', indexes: [0, 1, 2] }, { title: 'The reach', indexes: [3] }, { title: 'The direction & production', indexes: [4, 5] }],
  [{ title: 'The content', indexes: [0, 1] }, { title: 'The reach', indexes: [2, 3] }, { title: 'The direction', indexes: [4, 5, 6] }],
  [{ title: 'The digital presence', indexes: [0, 1] }, { title: 'The brand support', indexes: [2, 3] }, { title: 'The production & scope', indexes: [4, 5] }],
];

export function Pricing({ onSelect }) {
  return <section className="pricing-studio section wrap" id="plans"><div className="studio-heading"><div><p className="eyebrow"><span className="status-dot" /> YOUR AMBITION. YOUR PLAN.</p><h2>FIND YOUR<br /><span className="accent-word">NEXT GEAR.</span></h2></div><div className="pricing-intro"><p>A starting point for every stage.<br />Choose your pace. We’ll connect the dots.</p><span className="pricing-billing">MONTHLY PACKAGES / INR</span></div></div>
    <div className="pricing-grid">{plans.map((plan, index) => <article className={`pricing-card ${plan.featured ? 'pricing-featured' : ''} ${index === 3 ? 'pricing-custom' : ''}`} key={plan.name}>
      <div className="pricing-card-head"><span className="pricing-kicker">{['GET STARTED', 'BUILD MOMENTUM', 'GO FURTHER', 'MAKE IT YOURS'][index]}</span>{plan.featured && <span className="pricing-recommendation">OUR PICK <span>✦</span></span>}<div className="pricing-name"><h3>{plan.name}</h3><LoopGraphic active={index} /></div><p>{plan.description}</p><div className={`pricing-price ${index === 3 ? 'custom-price' : ''}`}><strong>{index === 3 ? <>₹20,000<span>–30,000</span></> : plan.price}</strong><span>per month{index === 3 ? ' · custom scope' : ''}</span></div></div>
      <button type="button" className={`button pricing-button ${plan.featured ? '' : 'button-outline'}`} data-plan={plan.name} onClick={() => onSelect(plan.name)}>{index === 3 ? 'Build your plan' : `Let’s ${plan.name.toLowerCase()}`}<span aria-hidden="true">↗</span></button>
      <div className="pricing-deliverables">{featureGroups[index].map(group => <div className="deliverable-group" key={group.title}><h4>{group.title}</h4><ul>{group.indexes.map(i => <li key={plan.features[i]}>{plan.features[i]}</li>)}</ul></div>)}</div>
      <div className="pricing-card-foot"><span>{['A consistent first presence.', 'More room for your ideas.', 'Creative meets campaign.', 'A scope built around you.'][index]}</span><span aria-hidden="true">∞</span></div>
    </article>)}</div>
    <p className="pricing-note">All packages are monthly. Ad spend, shoot requirements, and any platform fees are agreed separately. Verification depends on platform eligibility; enquiries and results vary.</p>
  </section>;
}
