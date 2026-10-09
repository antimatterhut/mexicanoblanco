# Mexicano Blanco: Static Marketing Site Plan

Goal: a good-looking brand site (home, salsas, story, find us/contact) that works with NO checkout. Every "order" button is controlled by one setting, so when the business is legally ready and Shopify is set up, you flip one switch and the buttons point to the shop.

How to use this file:
1. `CLAUDE.md` is already in the project root (Part A is a copy of it for reference). Fill in the Brand section if you can; defaults are used otherwise.
2. Run the prompts in Part B one at a time, in order. Each phase ends with a passing build, a commit, and a browser checklist. Open the site and check it before moving on.
3. Fill in the "Things to gather" list in Part C as you go. Placeholders are fine until then.

---

## Part A: CLAUDE.md (already in the project root)

```markdown
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
```

---

## Part B: The prompts (run in order)

### Prompt 1: Scaffold, content model, design system

```
Read CLAUDE.md first and follow it.

Step 1. Scaffold
- Check `node -v` is 20.9 or newer; stop and tell me if not.
- This folder already contains .git, CLAUDE.md, and mexicano-blanco-static-site-plan.md, so create-next-app will refuse to run here. Move the two .md files to a temp location, run create-next-app non-interactively in "." with: TypeScript, Tailwind, ESLint, App Router, src/ directory, import alias "@/*", npm. Then move the two .md files back. Don't create a second git repo.
- In next.config set `output: 'export'` and `images: { unoptimized: true }`.
- Tell me which Next.js and Tailwind versions were installed.

Step 2. Content model in src/content/site.ts (typed, exported):
- `SITE_URL` = "https://mexicanoblanco.com"
- `SHOP_URL` = ""
- `business`: name, tagline, short description, email, instagramHandle, instagramUrl
- `socialLinks`: array of { label, href }
- `type Salsa` = { slug, name, tagline, description, heat (1–5), ingredients: string[], image: { src, alt }, shopPath?: string }
- `salsas`: 3 placeholders with heat levels 1, 3, and 5
- `type Location` = { name, kind: "market" | "shop" | "event", area?, schedule?, url? }
- `locations`: 2 placeholders
- `homeCopy`: heroHeadline, heroSubhead, whyPoints (3 × { title, body }), storyTeaser
- `storyCopy`: pullQuote, sections (3 × { heading, body }) for: where the name came from, how the recipes started, what makes the salsas different
- `heatLabel(heat)` helper: 1–2 = "Mild", 3 = "Medium", 4–5 = "Hot"
Mark every placeholder string per CLAUDE.md. Don't invent real-sounding facts.

Step 3. Placeholder images: create simple, on-brand SVGs in public/images/ (one hero, one per salsa, one story photo) with the image name written on them.

Step 4. Design system
- Pick a palette (primary, accent, dark, light, plus one surface color) and a display + body font pairing that fit the brand feel. Define them as tokens in @theme in globals.css. Every text/background pair you intend to use must meet WCAG AA; list the pairs and their contrast ratios in your summary.
- Add `scroll-behavior: smooth` (turned off under prefers-reduced-motion) and `scroll-margin-top` on sections so the sticky header doesn't cover anchor targets.

Step 5. Components in src/components/
- `Button`: variants primary / secondary, renders a Next Link or <a>, visible focus ring
- `Section`: consistent vertical padding, max width, optional id
- `SectionHeading`: eyebrow (optional), heading (level configurable), intro (optional)
- `OrderButton`: behaves exactly as described in CLAUDE.md "Shop switch"; accepts an optional `shopPath` but ignores it for now
- `Header`: sticky, text logo linking to /, links Salsas (/salsas), Our Story (/our-story), Find Us (/find-us), plus OrderButton. Below 768px it collapses to a menu button (client component) with aria-expanded and aria-controls; the menu closes on link click and on Escape, and focus stays usable.
- `Footer`: business name, social links, © current year
- Wire Header and Footer into the root layout with a "Skip to content" link.

Step 6. Routes: create stub pages for /, /salsas, /our-story, /find-us. Each has an h1 and a one-line "coming in a later phase" note. /find-us includes an empty section with id="contact" so OrderButton links work now.

Done when: build and lint pass, the header works at 375px and 1280px, and every nav link resolves. Commit as "Phase 1: scaffold and design system". Then give me run instructions and a browser checklist.
```

### Prompt 2: Home page

```
Read CLAUDE.md. Build the home page (src/app/page.tsx) using existing components and only content from src/content/site.ts. If you need a new piece of copy, add it to site.ts first.

New reusable component: `HeatMeter`, which shows `heat` filled chili icons out of 5 (inline SVG; unfilled ones muted), plus the text label from heatLabel(). Accessible name like "Heat: 3 out of 5 (Medium)"; the individual icons are aria-hidden.

New reusable component: `SalsaCard`, which shows image, name, tagline, and HeatMeter. The whole card links to /salsas#<slug>. Subtle hover/focus state (lift or border change, CSS only, disabled under prefers-reduced-motion).

Sections, in order:
1. Hero (contains the page's only h1): homeCopy.heroHeadline, heroSubhead, hero image (next/image, `priority`), OrderButton, and a secondary Button "Meet the salsas" linking to #salsas.
2. id="salsas": SectionHeading + responsive grid of SalsaCard from `salsas` (1 column at 375px, 2 at 768px, 3 at 1280px).
3. "Why Mexicano Blanco": the 3 homeCopy.whyPoints.
4. Story teaser: homeCopy.storyTeaser + Button to /our-story.
5. Closing CTA band in a contrasting brand color, with OrderButton.

No animation libraries. Give every next/image a `sizes` prop that matches the layout.

Done when: build and lint pass, nothing scrolls horizontally at 375px, and the "Meet the salsas" scroll lands below the sticky header. Commit as "Phase 2: home page". Give me a browser checklist.
```

### Prompt 3: Salsas page

```
Read CLAUDE.md. Build /salsas.

- h1 + short intro (from site.ts).
- One large section per salsa with id={slug}: image, name, tagline, description, HeatMeter, ingredients list (a real <ul>), and OrderButton with shopPath={salsa.shopPath}. Alternate image left/right on desktop; stack on mobile.
- Heat filter at the top: a small client component with buttons All / Mild / Medium / Hot (grouped with heatLabel()). Use aria-pressed on the active button. All salsas are rendered in the static HTML; the filter only hides and shows them, so it works for SEO and degrades acceptably without JS. Hide filter options with zero matching salsas. Show a live-region count like "Showing 2 salsas".
- Must handle 1 to 12 salsas with only content changes. Test this by temporarily adding 9 more placeholder salsas, checking layout and filter, then removing them before committing.

Done when: build and lint pass, links from home page cards land on the right salsa below the header, and the filter works by keyboard. Commit as "Phase 3: salsas page". Give me a browser checklist.
```

### Prompt 4: Our Story and Find Us / Contact

```
Read CLAUDE.md. Build two pages using existing layout and components. All copy comes from site.ts.

1. /our-story
- h1, a large story image, and storyCopy.pullQuote styled as a <blockquote> with brand styling.
- The 3 storyCopy.sections, each with an h2.
- A closing Button to /salsas.
- Keep every text as an obvious [PLACEHOLDER] with a `// TODO: real content from owner` comment in site.ts. Don't invent biography details.

2. /find-us
- h1 and a list of `locations` grouped by kind (Markets, Shops, Events). Skip empty groups. Show area, schedule, and a link only when present. If `locations` is empty, show a friendly "Follow us on Instagram for where we'll be next" message.
- A section with id="contact" (replace the stub): a mailto Button using business.email and an Instagram Button using business.instagramUrl. Leave a clearly marked comment block in the component showing where a form service (e.g. Formspree) would go later. Don't build a form now.
- Signup: add `SIGNUP_FORM_URL = ""` to site.ts. Build a `SignupBlock` component that renders nothing when it is empty. Don't show a non-working form.

Done when: build and lint pass, "Coming soon" buttons on every page land on the contact section, and both pages look right at 375px and 1280px. Commit as "Phase 4: story and find us". Give me a browser checklist.
```

### Prompt 5: SEO, accessibility, performance pass

```
Read CLAUDE.md. Do a quality pass across the whole site. Don't add dependencies.

SEO
- In the root layout set `metadataBase` from SITE_URL, a title template ("%s | Mexicano Blanco"), and a default description. Give each page its own title and description (put the strings in site.ts).
- Open Graph and Twitter card metadata. For the OG image, add src/app/opengraph-image.tsx using next/og with brand colors and the business name; confirm it is generated as a static file during `next build`. If it isn't compatible with static export in this Next version, fall back to a TODO for a 1200×630 PNG in public/ and tell me.
- src/app/icon.svg: a simple brand-colored favicon.
- src/app/sitemap.ts and src/app/robots.ts with `export const dynamic = "force-static"`, using SITE_URL. Confirm sitemap.xml and robots.txt appear in the out/ folder.
- JSON-LD: an `Organization` schema (not LocalBusiness, since there is no fixed address) in the root layout, with only name, url, email, and sameAs from socialLinks. Skip any field whose value is a placeholder or empty.

Accessibility (report what you found and fixed for each)
- Exactly one h1 per page, no skipped heading levels.
- Every image has meaningful alt text; decorative images use alt="".
- Recompute contrast for every text/background token pair actually used; fix anything below AA.
- Tab through every page: skip link, header, mobile menu, filter, buttons all reachable with a visible focus ring.
- prefers-reduced-motion is honored everywhere.

Performance
- Every next/image has a correct `sizes`; only the hero uses `priority`.
- Fonts use next/font with `display: "swap"` and no layout shift.

Also: a custom not-found page (src/app/not-found.tsx) in brand style with links home and to /salsas.

Done when: `npm run build` and `npm run lint` pass with zero errors and zero warnings, and out/ contains every page, sitemap.xml, robots.txt, and the icon. Commit as "Phase 5: quality pass". Then summarize changes and list everything I still need to supply (photos, copy, email, Instagram, domain, OG image if applicable). Suggest I run Lighthouse in Chrome DevTools on the deployed site.
```

### Prompt 6: Deploy

```
Read CLAUDE.md. Prepare for deployment; don't push or deploy anything without asking me first.

1. Run `npm run build` and confirm it passes and out/ looks complete. Confirm .gitignore excludes node_modules, .next, and out.
2. This repo has no remote. Ask whether I want you to create a GitHub repo with `gh` (and under whose account; ideally the business owner's) or whether I'll do it myself. Then give exact commands either way.
3. Give step-by-step instructions to import the repo into Vercel (framework preset: Next.js; no environment variables needed). Recommend the Vercel project live in the business owner's account or a team they control.
4. Custom domain: steps to add mexicanoblanco.com and www.mexicanoblanco.com in Vercel, and pick one as the primary with a redirect from the other. Don't quote DNS record values from memory. Tell me to copy the exact A/CNAME records Vercel's Domains page shows, and where to enter them at a typical registrar. Note that the shop subdomain (shop.mexicanoblanco.com) must be left free for Shopify later, so don't add a wildcard record.
5. Confirm SITE_URL in site.ts matches the primary domain.
6. Finish with a short "turning on the shop" note: set SHOP_URL in src/content/site.ts, commit, push; Vercel redeploys automatically.

Write these instructions to DEPLOY.md in the repo as well, and commit as "Phase 6: deploy docs".
```

### Later (when Shopify is ready)

```
Read CLAUDE.md. Turn on the shop.
- Set SHOP_URL in src/content/site.ts to <SHOPIFY URL I'LL PASTE>.
- Update OrderButton: if the salsa has `shopPath` (a Shopify product handle path like "/products/verde-picante"), link to SHOP_URL + shopPath, joined safely with no double slashes; otherwise link to SHOP_URL. Label becomes "Order".
- Ask me for each salsa's product handle, then fill in shopPath.
- Check every OrderButton across all pages and the header, run build and lint, and commit.
- Remind me that selling online usually needs a privacy policy, terms, and shipping/refund policies. Those normally live on the Shopify store, not this site.
```

---

## Part C: Things to gather from your friend

- Brand: logo file, colors, vibe words, any existing packaging photos
- Every salsa: name, one-line tagline, longer description, heat level (1-5), ingredients, a good photo
- Alt-text descriptions for the photos (or write them yourself)
- His story: where the name "Mexicano Blanco" came from, how he started, what makes it different
- Where people can find him: markets, shops, events, Instagram handle
- Contact email
- Whether he wants a mailing list (decides whether `SIGNUP_FORM_URL` gets used)
- Domain: has he bought mexicanoblanco.com yet? (He should buy it in his own name.)
- Whose name the GitHub and Vercel accounts go under (ideally his)

## Tips

- Check each prompt's result in the browser before running the next one. Small steps are easier to fix.
- If something looks off, tell Claude Code what you see ("the cards overlap on mobile") rather than what to change.
- Real photos matter more than any code. Good, bright, consistent photos of the jars will do more for this site than anything else.
- Keep legal and shipping claims off the site until he has sorted out licensing and where he's allowed to sell.
