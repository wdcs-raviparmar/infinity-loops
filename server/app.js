import express from 'express';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';
import mongoose from 'mongoose';
import { fileURLToPath } from 'node:url';
import { Enquiry, validateEnquiry } from './enquiry.js';

export function createApp() {
  const app = express();
  app.disable('x-powered-by');
  app.use(helmet({ contentSecurityPolicy: { directives: {
    'style-src': ["'self'", 'https://fonts.googleapis.com'],
    'font-src': ["'self'", 'https://fonts.gstatic.com'],
    'upgrade-insecure-requests': process.env.NODE_ENV === 'production' ? [] : null,
  } } }));
  // ponytail: in-memory limits suit one Node instance; use a shared store when scaling.
  app.use('/api/enquiries', rateLimit({
    windowMs: 15 * 60 * 1000, limit: 10, standardHeaders: 'draft-8', legacyHeaders: false,
    message: { error: 'Too many enquiries. Please try again in 15 minutes.' },
  }));
  app.use(express.json({ limit: '16kb' }));
  app.get('/api/health', (_request, response) => {
    const ready = mongoose.connection.readyState === 1;
    response.status(ready ? 200 : 503).json({ status: ready ? 'ok' : 'unavailable' });
  });
  app.post('/api/enquiries', async (request, response) => {
    const { error, value } = validateEnquiry(request.body);
    if (error) return response.status(400).json({ error });
    if (mongoose.connection.readyState !== 1) return response.status(503).json({ error: 'Enquiries are temporarily unavailable. Please try again later.' });
    try {
      const enquiry = await Enquiry.create(value);
      return response.status(201).json({ id: enquiry.id, message: 'Your enquiry has been saved.' });
    } catch {
      return response.status(503).json({ error: 'Your enquiry could not be saved. Please try again later.' });
    }
  });
  app.use('/api', (_request, response) => response.status(404).json({ error: 'Endpoint not found.' }));
  // Temporary: serves the SPA for the /theme comparison page. Remove with client/src/theme-preview.
  app.get('/theme', (_request, response) => response.sendFile(fileURLToPath(new URL('../dist/index.html', import.meta.url))));
  app.use(express.static(fileURLToPath(new URL('../dist', import.meta.url))));
  app.use((_request, response) => response.status(404).send('Page not found.'));
  app.use((error, _request, response, _next) => {
    const status = error.type === 'entity.too.large' ? 413 : error.type === 'entity.parse.failed' ? 400 : 500;
    response.status(status).json({ error: status === 413 ? 'The enquiry is too large.' : status === 400 ? 'Please send valid JSON.' : 'Something went wrong. Please try again later.' });
  });
  return app;
}
