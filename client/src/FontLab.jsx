import { useState } from 'react';
import BrandLogo from './BrandLogo.jsx';

const choices = [
  { id: 'manrope', name: 'Manrope', body: 'DM Sans', mood: 'Balanced & clear', note: 'The current direction. Friendly, polished, and easy to read.' },
  { id: 'space', name: 'Space Grotesk', body: 'Space Grotesk', mood: 'Creative & digital', note: 'More character in the details while staying professional.' },
  { id: 'sora', name: 'Sora', body: 'Sora', mood: 'Modern & geometric', note: 'Smooth, precise shapes with a confident technology feel.' },
  { id: 'barlow', name: 'Barlow Condensed', body: 'DM Sans', mood: 'Bold & editorial', note: 'Strong poster-like headlines paired with readable body copy.' },
  { id: 'jakarta', name: 'Plus Jakarta Sans', body: 'Plus Jakarta Sans', mood: 'Warm & premium', note: 'A softer modern voice that still feels structured and capable.' },
];

function savedChoice() {
  const current = document.documentElement.dataset.font;
  return choices.some(choice => choice.id === current) ? current : 'manrope';
}

export default function FontLab() {
  const [selected, setSelected] = useState(savedChoice);

  function choose(id) {
    setSelected(id);
    document.documentElement.dataset.font = id;
    try { localStorage.setItem('infinity-loops-font', id); } catch { /* Preview still works when storage is disabled. */ }
  }

  return <main className="font-lab">
    <header className="font-lab-header"><a href="/" aria-label="Back to Infinity Loops"><BrandLogo /></a><a className="font-lab-site-link" href="/">View full website <span>↗</span></a></header>
    <section className="font-lab-intro"><p className="eyebrow"><span className="status-dot" /> TEMPORARY TYPE LAB</p><h1>Find the voice<br />behind the <em>loop.</em></h1><p>Choose a type system below. It applies to the full website immediately and stays selected when you move between this page and the site.</p></section>
    <section className="font-options" aria-label="Font options">{choices.map((choice, index) => <article className={`font-option font-${choice.id} ${selected === choice.id ? 'is-selected' : ''}`} key={choice.id}>
      <button type="button" onClick={() => choose(choice.id)} aria-pressed={selected === choice.id}>
        <span className="font-number">0{index + 1}</span><span className="font-mood">{choice.mood}</span><span className="font-check" aria-hidden="true">{selected === choice.id ? '✓' : '↗'}</span>
        <strong>{choice.name}</strong><span className="font-sample">Good brands deserve a bigger loop.</span><span className="font-body">{choice.note}</span><small>HEADLINES: {choice.name.toUpperCase()} · BODY: {choice.body.toUpperCase()}</small>
      </button>
    </article>)}</section>
    <section className="font-lab-preview"><div><p className="eyebrow">LIVE WEBSITE SAMPLE</p><h2>Good brands<br />deserve a<br /><em>bigger loop.</em></h2></div><div><p>We turn your brand into the one they remember. Creative content, meaningful connections, and digital strategies that move you forward.</p><a className="button" href="/">See this font on the full site <span>↗</span></a></div></section>
    <footer className="font-lab-footer"><span>Your selection is saved in this browser.</span><span>Once you choose the winner, tell me and I’ll remove this page.</span></footer>
  </main>;
}
