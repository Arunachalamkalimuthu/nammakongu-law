# Home page: "Chambers editorial" (option D)

## Why

The founder found the letterhead home page "very simple". He asked for a design
informed by what good law-firm websites do. Research findings:
- Strong sites use oversized serif type, a restrained palette, editorial
  portraits instead of stock photos, alternating light and dark bands, and
  modular practice cards.
- Indian firm sites (Shardul Amarchand Mangaldas, Fox Mandal) add a disclaimer
  gate, a sparse factual front page and a knowledge section.

Rule 36's schedule permits only these facts:
- name, address, phone and email
- enrolment number and date, and the State Bar Council
- Bar Association membership
- qualifications
- areas of practice

The founder picked D with the portrait ("go with recommendations"), shown as a
mockup in the visual companion.

## Goals

- The home page looks substantial and professional using only permitted facts.
- He is the identity: his name is the headline and his portrait sits beside it.
- English (`/`) and Tamil (`/ta/`) get the same structure.

## Non-goals and anti-goals

- No slogans, "best", testimonials, statistics about cases, or fee offers.
- No stock or AI imagery. The portrait is his own photo.
- No third-party embeds such as a Google Maps iframe. The site promises no
  tracking, so office cards link to Maps instead.

## Approaches

The founder compared four mockups:

| Option | Description | Outcome |
|---|---|---|
| A | Dark letterhead with a portrait | Not chosen |
| B | Photo and letterhead side by side | Not chosen |
| C | Bilingual, kolam border, no photo | Not chosen |
| **D** | Chambers editorial | **Picked**, with the portrait and a name-block fallback (D′) until a photo exists |

## Design (home page, top to bottom)

1. **Hero**, two columns that stack on phones.
   - Left column:
     - an "Advocate · Tiruppur & Madras High Court" label
     - "P. Kalimuthu, B.L." in large serif type
     - the Tamil name, only once confirmed
     - a one-paragraph factual descriptor
     - Call, WhatsApp and Directions buttons
   - Right column: `advocate.photo` if set. Otherwise a tall ink name block
     with the white N mark, "Practising since 1992" and "Tiruppur · Chennai".
2. **Credentials band** on ink. It shows only Rule 36 schedule fields:
   - enrolment number with the Bar Council
   - enrolled year, or the full date once known
   - qualification and college
   - Bar Association memberships, a new config field. The column is hidden
     until a real (unbracketed) membership exists.
3. **Areas of practice**: a heading column plus a numbered 01–06 list with
   Tamil names and one-line summaries, in two columns that become one on phones.
4. **Two offices** band (light):
   - one card each for Tiruppur and Chennai, with address and hours
   - a "Directions" link on each card
   - no map images
5. **Legal guides**: a quiet editorial row with category labels and a top
   rule. The section stays only while the guides question is open with the
   Bar Association.

Supporting details:
- The footer keeps the Rule 36 disclaimer line.
- The rest of the site (other pages, logo, colours, fonts) is unchanged.

## Config additions (`src/site.config.ts`, Advocate)

- `memberships: string[]`, with bracketed placeholders until confirmed
- `enrolledOn?: string` (ISO date), shown in place of the year when set

## Left to the builder

- Exact sizes and spacing, within the brand colours and fonts.
- Names of the Tamil labels.
