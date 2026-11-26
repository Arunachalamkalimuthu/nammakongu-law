# Letterhead redesign and rename Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rename the site to Kongu Law Associates and replace the generic home page with a letterhead-style one, in English and Tamil.

**Architecture:** Every firm fact already comes from `src/site.config.ts`; the rename is config plus a handful of hard-coded descriptions and the logo SVG wordmarks. The home pages (`src/pages/index.astro`, `src/pages/ta/index.astro`) get a new `Letterhead.astro` component in place of the hero, strip and band. The share card is laid out in Canva and exported to `public/og.png`.

**Tech Stack:** Astro 7, plain CSS (`src/styles/global.css`), opentype.js (one-off, for logo outlines), Canva MCP.

**Spec:** `docs/superpowers/specs/2026-11-26-letterhead-redesign-design.md`

## Global Constraints

- Bar Council Rule 36: no selling taglines, "best/top/leading/expert", testimonials, results, fee offers.
- Brand colours only: ink `#1a2433`, teal `#0f766e`, teal light `#2bb3a6`, teal tint `#e7f3f1`, muted `#5a6472`, line `#e2e6ea`.
- `launched` stays `false`. Placeholders stay in `[brackets]`.
- No AI-generated imagery.
- The site is static; "tests" are `npx astro build` plus `curl`/`grep` checks against the dev server at http://localhost:4321.

## Review Focus

- Narrow phones (360 px): the address and three buttons must wrap without horizontal scroll.
- Tamil home page: long Tamil words in the letterhead must not overflow; Tamil uses Noto Serif Tamil, not a fallback.
- Placeholder enrolment (`[Enrolment no.]`) must still render readably until replaced.
- `wa.me` and `tel:` links must use the new number with no spaces.
- No page still says "Namma" (grep of `dist/`).

---

### Task 1: Rename to Kongu Law Associates

**Files:** Modify `src/site.config.ts`, `src/pages/disclaimer.astro:15`, `src/pages/privacy.astro:15`, `src/pages/advocates/index.astro:16`, `src/pages/practice-areas/[slug].astro:38`, `src/pages/practice-areas/index.astro:15`, `src/styles/global.css:1`, `README.md`, `docs/brand.md`.

- [ ] Set `name: 'Kongu Law Associates'`, `shortName: 'Kongu Law'`, `nameTa: 'கொங்கு லா அசோசியேட்ஸ்'` (draft, pending the father's wording), update both descriptions to say Tiruppur.
- [ ] Replace hard-coded "Namma Kongu Law Associates" in the five page descriptions with `${site.name}`.
- [ ] Verify: `npx astro build && grep -rl "Namma\|நம்ம" dist` → no output.
- [ ] Commit.

### Task 2: Logo wordmarks

**Files:** Modify `public/brand/logo*.svg` and their PNGs, `public/brand/profile.svg`/`profile-1080.png` if they carry the name. Script lives in the scratchpad, not the repo.

- [ ] Regenerate the wordmark outlines with opentype.js from Instrument Sans SemiBold: line 1 "Kongu Law", line 2 "Associates"; keep the mark group, teal rule and geometry; update `<title>`/`aria-label`.
- [ ] Re-render PNGs at the existing pixel sizes.
- [ ] Verify: open each SVG in the browser, wordmark is legible and aligned; `grep -L "Namma" public/brand/*.svg` lists every file.
- [ ] Commit.

### Task 3: Letterhead home page

**Files:** Create `src/components/Letterhead.astro`; modify `src/pages/index.astro`, `src/pages/ta/index.astro`, `src/layouts/Base.astro:82` (fonts), `src/styles/global.css`.

**Interfaces:** `Letterhead.astro` props `{ lang: 'en' | 'ta' }`; reads `site` and `advocates` from `src/site.config.ts`.

- [ ] Add Noto Serif + Noto Serif Tamil (600) to the Google Fonts link; CSS var `--serif`.
- [ ] Letterhead block: firm name (serif, caps), teal rule, advocate name + qualifications, enrolment line, address, phone, hours as "9 AM to 9 PM", buttons Call / WhatsApp / Directions (`site.mapUrl`).
- [ ] Home pages: remove `HeroArt`, the strip, `PracticeGrid` and the bottom band; practice areas become a plain two-column linked list; advocates section hidden while `advocates` has only one real (non-bracketed) entry.
- [ ] Verify: build passes; `curl -s localhost:4321/ | grep -c hero-art` → 0; screenshots at 1280 px and 360 px for `/` and `/ta/` show no overflow.
- [ ] Commit.

### Task 4: Share card in Canva

**Files:** Replace `public/og.png` (1200 × 630).

- [ ] In Canva, build a 1200 × 630 design in the letterhead style: new logo, "Adv. P. Kalimuthu, B.L.", Tiruppur, brand colours, no stock imagery. Export PNG.
- [ ] Verify: `file public/og.png` → 1200 x 630; view it.
- [ ] Commit.
