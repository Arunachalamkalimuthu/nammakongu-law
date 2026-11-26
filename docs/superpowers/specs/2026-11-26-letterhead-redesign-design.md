# Letterhead-style home page and rename to Kongu Law Associates

## Why

The current home page reads as generic AI output: a cartoon hero, a stock
tagline ("Clear legal help for families and businesses"), an icon strip and a
grid of icon cards. Nothing on it is specific to the firm. The founder's
father, Adv. P. Kalimuthu, B.L., practises from Tiruppur under the name
**Kongu Law Associates** (his letterhead), not "Namma Kongu Law Associates".

## Goals

- The home page looks like the firm's own letterhead or visiting card made
  into a web page: name, advocate, qualification, address, phone, hours, in
  English and Tamil.
- The site uses the name on his letterhead everywhere: pages, schema.org,
  llms.txt, logo wordmark, link-preview image.
- A visitor on a phone can call, WhatsApp or get directions in one tap from
  the top of the page.

## Non-goals

- No photos for now (the founder chose the letterhead style over photos).
  A portrait can be added later through `photo` in `site.config.ts`.
- No changes to the guides' text, the practice-area pages' content, or the
  domain (`nammakongu.me` stays).
- No launch: `launched` stays `false` until the remaining placeholders
  (enrolment, courts, Tamil initial, other advocates, email) are real.

## Anti-goals

- Anything that reads as advertising under Bar Council Rule 36: taglines that
  sell, "trusted", "best", testimonials, results.
- AI-generated pictures. Canva is used only for layout of the share card, not
  to generate imagery.
- Decoration for its own sake: icon tiles, gradients, illustrations.

## Approaches

| | Approach | Trade-off |
|---|---|---|
| | Real photos of the advocate, office and court, Canva to treat them | Most personal; needs good photos taken today |
| **Picked** | **Letterhead style**: text-led, Tamil + English, modelled on his letterhead | Quick and dignified; less personal than photos |
| | Canva-generated illustrations replacing the SVG art | Fastest, but likely to still look AI-made |

The founder picked letterhead style.

## Design

Home page top, on a phone and desktop alike:

```
 ┌──────────────────────────────────────────────────────────┐
 │ [N mark]  KONGU LAW ASSOCIATES        கொங்கு சட்ட …       │
 │ ──────────────────────────────────────── (teal rule)      │
 │                                                          │
 │   Adv. P. Kalimuthu, B.L.                                │
 │   Advocate · Enrolled with the Bar Council of            │
 │   Tamil Nadu and Puducherry, [MS/xxxx/yyyy]              │
 │                                                          │
 │   No. 2-C, DRG Apartments, Kamaraj Road Cross Street,    │
 │   Thennampalayam, Tiruppur 641 604                       │
 │   98422 02114 · Monday to Sunday, 9 AM to 9 PM           │
 │                                                          │
 │   [ Call ]  [ WhatsApp ]  [ Directions ]                 │
 │ ──────────────────────────────────────────────────────── │
 └──────────────────────────────────────────────────────────┘
   Practice areas            (plain two-column list, no icons;
   Civil and property         each name links to its page)
   Family and matrimonial  …
   Legal guides              (plain list, as today)
```

- Remove from the home page: `HeroArt`, the icon strip, the icon-card
  `PracticeGrid` and the bottom "Talk to an advocate" band (the letterhead
  block already carries the contact details).
- The advocates section on the home page shows only real advocates; while
  there is one, his details live in the letterhead block and the section is
  hidden.
- Type: a serif for the firm name and the advocate's name to give the
  letterhead feel (**builder's call**: Noto Serif + Noto Serif Tamil, so
  English and Tamil match), Instrument Sans stays for body text. Colours stay
  ink and teal from `docs/brand.md`.
- Hours are written the way people say them ("9 AM to 9 PM"), not 09:00–21:00.
- The Tamil home page (`/ta/`) gets the same structure.

Rename:

- `site.name` → "Kongu Law Associates"; `shortName` → "Kongu Law".
- `nameTa`: **needs the father's wording** (the current one, "நம்ம கொங்கு
  சட்ட ஆலோசகர்கள்", says "advisers", not "associates"). If his letterhead has
  a Tamil line, use that.
- Logo wordmarks in `public/brand/*.svg` and PNGs regenerated with the new
  name; the N mark itself is unchanged. Update `docs/brand.md` and `README.md`.
- All text that hard-codes "Namma" (privacy, disclaimer, practice-area and
  advocate index pages, global.css comment) switches to `site.name`.

Canva:

- Build the 1200 × 630 link-preview card (`public/og.png`, used when the site
  is shared on WhatsApp) in the same letterhead style with the new logo, and
  export it as PNG. Canva is also where the founder can later reuse the card
  for a visiting card or WhatsApp Business cover.

## Left to the builder

- Exact spacing and type sizes, within the brand colours.
- Whether the letterhead block sits on white or a very light teal tint.
