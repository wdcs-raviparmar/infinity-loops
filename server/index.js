import mongoose from 'mongoose';
import { createApp } from './app.js';

const uri = process.env.MONGODB_URI;
const port = Number(process.env.PORT || 5000);
if (!uri) {
  console.error('MONGODB_URI is required. Copy .env.example to .env and configure MongoDB.');
  process.exit(1);
}
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  console.error('PORT must be an integer from 1 to 65535.');
  process.exit(1);
}
try {
  await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
} catch {
  console.error('Could not connect to MongoDB. Check MONGODB_URI, credentials, and database access.');
  process.exit(1);
}
const server = createApp().listen(port, () => console.log(`Infinity Loops running at http://localhost:${port}`));
server.on('error', async () => {
  console.error('The HTTP server could not start. Check that PORT is available.');
  await mongoose.disconnect();
  process.exitCode = 1;
});
let closing = false;
function shutdown() {
  if (closing) return;
  closing = true;
  const timeout = setTimeout(() => process.exit(1), 10000);
  timeout.unref();
  server.close(async () => { await mongoose.disconnect(); clearTimeout(timeout); });
}
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
