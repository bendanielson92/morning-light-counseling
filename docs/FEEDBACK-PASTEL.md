# Requesting Visual Changes — the Pastel Review Loop

Billy edits the **words** himself in the control panel (see `BILLY-GUIDE.md`). This is for the other half: when he wants a **visual or design** tweak he can't make himself — "make this photo bigger," "this gold is too bright," "move this button up" — he points at the exact spot and leaves a note. No account, no code.

## One-time setup (Ben)

1. Create a free account at <https://usepastel.com>.
2. Click **New / Add URL** → paste the site's preview address (your Vercel `*.vercel.app` URL — find it on the Vercel dashboard). Pastel loads the page.
3. Copy the **share link** and text it to Billy. In the share settings you can allow comments **without sign-in**, so it's frictionless for him.

## How Billy uses it

1. Open the link you sent him.
2. Click anywhere on the page — a comment box pops up, pinned to that exact spot.
3. Type the change he wants and hit enter. He can leave as many as he likes.
4. That's it — every note lands back in your Pastel dashboard as a tidy checklist, each with a screenshot of where he pointed.

## How Ben works through it

- Each comment is a to-do showing exactly where Billy pointed.
- Make the change — in code for design/layout, or in the control panel for wording — then mark the comment resolved.
- When a page changes a lot, start a fresh Pastel link so he's always commenting on the current version.

## Good to know

- Pastel shows the page through its own viewer, so it's best for look-and-feel feedback — not for testing the live contact form.
- Pastel is **not** part of the website. Nothing gets installed, and there's nothing to remove at go-live.
- For pure wording changes, Billy can just fix them himself in `/keystatic` — faster than asking.
