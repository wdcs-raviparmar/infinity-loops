import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import FontLab from './FontLab.jsx';
import './style.css';
import './font-lab.css';

const page = window.location.pathname.replace(/\/$/, '') === '/fonts' ? <FontLab /> : <App />;
createRoot(document.getElementById('root')).render(<React.StrictMode>{page}</React.StrictMode>);
