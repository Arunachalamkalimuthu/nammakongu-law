# Namma Kongu Law Associates — brand

## Logo

The mark is an **N built from two court columns under a pediment**: the
roof is teal, the columns, beam and base are ink. The wordmark is
"Namma Kongu" in Instrument Sans SemiBold, with "Law Associates" below a
short teal rule. All lettering is converted to outlines, so the files do not
need the font installed.

All files are in `public/brand/` (served at `/brand/…` on the site).

| File | Use |
|---|---|
| `logo.svg` / `logo.png` | Main horizontal logo on white or light backgrounds |
| `logo-white.svg` / `logo-white.png` | On ink, teal or photo backgrounds |
| `logo-stacked.svg` / `.png` | Square-ish spaces: signage, letterhead centre, profile banners |
| `logo-stacked-white.svg` / `.png` | Stacked, on dark backgrounds |
| `mark.svg` / `mark-512.png` | The N mark alone (stamps, watermarks, small spaces) |
| `mark-white.svg` | Mark alone on dark backgrounds |
| `app-icon.svg` / `app-icon-512.png` | Rounded ink tile: app icons, WhatsApp catalogue |
| `profile.svg` / `profile-1080.png` | Square profile picture for WhatsApp Business, Google Business Profile, LinkedIn (they crop to a circle) |
| `/favicon.svg` | Browser tab icon (simplified mark, no beam/base, for 16–32 px) |

Rules:

- Keep clear space around the logo equal to the height of the teal roof.
- Minimum size: horizontal logo 120 px wide on screen, 30 mm in print.
  Below that, use the mark or the favicon.
- Do not recolour, stretch, add shadows, or put the colour logo on a busy
  photo. Use the white version on dark backgrounds.

## Colours

| Name | Hex | Use |
|---|---|---|
| Ink | `#1a2433` | Text, columns of the mark, footer |
| Teal | `#0f766e` | Roof of the mark, buttons, links |
| Teal light | `#2bb3a6` | Roof of the mark on dark backgrounds |
| Teal tint | `#e7f3f1` | Soft backgrounds, icon tiles |
| Muted | `#5a6472` | Secondary text ("Law Associates") |
| Line | `#e2e6ea` | Borders and dividers |

## Type

- **Instrument Sans** (Google Fonts) for English: SemiBold 600 for headings, Regular 400 for text.
- **Noto Sans Tamil** (Google Fonts) for Tamil.

## Regenerating

The logo SVGs were generated from the Instrument Sans font files with
opentype.js; to change the wording, edit the SVGs or regenerate them the same
way. Keep the mark geometry (64-unit grid) unchanged.
