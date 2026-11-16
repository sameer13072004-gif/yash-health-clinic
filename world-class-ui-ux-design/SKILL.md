---
name: world-class-ui-ux-design
description: Design and engineer flagship, high-conversion websites and web applications using deterministic design tokens, spatial grids, typographic scales, industry color palettes, and mobile-first conversion architectures derived from Stripe, Linear, Airbnb, Apple, Shopify Polaris, Material 3, and Indian local-service benchmarks. Use whenever the user asks to design, build, style, refactor, or review a website, landing page, web app, UI component, or DESIGN.md specification.
---

# World-Class UI/UX Design

Engineer websites and web applications that look, feel, and convert like flagship product companies (Stripe, Linear, Airbnb, Apple, Shopify Polaris, Material 3, Zerodha, Urban Company) rather than generic AI or freelancer templates. Replace subjective styling requests with a Three-Tier Design Token Contract, mathematical spacing and typographic scales, perceptual contrast rules, and empirically grounded conversion architectures.

## When to Use

- Designing or coding a new website, landing page, or web application from scratch
- Refactoring or upgrading an existing UI from a basic template into a high-retention, flagship product
- Generating a `DESIGN.md` specification or CSS/Tailwind design token system for AI coding agents (e.g., Google Antigravity, Cursor, Claude Code)
- Optimizing a service, SaaS, e-commerce, or Indian local-business website for mobile-first ergonomics and conversion rate optimization (CRO)
- Auditing UI/UX code against the 30 Golden Rules and 20 Premium vs. Amateur signals

## Reference Files in This Skill

Consult the bundled reference files for exhaustive lookups when executing specific phases:

- `references/design-systems-and-palettes.md` - Extracted token specifications for Stripe, Linear, Airbnb, Apple, Shopify Polaris, Material 3, Zerodha, CRED NeoPOP, 11 flagship website pattern breakdowns, 16 industry-specific HEX color palettes, and a ready-to-use Three-Tier CSS Token Starter Template.
- `references/architecture-mobile-and-cro.md` - The 11-section conversion sequence, 20 Amateur vs. Premium signals, 2025-2026 web design trend decision matrix, mobile-first section adaptation rules, Core Web Vitals thresholds, and the Indian Local Business Conversion Playbook.

## Core Execution Workflow

Follow these 6 sequential steps for every UI/UX design, `DESIGN.md`, or frontend coding request.

### Step 1: Industry Classification and Three-Tier Token Contract First

Never write raw component markup with hardcoded hex codes or arbitrary pixel values. Before generating UI components, classify the project's industry vertical and define a `:root` CSS variable contract organized into three cascading tiers:

1. **Primitive Tokens:** Context-agnostic raw palette and scale values (`--space-1: 4px`, `--space-2: 8px`, `--space-4: 16px`, `--space-6: 24px`, `--space-8: 32px`, `--space-16: 64px`, `--space-24: 96px`).
2. **Semantic Tokens:** Purpose-driven aliases that enforce the **60-30-10 Surface Allocation Rule**:
   - **60% Dominant Neutral Canvas (`--bg-canvas`):** Pure White (`#ffffff`) or Dark-First Void Black (`#08090a`).
   - **30% Secondary Structural Surfaces and Ink (`--bg-surface-soft`, `--text-primary`, `--text-muted`, `--border-subtle`):** Cool off-white (`#f6f9fc`), parchment (`#f5f5f7`), warm cream (`#f5e9d4`), or dark carbon lift (`#1a1a1a`). Never use pure `#000000` body text on `#ffffff` backgrounds; use tinted deep ink (`#0d253d` Stripe Navy, `#1d1d1f` Apple Near-Black, `#222222` Airbnb Ink, or `#444444` Zerodha Charcoal) to prevent visual glare. Step muted secondary copy to `#64748d` or `#6a6a6a` on light, or `#b0b0b0` (Silver Mist) on dark, verifying WCAG AA (`4.5:1`) or AAA (`7:1`) contrast.
   - **10% High-Contrast Chromatic Accent (`--color-action-primary`):** Reserved strictly for primary CTAs, active indicators, and micro-badges. Quarantine semantic status colors (`--color-danger: #c13515`, `--color-warning: #c47700`, `--color-success: #008a05`) strictly for form validation, alerts, and live financial/status deltas; never use them as decorative section backgrounds.
3. **Component Tokens:** Scoped variables referencing semantic tokens (`--btn-primary-bg: var(--color-action-primary)`, `--card-radius: var(--radius-lg)`).

Quick industry palette defaults (see `references/design-systems-and-palettes.md` for all 16 verticals):

- **B2B SaaS / FinTech (Stripe):** Canvas `#FFFFFF`, Alt `#F6F9FC`, Ink `#0A2540` / `#425466`, Accent `#533AFD`, Border `#E3E8EE`.
- **DevTools / AI / Cloud IDE (Linear):** Canvas `#08090A`, Card Lift `#1A1A1A`, Ink `#FFFFFF` / `#B0B0B0`, Accent `#5E6AD2` or `#3B63F7`, Border `rgba(255,255,255,0.08)`.
- **Home Renovation / Trades / Local Service:** Canvas `#FFFFFF`, Alt `#F6F9FC`, Ink `#0D253D` / `#64748D`, Accent `#B64400` (High-Vis Amber Orange), Border `#E3E8EE`.
- **Luxury Real Estate / Architecture:** Canvas `#F5E9D4` / `#FFFFFF`, Ink `#1A1A1A` / `#404040`, Accent `#9B6829` (Warm Architectural Bronze), Border `#E3E8EE`.
- **E-Commerce / Hospitality (Airbnb):** Canvas `#FFFFFF`, Alt `#F7F7F7`, Ink `#222222` / `#6A6A6A`, Accent `#FF385C` (pressed `#E00B41`), Border `#DDDDDD`.
- **Clinic / Hospital / Healthcare:** Canvas `#FFFFFF`, Alt `#F6F9FC`, Ink `#273951`, Primary `#2779A7` (Petrol Blue), Accent `#24B47E` (Vitality Emerald), Border `#E3E8EE`.

### Step 2: Spatial Grid and Mathematical Spacing (`4px` / `8px` Scale)

1. **Container and Structural Rails:** Frame layouts inside a `980px-1280px` max-width container (`1200px` Stripe standard, `1280px` Linear/Airbnb, `1100px` Zerodha, `980px` Apple) with responsive horizontal gutters: `16px` on mobile (`<768px`), `24px` on tablet (`768px-1023px`), and `40px-48px` on desktop (`>=1024px`). For editorial or B2B precision, frame the container with persistent `1px solid var(--border-subtle)` vertical grid rails.
2. **Strict Spacing Scale:** Restrict all padding, margins, and layout gaps to `2, 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 64, 80, 96, 128px`.
3. **Section Breathing Room:** Enforce `64px-96px` vertical section padding on desktop (`80px-100px` for airy minimalist hardware or fintech), stepping down to `48px` on tablet and `32px` on mobile.
4. **Alignment Cadence and Chunking (Miller's Law):** Center-align hero openers (`max-w-2xl`), but **left-align** all feature grids, card internals, and body paragraphs along vertical grid rails (`60-70ch` max line width). Chunk service and feature grids into `3-4` cards per row (`24px` grid gap, `20px-32px` internal card padding), with at most 3 data points per card (icon/visual, 4-word title, 2-line description). Move secondary details into progressive disclosure patterns (`Tabs` or `Accordion`).

### Step 3: Inverse Typographic Scale and Numeric Discipline

Eliminate "weight inflation" (making everything `700` Bold). Build hierarchy via scale, luminance tokens, and inverse tracking and line-height:

1. **Display / H1 (`44px-56px` desktop, `36px` mobile):** Apply tight negative letter-spacing (`-0.025em` to `-0.04em` or `-1.2px` to `-1.4px`) and tight line-height (`1.03-1.15`). Use refined weights (`300` Light for Stripe editorial, `500` Medium for Zerodha, or `600` Semibold for Apple/Linear).
2. **Section H2 (`28px-36px` desktop, `24px-28px` mobile):** Weight `500-600`, negative tracking (`-0.015em` to `-0.025em`), line-height `1.20-1.35`.
3. **Card Title / H3 (`18px-20px`):** Weight `600`, tracking `-0.18px`, line-height `1.35`.
4. **Body Copy (`15px-17px`):** Weight `400` (or `500` in Airbnb-style dense listing grids), `0px` tracking, relaxed `1.43-1.60` line-height.
5. **Uppercase Micro-Badges / Eyebrows (`10px-12px`):** Weight `600-700`, positive tracking (`+0.04em` to `+0.08em`).
6. **Tabular Numerals (`tnum`):** Apply `font-feature-settings: "tnum"` (`tabular-nums`) to every currency figure, pricing tier, counter, rating, and table cell so digits align vertically.

### Step 4: Affordance, Elevation, and Micro-Interactions

1. **Corner Radius Grammar (Container vs. Control Contrast):** Never use the same border-radius for static cards and clickable buttons.
   - **Text Inputs:** `6px-8px` radius, `min-height: 40px-48px`, `1px solid #d2d2d7` or `#a8c3de` border.
   - **Static Cards and Panels:** `10px-14px` radius (`18px` for store utility cards; never exceed `12px` in dark-mode Linear UI).
   - **Interactive Primary Buttons:** Full capsule pills (`border-radius: 9999px` or `160px`) or crisp tactile rectangles (`6px-8px` in Airbnb/Zerodha).
2. **Hairlines Over Drop Shadows:** Ban default drop shadows on static grid cards. Separate surfaces using `1px solid` hairline borders (`#e3e8ee` or `#dddddd` in light mode; `rgba(255,255,255,0.08)` in dark mode) and surface alternation (`#ffffff` vs `#f6f9fc`). Reserve soft multi-layer shadows (`0 2px 6px rgba(0,0,0,0.04), 0 4px 8px rgba(0,0,0,0.1)`) strictly for floating modals, sticky booking cards, and 2.5D overlapping hero UI composites.
3. **Glassmorphism Restraint:** Restrict `backdrop-filter: saturate(180%) blur(20px)` with `80%` background opacity and a `1px` border strictly to sticky top navbars (`44px-64px` height) and floating control pills. Never apply blurred translucency to text-heavy cards or forms.
4. **Single Primary CTA Hierarchy (Hick's Law):** Render at most **one** filled primary brand CTA button per viewport band (`14px-17px` font, compact `8px 16px` to `14px 24px` padding, `min-height: 44px`). Style any companion secondary action as a transparent/outline pill or inline text link with a trailing chevron (`->`).
5. **Tactile State Feedback (`<100ms` INP):** Attach `transition: transform 150ms cubic-bezier(0.2, 0, 0, 1), background-color 150ms ease` to all controls. Define `:hover` fill shifts, `:focus-visible` high-contrast `2px-3px` focus rings (`0 0 0 2px #222222` or `3px rgba(0,113,227,0.15)`), `:active` press compression (`transform: scale(0.92)` to `0.97` or Material 3 corner morphing), and explicit `:disabled`, loading spinner, empty, and `--color-danger` validation states.

### Step 5: Information Architecture and Conversion Flow (11-Section Blueprint)

Optimize the first two screenfuls for the **74% Attention Window** (57% of viewing time occurs above the fold; 17% in the second screenful) and **break the illusion of completeness** by letting the top 20%-30% of the next section's cards or UI composite bleed across the bottom fold line.

Structure high-converting service and product websites using this 11-section sequence:

1. **Sticky Global Navbar (`44px-64px` height):** Logo left, 4-5 literal links (`Services`, `Process`, `Work`, `Pricing`, `FAQ`), and 1 primary CTA cluster right (for local services: `tel:` Call button + WhatsApp trigger). No outbound social icons in the header.
2. **Above-the-Fold Hero:** Micro-cap locality/category eyebrow badge, outcome-driven `H1`, 2-line subtitle, 1 primary CTA + 1 quiet secondary link, and 1 authentic visual proof asset (coded HTML/CSS 2.5D UI composite, real before/after gallery, or authentic team photo - never generic foreign stock models).
3. **Immediate Trust Bar (Social Proof Strip):** Placed at the fold boundary - monochrome client logos or quantified local proof (`"4.9 Star Google Rating"`, `"Trusted by 30,000+ households"`, background-verified technician and warranty badges).
4. **Core Services / Value Grid (or Asymmetric Bento Grid):** 3-column grid (or 3-column Bento grid with the flagship card spanning 2 columns) showing service title, 2-line outcome, starting price/turnaround, and `Learn more ->` link.
5. **How It Works (3-to-4 Step Process):** Numbered horizontal timeline (`01` to `04`) connected by a `1px` hairline rail to eliminate post-click anxiety.
6. **Visual Portfolio / Before-and-After Proof:** High-resolution `4:3` or `16:9` cards (`12px-14px` radius) with locality and scope tags, or interactive product UI previews.
7. **Verified Testimonials and Case Studies:** 3-up grid with specific outcomes bolded at the top, full name, neighborhood/role, `1:1` circular (`50%` radius) real avatar, and verification badge.
8. **Transparent Pricing and Rate Card:** 3-4 tier cards (`32px` padding, `12px` radius) using tabular numerals (`tnum`), highlighting the featured tier with a dark navy surface (`#1c1e54` or `#0d253d`). Never hide all pricing behind "Contact for Price" (which loses 50%-70% of qualified local buyers); for custom trades, publish starting rate cards (`₹`), explicit warranty badges, and Annual Maintenance Contract (AMC) plans.
9. **Objection-Handling FAQ (Accordion):** 5-8 single-column expandable rows (`max-width: 768px`, centered, `>=44px` header height) addressing pricing, timelines, and warranties.
10. **High-Contrast Final CTA Band and Chunked Lead Capture:** Never render a 12-field single-step form. Use a 3-field form (`Name`, `Phone/WhatsApp` with `type="tel"`, `Service Needed`) or a multi-step wizard limited to **2-3 fields per step** with a progress bar and trust badges beside the submit button.
11. **Structured Utility Footer:** 4-5 column sitemap on a quiet surface (`#f7f7f7` or `#ffffff` with `1px` top border) housing service links, local SEO neighborhood links, physical address, and legal metadata in `13px-14px` muted copy.

### Step 6: Mobile-First Ergonomics, CWV Speed, and Indian Local Playbook

1. **Touch Targets (Fitts's Law):** Enforce a minimum `44x44 px` (`48x48 dp`) tap area on all mobile buttons, accordion headers, and links, with at least `8px` (`8pt`) gap between adjacent buttons and `16px` (`16pt`) vertical gap between stacked form fields.
2. **The 16px Mobile Input Rule:** Always set `font-size: 16px` on `<input>`, `<select>`, and `<textarea>` elements on mobile (`<768px`) to prevent iOS/Android browsers from auto-zooming on focus.
3. **Progressive Component Simplification:** Step grids from `3-4 columns` (desktop) to `2 columns` (tablet) to `1 column` (mobile). Simplify 3-panel desktop hero UI composites down to a **single-panel mockup** on `<768px`, stacking copy and full-width CTA first, visual second.
4. **Sticky Bottom Thumb-Zone Bar and Indian Local Conversion Loop:** On `<768px`, pin a fixed bottom conversion bar (`height: 64px`, `padding: 8px 16px`, `border-top: 1px solid #dddddd`, `z-index: 50`, reserving `64px` body bottom padding) containing a 2-column grid: an active Click-to-Call button (`<a href="tel:+91...">`) and a pre-filled WhatsApp trigger (`https://wa.me/91XXXXXXXXXX?text=...` with service and locality pre-populated) paired with an operational SLA badge (`"Instant WhatsApp reply within 30 seconds"`).
5. **Core Web Vitals (3-Second Mobile Speed Cliff):** Engineer for `LCP < 2.5s` (target `1-2s`), `INP < 100ms`, and `CLS < 0.1`. Set explicit `width`, `height`, or CSS `aspect-ratio` (`4/3`, `16/9`, `1/1`) on all media containers to eliminate layout shifts, avoid heavy WebGL/script bloat on commercial pages, and respect `prefers-reduced-motion: reduce`.

## Gotchas and Pre-Delivery Verification Checklist

Audit every generated file against these rules before completing your response:

- [ ] **Zero Raw Values in Components:** All colors, spacing, radii, and fonts consume `:root` CSS tokens (Primitive -> Semantic -> Component).
- [ ] **No Pure Black Glare:** Primary light-mode text uses tinted ink (`#0d253d`, `#1d1d1f`, `#222222`, or `#444444`) instead of `#000000`, and dark mode uses `#08090a` Void Black with `#1a1a1a` card lift.
- [ ] **Inverse Typography and `tnum`:** Headings `>=28px` have negative letter-spacing (`-0.02em` to `-0.04em`), line-height scales inversely with font size, and all numbers/prices use `font-feature-settings: "tnum"`.
- [ ] **Radius and Shadow Discipline:** Static cards are free of heavy drop shadows (using `1px` hairlines instead), and buttons have a distinct radius (`9999px` pill or `6px-8px` rectangle) from cards (`10px-14px`).
- [ ] **Single Primary CTA and Form Chunking:** At most 1 filled primary CTA appears per viewport band, and lead forms are capped at `2-3` fields per step with `font-size: 16px` and `>=44px` tap height on mobile.
