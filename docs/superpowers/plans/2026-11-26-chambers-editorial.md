# Chambers editorial home page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the letterhead home page with the "Chambers editorial" layout (option D), in English and Tamil.

**Architecture:**
- Three new components, `HomeHero.astro`, `Credentials.astro` and `OfficeCards.astro`, replace `Letterhead.astro` on both home pages.
- `AreaList.astro` becomes the numbered practice list.
- Two new optional Advocate fields feed the credentials band.

**Tech Stack:** Astro 7, plain CSS in `src/styles/global.css`.

**Spec:** `docs/superpowers/specs/2026-11-26-chambers-editorial-design.md`

## Global Constraints

- Rule 36: only schedule facts in the hero and band. No "best", testimonials, case statistics or slogans.
- No third-party embeds and no stock or AI images.
- Brand colours and fonts from `docs/brand.md`.
- `[bracketed]` values are placeholders. Components hide them rather than render them, except where the page already showed them (the enrolment fallback).
- Tests are `npx astro build` plus grep checks on `dist/` and screenshots at 360 px and 1280 px.

## Review Focus

- Hero on phones: the name must not overflow at 320–360 px with the 52 px desktop size, so it needs a `clamp()`.
- `/ta/`: Tamil labels must not overflow in the 4-column band, which collapses to 2 columns.
- With no photo set, the name block shows and there is no broken `<img>`.
- Memberships that are all placeholders hide the column, and the band reflows to 3 columns.
- `tel:` and `wa.me` links stay `+919842202114` / `919842202114`.

---

### Task 1: Config fields and the credentials band

**Files:** modify `src/site.config.ts` (Advocate type and entry); create `src/components/Credentials.astro`; add CSS.

**Interfaces:**
- `Advocate.memberships: string[]`
- `Advocate.enrolledOn?: string`
- `Credentials.astro` props: `{ lang?: 'en' | 'ta' }`

- [ ] Add `memberships: ['[Tiruppur Bar Association]', "[Madras High Court Advocates' Association]"]` and leave `enrolledOn` unset.
- [ ] Credentials band on ink. It has 3 or 4 columns, with the membership column only when a real membership exists.
- [ ] Verify: the build passes, `grep -c "cred-band" dist/index.html` returns 1, and the built HTML contains no "[Tiruppur Bar Association]".

### Task 2: Hero, practice list, offices, guides row; wire both home pages

**Files:**
- create `src/components/HomeHero.astro` and `src/components/OfficeCards.astro`
- modify `src/components/AreaList.astro`, `src/pages/index.astro`, `src/pages/ta/index.astro` and `src/styles/global.css`
- delete `src/components/Letterhead.astro`

**Interfaces:** `HomeHero`, `OfficeCards` and `AreaList` all take props `{ lang?: 'en' | 'ta' }`.

- [ ] Hero as in the spec, with the photo or the name block.
- [ ] Numbered practice list.
- [ ] Office cards with Directions links.
- [ ] Guides as an editorial row.
- [ ] Verify: the build passes, there is no `lh-sheet` in `dist/`, both offices appear on `/` and `/ta/`, and `tel:+919842202114` is present.
- [ ] Verify: screenshots at 360 px and 1280 px for `/` and `/ta/` show no overflow.
