# Deploying Mexicano Blanco

This is a static Next.js export (`output: 'export'`). It needs no environment variables and no server.

## 1. Check the build locally

```
npm run build
npm run lint
```

Both must pass. The `out/` folder should contain `index.html`, `salsas.html`, `our-story.html`, `find-us.html`, `sitemap.xml`, `robots.txt`, and `icon.svg`. `node_modules`, `.next`, and `out` are in `.gitignore`.

## 2. GitHub repo

The repo currently has this remote:

```
origin  https://github.com/antimatterhut/mexicanoblanco.git
```

If that is the right account (ideally the business owner's, or one they control), push:

```
git push -u origin main
```

If you want a different account, either create a new empty repo on GitHub and repoint the remote:

```
git remote set-url origin https://github.com/<ACCOUNT>/mexicanoblanco.git
git push -u origin main
```

or use the GitHub CLI (logged in as the right account via `gh auth login`):

```
gh repo create <ACCOUNT>/mexicanoblanco --private --source=. --remote=origin --push
```

(Replace the existing `origin` first with `git remote remove origin` if using `gh repo create`.)

## 3. Import into Vercel

Ideally the Vercel project lives in the business owner's account, or a team they control, so they keep ownership of the site and domain.

1. Sign in at vercel.com (with the owner's account or team selected).
2. Click **Add New... > Project**.
3. Connect GitHub if prompted, and grant access to the `mexicanoblanco` repo.
4. Click **Import** next to the repo.
5. **Framework Preset:** Next.js (should auto-detect). Leave build and output settings at their defaults.
6. **Environment Variables:** none needed.
7. Click **Deploy**. When it finishes you get a `*.vercel.app` URL. Open it and click through every page.

Every later push to `main` redeploys automatically.

## 4. Custom domain

Add both domains, then pick one as primary.

1. In the Vercel project, go to **Settings > Domains**.
2. Add `mexicanoblanco.com`.
3. Add `www.mexicanoblanco.com`.
4. Choose the primary. This site's `SITE_URL` is `https://mexicanoblanco.com` (no `www`), so make the apex the primary and set `www.mexicanoblanco.com` to **redirect** to it. (Vercel offers this when you add the second domain.)
5. Vercel shows the DNS records each domain needs. **Copy the exact A and CNAME records shown on Vercel's Domains page.** Don't use values from memory or from other guides; Vercel's can differ by project.
6. Enter them at the registrar (GoDaddy, Namecheap, Squarespace Domains, Cloudflare, etc.):
   - Open the registrar's DNS management page for `mexicanoblanco.com` (often called "DNS", "DNS Records", or "Advanced DNS").
   - Add the **A** record for host `@` (the apex) with the value Vercel shows.
   - Add the **CNAME** record for host `www` with the value Vercel shows.
   - Remove any old conflicting `@` or `www` records (such as a parking page).
7. Back in Vercel, wait for both domains to show **Valid Configuration**. DNS can take minutes to hours. HTTPS certificates are issued automatically.

**Leave `shop.mexicanoblanco.com` free.** It will point to Shopify later. Do not add a wildcard (`*`) DNS record, or it can interfere with that subdomain.

## 5. Confirm SITE_URL

`SITE_URL` in `src/content/site.ts` must match the primary domain exactly. It is currently `https://mexicanoblanco.com`. If you pick `www` as primary instead, change it to `https://www.mexicanoblanco.com`, then commit and push. It drives the sitemap, robots.txt, canonical URLs and social previews.

## 6. Turning on the shop

When the Shopify store is ready:

1. Set `SHOP_URL` in `src/content/site.ts` (for example `https://shop.mexicanoblanco.com`).
2. Commit and push to `main`.
3. Vercel redeploys automatically. The "Coming soon" buttons become "Order" buttons that open the shop in a new tab.

Selling online usually requires a privacy policy, terms, and shipping/refund policies. Those normally live on the Shopify store, not on this site.
