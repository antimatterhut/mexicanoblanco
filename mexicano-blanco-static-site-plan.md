# Mexicano Blanco: Static Marketing Site Plan

Goal: a good-looking brand site (home, salsas, story, find us/contact) that works with NO checkout. Every "order" button is controlled by one setting, so when the business is legally ready and Shopify is set up, you flip one switch and the buttons point to the shop.

How to use this file:
1. Create an empty project folder and open it in Claude Code.
2. Create `CLAUDE.md` in the root and paste in Part A.
3. Run the prompts in Part B one at a time, in order. Open the site in your browser and check it after each one before moving on.
4. Fill in the "Things to gather" list in Part C as you go. Placeholders are fine until then.

---

## Part A: CLAUDE.md (paste into the project root)

```markdown
# Mexicano Blanco: Marketing Site

## What this is
A static marketing website for Mexicano Blanco, a small salsa business run by a friend of mine. The site is for branding and showing off the salsas. It does NOT process payments, orders, or refunds. Selling will happen later on a separate Shopify store (shop.mexicanoblanco.com). Until that exists, order buttons show a "coming soon" state.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Static export (`output: 'export'`), no server code, no database
- Deployed on Vercel

## Conventions
- Mobile-first. Test at 375px wide before desktop.
- All business content (salsa names, descriptions, heat levels, contact info, social links, shop URL) lives in `src/content/site.ts`. Components never hardcode this content.
- The shop link is controlled by `SHOP_URL` in `src/content/site.ts`. If it is empty, order buttons show "Coming soon" and link to the contact/signup section. If set, they link to that URL.
- Design tokens (colors, fonts) live in the Tailwind config. Never hardcode hex values in components.
- Use `next/image` for images and always write meaningful alt text.
- Accessible by default: semantic HTML, visible focus states, good color contrast, keyboard navigable.
- Keep it simple. No extra libraries unless I ask. No payments, auth, or database code.
- Do not make health claims ("healthy", "low-fat", etc.) or shipping/legal claims anywhere in the copy. Keep copy to flavor, heat, ingredients, and story.

## Brand
- Business name: Mexicano Blanco
- Feel: [FILL IN: e.g. warm, bold, authentic, playful]
- Colors: [FILL IN or "pick a palette that fits"]
- Logo: [FILL IN: file path or "text logo for now"]

## How I work
- Make one phase of changes at a time and tell me how to run and check it.
- Ask me before making big structural decisions.
```

---

## Part B: The prompts (run in order)

### Prompt 1: Scaffold and design system

```
Read CLAUDE.md first. Create a new Next.js project (App Router, TypeScript, Tailwind) in the current folder, configured for static export.

Set up:
- A clean folder structure (src/app, src/components, src/content, public/images)
- Tailwind theme tokens for brand colors and two fonts (a display font for headings, a readable body font), loaded with next/font. Suggest a palette and font pairing that fits the brand feel in CLAUDE.md and explain your choices briefly.
- A shared layout with a sticky header (logo text "Mexicano Blanco", links: Salsas, Our Story, Find Us, and an "Order" button) and a footer (name, social links, copyright). The header must collapse into a working mobile menu.
- Reusable components: Button, Section (consistent spacing and max width), and a SectionHeading.
- src/content/site.ts with placeholder data: business info, social links, an empty SHOP_URL, and 3 placeholder salsas (name, tagline, heat level 1-5, ingredients list, image path).
- An "OrderButton" component that reads SHOP_URL: if empty it shows "Coming soon" and links to #contact; if set it links to the shop in a new tab.

Don't build the real pages yet; a placeholder home page is fine. End by telling me how to run it locally.
```

### Prompt 2: Home page

```
Build the home page using the existing components and content in src/content/site.ts.

Sections, in order:
1. Hero: big headline, one-line tagline, a strong photo area (use a placeholder image for now), and the OrderButton plus a secondary "Meet the salsas" button that scrolls to the next section.
2. Featured salsas: a responsive grid of cards generated from the content file. Each card shows image, name, tagline, and a heat-level indicator (e.g. 1-5 chili icons, built as a small reusable component). Cards link to the Salsas page.
3. A short "why Mexicano Blanco" band: three short points (placeholder text I'll replace).
4. A brief story teaser with a link to Our Story.
5. A closing call-to-action band with the OrderButton.

Make it look polished and mobile-first, with subtle hover states. No animation libraries; CSS only.
```

### Prompt 3: Salsas page

```
Build /salsas. Show every salsa from src/content/site.ts as a large, well-designed section or card with: image, name, tagline, longer description, heat level indicator, ingredients, and an OrderButton.

Add a small filter or jump-nav at the top (e.g. by heat level: Mild / Medium / Hot) that works without any heavy libraries. If that's too complex for static export, use anchor links instead and tell me why.

The page should scale cleanly from 3 salsas to 12 without any code changes, only content changes.
```

### Prompt 4: Our Story and Find Us / Contact

```
Build two pages:

1. /our-story: a layout for the founder's story with a large photo area, pull-quote styling, and a few short sections (where the name came from, how the recipes started, what makes the salsas different). Use clearly marked placeholder text I can replace, and add a [TODO] comment at each spot that needs real content.

2. /find-us: where to find Mexicano Blanco (markets, shops, events) as a simple list that comes from the content file, plus a contact section with an id of "contact". For the contact form, don't build a backend. Use a mailto link and a link to Instagram for now, and leave a clearly commented spot where a form service (like Formspree) could be dropped in later. Also add an optional email-signup block that is just a placeholder with a TODO.

Both pages should reuse the existing layout and components.
```

### Prompt 5: SEO, accessibility, and performance pass

```
Do a quality pass across the whole site:
- Add proper metadata (title, description, Open Graph and Twitter card) per page, plus a favicon and a sitemap and robots file that work with static export.
- Add LocalBusiness / Organization structured data (JSON-LD) using content from the content file. Do not include anything I haven't provided.
- Check headings structure, alt text, color contrast, focus states, and keyboard navigation. Fix anything wrong.
- Confirm images use next/image with sensible sizes, and that fonts don't cause layout shift.
- Add a custom 404 page that matches the brand.
- Run a production build and fix any errors or warnings.

Summarize what you changed and anything I still need to supply (real photos, real copy, domain).
```

### Prompt 6: Deploy

```
Prepare the project for deployment on Vercel as a static site. Confirm `next build` succeeds, tell me the exact steps to connect the repo to Vercel, and list what to do to add the custom domain mexicanoblanco.com (and what DNS records to expect). Remind me how to turn on the shop later by setting SHOP_URL in src/content/site.ts.
```

### Later (when Shopify is ready)

```
Set SHOP_URL in src/content/site.ts to the Shopify store link. Update the OrderButton so each salsa card can link directly to its own product page on the shop: add an optional `shopPath` field per salsa in the content file, and fall back to the main shop URL if it's missing.
```

---

## Part C: Things to gather from your friend

- Brand: logo file, colors, vibe words, any existing packaging photos
- Every salsa: name, one-line tagline, longer description, heat level (1-5), ingredients, a good photo
- His story: where the name "Mexicano Blanco" came from, how he started, what makes it different
- Where people can find him: markets, shops, events, Instagram handle
- Contact email
- Domain: has he bought mexicanoblanco.com yet? (He should buy it in his own name.)

## Tips

- Check each prompt's result in the browser before running the next one. Small steps are easier to fix.
- If something looks off, tell Claude Code what you see ("the cards overlap on mobile") rather than what to change.
- Real photos matter more than any code. Good, bright, consistent photos of the jars will do more for this site than anything else.
- Keep legal and shipping claims off the site until he has sorted out licensing and where he's allowed to sell.
