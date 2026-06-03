# Claude Code prompt — website build

Paste this prompt exactly into Claude Code to kick off the website build.
Make sure both `claude.md` and `website-copy.md` are in the project folder before running.

---

## The prompt

Build a single-page marketing website for an AI automation consultancy based in Pretoria,
South Africa.

All build instructions, design decisions, technical constraints, colour palette, typography,
layout specifications, animation rules, mobile breakpoints, and accessibility requirements
are in `claude.md`. Read that file first and follow every instruction precisely.

All website copy — every headline, subheadline, body paragraph, card title, card
description, button label, and footer line — is in `website-copy.md`. Read that file and
use the copy exactly as written. Do not write, invent, or substitute any copy of your own.

Produce three files:
- `index.html` — full page structure and content
- `styles.css` — all styles, mobile-first, no frameworks
- `main.js` — scroll animations, sticky nav, hamburger menu, Calendly button handlers,
  WhatsApp button

Work through the page section by section in this order:
1. `<head>` — meta tags, font links, icon CDN, Calendly CSS, stylesheet link
2. Nav — sticky, logo + links + CTA, hamburger for mobile
3. Hero — full viewport, dark background, headline, subheadline, CTA buttons, scroll
   indicator
4. Tool strip — dark background, tool names
5. Problem section — headline, body, 2×2 pain point card grid
6. How it works — three steps with step numbers, connected by decorative line on desktop
7. What we automate — 3-column service card grid (responsive to 1-column on mobile)
8. Testimonial — dark background, large quote mark, quote, attribution
9. About — two-column layout with text left and placeholder right
10. Final CTA — accent background, headline, subheadline, button, trust note
11. Footer — copyright left, links right
12. WhatsApp floating button — fixed bottom-right, with hover tooltip

After producing all three files, review your output against these specific checks:
- Every section from `website-copy.md` is present with the correct copy
- No placeholder or lorem ipsum text remains anywhere
- All colours used are from the CSS custom properties defined in `:root` — no hardcoded
  hex values outside `:root`
- Every interactive element (buttons, nav links, cards) has a hover state
- The hamburger menu opens and closes correctly on mobile
- All `.reveal` elements have the correct class for scroll animation
- Calendly popup is wired to every CTA button
- WhatsApp button links to the correct `wa.me` URL format
- `prefers-reduced-motion` wraps all animations
- All Lucide icons have `aria-hidden="true"` or an `aria-label`
- There is exactly one `<h1>` on the page
- The `<title>` and meta description match the copy in `website-copy.md`

Do not ask clarifying questions. All decisions are made in `claude.md`. Build the complete
site and output all three files.
