# Namma Kongu Law Associates — nammakongu.me

Static website for a group of advocates in Kongu Nadu, Tamil Nadu. Built with
[Astro](https://astro.build), deployed to GitHub Pages on every push to `main`.

## Editing

| What | Where |
|---|---|
| Firm name, phone, WhatsApp, email, address, hours, courts, towns | `src/site.config.ts` → `site` |
| Advocates (one entry each) | `src/site.config.ts` → `advocates` |
| Practice areas | `src/site.config.ts` → `practiceAreas` |
| Legal guides | `src/content/guides/*.md` (copy an existing one) |
| Colours and type | `src/styles/global.css` |

Every guide has an `answer` (a 1–2 sentence direct answer) and a `faq` list.
Search engines and AI assistants quote these, so keep them self-contained and
accurate. Set `reviewer` to the advocate who checked it and bump `updated`
whenever the law or the text changes.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Bar Council of India Rule 36

Advocates may not advertise or solicit work. The site may state only names,
contact details, enrolment, qualifications and areas of practice. Do **not**
add client testimonials, case results, success rates, fee offers or words like
"best", "top", "leading" or "expert". The disclaimer pop-up and
`/disclaimer/` page must stay.

## SEO and AI-readiness built in

- schema.org JSON-LD on every page: `LegalService` (the firm), `Person` (each
  advocate, with enrolment as a credential), `Service` (each practice area),
  `Article` + `FAQPage` (each guide), `BreadcrumbList`
- `/llms.txt`: plain-text summary of the firm, advocates and guide answers for AI assistants
- `robots.txt` explicitly allows search and AI crawlers (after launch)
- English + Tamil (`/ta/`) with `hreflang`, sitemap at `/sitemap-index.xml`
- Static HTML, no tracking, one small inline script — fast Core Web Vitals

## Launch checklist

1. Replace every `[placeholder]` in `src/site.config.ts` (search for `[`).
2. Set the real office coordinates (`geo`) and Google Maps link (`mapUrl`).
3. Set `launched: true` in `src/site.config.ts`. This removes `noindex`, the
   preview banner, and opens `robots.txt`.
4. DNS at GoDaddy for `nammakongu.me`:
   - `A` records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www` → `<github-user>.github.io`
5. Repo → Settings → Pages → Custom domain: `nammakongu.me`, tick *Enforce HTTPS*.
   Add repo variable `CUSTOM_DOMAIN=nammakongu.me` (Settings → Secrets and
   variables → Actions → Variables) and re-run the deploy workflow.
6. Create a Google Business Profile for the office with the **same** name,
   address and phone as the site; add its URL to `sameAs` in `site.config.ts`.
7. Submit `https://nammakongu.me/sitemap-index.xml` in Google Search Console and
   Bing Webmaster Tools (Bing feeds ChatGPT search and Copilot).
