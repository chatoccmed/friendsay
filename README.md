# Friendsay v2

> **📄 Picking up this project? Start here → [`docs/PROJECT-HANDOFF.md`](docs/PROJECT-HANDOFF.md)**
> That single document is the living handoff: current live state, architecture, how to add each page type, full P0–P3 backlog with blockers, known debt, and operational access. Read it before anything else. On Windows use `npm.cmd` (not `npm`).

Friendsay v2 is a premium friendly review platform for Thai shoppers and tourists in Thailand. The project is designed for GitHub + Cloudflare Pages with Astro.

## Commands

```bash
npm install
npm run dev
npm run build
npm run deploy:cloudflare
```

## Cloudflare Pages

Friendsay is configured as a static Astro site for Cloudflare Pages.

- Project name: `friendsay`
- Build command: `npm run build`
- Build output directory: `dist`
- Wrangler config: `wrangler.toml`
- Production branch: `main`

For the fastest first preview, build the project and upload the `dist` folder or a zip of it through Cloudflare Pages Direct Upload. For the long-term workflow, connect the GitHub repository to Cloudflare Pages so every push to the production branch deploys automatically.

## Content Principles

- Help people decide, not just click.
- Show who each product is for and who should skip it.
- Separate roundup reviews from deep single-product reviews.
- Keep affiliate disclosure visible and easy to understand.
- Use real review evidence before publishing buying recommendations.
