# Security Best Practices Report — hello-world-factory

Date: 2026-02-05

## Executive Summary
The codebase is small and clean, with a minimal Express API and a Vite + React frontend. The primary security gaps are missing baseline hardening on the backend (security headers, explicit body limits, CORS allowlist) and missing browser-side defensive headers (CSP and related headers at the edge). There are no obvious injection sinks or auth/session features in the current code, which keeps the risk surface low. The findings below focus on security posture hardening and safe defaults as the project grows.

## Critical
None found.

## High
None found.

## Medium

**M-001 — EXPRESS-HEADERS-001: Missing security headers (Helmet/CSP) on backend**
- Location: `backend/server.js` lines 1-23
- Evidence:
  ```js
  const app = express();
  ...
  app.use(cors());
  app.use(express.json());
  ```
- Impact: Without common security headers, the API lacks baseline protections like `X-Content-Type-Options` and clickjacking defenses; if the API ever serves HTML or is proxied through a browser-accessible origin, this raises exposure to MIME sniffing and framing attacks.
- Fix: Add `helmet()` early in middleware order and configure as needed. If CSP is handled at the edge, document it.
- Mitigation: If headers are set at a reverse proxy/CDN, verify and document them there.
- False positive notes: If the API is strictly consumed server-to-server and never via browsers, risk is lower but still a recommended baseline.

**M-002 — EXPRESS-CORS-001: Overly permissive CORS**
- Location: `backend/server.js` line 7
- Evidence:
  ```js
  app.use(cors());
  ```
- Impact: Default CORS reflects permissive behavior; if the API adds cookies or sensitive endpoints later, it can unintentionally expose data cross-origin.
- Fix: Replace with an explicit allowlist (e.g., only your frontend origin(s)).
- Mitigation: Keep public endpoints read-only and avoid credentialed cookies unless required.
- False positive notes: If the API is intentionally public and never uses cookies or secrets, permissive CORS is less risky but still unnecessary.

**M-003 — REACT-HEADERS-001 / JS-CSP-001: No CSP or security headers visible for the frontend**
- Location: `frontend/index.html` lines 1-11 (no CSP meta tag); no server/edge config in repo
- Evidence:
  ```html
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello World Factory</title>
  </head>
  ```
- Impact: Without CSP and basic headers, the SPA lacks defense-in-depth against XSS and clickjacking.
- Fix: Add CSP and other headers at the edge/server (preferred). If only static hosting is available, add a CSP `<meta http-equiv>` early in `<head>` (with limitations).
- Mitigation: Keep the app free of dangerous DOM sinks (currently true).
- False positive notes: If headers are set by CDN/edge (not visible here), verify at runtime and document them.

## Low

**L-001 — EXPRESS-INPUT-001: JSON body limit not explicit**
- Location: `backend/server.js` line 8
- Evidence:
  ```js
  app.use(express.json());
  ```
- Impact: The default limit is implicit; large bodies can increase memory pressure and DoS risk over time.
- Fix: Set an explicit limit (e.g., `express.json({ limit: "100kb" })`) based on expected payload size.
- Mitigation: Use reverse proxy limits for max body size.
- False positive notes: Express has a default limit, but explicit limits are preferred.

**L-002 — EXPRESS-FINGERPRINT-001 / EXPRESS-ERROR-001: Missing `x-powered-by` disable and custom error/404 handlers**
- Location: `backend/server.js` lines 1-23
- Evidence: No `app.disable('x-powered-by')`, no custom 404 or error middleware.
- Impact: Minor fingerprinting and less control over error responses; in production this can leak extra detail if `NODE_ENV` is misconfigured.
- Fix: Disable `x-powered-by` and add a simple 404 + error handler that returns generic messages in production.
- Mitigation: Ensure `NODE_ENV=production` in production.
- False positive notes: If this service is always behind a gateway that normalizes errors and headers, impact is lower.

**L-003 — REACT-SRI-001 / JS-SUPPLY-001: External font loaded without integrity pinning**
- Location: `frontend/src/About.tsx` lines 213-217
- Evidence:
  ```tsx
  <style>
    {`@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap');
  ```
- Impact: External CSS is a supply-chain risk; if the resource changes, it can affect rendering or be abused.
- Fix: Self-host the font or load via `<link rel="stylesheet">` with SRI (if pinned) where feasible.
- Mitigation: Restrict CSP `style-src` and `font-src` to trusted origins.
- False positive notes: For simple marketing pages this is common and usually acceptable, but still a risk.

## Informational / Quality Improvements (Non-security)
- Consider environment-based configuration for `PORT` and API base URL instead of hard-coded values.
- Add basic request logging and structured error logging for operational visibility.
- Add linting/formatting and minimal tests (smoke tests for endpoints).
- Prefer `npm ci` in Docker builds for reproducible installs.

---
If you want, I can implement the highest-impact fixes (Helmet + CORS allowlist + explicit body limits + basic error handlers) in a follow-up.
