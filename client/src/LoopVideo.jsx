import { useEffect, useRef } from 'react';

// Muted looping video that only plays while on screen, and never when the visitor prefers reduced motion
// or has pressed "Pause motion". Falls back to the first frame (preload="metadata").
export default function LoopVideo({ src, label, paused = false, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const video = ref.current;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    let visible = false;
    const sync = () => {
      if (visible && !paused && !reduced.matches) video.play().catch(() => {});
      else video.pause();
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); }, { rootMargin: '150px' });
    observer.observe(video);
    reduced.addEventListener('change', sync);
    return () => { observer.disconnect(); reduced.removeEventListener('change', sync); };
  }, [paused]);
  return <video ref={ref} className={className} src={src} muted loop playsInline preload="metadata" disablePictureInPicture
    {...(label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true, tabIndex: -1 })} />;
}
