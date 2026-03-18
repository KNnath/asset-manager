# Whiskey River Media — Homepage Replit Build Prompt (v2)
# Matches existing site visual style EXACTLY

---

## CRITICAL DESIGN REFERENCE
This page must match the existing WhiskeyRiverMedia.com aesthetic precisely.
Study these design rules before writing a single line of code.

---

## Tech Stack
- Single file: `index.html`
- CSS embedded in `<style>` tag
- JavaScript embedded in `<script>` tag
- Google Fonts via CDN only
- NO frameworks. NO npm. NO build tools.
- Runs instantly in Replit browser preview.

---

## Fonts (load via Google Fonts CDN)
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
```
- **Display / Headings:** `'Playfair Display', serif` — used for ALL h1, h2, h3, hero text, section headlines, testimonial quotes
- **Body / UI:** `'DM Sans', sans-serif` — used for nav, body copy, eyebrows, buttons, labels, footer

---

## Exact Color Palette
Match these precisely — no substitutions:
```css
:root {
  --bg-base:        #0c0b09;   /* deepest background — hero, CTA section */
  --bg-section:     #111009;   /* alternating section bg */
  --bg-card:        #181610;   /* card fill color */
  --bg-card-hover:  #1e1c14;   /* card hover fill */
  --gold:           #C4941F;   /* PRIMARY gold — hero eyebrow, icon fills, CTA buttons, Learn More links, footer line */
  --gold-btn:       #C4941F;   /* filled button background */
  --gold-btn-text:  #0c0b09;   /* text ON filled gold button — near black */
  --text-primary:   #EDE8DF;   /* warm off-white — all headlines, hero H1 white line */
  --text-secondary: #7a7468;   /* muted warm gray — body copy, card descriptions, nav links */
  --text-tertiary:  #4a463f;   /* very muted — small labels, footer copy */
  --border-subtle:  rgba(255,255,255,0.06);  /* card borders, section dividers */
  --border-gold:    rgba(196,148,31,0.35);   /* footer top line, card left accent */
}
```

---

## Typography Scale — Match Exactly
```css
/* Hero H1 */
font-family: 'Playfair Display', serif;
font-size: clamp(2.8rem, 6vw, 4.5rem);
font-weight: 700;
line-height: 1.05;
color: var(--text-primary);

/* Hero H1 — gold italic line (e.g. "Exit Stronger.") */
font-style: italic;
color: var(--gold);

/* Section H2 */
font-family: 'Playfair Display', serif;
font-size: clamp(1.8rem, 3.5vw, 2.8rem);
font-weight: 700;
line-height: 1.12;
color: var(--text-primary);

/* Eyebrow labels */
font-family: 'DM Sans', sans-serif;
font-size: 12px;
font-weight: 400;
letter-spacing: 0.14em;
text-transform: uppercase;
color: var(--gold);

/* Body copy */
font-family: 'DM Sans', sans-serif;
font-size: 15px;
line-height: 1.75;
color: var(--text-secondary);

/* Card titles */
font-family: 'Playfair Display', serif;
font-size: 1.2rem;
font-weight: 700;
color: var(--text-primary);
```

---

## Buttons — Two Styles (match site exactly)

### Filled Gold Button (primary CTA)
```css
background: var(--gold-btn);       /* #C4941F */
color: var(--gold-btn-text);       /* #0c0b09 — dark text ON gold */
font-family: 'DM Sans', sans-serif;
font-size: 15px;
font-weight: 700;
padding: 16px 36px;
border: none;
border-radius: 4px;
letter-spacing: 0.02em;
cursor: pointer;
transition: background 0.2s, transform 0.15s;
/* hover: background #a87c18, transform translateY(-1px) */
```

### Ghost Button (secondary)
```css
background: transparent;
color: var(--text-primary);
font-family: 'DM Sans', sans-serif;
font-size: 15px;
font-weight: 500;
padding: 15px 34px;
border: 1px solid rgba(255,255,255,0.18);
border-radius: 4px;
cursor: pointer;
transition: border-color 0.2s;
/* hover: border-color rgba(255,255,255,0.35) */
```

---

## Layout
```css
.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 3.5rem);
}

section {
  padding: 110px 0;
}

@media (max-width: 768px) {
  section { padding: 64px 0; }
}
```

---

## Background Texture
The site uses a very subtle grain/noise texture over all dark backgrounds.
Replicate with this CSS on `body`:
```css
body {
  background-color: var(--bg-base);
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 200px 200px;
}
```

---

## Section Backgrounds — Alternating Pattern
```
Hero:              --bg-base      (#0c0b09)
Systems/Scale/Exit: --bg-section  (#111009)  ← subtle gradient bottom: rgba(20,18,10,0.0) to rgba(30,28,18,0.6)
Services (4 cards): --bg-section  (#111009)
Quote + WhiskeyNeat: --bg-base    (#0c0b09)
Testimonials:      --bg-section   (#111009)
Final CTA:         --bg-base      (#0c0b09)
Footer:            #080807        (slightly deeper than base)
```

---

## PAGE SECTIONS — Build In This Order

---

### SECTION 1: NAVIGATION
Position: `fixed`, top: 0, width: 100%, z-index: 1000
Background: `rgba(12,11,9,0.88)`, `backdrop-filter: blur(14px)`
Border-bottom: `1px solid var(--border-subtle)`
Height: `72px`
Transition: background on scroll

**Layout (flex, space-between, align-center):**

Left — Logo:
```html
<a href="/">
  <span style="font-family:'DM Sans'; font-size:17px; font-weight:500; color:#EDE8DF; letter-spacing:0.01em;">
    Whiskey River <span style="color:#C4941F;">Media</span>
  </span>
</a>
```

Center — Nav links (hide on mobile < 768px):
```
Services   Intelligence   About   Blog
```
Style: DM Sans 400, 14px, color `var(--text-secondary)`, hover color `var(--text-primary)`, transition 0.2s, no underline, letter-spacing 0.01em, gap: 2.5rem

Right — Two buttons:
- `Client Login` — ghost button, smaller: padding 9px 20px, font-size 13px
- `Apply Now` — filled gold button, smaller: padding 9px 20px, font-size 13px, font-weight 700

Mobile: hamburger icon (3 lines, color white), clicking reveals fullscreen nav overlay in `--bg-base` with links stacked, large, centered.

---

### SECTION 2: HERO
Min-height: `100vh`
Background: `var(--bg-base)` with subtle radial gold glow:
```css
background: radial-gradient(ellipse 80% 50% at 50% 30%, rgba(196,148,31,0.07) 0%, transparent 70%), var(--bg-base);
```
Content: centered, `text-align: center`, `max-width: 820px`, `margin: 0 auto`
Padding-top: `160px` (accounts for fixed nav)

**Eyebrow:**
```
MARKETING AI CONCIERGE
```
Color: `var(--gold)`, 12px, letter-spacing 0.16em, uppercase, DM Sans

**H1 (two lines, Playfair Display 700):**
```
Scale Smarter.        ← color: var(--text-primary), NOT italic
Exit Stronger.        ← color: var(--gold), font-style: italic
```
Font-size: `clamp(3rem, 7vw, 5rem)`
Line-height: 1.0
Margin between lines: maintain natural flow (no forced breaks on desktop, natural wrap on mobile)

**Subheadline** (DM Sans 400, 17px, `var(--text-secondary)`, max-width 600px, centered, line-height 1.8):
```
We build AI-powered marketing systems that unstick growth-stage
businesses — and make them worth significantly more when it's time
to sell. No bloated retainers. No vanity metrics. Just compounding
results engineered from day one around your exit.
```

**CTA Row** (flex, centered, gap: 1rem, margin-top: 2.5rem, wrap on mobile):
1. Filled gold: `See How It Works` — scrolls to How It Works section
2. Ghost: `Apply to Work With Us` — links to application

**Ticker Bar** (margin-top: 3.5rem):
- Top border: `1px solid var(--border-subtle)`
- Padding: `1.5rem 0`
- Flex, centered, gap: 3rem, wrap on mobile (2×2)
- Font: DM Sans 13px, `var(--text-secondary)`

```
$0 → $10M   Revenue Journeys   •   AI + Human Execution   •   Exit-Ready Systems
```
Note: use bullet `•` separators between items. Numbers/labels in `var(--text-secondary)`.
On mobile: display as 3 items, centered, separated by bullet or newline.

---

### SECTION 3: SYSTEMS · SCALE · EXIT
Background: `var(--bg-section)`
Has subtle gradient fade at bottom edge.

**Top — Three icon pillars** (3 columns, centered text, gap: 3rem. Stack to 1 col on mobile):

Each pillar:
- Icon circle: `width: 64px, height: 64px, border-radius: 50%, background: rgba(255,255,255,0.05)` — centered
- Icon inside: SVG line icon, `color: var(--gold)`, `width: 24px`
  - Systems: database/stack icon
  - Scale: target/bullseye icon
  - Exit: bar chart rising icon
- Title: Playfair Display 700, 1.3rem, `var(--text-primary)`, margin-top 1.25rem
- Description: DM Sans 15px, `var(--text-secondary)`, max-width 280px, centered, line-height 1.7

```
[database icon]          [target icon]           [bar chart icon]
Systems                  Scale                   Exit
We build the             We activate growth      Everything is
foundation. Without      with AI-powered          engineered for
structure, there's       execution and            optionality — so
no scale.                data-driven targeting.   you can sell, raise,
                                                  or step away on
                                                  your terms.
```

**Divider:** `margin-top: 80px`

**Bottom — "Four Doors. One Direction." lead-in:**
Left-aligned (NOT centered), max-width 600px

- H2 (Playfair Display 700): `Four Doors. One Direction.`
- Body (DM Sans 15px, `var(--text-secondary)`):
  `Every engagement starts with a conversation about where you are and where you want to go.`

---

### SECTION 4: SERVICES (Four Cards)
Background: `var(--bg-section)`, continuing from Section 3 (no visible break)

**2×2 grid of service cards** (gap: 2px — cards butt up against each other with only a thin border line between them, matching the screenshot)

Each card:
```css
background: var(--bg-card);          /* #181610 */
border: 1px solid var(--border-subtle);
border-left: 2px solid var(--gold);  /* gold left accent — ALL cards */
padding: 2.5rem 2rem 2rem;
transition: background 0.2s, border-color 0.2s;
/* hover: background var(--bg-card-hover) */
```

Card content structure:
```
[Card Title — Playfair Display 700, 1.3rem, var(--text-primary)]
[Description — DM Sans 15px, var(--text-secondary), margin-top 0.5rem, line-height 1.7]
[Learn More → — DM Sans 14px, var(--gold), margin-top 1.5rem, no underline, hover underline]
```

Four cards:
```
AI SEO
Human strategy. AI execution. SearchAtlas-powered.
Learn More →

Media Buying
Paid media across Meta, Google, YouTube, TikTok.
Learn More →

Branding & Messaging
Voice, identity, and content that converts.
Learn More →

Web & App Development
Sites and systems built to scale.
Learn More →
```

Mobile: Stack to single column.

---

### SECTION 5: QUOTE + WHISKEYNEAT.AI
Background: `var(--bg-base)`
Two-column layout on desktop (55% / 45%). Stack on mobile.

**Left column:**

Large pull quote with gold left border:
```css
border-left: 3px solid var(--gold);
padding-left: 2rem;
```
Quote text: Playfair Display 400, `clamp(1.4rem, 2.5vw, 2rem)`, `var(--text-primary)`, line-height 1.5:
```
"Hope is not a strategy. We combine decades
of experience with AI-powered systems and
human oversight to build repeatable
marketing engines that scale."
```

Below quote — checklist (margin-top: 2.5rem):
Each item: flex row, gap 0.75rem, DM Sans 15px, `var(--text-secondary)`
Checkmark icon: small gold `✓` or SVG checkmark, `color: var(--gold)`
```
✓  AI + Human hybrid execution model
✓  Exit-focused strategy from day one
✓  MEC-driven reporting (Marketing Efficiency Coefficient)
✓  Month-to-month after initial 90-day build
```

**Right column:**

WhiskeyNeat.ai card:
```css
background: var(--bg-card);
border: 1px solid var(--border-subtle);
border-radius: 6px;
padding: 2rem;
```
Content:
- Stack icon (SVG layers icon): `color: var(--gold)`, width 28px, margin-bottom 1.25rem
- Title: Playfair Display 700, 1.5rem, `var(--text-primary)`: `WhiskeyNeat.ai`
- Body: DM Sans 14px, `var(--text-secondary)`, line-height 1.7:
  `Your marketing data. Your intelligence layer. Powered by WhiskeyNeat.ai. Real-time visibility into the metrics that actually drive business value.`
- CTA button (filled gold, full width of card, margin-top 1.5rem):
  `Learn About Our Intelligence Platform →`

---

### SECTION 6: TESTIMONIALS
Background: `var(--bg-section)`

**No section heading** — go straight into 3 cards (matching screenshot exactly)

3-column grid (stack to 1 on mobile), gap: 1.5rem

Each testimonial card:
```css
background: transparent;
border: 1px solid var(--border-subtle);
border-radius: 4px;
padding: 2rem;
```
Content:
- Quote: Playfair Display 400 italic, 1.05rem, `var(--text-primary)`, line-height 1.65
- Attribution line: flex row, align-center, gap 0.75rem, margin-top 1.5rem
  - Short line: `width: 28px, height: 1px, background: var(--gold)`
  - Name: DM Sans 12px, letter-spacing 0.12em, uppercase, `var(--text-secondary)`

```
"They turned our brand into a sales        "They didn't just build us a           "We tripled our lead flow in
machine... a record-setting                website — they built the               90 days, and it's built to
Black Friday."                             foundation for a future sale."         run without us."

—— AFTERMARKET TRUCK PARTS CEO            —— ENERGY SUPPLY CO CEO               —— SAAS CEO
```

---

### SECTION 7: FINAL CTA
Background: `var(--bg-base)`
Text-align: center
Padding: `130px 0`

Content (max-width 700px, centered):

- H2 (Playfair Display 700, `clamp(2rem, 4vw, 3.2rem)`, `var(--text-primary)`, line-height 1.1):
  ```
  Ready to Build a Business
  Worth Scaling — and Worth Buying?
  ```

- Body (DM Sans 16px, `var(--text-secondary)`, max-width 520px, centered, margin 1.5rem auto):
  ```
  Start with a conversation. We'll tell you exactly where you are
  and what it would take to get where you want to go.
  ```

- CTA button (filled gold, large, centered, margin-top 2rem):
  `Apply to Work With Us →`
  Padding: `18px 44px`, font-size: 16px, font-weight 700

- Qualifier (DM Sans 13px, `var(--text-tertiary)`, centered, margin-top 1.25rem):
  `We only accept clients doing $1M+ in annual revenue. Applications are reviewed within 48 hours.`

---

### SECTION 8: FOOTER
Background: `#080807`
Border-top: `1px solid var(--border-gold)` — this is the thin gold line visible in the screenshot

**Main footer grid** (4 columns on desktop, 2 on tablet, 1 on mobile):
Padding: `64px 0 48px`

```
Col 1 — Brand (widest column)
  Whiskey River Media  (same logo treatment as nav)
  Scale Smarter. Exit Stronger.  (DM Sans 14px, var(--text-secondary), margin-top 0.75rem)

Col 2 — SERVICES
  Label: DM Sans 11px, letter-spacing 0.14em, uppercase, var(--text-tertiary)
  Links: DM Sans 14px, var(--text-secondary), hover var(--text-primary)
  - AI SEO Concierge
  - Media Buying
  - Branding & Messaging
  - Web Development

Col 3 — COMPANY
  Same label style
  - Story
  - About
  - Blog
  - Apply

Col 4 — PLATFORM
  Same label style
  - WhiskeyNeat.ai
  - Client Login
```

**Footer bottom bar:**
Border-top: `1px solid var(--border-subtle)`
Padding: `24px 0`
Flex, space-between, align-center

Left: `© 2026 Whiskey River Media | Phoenix, AZ` — DM Sans 13px, `var(--text-tertiary)`
Right: `Privacy` · `Terms` — DM Sans 13px, `var(--text-tertiary)`, hover `var(--text-secondary)`

---

## Scroll Animations

Use `IntersectionObserver` (threshold: 0.12). On enter viewport, trigger:
```css
/* Initial state (set via JS on page load) */
opacity: 0;
transform: translateY(22px);

/* Animated state */
opacity: 1;
transform: translateY(0);
transition: opacity 0.65s ease, transform 0.65s ease;
```

Apply to:
- All `h2` section headings
- All body copy paragraphs beneath section headings
- Cards (stagger with 80ms delay increments per card in a group)
- The quote block
- Testimonial cards
- CTA headline

**Hero elements** animate on page load (not scroll):
- Eyebrow: delay 0ms
- H1 line 1: delay 100ms
- H1 line 2 (gold): delay 220ms
- Subheadline: delay 380ms
- Buttons: delay 520ms
- Ticker: delay 680ms

---

## Mobile Responsive Rules

```css
@media (max-width: 900px) {
  /* Quote + WhiskeyNeat section: stack to 1 column */
  /* Services: 1 column */
}

@media (max-width: 768px) {
  /* Nav: hide center links, show hamburger */
  /* Hero buttons: stack, full width */
  /* Systems/Scale/Exit pillars: 1 column */
  /* Testimonials: 1 column */
  /* Footer grid: 2 columns */
  /* Section padding: 64px 0 */
}

@media (max-width: 480px) {
  /* Footer: 1 column */
  /* Ticker: wrap to 2×2 */
  /* CTA button: full width */
}
```

---

## SEO — Include in `<head>`
```html
<title>Whiskey River Media | Fractional Marketing Agency for Founders</title>
<meta name="description" content="Whiskey River Media builds AI-powered marketing systems for growth-stage founders doing $1M–$10M in revenue. Exit-ready marketing that scales your business and increases your valuation. Phoenix, AZ.">
<meta property="og:title" content="Whiskey River Media | Scale Smarter. Exit Stronger.">
<meta property="og:description" content="AI-powered marketing systems for founders scaling toward an exit. 100+ brands scaled since 2019.">
<meta name="robots" content="index, follow">
```

### JSON-LD Schema
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  "name": "Whiskey River Media",
  "description": "Fractional marketing agency for growth-stage founders scaling toward an exit.",
  "url": "https://whiskeyrívermedia.com",
  "foundingDate": "2020",
  "founder": { "@type": "Person", "name": "Zach Schaefer" },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Phoenix",
    "addressRegion": "AZ",
    "addressCountry": "US"
  },
  "areaServed": "US",
  "serviceType": ["AI SEO", "Paid Media Buying", "Branding and Messaging", "Web Development", "Fractional Marketing"]
}
</script>
```

---

## File Output

Single file: `index.html`

```
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- charset, viewport, title, meta, OG, schema, fonts -->
  <style>
    /* ALL CSS — variables, reset, nav, hero, sections, cards, footer, animations, breakpoints */
  </style>
</head>
<body>
  <!-- nav -->
  <!-- hero -->
  <!-- systems/scale/exit + four doors lead-in -->
  <!-- 4 service cards -->
  <!-- quote + whiskeyneat -->
  <!-- testimonials -->
  <!-- final CTA -->
  <!-- footer -->
  <script>
    /* IntersectionObserver scroll animations + hero load animations + nav scroll behavior + mobile hamburger */
  </script>
</body>
</html>
```

**Everything in one file. No external CSS. No external JS. No frameworks.**
