import { after, before, test } from 'node:test';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { createApp } from './app.js';
import { Enquiry } from './enquiry.js';
import { planNames } from '../shared/plans.js';

let mongo, server, origin;
const valid = { name: ' Alex Demo ', email: 'ALEX@example.com', business: 'Demo Studio', goals: 'Build a consistent social presence.', plan: 'Grow' };
const post = body => fetch(`${origin}/api/enquiries`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
before(async () => {
  mongo = await MongoMemoryServer.create();
  await mongoose.connect(mongo.getUri(), { serverSelectionTimeoutMS: 5000 });
  server = createApp().listen(0, '127.0.0.1');
  await new Promise(resolve => server.once('listening', resolve));
  origin = `http://127.0.0.1:${server.address().port}`;
});
after(async () => {
  if (server) { server.closeAllConnections(); await new Promise(resolve => server.close(resolve)); }
  await mongoose.disconnect();
  await mongo?.stop();
});

test('all package choices persist to MongoDB; responses do not expose personal details', async () => {
  for (const plan of planNames) {
    const response = await post({ ...valid, plan });
    assert.equal(response.status, 201);
    const body = await response.json();
    assert.deepEqual(Object.keys(body).sort(), ['id', 'message']);
    const saved = await Enquiry.findById(body.id).lean();
    assert.equal(saved.name, 'Alex Demo');
    assert.equal(saved.email, 'alex@example.com');
    assert.equal(saved.plan, plan);
    assert.ok(saved.createdAt instanceof Date);
  }
});

test('invalid data and operator injection cannot create records', async () => {
  const beforeCount = await Enquiry.countDocuments();
  for (const body of [{ ...valid, email: { $gt: '' } }, { ...valid, goals: ' ' }, { ...valid, plan: 'Free' }, { ...valid, isAdmin: true }]) {
    assert.equal((await post(body)).status, 400);
  }
  assert.equal(await Enquiry.countDocuments(), beforeCount);
});

test('malformed JSON fails safely and the endpoint limits repeated requests', async () => {
  const malformed = await fetch(`${origin}/api/enquiries`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{oops' });
  assert.equal(malformed.status, 400);
  assert.match((await malformed.json()).error, /valid JSON/);
  const limited = await post(valid);
  assert.equal(limited.status, 429);
  assert.ok(limited.headers.get('retry-after'));
});

test('there is no public enquiry listing and health reflects database loss', async () => {
  assert.equal((await fetch(`${origin}/api/health`)).status, 200);
  // Use a fresh app instance to keep this independent of the submission limiter.
  const second = createApp().listen(0, '127.0.0.1');
  await new Promise(resolve => second.once('listening', resolve));
  const url = `http://127.0.0.1:${second.address().port}`;
  try {
    assert.equal((await fetch(`${url}/api/enquiries`)).status, 404);
    await mongoose.disconnect();
    assert.equal((await fetch(`${url}/api/health`)).status, 503);
    const response = await fetch(`${url}/api/enquiries`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(valid) });
    assert.equal(response.status, 503);
    assert.match((await response.json()).error, /temporarily unavailable/);
  } finally {
    second.closeAllConnections();
    await new Promise(resolve => second.close(resolve));
  }
});
