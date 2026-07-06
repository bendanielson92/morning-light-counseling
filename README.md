# Morning Light Counseling — Website

Static site for [Morning Light Counseling](https://morninglightcounselingservices.com) (Manheim, PA), built with **Astro 6 + Tailwind CSS 4 + Keystatic CMS**, deployed on **Vercel**.

- Billy edits all content himself at `/keystatic` (the control panel).
- Content lives in this repo (`src/content/`) as JSON/Markdoc — every CMS save is a git commit, and every commit auto-deploys.
- Contact form posts to a serverless endpoint (`src/pages/api/contact.ts`) that emails Billy via Resend.

## Local development

```bash
npm install
npm run dev        # site at localhost:4321, control panel at localhost:4321/keystatic
npm run build      # production build
```

In local dev the control panel edits files directly on disk (no login needed).

## Project layout

| Path | What it is |
|------|------------|
| `keystatic.config.ts` | CMS schema — what Billy can edit |
| `src/content/singletons/*.json` | Page content (settings, homepage, about, etc.) |
| `src/content/services/*.mdoc` | The six condition pages (Keystatic collection) |
| `src/content/posts/*.mdoc` | Blog posts (one draft seeded; blog stays hidden until a post is published) |
| `src/pages/` | Routes; `api/contact.ts` is the form endpoint |
| `src/styles/global.css` | Design tokens (brand gold/forest/cream, fonts, buttons) |
| `docs/BILLY-GUIDE.md` | One-page editing guide for Billy |
| `docs/FEEDBACK-PASTEL.md` | How Billy requests visual tweaks (Pastel review loop) |
| `docs/LAUNCH-CHECKLIST.md` | Everything left before DNS cutover |

## Deploying (one-time setup)

1. **GitHub**: create a repo (e.g. `morning-light-site`), push this project to it.
2. **Vercel**: import the repo at vercel.com/new. Framework preset: Astro. No special settings needed.
3. **Contact form**: create a free [Resend](https://resend.com) account → verify the domain `morninglightcounselingservices.com` (add their DNS records) → create an API key. In Vercel → Project → Settings → Environment Variables, set:
   - `RESEND_API_KEY` — the key
   - `CONTACT_FROM_EMAIL` — e.g. `inquiries@morninglightcounselingservices.com` (must be on the verified domain)
   - `CONTACT_TO_EMAIL` — `billy@morninglightcounselingservices.com`
   - Until the domain is verified you can test with `CONTACT_FROM_EMAIL=onboarding@resend.dev` (delivers only to your own Resend account email).
4. **Control panel (GitHub mode)**: set `PUBLIC_KEYSTATIC_GITHUB_REPO=bendanielson92/morning-light-counseling` in Vercel env vars and redeploy. Then visit `https://<site>/keystatic` — Keystatic will walk you through creating its GitHub App (one guided click-through) and will give you the three remaining env vars to paste into Vercel: `KEYSTATIC_GITHUB_CLIENT_ID`, `KEYSTATIC_GITHUB_CLIENT_SECRET`, `KEYSTATIC_SECRET`. Redeploy once more.
5. **Billy's access**: create Billy a free GitHub account, add him as a collaborator on the repo, and install the Keystatic GitHub App for him. After that he just bookmarks `his-site.com/keystatic` and logs in with GitHub.
6. **DNS cutover**: in Vercel add the domain `morninglightcounselingservices.com`, then point the domain's DNS (A/CNAME per Vercel's instructions) away from WordPress. The old WordPress slugs (`/mens-counseling`, `/about`, `/what-to-expect`) are preserved; `/contact-us` 301-redirects to `/contact`.

## Notes

- `package.json` pins `vite` via `overrides` to Astro 6's bundled version — @astrojs/react would otherwise hoist Vite 8 and break the build (rolldown binding mismatch). Remove the override only when upgrading Astro itself.
- Tailwind runs through `@tailwindcss/postcss` (not the Vite plugin) for the same compatibility reason.
- Compliance pages: `/privacy-policy`, `/good-faith-estimate` (No Surprises Act), `/accessibility`. The footer on every page carries the 988/911 crisis notice and the license line (edit it in Site Settings).
- No testimonials by design — counseling ethics (ACA) prohibit soliciting them.
