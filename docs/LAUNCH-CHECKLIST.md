# Pre-Launch Checklist

## Needs from Billy (content)

- [ ] **PA license number** → edit the license line in Site Settings (currently says "[add license number]"). PA requires it on advertising; it also builds trust.
- [ ] **Full last name** for the license line and About page (site currently says "Billy" only, matching the old site).
- [ ] **Office hours** (optional) → Site Settings; hidden until filled in.
- [ ] **Session length** (optional) → Site Settings; hidden until filled in.
- [ ] **Photos**: headshot + office photos (current ones are pulled from the old site as placeholders). Per the discovery form, a proper photo session is planned — the site works fine launching with these and swapping later.
- [ ] **Review all copy** — every page was rewritten in a new voice. Billy should read: Homepage, Men's Counseling, all six counseling pages, About, What to Expect, and the FAQs. Everything is editable in the control panel if he wants different wording.
- [ ] **Approve the Good Faith Estimate page** — it states the $125 rate and the standard No Surprises Act language. His billing/EHR provider may also have GFE templates for the written estimates he hands to actual clients.

## Technical setup (Ben)

- [ ] Create GitHub repo + push (see README)
- [ ] Vercel project + env vars (Resend + Keystatic)
- [ ] Verify domain in Resend; switch CONTACT_FROM_EMAIL off onboarding@resend.dev
- [ ] Send a real test through the contact form; confirm it lands in Billy's inbox and reply-to works
- [ ] Keystatic GitHub mode: log in as Billy, make a test edit, confirm auto-deploy
- [ ] Add domain in Vercel + DNS cutover
- [ ] After cutover: submit sitemap in Google Search Console (`/sitemap-index.xml`), request re-crawl
- [ ] Update the website link on the Psychology Today profile if the URL structure matters to any deep links
- [ ] Cancel/downgrade the old WordPress hosting once DNS has fully propagated

## Verified before handoff (done)

- [x] All 12 routes render with correct titles/H1s
- [x] Contact form: valid → thank-you, invalid → error message, honeypot silently dropped
- [x] Form works with JavaScript disabled (plain HTML POST)
- [x] Keystatic control panel: dashboard + edit screens load with seeded content
- [x] WCAG AA contrast on all measured text/background pairs; labels on all form fields; single h1 per page; no heading jumps; alt text on images; skip link; focus indicators; reduced-motion respected
- [x] Crisis notice (988/911) in footer of every page + on the contact form
- [x] `/contact-us` → `/contact` redirect; old slugs preserved
- [x] Sitemap, robots.txt, canonical URLs, OG tags, LocalBusiness JSON-LD
- [x] Production build clean
