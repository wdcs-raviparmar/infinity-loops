import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { copy, languages } from './copy.js';

const STORAGE_KEY = 'infinity-loops-lang';
const Context = createContext({ lang: 'en', setLang: () => {}, c: copy.en });

const initialLang = () => {
  const fromLink = new URLSearchParams(location.search).get('lang');
  if (copy[fromLink]) return fromLink;
  try { const saved = localStorage.getItem(STORAGE_KEY); if (copy[saved]) return saved; } catch { /* storage unavailable */ }
  return 'en';
};

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(initialLang);
  const setLang = next => {
    if (!copy[next]) return;
    setLangState(next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch { /* choice still applies this visit */ }
  };
  useEffect(() => {
    document.documentElement.lang = lang;
    const c = copy[lang];
    document.title = c.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', c.meta.description);
  }, [lang]);
  const value = useMemo(() => ({ lang, setLang, c: copy[lang] }), [lang]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export const useCopy = () => useContext(Context);
export { languages };
