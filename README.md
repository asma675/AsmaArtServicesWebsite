# Asma Ahmed — Art • Henna • Photography

A Vite + React + Tailwind single-page site with framer-motion animations and glow styling.

## Local dev

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Static build will be in `dist/`.

## Deploy to Vercel

1. Create a Vercel account and install the CLI:
   ```bash
   npm i -g vercel
   ```
2. From the project folder, run:
   ```bash
   vercel
   ```
   - When asked for framework, choose **Vite** (or let Vercel auto-detect).
   - Accept `build` = `vite build`, output = `dist`.
3. For production deploys:
   ```bash
   vercel --prod
   ```

This repo includes a `vercel.json` that:
- Uses the static-build for Vite
- Adds SPA fallback so deep links route to `index.html`
- Sets long-term cache headers for static assets
