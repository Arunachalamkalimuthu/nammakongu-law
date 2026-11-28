# Kongu Law Associates website: instructions for Claude

This repo is the website of **Kongu Law Associates**, the law office of
**Adv. P. Kalimuthu, B.L.**, an advocate in Tamil Nadu. It is maintained by his son.
Be accurate, factual and brief.

## The office

The source of truth is `src/site.config.ts`. Never hard-code these facts in a page.

### The advocate
- Adv. P. Kalimuthu, B.L.
- B.L. from The Central Law College, Salem, 1987–1992.
- Bar Council of Tamil Nadu and Puducherry, enrolment **989/1992**. Practising since 1992.
- He is the only advocate in the office.

### Offices
- **Tiruppur office:** No. 2-C, DRG Apartments, Kamaraj Road Cross Street, Thenampalayam, Tiruppur 641 604. This spelling matches his letterhead.
  - Pin: 11.0867471, 77.3474544.
  - Map: https://maps.app.goo.gl/NdvAjSwT9XjrDYcs7
  - Hours: Monday to Sunday, 9 AM to 9 PM.
- **Chennai chamber:** Chamber No. 183, New Additional Law Chambers, High Court Buildings, Madras High Court Campus, Parry's Corner, George Town, Chennai 600 104.
  - Pin: 13.0856293, 80.2882667.
  - Map: https://maps.app.goo.gl/4uyeym3q71QtquGu7
  - No published hours.

### Contact
- Phone and WhatsApp: +91 98422 02114.
- Email: contact@nammakongu.me. It is forwarded by ImprovMX to his own inbox.

### Practice areas
Civil and property, family and matrimonial, criminal, cheque bounce and money recovery, commercial and contracts, consumer disputes.

### Domain and hosting
- Domain: nammakongu.me, live on HTTPS since 28 Nov 2026. DNS is at GoDaddy.
- Hosting: GitHub Pages, deployed by `.github/workflows/deploy.yml` on every push to `main`. The Pages custom domain is set and HTTPS is enforced. `www` and the old github.io address redirect to https://nammakongu.me.
- DNS records:
  - four GitHub Pages A records on `@`
  - `www` CNAME to `arunachalamkalimuthu.github.io`
  - ImprovMX MX and SPF records
  - a `google-site-verification` TXT record
  - Never remove the TXT record. Both Google Search Console and Bing Webmaster Tools depend on it.
- Google Search Console (Domain property) and Bing Webmaster Tools are set up, with `https://nammakongu.me/sitemap-index.xml` submitted to both.
- GitHub's cache can serve an old build for a few minutes after a deploy. If the live page looks unstyled, check which build it is getting before changing any code.

### Still unconfirmed
These are kept as `[placeholders]` and never shown on the site:
- the Tiruppur courts he appears in
- the Tamil spelling of his initial
- the firm's Tamil name (the draft is "கொங்கு லா அசோசியேட்ஸ்")
- his Bar Association memberships
- his date of enrolment
- his portrait photo

Never invent any of these.

## Hard rule: Bar Council of India Rule 36

Advocates may not advertise or solicit work. The schedule to Rule 36 permits only these facts:
- name, address, phone and email
- enrolment number and date, and the State Bar Council
- Bar Association membership
- qualifications
- areas of practice

Never add or suggest any of the following:
- testimonials, or client reviews on the site
- case results or success rates
- fees or offers
- the words "best", "top", "leading", "expert" or "trusted"
- selling taglines
- statistics about cases
- paid ads (Google, Facebook)
- WhatsApp broadcasts
- asking clients for reviews
- listings on Justdial, Sulekha, Quikr or LawRato-style marketplaces

The Madras High Court (July 2024, P.N. Vignesh v. Bar Council) directed disciplinary action against advocates who promote themselves "directly or indirectly" online. The Bar Council of India then acted against those platforms. Other rules:
- Keep the disclaimer pop-up and the `/disclaimer/` page.
- "Practising since 1992" is allowed. "34 years of experience" style claims are not.
- The legal guides are a grey area. Keep them factual, and keep them only while he is happy that they are allowed.

## Design: "chambers editorial" (option D, chosen 26 Nov 2026)

### Home page
The sections, top to bottom:
1. A hero led by his name in large serif type, with a portrait slot. Until a photo exists, the slot shows an ink name block reading "1992 · Practising since". That block is hidden on phones.
2. A dark credentials band. It shows only Rule 36 schedule facts.
3. A numbered list of practice areas (01–06) with Tamil names.
4. "Two offices" cards with Directions links.
5. A row of legal guides.

The hero's Directions button asks which office.

### Style
- Text-led, calm and formal.
- No stock photos and no AI-generated images. The portrait must be his own photo.
- No third-party embeds such as a Google Maps iframe. The site promises no tracking.

### Colours

| Name | Hex |
|---|---|
| Ink | #1a2433 |
| Teal | #0f766e |
| Teal light | #2bb3a6 |
| Teal tint | #e7f3f1 |
| Muted | #5a6472 |
| Line | #e2e6ea |

### Type
- Noto Serif and Noto Serif Tamil for names and headings.
- Instrument Sans and Noto Sans Tamil for body text.
- Tamil labels never use letter-spacing or uppercase.

### Logo and languages
- Logo: a court-column "N" mark plus the wordmark "Kongu / Law Associates". The files are in `public/brand/`.
- Bilingual: English at `/`, Tamil at `/ta/`. Every home-page change goes to both.
- Hours are always written "9 AM to 9 PM". Use `hoursText()` in `src/lib/hours.ts`.

## Code

- Astro static site.
- Facts live in `src/site.config.ts`:
  - `site`: the firm, the main office in `address`/`geo`/`mapUrl`, `otherOffices`, and `hours`
  - `advocates`: the advocate profiles
  - `practiceAreas`: the areas of practice
- Home components: `HomeHero`, `Credentials`, `AreaList`, `OfficeCards`.
- `real()` in `src/lib/real.ts` filters out `[placeholders]`. Pages show only confirmed values.
- schema.org JSON-LD lives in `src/lib/schema.ts`:
  - `LegalService`, with the Chennai chamber as a `department`
  - `Person`, with `alumniOf` and the enrolment credential
- `/llms.txt` (`src/pages/llms.txt.ts`) leads with the advocate. It lists both offices with their pins, plus the date the facts were confirmed (`factsCheckedOn`).
- `launched: true` means the site is indexed. `robots.txt` allows search engines and AI crawlers.
- Repository variable `CUSTOM_DOMAIN=nammakongu.me` makes the build target the real domain. Without it, the build targets the github.io preview.
- Verify every change:
  1. Run `npm run build`.
  2. Grep `dist/` to check that no `[placeholder]` text renders.
  3. View the page at 360 px and at desktop width, in English and in Tamil.

## Working rules

- Work on a branch or worktree, not on `main` directly. Never edit the owner's `~/code` checkout.
- Ask before pushing, merging or changing repository settings or DNS. Merging to `main` deploys the live site.
- No `Co-Authored-By` trailer on commits.
- PR bodies end with "🤖 Generated with [Claude Code](https://claude.com/claude-code)".
- Never scrape other sites' lawyer data, reviews or content.

## Getting found (not advertising)

- Done: the domain, Google Search Console and Bing Webmaster Tools (Bing feeds ChatGPT and Copilot).
- A Google Business Profile for the Tiruppur office, with exactly the same name, address and phone as the site. He should check this with the Bar Association first.
- Bar Association directory listings.
- More factual Tamil and English guides, each reviewed by him.
