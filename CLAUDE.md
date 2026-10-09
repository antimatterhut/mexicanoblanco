# Mexicano Blanco: Marketing Site

## What this is
A static marketing website for Mexicano Blanco, a small salsa business. It is for branding and showing the salsas. It does NOT process payments, orders, or refunds. Selling will happen later on a separate Shopify store. Until then, order buttons show a "coming soon" state.

## Stack
- Next.js (App Router, latest stable) + TypeScript, npm
- Tailwind CSS (v4: tokens live in `@theme` in `src/app/globals.css`)
- Static export: `output: 'export'` and `images: { unoptimized: true }` in next.config. No server code, API routes, middleware, or database.
- Deployed on Vercel

## Content rules
- ALL business content and copy lives in `src/content/site.ts`: business info, SITE_URL, SHOP_URL, salsas, locations, page copy. Components import from it and never hardcode copy, names, emails, or URLs.
- Placeholder copy is marked with `[PLACEHOLDER]` in the string and a `// TODO:` comment above it.
- Never invent facts about the founder, the business history, recipes, awards, sourcing, or locations. Use obvious placeholders.
- No health claims ("healthy", "low-fat", "all-natural"), no shipping or legal claims, no "authentic"/"traditional" claims unless the owner supplies them. Copy sticks to flavor, heat, ingredients, and story.

## Shop switch
- `SHOP_URL` in `src/content/site.ts`. Empty string = not selling yet.
- Only `OrderButton` reads it. Empty: label "Coming soon", links to `/find-us#contact`. Set: label "Order", opens SHOP_URL in a new tab with `rel="noopener noreferrer"`.

## Design and code conventions
- Mobile-first. Check at 375px, then 768px and 1280px.
- Colors and fonts are Tailwind theme tokens. No hex values or arbitrary color classes in components.
- Fonts via `next/font/google`, exposed as CSS variables and mapped in `@theme`.
- Images via `next/image` with meaningful alt text (alt text lives in site.ts). Placeholders are local SVGs in `public/images/`; never hotlink external images.
- Accessibility: semantic landmarks, one h1 per page, visible focus rings, WCAG AA contrast, works by keyboard alone, respects `prefers-reduced-motion`.
- No extra npm dependencies without asking. Icons are inline SVG components.
- Interactive pieces (mobile menu, salsa filter) are small `"use client"` components; everything else stays a server component.

## Brand
- Name: Mexicano Blanco
- Feel: [FILL IN, default if blank: warm, bold, playful, handmade]
- Colors: [FILL IN, default if blank: you choose a palette that fits; document it in globals.css]
- Logo: [FILL IN, default if blank: text logo in the display font]

## How to work
- Do one phase (one prompt) at a time. Don't start the next phase's work.
- A phase is done when `npm run build` and `npm run lint` pass with no errors. Then commit with message `Phase N: <summary>`.
- End each phase with: what changed, how to run it (`npm run dev`), and a short checklist of what I should look at in the browser.
- If something in a prompt conflicts with this file, follow this file and tell me about the conflict.
