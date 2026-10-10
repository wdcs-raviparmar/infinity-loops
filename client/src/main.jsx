import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './tokens.css';
import { LangProvider } from './i18n.jsx';
import App from './App.jsx';
import './style.css';
import './type-scale.css';
import './glass.css';
import './media.css';

// Temporary theme comparison page. Delete this branch (and the theme-preview folder) to remove /theme.
const ThemePage = location.pathname === '/theme' ? lazy(() => import('./theme-preview/ThemePage.jsx')) : null;
createRoot(document.getElementById('root')).render(<React.StrictMode><LangProvider>{ThemePage ? <Suspense fallback={null}><ThemePage /></Suspense> : <App />}</LangProvider></React.StrictMode>);
