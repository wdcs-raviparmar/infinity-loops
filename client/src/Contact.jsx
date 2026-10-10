import { useRef, useState } from 'react';
import { plans } from '../../shared/plans.js';
import { useCopy } from './i18n.jsx';

const demo = import.meta.env.VITE_DEMO_MODE === 'true';

export default function Contact({ plan, setPlan, nameInput, contactRef }) {
  const { c: copy } = useCopy();
  const t = copy.contact;
  const dialog = useRef(null);
  const form = useRef(null);
  const [enquiry, setEnquiry] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [reference, setReference] = useState('');
  const sent = status === 'sent';
  const brief = enquiry ? `INFINITY LOOPS — ENQUIRY BRIEF\n\nName: ${enquiry.name}\nEmail: ${enquiry.email}\nBrand: ${enquiry.business}\nPackage: ${enquiry.plan}\n\nGoals:\n${enquiry.goals}\n\n${sent ? `Enquiry saved. Reference: ${reference}` : 'Preview only. This enquiry has not been sent.'}` : '';

  function preview(event) {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget));
    Object.keys(values).forEach(key => { values[key] = values[key].trim(); });
    if (Object.values(values).some(value => !value)) {
      setError(t.errBlank);
      return;
    }
    setEnquiry(values);
    setError('');
    setStatus('idle');
    setReference('');
    dialog.current.showModal();
  }

  async function sendEnquiry() {
    if (status === 'sending' || sent || demo) return;
    setStatus('sending');
    setError('');
    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(enquiry),
        signal: AbortSignal.timeout(15000),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || t.errSave);
      if (!result.id) throw new Error(t.errConfirm);
      setReference(result.id);
      setStatus('sent');
      form.current.reset();
      setPlan('Not sure yet');
    } catch (failure) {
      setStatus('error');
      setError(failure.name === 'TimeoutError' ? t.errTimeout : failure instanceof SyntaxError || failure instanceof TypeError ? t.errNetwork : failure.message);
    }
  }

  function downloadBrief() {
    const url = URL.createObjectURL(new Blob([brief], { type: 'text/plain;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'infinity-loops-enquiry.txt';
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  return <section className="contact-section" id="contact" ref={contactRef}>
    <div className="wrap contact-inner">
      <div className="contact-copy"><p className="eyebrow">{t.eyebrow}</p><h2>{t.a}<br /><em>{t.em}</em></h2><p className="contact-lede">{t.lede}</p>
        <ol className="contact-steps">{t.steps.map((step, index) => <li key={step}><b>{String(index + 1).padStart(2, '0')}</b><span>{step}</span></li>)}</ol>
        <div className="contact-detail"><span>{t.preferEmail}</span><a href="mailto:hello@infinityloops.example">hello@infinityloops.example</a><small>{t.sample}</small></div></div>
      <form id="enquiry-form" ref={form} onSubmit={preview}><div className="form-heading"><h3>{t.formTitle}</h3></div>
        <div className="form-row"><label>{t.name}<input ref={nameInput} name="name" autoComplete="name" placeholder={t.pName} required maxLength={100} /></label><label>{t.email}<input name="email" type="email" autoComplete="email" placeholder={t.pEmail} required maxLength={200} /></label></div>
        <label>{t.business}<input name="business" autoComplete="organization" placeholder={t.pBusiness} required maxLength={150} /></label>
        <fieldset className="plan-chips"><legend>{t.interested}</legend><div>{['Not sure yet', ...plans.map(item => item.name)].map(name => <label key={name} className={plan === name ? 'chip is-on' : 'chip'}><input type="radio" name="plan" value={name} checked={plan === name} onChange={() => setPlan(name)} /><span>{name === 'Not sure yet' ? t.notSure : name}</span></label>)}</div></fieldset>
        <label>{t.goals}<textarea name="goals" rows={3} placeholder={t.pGoals} required maxLength={2000} /></label>
        {error && !dialog.current?.open && <p className="form-error" role="alert">{error}</p>}
        <button className="button" type="submit">{t.preview}</button>
        <p className="form-note">{demo ? t.noteDemo : t.noteLive}</p>
      </form>
    </div>
    <dialog ref={dialog} id="enquiry-dialog" aria-labelledby="dialog-title" onCancel={event => { if (status === 'sending') event.preventDefault(); }}>
      <button className="dialog-close" aria-label={t.dialogCloseAria} disabled={status === 'sending'} onClick={() => dialog.current.close()}>{t.close}</button>
      <p className="eyebrow">{t.dialogEyebrow}</p><h2 id="dialog-title">{sent ? t.titleSent : t.titleReady}</h2>
      <p role="status">{sent ? t.statusSent : demo ? t.statusDemo : t.statusReview}</p>
      <pre id="brief-preview">{brief}</pre>
      {error && <p className="form-error" role="alert">{error}</p>}
      {!demo && !sent && <button className="button" onClick={sendEnquiry} disabled={status === 'sending'}>{status === 'sending' ? t.sending : t.send}</button>}
      <button className={`button ${!demo ? 'button-outline download-button' : ''}`} id="download-brief" onClick={downloadBrief}>{t.download}</button>
    </dialog>
  </section>;
}
