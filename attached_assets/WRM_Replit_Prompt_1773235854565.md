# Replit Prompt: Whiskey River Media — Full Site + Client Portal Redesign

---

## PROJECT OVERVIEW

Build a complete, production-grade marketing website and client portal for **Whiskey River Media** — a premium AI-powered marketing agency that helps founders scale from $100K/month to $10M/month and build businesses that are worth selling.

The site must feel like a **premium founder-facing brand** — dark, authoritative, high-end whiskey aesthetic meets modern AI agency. Think Rolls-Royce meets Silicon Valley. Not a generic SaaS purple gradient. Not another agency template. Something a founder doing $2M/year would see and immediately trust.

**Tech Stack:** React + Tailwind CSS + React Router (single-page app with routing)  
**Color Palette:** Deep bourbon blacks and charcoals, aged gold/amber accents, off-white cream typography — no neon, no purple gradients  
**Typography:** Pair a strong serif display font (like Playfair Display or Cormorant Garamond from Google Fonts) with a clean geometric sans (like DM Sans or Outfit)  
**Aesthetic:** Luxury editorial — think WSJ Magazine meets a McKinsey deck meets a whiskey distillery brand book

---

## SITE ARCHITECTURE

Build 6 top-level views/pages using React Router:

1. `/` — Homepage
2. `/services` — Services & Pricing
3. `/apply` — Application / Contact
4. `/login` — Client Portal Login
5. `/portal` — Client Dashboard (authenticated view, mock auth okay)
6. `/intelligence` — WhiskeyNeat.ai intelligence hub (public-facing explainer + portal CTA)

---

## PAGE 1: HOMEPAGE (`/`)

### Hero Section
- **Eyebrow label** (small caps, amber): `Marketing AI Concierge`
- **Headline** (large, serif, bold): `Scale Smarter. Exit Stronger.`
- **Subheadline** (sans-serif, muted cream): `We combine decades of senior marketing strategy with AI execution to build marketing engines that drive growth now — and increase business value when it's time to sell.`
- **Two CTAs side by side:**
  - Primary (amber filled button): `See How It Works`
  - Secondary (ghost border button): `Apply to Work With Us`
- **Ambient background:** Dark near-black (#0d0d0b) with a very subtle noise grain texture overlay. Add a faint amber radial glow behind the headline — like a single spotlight on a stage.
- **Animated stat ticker** beneath CTAs showing three rotating numbers: `$0 → $10M Revenue Journeys` | `AI + Human Execution` | `Exit-Ready Systems`

### "Three Pillars" Section
Three columns in a dark section with amber icon accents:
- **Systems** — "We build the foundation. Without structure, there's no scale."
- **Scale** — "We activate growth with AI-powered execution and data-driven targeting."
- **Exit** — "Everything is engineered for optionality — so you can sell, raise, or step away on your terms."

### Services Preview Section
Headline: `Four Doors. One Direction.`  
Subheadline: `Every engagement starts with a conversation about where you are and where you want to go.`

Four horizontal service cards (dark card, amber left border accent):
1. **AI SEO** — *Human strategy. AI execution. SearchAtlas-powered.*
2. **Media Buying** — *Paid media across Meta, Google, YouTube, TikTok.*
3. **Branding & Messaging** — *Voice, identity, and content that converts.*
4. **Web & App Development** — *Sites and systems built to scale.*

Each card has: title, one-line description, and a `Learn More →` link.

### Why Whiskey River Section
Pull quote style, large serif type, amber accent line on left:
> "We don't do random acts of marketing. We build repeatable systems — and then we manage them so you don't have to."

Follow with a 2-column layout:
- Left: bullet points of differentiators (AI + Human hybrid, Exit-focused strategy, MEC-driven reporting, Month-to-month after setup)
- Right: dark card with the WhiskeyNeat.ai callout — "Your marketing data. Your intelligence layer. Powered by WhiskeyNeat.ai." with a CTA: `Learn About Our Intelligence Platform →`

### Social Proof / Testimonials
Dark background, three testimonial cards with company type labels (not names):
- "They turned our brand into a sales machine... a record-setting Black Friday." — Aftermarket Truck Parts CEO
- "They didn't just build us a website — they built the foundation for a future sale." — Energy Supply Co CEO
- "We tripled our lead flow in 90 days, and it's built to run without us." — SaaS CEO

### Final CTA Section
- Headline: `Ready to Build a Business Worth Scaling — and Worth Buying?`
- Subtext: `Start with a conversation. We'll tell you exactly where you are and what it would take to get where you want to go.`
- CTA Button: `Apply to Work With Us →`

---

## PAGE 2: SERVICES & PRICING (`/services`)

### Hero
- Headline: `Four Doors. One Direction.`
- Subheadline: `Choose your entry point. Everything scales from here.`

### Service Door 1: AI SEO Concierge
**Powered by SearchAtlas + Human QA**

Three-tier pricing cards (horizontal layout on desktop, stacked on mobile):

| Tier | Setup | Monthly |
|------|-------|---------|
| AI SEO Starter | $2,500 audit (credited to setup) → $6,500 setup | from $2,000/mo |
| AI SEO Growth | $12,000 setup | from $3,500/mo |
| AI SEO Concierge | $18,000–$25,000 setup | from $5,500/mo |

Below the cards, a callout box:
> "Every AI SEO engagement starts with a $2,500 MEC Audit + AI Opportunity Map. This fee is credited toward setup if you sign within 14 days."

What's included callout (accordion or expandable): list setup deliverables per tier.

### Service Door 2: Media Buying
Simple card with:
- Description: "Paid media management across Meta, Google, YouTube, TikTok, Pinterest, and Bing."
- Media fee structure: 15% of spend ($5K–$15K) | 12% ($15K–$50K) | 10% ($50K+)
- +$1,000/month per additional ad platform beyond first two
- Note: "Media management fees are always separate from retainer fees."
- CTA: `Apply for Media Buying →`

### Service Door 3: Branding & Messaging
- Description: "Your brand is your most transferable asset. We build it to last — and to sell."
- Services listed: Brand Identity, Voice & Tone, Content Strategy, Creative Direction
- Pricing: `Custom — starts with a discovery call.`
- CTA: `Start a Branding Conversation →`

### Service Door 4: Web & App Development
- Description: "We build sites and systems that convert — and that become intellectual property when you exit."
- Services: Website Design & Dev, Landing Pages, App Development, CMS Setup
- Pricing: `Project-based — scoped after discovery.`
- CTA: `Talk Development →`

### Pricing Philosophy Section
Small callout box with amber border:
> **A note on how we price:**  
> We separate the human build from the AI execution — because they're different kinds of value. You pay us to architect the machine. Then you keep us to run, supervise, and improve it. Month-to-month after your initial 90-day live period. No rigid long-term contracts.

---

## PAGE 3: APPLY (`/apply`)

Clean, minimal form page.

- Headline: `Let's See If We're a Fit`
- Subheadline: `We work with a limited number of clients. Tell us about your business and we'll get back to you within one business day.`

Form fields (styled dark inputs, amber focus border):
- Full Name
- Company Name
- Website URL
- Current Monthly Revenue (dropdown: Under $50K | $50K–$250K | $250K–$1M | $1M+)
- Primary Goal (dropdown: Scale Revenue | Prepare to Sell | Raise Capital | Reduce Marketing Chaos | All of the Above)
- Which service interests you most? (checkboxes: AI SEO | Media Buying | Branding | Web Dev | Full Concierge)
- Tell us about your business (textarea)
- How did you hear about us? (text input)

Submit button: `Submit Application →` (amber, full-width on mobile)

Below form: "We review every application personally. If there's a fit, we'll reach out to schedule a discovery call."

---

## PAGE 4: CLIENT PORTAL LOGIN (`/login`)

Premium login experience. Dark background, centered card.

- WhiskeyNeat.ai logo / wordmark above the login card (amber accent)
- Headline: `Welcome Back`
- Subheadline: `Access your marketing intelligence dashboard.`
- Email input
- Password input
- `Sign In →` button (amber)
- Forgot password link (muted, small)
- Below card: `Not a client yet? Apply to work with us →`

**Mock auth logic:** Any email + password combination that isn't blank redirects to `/portal`. Show a loading state for 1.5 seconds before redirect to simulate real auth.

---

## PAGE 5: CLIENT PORTAL DASHBOARD (`/portal`)

This is the **WhiskeyNeat.ai** powered client view. It should feel like a premium analytics product — dark dashboard, amber accents, clean data visualization.

### Layout
- **Left sidebar** (collapsible on mobile): Logo + nav items
  - Dashboard (home icon)
  - Services
  - Messages
  - Reports
  - Settings
  - Sign Out
- **Top bar:** Client company name + avatar initials + notification bell

### Dashboard Home Tab
- **Welcome header:** `Good morning, [Client Name].`
- **KPI Cards row** (4 cards, dark bg, amber accent top border):
  - Organic Traffic: `+34% MoM` with sparkline
  - Paid ROAS: `4.2x` with sparkline  
  - Leads Generated: `287 this month`
  - MEC Score: `74/100` with tooltip explaining MEC (Marketing Efficiency Coefficient)
- **Recent Activity Feed:** Timeline of recent actions — "SEO content published," "Ad campaign launched," "Monthly report ready," etc.
- **Upcoming Items:** A small card showing next scheduled items — "Strategy Call — Tue Mar 18" | "Monthly Report — Due Mar 31"

### Services Tab
List of active services for this client (mock data):
- AI SEO Growth — Active — $3,500/mo
- Media Buying — Active — 12% of spend
Each service has a status badge and a `View Details` button expanding to show deliverables and status.

### Messages Tab
A simple threaded messaging UI:
- Message thread with Whiskey River Media team
- Input field at bottom: `Send a message to your team...`
- Show 3-4 mock messages back and forth
- Include a file attachment icon

### Reports Tab
- List of available reports with download icons (mock PDFs):
  - "February 2026 Marketing Intelligence Report"
  - "Q1 2026 SEO Performance Report"  
  - "January 2026 Paid Media Report"
- Each row: report name, date, type badge, download button

### Settings Tab
- Profile: Name, Email, Company, Phone
- Notification preferences (toggles)
- Connected platforms (icons for SearchAtlas, Meta Ads, Google Ads — with "Connected" green badge)

---

## PAGE 6: WHISKEYNEАТ.AI INTELLIGENCE HUB (`/intelligence`)

Public-facing explainer page for WhiskeyNeat.ai — the intelligence layer Whiskey River Media provides to clients.

- **Hero:** Dark, amber glow. Headline: `Your Marketing Intelligence Layer.` Subheadline: `WhiskeyNeat.ai gives you a real-time view of your marketing performance — built on the data that actually matters for growth and exit value.`
- **What it is section:** 3 feature blocks:
  - Live Performance Dashboards
  - MEC Score Tracking (Marketing Efficiency Coefficient)
  - AI-Generated Insights + Monthly Reporting
- **How it integrates:** Explain that WhiskeyNeat.ai connects to SearchAtlas (SEO), Meta Ads, Google Ads, and CRM data to give a unified view.
- **CTA:** `WhiskeyNeat.ai is available exclusively to Whiskey River Media clients.` → Button: `Apply to Get Access →`

---

## DESIGN SYSTEM SPECS

### Colors
```css
--bg-primary: #0a0a08;
--bg-secondary: #111110;
--bg-card: #161614;
--accent-amber: #C8922A;
--accent-amber-light: #E8A83C;
--text-primary: #F5F0E8;
--text-muted: #8A8478;
--border-subtle: #252420;
--success: #4A7C59;
```

### Typography
- Import from Google Fonts: `Cormorant Garamond` (display, 600/700) + `DM Sans` (body, 400/500)
- Headings: Cormorant Garamond, serif
- Body/UI: DM Sans, sans-serif
- Small labels/eyebrows: DM Sans, uppercase, letter-spacing: 0.12em

### Component Conventions
- **Buttons:** Rounded-sm (4px radius), not pill-shaped. Primary = amber bg, dark text. Ghost = transparent with amber border and amber text.
- **Cards:** bg-card color, 1px border in border-subtle, subtle box-shadow on hover
- **Form inputs:** Dark bg, border-subtle border, amber outline on focus
- **Badges:** Small, rounded-full, colored by status (amber = active, green = complete, muted = pending)
- **Section spacing:** Generous — 120px top/bottom on desktop, 72px on mobile

### Animations
- Page transitions: fade in (opacity 0 → 1, 300ms ease)
- Hero headline: staggered word reveal on load (CSS animation-delay, translateY + opacity)
- Stat counter: count-up animation on scroll into view
- Cards: subtle scale(1.02) on hover with transition 200ms ease
- Dashboard KPI cards: fade-in with stagger on load

---

## NAVIGATION

**Top nav (sticky, dark bg with blur backdrop):**
- Logo (left): Whiskey River Media wordmark in cream/white
- Nav links (center): Services | Intelligence | About | Blog
- Right CTAs: `Client Login` (ghost button) | `Apply Now` (amber filled button)

**Mobile nav:** Hamburger → full-screen slide-down menu, dark bg, large serif nav items

**Footer:**
- Dark bg, 4-column layout
- Column 1: Logo + tagline "Scale Smarter. Exit Stronger."
- Column 2: Services links
- Column 3: Company links (Story, About, Blog, Apply)
- Column 4: Intelligence links + "Client Login"
- Bottom bar: © 2026 Whiskey River Media | Phoenix, AZ | Privacy | Terms
- Small amber accent line across very top of footer

---

## CONTENT NOTES & COPY GUIDELINES

**Brand voice:** Authoritative but not arrogant. Direct, founder-to-founder. Never fluffy. Never hype. Sounds like advice from a senior partner, not a sales pitch.

**Key phrases to use throughout:**
- "Scale Smarter. Exit Stronger."
- "Human strategy. AI execution."
- "Marketing intelligence" (not just marketing)
- "MEC" (Marketing Efficiency Coefficient) — explain it once, then reference it throughout
- "Exit-ready" and "exit-focused"
- "WhiskeyNeat.ai" — always stylized exactly this way
- "Month-to-month after setup" — reference under pricing

**Phrases to AVOID:**
- "Unlimited"
- "Full-service" (use "full-stack" instead)
- "We're passionate about..."
- "Innovative solutions"
- Anything that sounds like it was written by a junior copywriter

---

## MOCK DATA FOR PORTAL

Client name: Apex Industrial Supply  
Active services: AI SEO Growth, Media Buying  
MEC Score: 74  
Organic traffic growth: +34% MoM  
Paid ROAS: 4.2x  
Leads generated this month: 287  
Monthly retainer: $8,200  

---

## FINAL DELIVERABLE REQUIREMENTS

- Single React app, fully routed with React Router v6
- All 6 pages built and navigable
- Fully responsive (mobile-first)
- No external UI libraries (Tailwind only — core utility classes)
- Google Fonts loaded via @import in CSS or link tag
- Portal uses simple state-based mock auth (no backend required)
- All mock data hardcoded cleanly in a `/data/mockClient.js` file
- Clean component structure: `/components/`, `/pages/`, `/data/`
- No placeholder gray boxes — every section must have real copy and real design
- Dark mode only — this site does not have a light mode

---

*Build this like you're pitching it to a $5M/year founder who has seen every agency website and is tired of them all. Make it feel like the agency itself is worth trusting with their business.*
