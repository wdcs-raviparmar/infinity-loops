import { useRef, useState } from 'react';
import { plans } from '../../shared/plans.js';

const demo = import.meta.env.VITE_DEMO_MODE === 'true';

export default function Contact({ plan, setPlan, nameInput, contactRef }) {
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
      setError('Please complete every field with more than blank spaces.');
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
      if (!response.ok) throw new Error(result.error || 'Your enquiry could not be saved. Please try again.');
      if (!result.id) throw new Error('We could not confirm your enquiry. Please try again.');
      setReference(result.id);
      setStatus('sent');
      form.current.reset();
      setPlan('Not sure yet');
    } catch (failure) {
      setStatus('error');
      setError(failure.name === 'TimeoutError' ? 'The request timed out. We could not confirm whether your enquiry was saved.' : failure instanceof SyntaxError || failure instanceof TypeError ? 'We couldn’t reach the enquiry service. Please try again later.' : failure.message);
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
    <div className="wrap contact-inner"><div className="contact-copy"><p className="eyebrow">LET’S START SOMETHING GOOD</p><h2>Your next chapter?<br /><em>Let’s create it.</em></h2><p>Tell us a little about your brand.<br />We’ll find the right way to move it forward.</p><div className="contact-detail"><span>DROP US A LINE</span><a href="mailto:hello@infinityloops.example">hello@infinityloops.example ↗</a><small>Sample email · Replace with your business contact.</small></div><div className="contact-mark" aria-hidden="true">∞</div></div>
      <form id="enquiry-form" ref={form} onSubmit={preview}><div className="form-heading"><h3>Get into the loop.</h3><span>✳</span></div>
        <div className="form-row"><label>Your name<input ref={nameInput} name="name" autoComplete="name" placeholder="Alex Morgan" required maxLength={100} /></label><label>Work email<input name="email" type="email" autoComplete="email" placeholder="alex@yourbrand.com" required maxLength={200} /></label></div>
        <label>Brand / business name<input name="business" autoComplete="organization" placeholder="Your next big thing" required maxLength={150} /></label>
        <label>I’m interested in<select id="plan-select" name="plan" value={plan} onChange={event => setPlan(event.target.value)}><option value="Not sure yet">Let’s find the right fit</option>{plans.map(item => <option key={item.name} value={item.name}>{item.name} — {item.price} / month</option>)}</select></label>
        <label>A little about your goals<textarea name="goals" rows={3} placeholder="What would you love to achieve?" required maxLength={2000} /></label>
        {error && !dialog.current?.open && <p className="form-error" role="alert">{error}</p>}
        <button className="button" type="submit">Preview my enquiry <span>↗</span></button>
        <p className="form-note">{demo ? 'Demo form. Preview and download your brief; no enquiry is sent.' : 'Review your enquiry before sending. Your details will be saved so we can respond.'}</p>
      </form>
    </div>
    <dialog ref={dialog} id="enquiry-dialog" aria-labelledby="dialog-title" onCancel={event => { if (status === 'sending') event.preventDefault(); }}>
      <button className="dialog-close" aria-label="Close enquiry preview" disabled={status === 'sending'} onClick={() => dialog.current.close()}>×</button>
      <p className="eyebrow">YOUR NEXT CHAPTER</p><h2 id="dialog-title">{sent ? 'You’re in the loop.' : 'Your brief is ready.'}</h2>
      <p role="status">{sent ? 'Your enquiry has been saved successfully.' : demo ? 'This is a demo preview. Nothing has been sent.' : 'Review your details, then send your enquiry.'}</p>
      <pre id="brief-preview">{brief}</pre>
      {error && <p className="form-error" role="alert">{error}</p>}
      {!demo && !sent && <button className="button" onClick={sendEnquiry} disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send my enquiry'} <span>↗</span></button>}
      <button className={`button ${!demo ? 'button-outline download-button' : ''}`} id="download-brief" onClick={downloadBrief}>Download my brief <span>↓</span></button>
    </dialog>
  </section>;
}
