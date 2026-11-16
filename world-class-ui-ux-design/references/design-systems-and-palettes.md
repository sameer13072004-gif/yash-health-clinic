# Flagship Design Systems, 11 Benchmark Patterns, and 16 Industry Palettes

Use this reference to select production-verified tokens when initializing `:root` CSS variables, authoring a `DESIGN.md` specification, or borrowing proven design patterns.

---

## 1. Extracted Flagship Design System Specifications

| Design System | Typography and Scale Rules | Spacing and Grid Rules | Border Radius Scale | Shadow and Elevation Rules | Primary Button Style |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Stripe** | **`sohne-var`** (product) + **`Source Serif`** (editorial). Display: `56px` (`36px` mobile) / weight `300` / `1.03-1.12` LH / `-1.4px` tracking. Body: `15px-16px` / weight `300-400` / `1.4-1.55` LH. Money/metrics use `font-feature-settings: "tnum"` (`14px`, `-0.42px` tracking). | **`8px` base grid** (`2, 4, 8, 12, 16, 24, 32, 64px`). Persistent `1px` `#e3e8ee` structural rails with `40px` content inset; `64px-80px` dense gaps; `96px-128px` marketing section gaps; `1200px` max-width. | `xs`: `4px` (nav/links)<br>`sm`: `6px` (text inputs)<br>`md`: `8px`<br>`lg`: `12px` (feature and pricing cards)<br>`xl`: `16px`<br>`pill`: `9999px` (buttons and tags). | Mostly flat. Structure comes from `1px` `#e3e8ee` hairlines and surface alternation (`#ffffff` vs `#f6f9fc` vs `#f5e9d4`). Broad soft Level 2 shadows (`#003770` / `0 0 30px #533afd35`) reserved strictly for floating dashboard composites. | **Tight Pill (`9999px`)**: Fill `#533afd` (or `#635bff`; pressed `#2e2b8c`), text `#ffffff`, `16px` weight `400`, compact `8px 16px` padding (`>=40-44px` mobile touch target). Only **one** filled indigo pill per marketing band. |
| **Linear** | **`Inter Variable` (`Precision Gothic`)** + **`Berkeley Mono`**. Hero: `72px` / weight `510-700` / `-0.02em` to `-0.04em` tracking. Body: `17px` / weight `400-500` / `1.4-1.6` LH. Button: `14px` / weight `500`. | **`4px` / `8px` scale** (`2, 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 64, 80, 96, 128px`). `1280px` max-width, `96px` section gap, `24px` element gap, `16px` card padding. | `sharp`: `0px`<br>`tags/small`: `6px`<br>`inputs/medium`: `8px`<br>`cards`: `10px`<br>`modals`: `12px` (never exceed `12px` on containers)<br>`buttons`: `160px` (full pill). | **Dark-first (`#08090a` Void Black)**. Cards lift via `#1a1a1a` (Carbon Lift) and `1px` light-catching borders (`rgba(255,255,255,0.08)`). Shadows (`sm: 0 1px 2px rgba(0,0,0,0.1)`, `md: 0 4px 16px rgba(94,106,210,0.2)`, `lg: 0 16px 32px rgba(0,0,0,0.25)`) strictly for floating modals/menus. | **Full Pill (`160px` radius)**: Star White (`#ffffff`) fill with Void Black (`#08090a`) text, or Signal Blue (`#3b63f7`) / Indigo (`#5e6ad2`) fill. No decorative text shadows. |
| **Airbnb (DLS)** | **`Airbnb Cereal VF`** + `JetBrains Mono`. Body baseline is weight **`500`** (`400` only on `12px-13px` captions). Section H2: `28px` / `700` / `1.43` LH. Listing Title: `20px` / `600` / `-0.18px`. Enables `salt` on `11px` and `14px` bold labels. | **`8px` base** (`4, 8, 12, 16, 20, 24, 32, 48px`). `1280px` max container; gutters `40px` desktop, `24px` tablet, `16px` phone. Vertical section padding: `64px` desktop, `48px` tablet, `32px` phone. | `--radius-sm`: `8px` (inputs, Reserve button)<br>`--radius-md`: `14px` (4:3 listing images, sticky booking card)<br>`--radius-lg`: `20px` (16:9 hero photo frames)<br>`--radius-pill`: `9999px` / `50%` (search bar, avatars, icon buttons). | Cards are flat or ringed (`0 0 0 1px #dddddd`). Search bar uses `0 2px 6px rgba(0,0,0,0.04)`. Sticky booking panel uses 3-layer raised shadow: `0 0 0 1px rgba(0,0,0,0.02), 0 2px 6px rgba(0,0,0,0.04), 0 4px 8px rgba(0,0,0,0.1)`. | **Tactile Rounded Rect (`8px` radius)**: Rausch (`#ff385c`) fill, `#ffffff` text, `16px` Cereal weight `500`, `14px 24px` padding, no shadow. Active press: `transform: scale(0.92)` with `#e00b41` fill and `2px` `#222222` focus ring. |
| **Apple (HIG / Web)** | **`SF Pro Display`** (headings `>=20px`: `80px` / `600` / `-1.2px`; `56px` / `600` / `1.07` LH / `-0.28px`) + **`SF Pro Text`** (body `17px` / `400` / `1.47` LH / `-0.374px`; captions `14px`; global nav `12px`). | **`4px` / `8px` base grid** (`8, 12, 16, 20, 24, 28, 32, 40px`). `980px` centered marketing container; `80px` full-bleed product tile padding; `24px` utility card padding. | `none`: `0px` (full-bleed product gallery tiles)<br>`xs/sm`: `8px-12px` (inputs, compact controls)<br>`md`: `18px` (store utility cards)<br>`lg`: `28px-36px` (feature spotlights)<br>`full`: `9999px` (all primary/secondary CTAs). | **Zero drop shadows on UI chrome.** Depth is achieved via surface alternation (`#ffffff` vs `#f5f5f7` vs `#272729`), `1px` `rgba(0,0,0,0.08)` hairlines, and frosted glass (`saturate(180%) blur(20px)`). Only 3D product renders cast `3px 5px 30px rgba(0,0,0,0.22)`. | **Capsule Pill (`9999px` radius)**: Action Blue (`#0071e3` or `#0066cc`) fill, `#ffffff` text, `17px` SF Pro Text weight `400`, `11px 21px` padding (`44px` height). Companion secondary CTA is transparent pill with `#0066cc` text/border. |
| **Shopify Polaris** | **`Inter` / System UI**. Merchant-first content clarity, high legibility for dense data tables, forms, and admin dashboards. | **`4px` base rhythm**: `050` (`2px`), `100` (`4px`), `200` (`8px`), `300` (`12px`), `400` (`16px`), `500` (`20px`), `800` (`32px`), `1200` (`48px`). | Token scale: `none` (`0`), `100` (`4px`), `150` (`6px`), `200` (`8px`), `300` (`12px`), `400` (`16px`). | Relies on semantic border tokens (`subdued`, `base`, `strong`) and `Card`/`Box` surface tokens to separate admin regions cleanly. | **4-Variant Action Hierarchy**: `Primary`, `Secondary`, `Destructive`, and `Plain` variants with `4px-8px` radius, grouped via `ButtonGroup`. |
| **Material Design 3 (M3)** | **`Roboto` / `Google Sans Flex`**. 5 roles x 3 sizes (`Display`, `Headline`, `Title`, `Body`, `Label` in `L/M/S` = 15 styles) + 15 emphasized variants. | **`4dp` / `8dp` spatial grid** (`16dp` standard card padding; `48dp` / `7-10mm` touch targets). Adaptive across 5 window size classes. | `none`: `0dp`, `xs`: `4dp` (chips), `sm`: `8dp` (inputs/menus), `md`: `12dp` (cards), `lg`: `16dp` (FAB/drawer), `xl`: `28dp` (dialogs/sheets), `full`: `9999px` (buttons). | **6 Tonal Elevation Levels** (communicated via primary color tint offset on `surface-container-*`, not shadows): Level 0 (`0%`), Level 1 (`+5%`, cards), Level 2 (`+8%`, nav bars), Level 3 (`+11%`, FAB/dialogs), Levels 4-5 (`+12%/+14%`, hover/focus). | **Full Capsule (`9999px`)**: Uses `--md-sys-color-primary` fill with `--md-sys-color-on-primary` text. In M3 Expressive, buttons dynamically morph corner radius (to `6dp`) on press. |
| **Zerodha Universe** | **`Inter, sans-serif`**. Hero H1: `44px` / weight `500` / `#444444` / tight tracking. Section H2: `32px` / weight `500`. Body: `16px-18px` / `1.6` LH. | `1100px` max-width container; `80px-100px` vertical section padding; generous airy whitespace. | Strictly `6px` border-radius on primary buttons and cards (never exceeding `8px`). | Zero decorative drop shadows or background gradients; flat geometric SVGs and `1px` `#e0e0e0` dividers. | **Sharp-Modern Rect (`6px` radius)**: `#387ed1` Primary Blue fill, `#ffffff` text, `12px 30px` padding. Secondary action is text link with trailing chevron (`->`). |
| **CRED NeoPOP** | Geometric Sans + Monospace numerals + editorial serif accents (`Cirka` / `Playfair`). | High-contrast dark modular blocks with sharp geometric framing. | Strictly `0px` sharp corners on 3D isometric pop surfaces. | 3D isometric extruded edges (`4px-6px` solid bottom-right extrusion) instead of blurred drop shadows. | **3D Isometric "Pop" Button (`0px` radius)**: `#ffffff` or `#d2ff00` face over `#08090a` / `#000000` canvas that translates flush onto its extruded edge on `:active` press. |

---

## 2. 11 Flagship Website Pattern Blueprints ("What to Steal")

1. **Apple (`apple.com`):** Steal the **Light/Dark Gallery Cadence (`#ffffff` -> `#f5f5f7` -> `#272729`) + Zero UI Chrome Shadows + `52px` Frosted Sticky Sub-Navbar (`saturate(180%) blur(20px)`)**. Let hardware/product imagery cast the only shadow (`3px 5px 30px rgba(0,0,0,0.22)`).
2. **Stripe (`stripe.com`):** Steal the **Weight-300 Tightly-Tracked Display Headline (`56px`, `-1.4px`) + Persistent `1px` `#e3e8ee` Grid Rails (`40px` inset) + Tabular Money Type (`tnum`) + 3-Panel CSS UI Composite** (simplifying to 1 panel on mobile).
3. **Linear (`linear.app`):** Steal the **Void Black (`#08090a`) Canvas + Carbon Lift (`#1a1a1a`) Cards with `1px` `rgba(255,255,255,0.08)` Light-Catching Borders + Container (`<=12px`) vs. Pill (`160px`) Radius Contrast**.
4. **Airbnb (`airbnb.com`):** Steal the **Weight-500 Body Baseline (`#222222`) + `4:3` `14px`-Radius Listing Cards + Sticky `370px` Booking Panel on Desktop (`top: 120px`, 3-layer shadow) that converts into a Fixed Bottom Reserve Bar on Mobile**.
5. **Lando Norris by OFF+BRAND (Awwwards SOTY 2025):** Steal the **Two-Token Livery Contract (`#D2FF00` Volt Lime on `#111112` Carbon) + Content-Derived Dynamic Color**, while avoiding heavy WebGL/video megabyte bloat or orientation locks.
6. **Igloo Inc. by abeto (Awwwards SOTY 2024):** Steal **Material World Coherence ("One Physics")** - define one consistent surface/lighting model across every card, hover, and modal rather than mixing unrelated effects.
7. **Lusion v3 and Spaace (Awwwards SOTY 2023 / SOTM 2026):** Steal **Interactive Case-Study Pacing** - clean editorial project grids paired with subtle hover physics and dark/light chapter transitions.
8. **Zerodha Universe (`zerodha.com`):** Steal **Anti-Gamification Airy Utility (`80px-100px` vertical padding, `1100px` container) + `6px` Sharp-Modern Edges + Trailing-Chevron (`->`) Secondary Links**.
9. **CRED (`cred.club` / NeoPOP):** Steal **Tactile 3D Isometric "Pop" Buttons (`0px` radius with extruded edge)** on `#000000` / `#08090a` dark canvases for youth, gaming, or exclusive membership launches.
10. **Urban Company (`urbancompany.com`):** Steal the **Quantified Household Trust Proof ("Trusted by 30 lakh+ households") + Upfront Rate Card, Verified Technician Badges, and Warranty Loop**.
11. **Razorpay (`razorpay.com` / Blade MCP):** Steal **Infrastructure-Grade Token Governance** - expose every color, spacing, border, radius, and typography decision as strict CSS variables so zero drift occurs across screens.

---

## 3. Industry-Specific High-Converting Color Palettes (16 Categories)

| # | Industry Category | Primary Brand / Surface HEX | Secondary Surface / Ink HEX | Accent / CTA HEX | Neutral Canvas and Border HEX | Conversion Rationale |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | **Luxury Real Estate and Architecture** | `#1A1A1A` (Carbon Obsidian) | `#404040` (Graphite Slate) | `#9B6829` (Warm Architectural Bronze) | Canvas: `#F5E9D4` / `#FFFFFF`<br>Border: `#E3E8EE` | Warm cream, deep obsidian, and restrained bronze mirror tactile architectural materials and appeal to high-net-worth buyers. |
| **2** | **Clinic, Hospital and Healthcare** | `#2779A7` (Clinical Petrol Blue) | `#273951` (Deep Slate Ink) | `#24B47E` (Vitality Emerald Green) | Canvas: `#FFFFFF`<br>Alt: `#F6F9FC`<br>Border: `#E3E8EE` | Cool off-white sterility (`#F6F9FC`) paired with Petrol Blue and Vitality Emerald projects calm, hygiene, and institutional competence. |
| **3** | **Fine Dining and Modern Restaurant** | `#0D253D` (Deep Evening Ink) | `#987654` (Warm Earth Tan) | `#D14836` (Terracotta Coral) / `#ECD06F` (Warm Gold) | Canvas: `#F5E9D4` (Warm Cream)<br>Border: `#E3E8EE` | Warm wavelengths (terracotta, gold, warm cream) stimulate appetite and mirror ambient evening dining warmth. |
| **4** | **B2B SaaS and FinTech Infrastructure** | `#0A2540` (Stripe Deep Navy) | `#425466` (Slate Body Ink) | `#533AFD` (Electric Indigo) | Canvas: `#FFFFFF`<br>Alt: `#F6F9FC`<br>Border: `#E3E8EE` | Deep navy signals enterprise stability, cool off-white separates complex feature bands, and Electric Indigo isolates the primary CTA. |
| **5** | **Home Renovation, Plumbing and Trades** | `#0D253D` (Industrial Navy Ink) | `#64748D` (Steel Muted Slate) | `#B64400` (High-Vis Amber Orange) | Canvas: `#FFFFFF`<br>Alt: `#F6F9FC`<br>Border: `#E3E8EE` | Combines industrial structural reliability (`#0D253D`) with high-visibility Amber Orange (`#B64400`) for urgent sticky "Call Now" triggers. |
| **6** | **Salon, Spa and Wellness Studio** | `#460479` (Airbnb Luxe Plum) | `#6A6A6A` (Ash Gray Muted) | `#92174D` (Plus Magenta Rose) | Canvas: `#FFFFFF`<br>Alt: `#F7F7F7`<br>Border: `#EBEBEB` | Aspirational plum and rose-magenta accents over a clean gallery canvas (`#F7F7F7`) let treatment and hair photography dominate. |
| **7** | **Gym, CrossFit and Athletic Performance** | `#111112` (Carbon Asphalt) | `#404040` (Graphite Layer) | `#D2FF00` (Volt Acid Lime) | Canvas: `#08090A` (Void Black)<br>Border: `rgba(255,255,255,0.08)` | Dark-first carbon surfaces paired with high-adrenaline Volt Lime (`#D2FF00`) communicate speed, physical intensity, and athletic energy. |
| **8** | **Law Firm, CA and Corporate Advisory** | `#1C1E54` (Brand Dark Navy) | `#273951` (Secondary Ink Slate) | `#9B6829` (Heritage Bronze) | Canvas: `#FFFFFF`<br>Alt: `#F5E9D4`<br>Border: `#E3E8EE` | Executive dark navy and warm heritage bronze convey fiduciary gravitas, confidentiality, and institutional authority. |
| **9** | **Multi-Vendor E-Commerce and Hospitality** | `#222222` (Airbnb Ink Black) | `#6A6A6A` (Ash Gray Muted) | `#FF385C` (Rausch Coral Crimson) | Canvas: `#FFFFFF`<br>Alt: `#F7F7F7`<br>Border: `#DDDDDD` | Keeping 90% of the UI monochrome (`#222222` on `#FFFFFF`) prevents clashing with product photos while `#FF385C` drives "Reserve" / "Buy" clicks. |
| **10** | **School, University and EdTech Platform** | `#0D253D` (Academic Navy) | `#425466` (Readable Slate) | `#0071E3` (Action Blue) / `#E8A838` (Milestone Amber) | Canvas: `#FFFFFF`<br>Alt: `#F5F5F7`<br>Border: `#D2D2D7` | High legibility, institutional legitimacy, and clear milestone markers across curriculum tables and admission workflows. |
| **11** | **Developer Tools, AI and Cloud IDE** | `#08090A` (Linear Void Black) | `#1A1A1A` (Carbon Lift) / `#B0B0B0` (Silver Mist) | `#5E6AD2` (Linear Indigo) / `#2AB5B5` (Ion Teal) | Canvas: `#08090A`<br>Border: `rgba(255,255,255,0.08)` | Eliminates screen glare for developers, uses `8%` white light-catching borders around code blocks, and signals precision engineering. |
| **12** | **Consumer Wealth, Brokerage and Tax** | `#444444` (Zerodha Charcoal) | `#637381` (Muted Metadata Slate) | `#387ED1` (Zerodha Trust Blue) | Canvas: `#FFFFFF`<br>Alt: `#F6F9FC`<br>Border: `#E3E8EE` | Generous white canvas paired with charcoal headings and calm Trust Blue communicates transparency and zero dark-pattern gamification. |
| **13** | **Luxury Fintech and Exclusive Members Club** | `#08090A` (Void Black) | `#1A1A1A` (Elevated Surface) | `#D2FF00` (Neon Accent) / `#FFFFFF` (3D Pop Face) | Canvas: `#000000` (Pure Abyss)<br>Border: `#404040` | High-contrast dark surfaces combined with tactile 3D isometric buttons create an exclusive, members-only club psychology. |
| **14** | **Consumer Hardware and Flagship Electronics** | `#1D1D1F` (Apple Near-Black Ink) | `#6E6E73` (Muted System Grey) | `#0071E3` (Apple Action Blue) | Canvas: `#FFFFFF`<br>Alt: `#F5F5F7` (Parchment)<br>Dark Tile: `#272729` | Alternating pure white, parchment, and dark gallery tiles lets industrial product photography carry 100% of the visual drama. |
| **15** | **Organic D2C, Food and Challenger Beverage** | `#222222` (Ink Black) | `#987654` (Botanical Earth Tan) | `#008A05` (Organic Leaf Green) / `#FFDB01` (Solar Yellow) | Canvas: `#FFFFFF`<br>Alt: `#F5E9D4`<br>Border: `#DDDDDD` | Signals natural botanical ingredients, freshness, and high-contrast D2C shelf appeal over warm cream. |
| **16** | **Home Services Marketplace (Appliance/Cleaning)** | `#222222` (Marketplace Ink) | `#6A6A6A` (Service Subtitle Grey) | `#6750A4` (Service Purple) / `#008A05` (Verified and WhatsApp Green) | Canvas: `#FFFFFF`<br>Alt: `#F7F7F7`<br>Border: `#DDDDDD` | Crisp monochrome cards keep multi-category service icons scannable while green highlights verified technicians and WhatsApp booking. |

---

## 4. Ready-to-Use Three-Tier CSS Token Starter Template

Adapt the primitive values below to the selected industry palette before generating any HTML/CSS/React markup:

```css
:root {
  /* TIER 1: PRIMITIVE TOKENS */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;

  --radius-xs: 4px;
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 18px;
  --radius-pill: 9999px;

  /* TIER 2: SEMANTIC TOKENS (60-30-10 Allocation) */
  --bg-canvas: #ffffff;            /* 60% Dominant Neutral Canvas */
  --bg-surface-soft: #f6f9fc;      /* 30% Secondary Structural Band */
  --bg-surface-warm: #f5e9d4;      /* Optional Editorial Interlude */
  --bg-surface-dark: #0d253d;      /* Featured Pricing / Contrast Band */

  --text-primary: #0d253d;         /* Tinted Deep Ink (Never #000000) */
  --text-secondary: #425466;       /* Body Lead Ink */
  --text-muted: #64748d;           /* Captions and Metadata (WCAG AA) */
  --text-on-primary: #ffffff;

  --color-action-primary: #533afd; /* 10% Chromatic Accent */
  --color-action-pressed: #2e2b8c;
  --border-subtle: #e3e8ee;        /* 1px Hairline Divider */
  --border-input: #d2d2d7;

  /* Protected Semantic Status Tokens */
  --color-success: #008a05;
  --color-warning: #c47700;
  --color-danger: #c13515;

  /* TIER 3: COMPONENT TOKENS */
  --container-max-w: 1200px;
  --nav-height: 64px;
  --card-padding: var(--space-8);
  --card-radius: var(--radius-lg);
  --btn-radius: var(--radius-pill);
  --input-radius: var(--radius-sm);
  --shadow-floating: 0 0 0 1px rgba(0,0,0,0.02), 0 2px 6px rgba(0,0,0,0.04), 0 4px 8px rgba(0,0,0,0.1);
}
```
