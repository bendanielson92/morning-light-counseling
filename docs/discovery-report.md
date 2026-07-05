# Website Discovery Report
## Morning Light Counseling Services
**Submitted:** Friday, June 19, 2026

> This report is intended as a complete briefing document for a website designer or AI website builder. Each section includes Billy's answer, the context behind why the question was asked, and — where relevant — what was *not* chosen and what that implies for the build.

---

## Site Background (Pre-Discovery Research)

The following was established through independent research of the current site *before* Billy completed this form. It provides the baseline context for all questions below.

**Business:** Morning Light Counseling Services — a solo Christian counseling practice in Manheim, PA (Central PA region), serving men ages 12 and up. Owner/counselor is Billy (William), a Licensed Professional Counselor.

**Niche:** Faith-based, hope-focused counseling exclusively for men. Women are referred out to a referral network. The practice blends narrative therapy with a Biblical framework.

**Current site platform:** WordPress (5 pages + an external booking link).

**Current site structure:**
| Page | Notes |
|------|-------|
| Homepage | Intro, 'what is counseling,' issues addressed, FAQ — the FAQ is currently embedded here rather than on its own page |
| Men's Counseling | Emotional appeal around the 'cost of isolation' — the primary messaging narrative |
| About | Brief bio, headshot, quote |
| What to Expect | 3-step intake process: inquiry form → intake paperwork → phone call |
| Contact Us | Form: name, email, phone, voicemail preference, payment method, reason for visit, how they heard about you |
| Active Clients | External link to CarePatron scheduling portal — sends users off-site without warning |

**Key pre-discovery observations:**
- No strong primary CTA on the homepage — visitors land with no clear 'next step' prompt
- All services are on a single page; no condition-specific pages (Anxiety, Depression, etc.)
- The 'Active Clients' link exits the site to CarePatron with no distinction between new and returning clients
- FAQ is on the homepage, which clutters the initial impression
- No blog, no testimonials, no resources section
- Imagery: nature/morning light, moody/contemplative photography
- Insurance accepted: Highmark, BCBS, Capital Blue Cross, Geisinger, UHC/UBH, Optum, Aetna, Quest EAP; Self-pay: $125/session

---

## 1. Big Picture & Goals

### Goals (ranked by priority)

Billy was asked to drag-and-drop four goals into priority order. The ranking below reflects his stated priorities — **not just what he wants, but in what order the site should serve those needs.**

**1. Establish a more professional online presence**
> *Build implication:* Visual polish, credential display, and brand consistency are primary concerns — the site is a credibility signal as much as a marketing tool.

**2. Attract a more specific type of client**
> *Build implication:* Site should speak directly to a narrower audience; messaging, imagery, and service pages should filter for fit over volume.

**3. Get more new clients**
> *Build implication:* Site should prioritize conversion — strong CTAs, clear booking path, and trust signals above the fold.

**4. Improve the user experience / flow**
> *Build implication:* Navigation, page hierarchy, and the path from landing to booking need to be rethought; friction reduction is the top priority.

> **Note:** "Improve the user experience / flow" was ranked lowest. While still a goal, it should not drive primary design decisions at the expense of the higher-ranked priorities.

**Additional goal (written in by Billy):**
> Meet minimum necessary WCAG guidelines 

### Biggest Frustration with the Current Site

*Question context: Understanding the pain point helps prioritize what to fix first and ensures the redesign addresses the root problem, not just surface aesthetics.*

> "It doesn't look professional, flow is janky"

### What Success Looks Like

*Question context: This anchors the project to a concrete outcome rather than vague 'improvement.' Use this as the north star when making design trade-offs.*

> "More calls, looks more reliable, paints a better, more professional picture"

### Additional Notes (Big Picture)
> I need to add some higher quality photos of my office. All photos at this point serve as placeholders until I get a better camera nd more time to take quality photos. 

I basically just like my logo and the header. 

I like the color scheme, but not married to it. 

---

## 2. Target Audience

### Ideal Client Description

*Question context: The site should speak directly to this person — not to all men, not to all counseling seekers. Every headline, image choice, and CTA should resonate with this description.*

> "A man ages 20-55 dealing with depression, anxiety, addictive/compulsive issues with some level of insight. Ideally open to incorporating faith into session. "

### How Clients Currently Find Billy

*Question context: This determines where SEO and referral energy should be focused, and whether the site needs to be optimized for specific traffic sources (e.g., Psychology Today profile links, Google local search).*

**Selected (current referral sources):**
- Google search
- Word of mouth
- Doctor / provider referrals
- Church / pastoral referrals
- Psychology Today profile

**Not selected (not currently significant sources):**
- Social media

### Client Availability

*Question context: This directly affects how CTAs should be written and how urgently the site should push visitors toward booking.*

**Chosen:** Yes, actively seeking new clients
> *Build implication:* CTAs should be prominent and urgent — 'Book a Free Consultation' should appear on every page. The site is a lead-generation tool.

**Not chosen:** Yes, but selectively; Has a waitlist

### Additional Notes (Audience)
> No

---

## 3. Content & Messaging

### Messaging Direction

*Question context: The current site's primary narrative is the 'cost of isolation' — a strong emotional hook aimed at men who have been avoiding help. This question asked Billy whether that narrative should be preserved, evolved, or replaced.*

**Chosen:** Expand into additional themes
> *Build implication:* The site should grow beyond isolation to include growth, leadership, family restoration, or other themes Billy addresses. New service pages may be needed.

**Not chosen:** Keep the 'cost of isolation' theme; Rethink the messaging entirely; Not sure yet — wants guidance

### Dedicated Condition/Service Pages

*Question context: The current site has a single 'Men's Counseling' page that lists all issues Billy treats. Creating individual pages per condition (Anxiety, Depression, Anger, Relationship Conflict, etc.) is the single highest-impact SEO move available — it allows the site to rank for specific search terms and shows prospective clients that Billy understands their particular struggle. Billy treats: anxiety/panic, depression, anger/unforgiveness, impulse control, separation/divorce, relationship conflict, major life transitions, job loss, identity formation, addictive behavior, parenting issues, and motivation concerns.*

**Chosen:** Open to it, wants to understand the benefit
> *Build implication:* The designer should present the SEO and trust-building case for condition pages before the build begins. Billy is persuadable but needs the rationale explained.

**Not chosen:** Yes — create dedicated pages per issue; No — prefers a single services page

### Photography

*Question context: Authentic photos of the counselor and office space are among the most trust-building elements on a therapy website. They reduce anxiety for first-time clients by showing who they will meet and where they will sit.*

**Chosen:** No photos, but willing to get them taken
> *Build implication:* Schedule a photo shoot before launch. The site should not go live with stock photography as the primary imagery — authentic photos are critical for a solo counseling practice.

**Not chosen:** Has a professional headshot; Has headshot + office photos; Prefers not to use personal photos

### FAQ Handling

*Question context: The current site has its FAQ embedded on the homepage, which clutters the initial impression and buries important logistical information (insurance, rates, process) where visitors may not expect it. This question explored how to reorganize that content in the new site.*

**Chosen:** Wants a recommendation
> *Build implication:* Billy deferred to the designer on FAQ structure. Recommend the 'integrated' approach (contextual placement) as it best serves the user journey without adding a page to the nav.

**Not chosen:** A dedicated FAQ page; Embedded within relevant pages; Both — a main FAQ page plus contextual embeds

---

## 4. Functionality & Features

### Booking / Scheduling Integration

*Question context: The current site uses CarePatron for scheduling. The 'Active Clients' navigation item links directly to the external CarePatron portal — this sends both new and returning visitors off-site without warning, which is a significant UX friction point. New visitors in particular may be confused by landing on a third-party portal when they expected to contact the counselor. The question explored whether to embed CarePatron's widget directly into the site or maintain the current link-out approach.*

**Chosen:** Keep linking out to CarePatron
> *Build implication:* Maintain the current approach of a button that opens the CarePatron portal in a new tab. If this is chosen, the link should be clearly labeled and set to open in a new tab, and it should be distinguished from the new-client contact form.

**Not chosen:** Embed booking directly on the site; Wants to explore options

### Contact Form Changes

*Question context: The current contact form collects: name, email, phone number, voicemail preference, payment method (insurance vs. self-pay), reason for visit, and how they heard about Billy. This question asked whether any fields should be added, removed, or changed.*

**Billy's response:** "This flow is working well. On the backend, I plan to update my intake forms through my EHR, but this is something I will do manually. "

### Blog / Resources Section

*Question context: The current site has no blog, resources section, or content library. A blog could serve multiple purposes: SEO content targeting specific search terms, a resource hub for current clients, and a way to demonstrate expertise and voice. This question gauged Billy's interest and readiness.*

**Chosen:** Maybe later — build the structure now
> *Build implication:* Include a /blog route and basic post template in the build, but don't launch with content. The infrastructure should be ready so Billy can add posts without a developer.

**Not chosen:** Yes, wants to start blogging; Not interested right now

### Additional Notes (Functionality)
> I really hate the thought of blogging, but I've heard a lot of therapists do it and it's helpful for SEO.

---

## 5. Design Preferences — Colors

*Context: Billy was presented with two pre-built colorway options derived from the current site's logo and branding (forest green, gold/amber, and cream), and given the ability to customize colors and adjust their proportions. Both presets use the same three brand colors — the key difference is the dominant color and its visual weight. The proportion values represent the desired visual weight of each color across the site, not just which colors to use, but how much of each.*

### Final Color Palette (after any customization)

| Color | Hex | Proportion | Role |
|-------|-----|-----------|------|
| Gold / Amber | `#C4882B` | 55% | Dominant (backgrounds, large areas) |
| Forest Green | `#3D5A3A` | 21% | Secondary (sections, cards) |
| Cream | `#FAF7F2` | 21% | Secondary (sections, cards) |

---

## 6. Design Preferences — Typography

*Context: Billy was shown 6 font pairing options displayed as visual-only cards (no labels visible) with sample text reading 'Morning Light Counseling' in the heading font and a body copy excerpt. He was asked to drag them into preference order. The pairings span four categories: Serif+Sans, Sans+Sans, Sans+Serif, and Serif+Serif. The ranking below reflects his aesthetic preference — #1 is most preferred.*

### Font Pairings (ranked by preference)

| Rank | Heading Font | Body Font | Pairing Style |
|------|-------------|-----------|---------------|
| 1 (most preferred) | Playfair Display | Source Sans 3 | Serif + Sans |
| 2  | Cormorant Garamond | Libre Baskerville | Serif + Serif |
| 3  | Crimson Pro | Work Sans | Serif + Sans |
| 4  | Poppins | Work Sans | Sans + Sans |
| 5  | Oswald | Merriweather | Sans + Serif (condensed heading) |
| 6 (least preferred) | Montserrat | Nunito Sans | Sans + Sans |

> **Recommendation:** Use the #1 ranked pairing (Playfair Display / Source Sans 3) as the primary direction. If it creates technical or licensing constraints, the #2 ranked pairing (Cormorant Garamond / Libre Baskerville) is the fallback.

---

## 7. Wishlist & Priorities

*These open-ended responses capture Billy's unfiltered priorities and constraints. Treat must-haves as non-negotiable scope; nice-to-haves as phase-two candidates; things to avoid as hard constraints.*

### Must-Haves (non-negotiable)
> "Professionalism
Meets privacy and ADA req.
Good flow both on computer and phone/tablet"

### Nice-to-Haves (phase two candidates)
> "Not sure yet. 

I like the idea of the blog, but I will not likely keep up with it and will disappoint myself in the quality of material. "

### Things to Avoid (hard constraints)
> "Don't want a chatbot
don't want it to feel clinical, repetitive, or too much like a typical counseling website. Therapy buzzwords should be kept to a minimum ("Safe space", "holistic", "strength's based, tailored approach""

---

## Summary for AI Website Builder

Use the following as a condensed brief:

**Business:** Solo Christian counseling practice for men, Central PA. Faith-based, hope-focused, Biblical framework.
**Primary goal:** Establish a more professional online presence
**Audience:** Men ages 12+, faith-motivated, often referred by church or word of mouth.
**Tone:** Warm, trustworthy, masculine but approachable. Not clinical. Not corporate.
**Messaging:** Expand into additional themes
**Booking:** Keep linking out to CarePatron
**Service pages:** Open to it, wants to understand the benefit
**Blog:** Maybe later — build the structure now
**Photography:** No photos, but willing to get them taken
**FAQ:** Wants a recommendation
**Typography (top choice):** Playfair Display (headings) + Source Sans 3 (body)
**Dominant color:** #C4882B (55% of palette)

---

*This report was generated from the Morning Light Counseling website discovery form.*