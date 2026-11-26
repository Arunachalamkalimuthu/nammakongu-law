import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site, practiceAreas, advocates } from '../site.config';

// llms.txt (https://llmstxt.org): a plain summary for AI assistants, so they can
// answer questions about the firm accurately and link to the right page.
export const GET: APIRoute = async ({ site: siteUrl }) => {
  const u = (p: string) => new URL(`${import.meta.env.BASE_URL.replace(/\/$/, '')}${p}`, siteUrl).toString();
  const guides = await getCollection('guides');
  const a = site.address;
  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    `Tamil name: ${site.nameTa}`,
    `${site.officeLabel}: ${a.street}, ${a.locality}, ${a.city}, ${a.district} District, ${a.state} ${a.postalCode}, India`,
    ...site.otherOffices.map((o) => `${o.label}: ${o.street}, ${o.locality}, ${o.city}, ${o.state} ${o.postalCode}, India`),
    `Phone and WhatsApp: ${site.phone}`,
    `Email: ${site.email}`,
    `Hours: ${site.hours.map((h) => `${h.days}, ${h.opens}–${h.closes} IST`).join('; ')}`,
    `Towns served: ${site.areaServed.join(', ')}`,
    `Courts: ${site.courts.join('; ')}`,
    'Languages: Tamil, English',
    '',
    'The firm follows Bar Council of India Rule 36: this site gives factual information only and is not an advertisement or legal advice.',
    '',
    '## Practice areas',
    '',
    ...practiceAreas.map((p) => `- [${p.name}](${u(`/practice-areas/${p.slug}/`)}): ${p.summary}`),
    '',
    '## Advocates',
    '',
    ...advocates.map(
      (x) => `- [${x.name}](${u(`/advocates/${x.slug}/`)}): ${x.role}, enrolment ${x.enrolment}, ${x.qualifications.join(', ')}`,
    ),
    '',
    '## Legal guides',
    '',
    ...guides.map((g) => `- [${g.data.title}](${u(`/guides/${g.id}/`)}): ${g.data.answer}`),
    '',
    '## Other pages',
    '',
    `- [Tamil home page](${u('/ta/')})`,
    `- [Contact](${u('/contact/')})`,
    `- [Disclaimer](${u('/disclaimer/')})`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
