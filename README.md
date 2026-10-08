# Infinity Loops — MERN

The existing agency design is now implemented with React, Vite, Express 5, Node.js, and MongoDB through Mongoose. React components handle navigation, pricing, enquiries, and the preview dialog. There is no raw-HTML injection.

## Requirements

- Node.js 22.12+ (tested on Node 24)
- MongoDB locally, via Docker Compose, or MongoDB Atlas

## Run locally

```sh
npm ci
cp .env.example .env
# If Docker is installed:
docker compose up -d
# Or set MONGODB_URI in .env to your existing database.
```

Start the API and React dev server in separate terminals:

```sh
npm run dev:server
npm run dev
```

Open http://localhost:5173. Vite proxies `/api` to the Node server on port 5000. The server requires a working database; it fails clearly instead of silently dropping enquiries. Contact details remain dummy information as requested.

## Production Node deployment

```sh
npm ci
npm run build
NODE_ENV=production npm start
```

Set `MONGODB_URI` and `PORT` securely on the Node hosting provider. Express serves both the React build and API on the same origin; no separate CORS configuration is needed. Use HTTPS at your hosting provider. The Docker Compose database is for local development, bound to loopback, and not a public production database. Its data persists in the `mongo-data` volume.

If deployed behind a reverse proxy, configure Express `trust proxy` for that provider's exact trusted proxy topology before relying on per-visitor rate limits. It is deliberately unset by default to prevent spoofed forwarded addresses. The current in-memory limiter is intended for one Node process; use a shared rate-limit store for multiple instances.

## Enquiries

Visitors preview their details and explicitly choose **Send my enquiry**. `POST /api/enquiries` validates and saves only `name`, `email`, `business`, `plan`, and `goals`, plus timestamps. Success appears only after MongoDB confirms the save. The API returns a reference ID, not submitted personal details. There is no public list endpoint. View records through your authenticated MongoDB tooling; no admin dashboard or email notifications are included.

The API enforces type and length validation, rejects unsupported fields, limits JSON payload size and submission rate, uses Helmet headers, and reports database failure without exposing credentials. Enquiry submission stores records; it does not send email. Browser previews and downloaded briefs stay local until the visitor presses Send.

## Existing private Sites preview

The current Sites host supports the React static frontend, not a traditional Node/MongoDB runtime. `npm run build:preview` uses `client/.env.preview` to keep that hosted form explicitly demo-only. The preview remains private at https://infinity-loops-digital.social196251.chatgpt.site.

For the full MERN application use the normal `npm run build` and `npm start` on a Node host with MongoDB. Do not use the preview build for a production enquiry service. Secrets belong in `.env` or the hosting provider, never a `VITE_*` variable.

## Checks

```sh
npm test
npm run build
```

Tests run the real Express API against a temporary real MongoDB process using `mongodb-memory-server`, covering persistence for every plan, validation, malformed JSON, rate limiting, privacy, and database outages. The first test run may download a MongoDB binary. The test database is discarded afterward and never uses `MONGODB_URI`.

## Structure

- `client/src/` — React components and original CSS design
- `client/public/` — favicon and static assets
- `shared/plans.js` — packages shared by frontend and server
- `server/` — Express API, Mongoose schema, server lifecycle, integration tests
- `.openai/hosting.json` — retained identity of the private frontend preview

Prices follow the supplied notes: ₹6,000, ₹10,000, ₹15,000, and ₹20,000–₹30,000 monthly. Confirm premium billing, external fees, and actual business contacts before public launch.
