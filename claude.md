# claude.md — AI consultancy website build instructions

This file contains all design decisions, technical constraints, and build rules for the
[YourBrand] marketing website. Follow every instruction here precisely. Do not deviate
from the stack, palette, or layout decisions without explicit instruction.

---

## Project overview

A single-page marketing website for a Pretoria-based AI automation consultancy targeting
SMEs in Gauteng, South Africa. The site's sole job is to convert visitors into discovery
call bookings. There is one CTA throughout: "Book a free discovery call" (Calendly link).

All copy lives in `website-copy.md`. Read that file and use its content exactly as written
for every section. Do not generate placeholder or example copy — use the real copy.

---

## Tech stack

- **HTML5** — single `index.html` file
- **CSS3** — single `styles.css` file, no frameworks
- **Vanilla JavaScript** — single `main.js` file, no frameworks or libraries
- **Fonts** — loaded from Google Fonts (see typography section below)
- **Icons** — Lucide Icons via CDN (`https://unpkg.com/lucide@latest`)
- **No build tools** — no Webpack, Vite, or bundlers. Files must run by opening index.html
- **No CSS frameworks** — no Tailwind, Bootstrap, or utility libraries
- **Deployment target** — Netlify or Vercel static hosting (no server-side code)

The entire site must work by dropping the three files into a folder and opening index.html
in a browser. Zero dependencies beyond Google Fonts and Lucide Icons CDN.

---

## File structure

```
/
├── index.html
├── styles.css
├── main.js
└── assets/
    └── (placeholder for images/logo once available)
```

---

## Colour palette

Use these exact hex values. Define all as CSS custom properties in `:root`.

```css
:root {
  /* Core */
  --color-black:       #0a0a0a;   /* hero, footer, nav backgrounds */
  --color-off-white:   #f5f5f3;   /* alternating section backgrounds */
  --color-white:       #ffffff;   /* primary body section background */
  --color-border:      #e8e8e6;   /* card borders, dividers */
  --color-border-dark: rgba(255, 255, 255, 0.08); /* borders on dark sections */

  /* Accent */
  --color-accent:      #4a43a0;   /* CTAs, step numbers, highlights */
  --color-accent-dark: #3a3480;   /* accent hover state */

  /* Text */
  --color-text-primary:   #0a0a0a;
  --color-text-secondary: #666660;
  --color-text-tertiary:  #999994;
  --color-text-light:     #ffffff;
  --color-text-light-muted: rgba(255, 255, 255, 0.5);

  /* Spacing scale */
  --space-xs:   4px;
  --space-sm:   8px;
  --space-md:   16px;
  --space-lg:   24px;
  --space-xl:   40px;
  --space-2xl:  64px;
  --space-3xl:  96px;

  /* Layout */
  --max-width:        1100px;
  --content-width:    720px;
  --border-radius-sm: 6px;
  --border-radius-md: 10px;
  --border-radius-lg: 16px;
}
```

Never use any colour not defined above. Never hardcode hex values outside `:root`.

---

## Typography

Load from Google Fonts — add to `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet">
```

### Type scale

```css
/* Display — hero headline only */
font-family: 'Instrument Serif', serif;
font-size: clamp(36px, 5.5vw, 64px);
font-weight: 400;
line-height: 1.1;
letter-spacing: -0.02em;
color: var(--color-text-light);

/* Section headings (h2) */
font-family: 'Instrument Serif', serif;
font-size: clamp(28px, 3.5vw, 42px);
font-weight: 400;
line-height: 1.2;
letter-spacing: -0.015em;
color: var(--color-text-primary);

/* Card titles / step titles (h3) */
font-family: 'DM Sans', sans-serif;
font-size: 15px;
font-weight: 500;
line-height: 1.4;
color: var(--color-text-primary);

/* Body text */
font-family: 'DM Sans', sans-serif;
font-size: 16px;
font-weight: 400;
line-height: 1.75;
color: var(--color-text-secondary);

/* Small / labels / eyebrows */
font-family: 'DM Sans', sans-serif;
font-size: 12px;
font-weight: 500;
letter-spacing: 0.08em;
text-transform: uppercase;
color: var(--color-text-tertiary);

/* Nav links */
font-family: 'DM Sans', sans-serif;
font-size: 14px;
font-weight: 400;
color: var(--color-text-light-muted);
```

The font pairing is intentional: Instrument Serif for headlines gives editorial warmth and
authority; DM Sans for everything else stays clean and readable at small sizes. Do not swap
these fonts.

---

## Layout system

```css
.container {
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
}

/* On mobile (< 768px) */
@media (max-width: 768px) {
  .container { padding: 0 20px; }
}
```

Every section uses `.container` for horizontal bounds. Section vertical padding:
- Desktop: `var(--space-3xl)` top and bottom (96px)
- Mobile: `var(--space-2xl)` top and bottom (64px)

---

## Section-by-section specifications

### Nav

- Full-width, dark background (`var(--color-black)`)
- Fixed/sticky — stays at top on scroll
- Height: 64px desktop, 56px mobile
- Logo left, nav links centre, CTA button right
- On scroll past 80px: add subtle bottom border `var(--color-border-dark)`
- Mobile: hamburger menu replaces nav links. Menu opens full-width overlay on dark
  background. Nav links stack vertically, centred. Menu closes on link click or outside tap.
- CTA button style: white background, black text, 8px border-radius, 12px 20px padding,
  DM Sans 13px 500 weight. Hover: slight opacity reduction (0.9).

### Hero

- Full-viewport height (`min-height: 100vh`) on desktop, `min-height: 90vh` on mobile
- Background: `var(--color-black)`
- Content centred horizontally and vertically
- Layout (top to bottom): eyebrow → headline → subheadline → CTA buttons → scroll indicator
- Eyebrow: small caps label, `var(--color-text-light-muted)`
- Headline: Instrument Serif display size (see typography), colour `var(--color-text-light)`
- Subheadline: DM Sans 18px, `var(--color-text-light-muted)`, max-width 600px, centred
- CTA row: primary button (white bg, black text) + ghost button (transparent, white border,
  white text), 12px gap between
- Scroll indicator: small animated chevron-down icon below CTAs, `var(--color-text-light-muted)`
- Mobile: headline font size scales down via clamp(), buttons stack vertically (full width),
  subheadline 16px

### Tool strip (logos)

- Directly below hero, no gap — visually attached
- Background: `#111111` (slightly lighter than hero)
- Top border: `var(--color-border-dark)`
- Single row: label text left, tool names separated by centre dots, right
- DM Sans 12px, `rgba(255,255,255,0.25)`
- Mobile: wraps to two lines if needed, centred

### Problem section

- Background: `var(--color-white)`
- Section label (eyebrow) above headline
- Headline + two-paragraph body text, max-width `var(--content-width)`, left-aligned
- Below body: 2×2 grid of pain point cards (desktop), 1-column stack (mobile)
- Pain point card: white bg, `var(--color-border)` border, `var(--border-radius-md)`,
  24px padding. Icon top (Lucide, 20px, `var(--color-text-tertiary)`), bold title,
  description text below.
- Card hover: border colour darkens to `#c8c8c4`, transition 200ms

### How it works

- Background: `var(--color-off-white)`
- Headline left-aligned
- Three steps in a horizontal row (desktop), stacked vertically (mobile)
- Each step: large step number (`01`, `02`, `03`) in `var(--color-accent)` Instrument Serif
  48px, step title DM Sans 500, description body text below
- Steps connected by a thin horizontal line between them on desktop (purely decorative,
  `var(--color-border)`, sits at the vertical midpoint of the step numbers)
- No cards, no borders — open layout. Generous whitespace between steps.
- Mobile: steps stack, connecting line becomes a vertical left-border accent on each step

### What we automate

- Background: `var(--color-white)`
- Headline left-aligned
- 3-column grid of service cards (desktop), 2-column (tablet 540px–768px), 1-column (mobile)
- Service card: white bg, `var(--color-border)` border, `var(--border-radius-md)`, 24px
  padding. Lucide icon top (22px, `var(--color-accent)`), card title DM Sans 500 15px,
  description 14px `var(--color-text-secondary)`
- Card hover: translate up 3px, border darkens, transition 200ms ease

### Testimonial

- Background: `var(--color-black)`
- Single testimonial, centred layout
- Large opening quote mark: Instrument Serif 80px, `var(--color-accent)`, decorative
- Quote text: Instrument Serif italic, clamp(20px, 2.5vw, 28px), `var(--color-text-light)`,
  max-width 700px, centred
- Attribution: DM Sans 13px, `var(--color-text-light-muted)`, centred, below quote

### About

- Background: `var(--color-off-white)`
- Two-column layout desktop: left column text, right column a simple decorative element
  (a bordered box with a subtle geometric pattern using CSS only — no image required until
  a real photo is available)
- Section headline, body paragraphs, location line, LinkedIn text link
- Mobile: single column, decorative element hidden
- Right column placeholder: `var(--color-border)` border, `var(--border-radius-lg)`,
  aspect-ratio 4/3, background `var(--color-white)`. Centred text inside:
  "Photo coming soon" DM Sans 13px `var(--color-text-tertiary)`

### Final CTA

- Background: `var(--color-accent)`
- Centred layout
- Headline: Instrument Serif, `var(--color-text-light)`, clamp(28px, 3.5vw, 42px)
- Subheadline: DM Sans 17px, `rgba(255,255,255,0.7)`, max-width 560px
- CTA button: white background, `var(--color-accent)` text, DM Sans 500
- Trust note below button: DM Sans 13px, `rgba(255,255,255,0.5)`

### Footer

- Background: `var(--color-black)`
- Top border: `var(--color-border-dark)`
- Single row: copyright left, links right
- DM Sans 13px, `rgba(255,255,255,0.3)`
- Links: hover to `rgba(255,255,255,0.6)`, transition 150ms
- Mobile: stacks to two lines, centred

### WhatsApp floating button

- Fixed position, bottom-right: 24px from bottom, 24px from right
- Circle button, 52px diameter, background `#25D366` (WhatsApp green — only exception
  to the palette rule, required for brand recognition)
- Lucide `message-circle` icon, white, 22px
- On hover: scale(1.08), transition 200ms
- On click: opens `https://wa.me/[PHONE_NUMBER]?text=Hi%2C%20I%27d%20like%20to%20find%20out%20more%20about%20your%20AI%20automation%20services`
- Replace `[PHONE_NUMBER]` with the business WhatsApp number in international format
  (e.g. 27821234567 for a South African number)
- Tooltip on hover (desktop only): "Chat on WhatsApp" — appears left of button, dark bg,
  white text, 12px, border-radius 4px

---

## Animations & interactions

All animations must respect `prefers-reduced-motion`. Wrap in:
```css
@media (prefers-reduced-motion: no-preference) {
  /* animation rules here */
}
```

### Scroll-triggered fade-ins

Every section fades in as it enters the viewport. Use IntersectionObserver in `main.js`.

```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

Apply `.reveal` class to: each section heading, each card, each step block, the testimonial
quote, and the about section text. Stagger children using `transition-delay` in increments
of 80ms (max 4 children staggered per section).

### Nav scroll behaviour

JavaScript adds a `.scrolled` class to `<nav>` when `window.scrollY > 80`. CSS uses this
to add the bottom border.

### Scroll indicator (hero)

Animate the chevron icon with a gentle vertical bounce:
```css
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(6px); }
}
```
2s duration, infinite, ease-in-out.

### Button hover states

All buttons: `transition: all 150ms ease`. No JavaScript needed for hover.

### Card hover states

Service cards and pain point cards lift on hover:
```css
.service-card:hover {
  transform: translateY(-3px);
  border-color: #c8c8c4;
  transition: transform 200ms ease, border-color 200ms ease;
}
```

---

## Mobile responsiveness — critical rules

Mobile is not an afterthought. Every layout decision must be explicitly designed for mobile.
The site must look and feel equally polished on a 390px iPhone screen as on a 1440px desktop.

### Breakpoints

```css
/* Mobile first — base styles are mobile */
/* Tablet */
@media (min-width: 540px)  { }
/* Desktop */
@media (min-width: 768px)  { }
/* Wide desktop */
@media (min-width: 1100px) { }
```

Write mobile-first CSS. Base styles = mobile. Desktop overrides inside media queries.

### Mobile-specific rules

- Nav: hamburger replaces links. Logo stays left, hamburger right. CTA button hidden in
  nav on mobile (it appears full-width inside the hamburger menu instead).
- Hero: `min-height: 90vh`. Headline uses smaller end of clamp(). Buttons stack vertically,
  each full-width (`width: 100%`). Subheadline 16px.
- Pain cards: 1-column stack. Full width.
- How it works steps: stack vertically. Connecting line becomes a left-border accent
  (`border-left: 2px solid var(--color-accent)`), 32px padding-left.
- Service cards: 1-column on mobile, 2-column on tablet (540px+), 3-column on desktop.
- About: decorative right column hidden on mobile (`display: none`). Text takes full width.
- Testimonial: quote font size scales down via clamp(). Padding reduced.
- WhatsApp button: same position on mobile. Tooltip hidden on mobile (touch devices).
- Footer: stacks to two lines, text centred.
- Touch targets: all interactive elements minimum 44×44px tap target. Use padding to
  achieve this without changing visual size where needed.
- Font sizes: never below 14px on mobile for body text. Labels/eyebrows minimum 11px.

---

## Calendly integration

The "Book a free discovery call" button opens a Calendly popup widget (not a redirect).

Add to `<head>`:
```html
<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
```

Add before `</body>`:
```html
<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
```

All CTA buttons call:
```javascript
Calendly.initPopupWidget({ url: 'https://calendly.com/[YOUR_CALENDLY_LINK]' });
return false;
```

Replace `[YOUR_CALENDLY_LINK]` with the actual Calendly URL once set up.

---

## Performance rules

- No images at launch (placeholder CSS for about section). Add images later as optimised
  WebP files.
- Google Fonts: use `display=swap` (already in the link tag above).
- Lucide Icons: use CDN, load with `defer` attribute.
- JavaScript: all scripts load with `defer`. No render-blocking JS.
- CSS: single file, no `@import` chains.
- Target: Lighthouse performance score > 90 on mobile.

---

## Accessibility rules

- All images must have descriptive `alt` attributes.
- All interactive elements must be keyboard-navigable (tab order, focus rings).
- Focus rings: `outline: 2px solid var(--color-accent); outline-offset: 3px` on focus.
  Never use `outline: none` without a custom focus indicator replacement.
- Colour contrast: all text must meet WCAG AA minimum (4.5:1 for body text).
- Lucide icons that are decorative: `aria-hidden="true"`. Icons that are the only label
  for a button (e.g. hamburger, WhatsApp): `aria-label="..."` on the button.
- Hamburger button: `aria-expanded` attribute toggled by JS. `aria-controls` pointing to
  the nav menu element.
- Section headings must be in correct order: one `<h1>` (hero), `<h2>` for section
  headings, `<h3>` for card/step titles.

---

## SEO

Add to `<head>` of `index.html`:

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>[YourBrand] — AI Automation for Small Businesses in Gauteng</title>
<meta name="description" content="We help small businesses in Pretoria and Gauteng automate their manual processes using AI. Workflow automation, document processing, AI assistants, and more. Book a free discovery call.">

<!-- Open Graph -->
<meta property="og:title" content="AI Automation for Gauteng SMEs · [YourBrand]">
<meta property="og:description" content="Stop losing hours to manual work. We help small businesses in Gauteng automate their processes using AI — so your team can focus on what actually matters.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://[yourdomain].co.za">

<!-- Canonical -->
<link rel="canonical" href="https://[yourdomain].co.za">
```

Replace all bracketed placeholders once the domain and brand name are confirmed.

---

## What not to build

- No cookie banner (no tracking at launch)
- No blog or additional pages
- No contact form (Calendly handles this)
- No animations that loop forever except the scroll indicator bounce and the WhatsApp
  button pulse (if added)
- No dark mode toggle
- No chat widget other than the WhatsApp button
- No video or video embeds
- No external scripts other than Google Fonts, Lucide, and Calendly

---

*claude.md version 1.0 — June 2026*
*Update [YourBrand], [yourdomain], [YOUR_CALENDLY_LINK], and [PHONE_NUMBER] placeholders*
*before going live.*
