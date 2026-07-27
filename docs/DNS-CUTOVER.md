# DNS cutover — WordPress.com → Vercel

Everything on the Vercel side is done (domains added, env vars set, analytics on,
contact form verified). The only remaining step is changing two DNS records at
WordPress.com. Doing this flips the live site. Rollback = revert the same records.

## Where

The domain `morninglightcounselingservices.com` is registered at **WordPress.com**
and uses WordPress.com nameservers, so DNS is edited there:

1. Log in at wordpress.com
2. Upgrades → Domains (or https://wordpress.com/domains/manage)
3. Click `morninglightcounselingservices.com` → **DNS records** (may be under
   "Domain settings" → "DNS records")

## Change these two records

| Record | Name / Host | Change to |
|---|---|---|
| A | `@` (apex / blank) | `216.150.1.1` |
| CNAME | `www` | `2e65695ccb2d1d61.vercel-dns-017.com` |

Notes:
- The existing A records point to WordPress (192.0.78.24 / .25) — remove those
  two and add the single Vercel A record.
- If `www` exists as a CNAME to the apex or to WordPress, edit/replace it with
  the Vercel value above.
- WordPress.com may warn "this will disconnect your site" — that's expected;
  the WordPress site is being retired.

## DO NOT touch

- **MX records** (`mx1.titan.email`, `mx2.titan.email`) — billy@ email dies if these change
- **TXT** `v=spf1 include:spf.titan.email ~all` — email deliverability
- **TXT** `google-site-verification=…` — Search Console access
- Nameservers — leave on WordPress.com

## After saving

1. Wait 5–30 min (up to a few hours worst case). Check with:
   `dig +short A morninglightcounselingservices.com` → should return `216.150.1.1`
2. Vercel → project → Settings → Domains → both domains flip to "Valid Configuration"
   and SSL issues automatically.
3. Visit https://morninglightcounselingservices.com — new site, padlock, no warnings.
4. Test: `/contact-us` redirects, contact form submits, www redirects to apex.

## Same-day follow-ups (after cutover)

- **Search Console**: https://search.google.com/search-console — the domain is
  already verified (TXT record exists). Submit sitemap:
  `https://morninglightcounselingservices.com/sitemap-index.xml`
- **Google Business Profile**: confirm name "Morning Light Counseling Services"
  and website URL.
- **Keystatic**: log into https://morninglightcounselingservices.com/keystatic —
  if GitHub login fails, add
  `https://morninglightcounselingservices.com/api/keystatic/github/oauth/callback`
  to the callback URLs of the GitHub App (github.com/apps/morning-light-counseling-cms
  → App settings).
- **CONTACT_TO_EMAIL**: currently Ben's gmail for testing. When Billy is ready,
  change it to `billy@morninglightcounselingservices.com` in Vercel →
  Environment Variables, then redeploy.
- Keep the WordPress hosting plan for a week or two as fallback, then cancel
  (keep the domain registration + Titan email — only cancel the site hosting).
