# Deployment Guide

## Static Hosting

This Vite app builds to static files in `dist/` and can be deployed to Netlify, Vercel, GitHub Pages, Cloudflare Pages, or any static host.

## Build Command

```bash
npm run build
```

## Output Directory

```text
dist
```

## Environment Variables

No environment variables are required for the current implementation.

## SPA Routing

Because the app uses client-side routing, configure your host to serve `index.html` for unknown routes.

Netlify example:

```text
/* /index.html 200
```

Vercel handles this automatically for Vite projects.
