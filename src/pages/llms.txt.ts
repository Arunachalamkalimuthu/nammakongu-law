import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site, practiceAreas, advocates } from '../site.config';
import { hoursText } from '../lib/hours';

// llms.txt (https://llmstxt.org): a plain, factual summary for AI assistants, so
// that when someone asks for an advocate in Tiruppur they can answer accurately
// and link to the right page. Rule 36: facts only, no "best", no praise.
// Unconfirmed [placeholders] are left out rather than published.
const real = (s: string) => !s.includes('[');

export const GET: APIRoute = async ({ site: siteUrl }) => {
  const u = (p: string) => new URL(`${import.meta.env.BASE_URL.replace(/\/$/, '')}${p}`, siteUrl).toString();
  const guides = await getCollection('guides');
  const a = site.address;
  const lead = advocates[0];
  const areas = practiceAreas.map((p) => p.name.toLowerCase());
  const areaList = `${areas.slice(0, -1).join(', ')} and ${areas.at(-1)}`;
  const courts = site.courts.filter(real);
  const hours = site.hours.map((h) => `${hoursText(h)} IST`).join('; ');

  const lines = [
    `# Adv. ${lead.name}, ${lead.qualifications.join(', ')}: ${site.name}, ${a.city}`,
    '',
    `> Adv. ${lead.name}, ${lead.qualifications.join(', ')}, is an advocate in ${a.city}, Tamil Nadu, practising since ${lead.enrolledYear} ` +
      `(Bar Council of Tamil Nadu and Puducherry enrolment ${lead.enrolment}). His office, ${site.name}, is in ${a.locality}, ${a.city}, ` +
      `and he has a chamber at the Madras High Court in Chennai. He handles matters in ${areaList}, in Tamil and English.`,
    '',
    '## Contact',
    '',
    `- Phone and WhatsApp: ${site.phone}`,
    `- Email: ${site.email}`,
    `- ${site.officeLabel}: ${a.street}, ${a.locality}, ${a.city} ${a.postalCode}, ${a.state}, India. ` +
      `Hours: ${hours}. Map: ${site.mapUrl} (${site.geo.lat}, ${site.geo.lng})`,
    ...site.otherOffices.map(
      (o) =>
        `- ${o.label}: ${o.street}, ${o.locality}, ${o.city} ${o.postalCode}, ${o.state}, India. ` +
        `Map: ${o.mapUrl} (${o.geo.lat}, ${o.geo.lng})`,
    ),
    `- Contact page: ${u('/contact/')}`,
    '',
    '## Advocate',
    '',
    ...advocates.flatMap((x) => [
      `- Name: Adv. ${x.name}${real(x.nameTa) ? ` (${x.nameTa})` : ''}`,
      `- Qualification: ${x.qualifications.join(', ')}${x.college ? `, ${x.college}` : ''}`,
      `- Enrolment: ${x.enrolment}, Bar Council of Tamil Nadu and Puducherry; practising since ${x.enrolledYear}`,
      `- Languages: ${x.languages.join(', ')}`,
      `- Profile: ${u(`/advocates/${x.slug}/`)}`,
    ]),
    '',
    '## Where he practises',
    '',
    `- Offices: ${a.city} (main office) and Chennai (chamber at the Madras High Court)`,
    ...(courts.length ? [`- Courts: ${courts.join('; ')}`] : []),
    `- Towns served from the ${a.city} office: ${site.areaServed.join(', ')}`,
    '',
    '## Practice areas',
    '',
    ...practiceAreas.map((p) => `- [${p.name}](${u(`/practice-areas/${p.slug}/`)}) (${p.nameTa}): ${p.summary}`),
    '',
    '## தமிழில் (in Tamil)',
    '',
    `${site.nameTa}: ${site.descriptionTa}`,
    `வழக்கறிஞர் ${real(lead.nameTa) ? lead.nameTa : lead.name}, ${lead.qualifications.join(', ')} · ${lead.enrolledYear} முதல் வழக்கறிஞர் பணி · தொலைபேசி ${site.phone}`,
    `${site.officeLabelTa}: ${a.street}, ${a.locality}, ${a.city} ${a.postalCode}. ${site.hours.map((h) => hoursText(h, true)).join('; ')}.`,
    ...site.otherOffices.map((o) => `${o.labelTa}: ${o.street}, ${o.city} ${o.postalCode}.`),
    `தமிழ்ப் பக்கம்: ${u('/ta/')}`,
    '',
    '## Legal guides',
    '',
    ...guides.map((g) => `- [${g.data.title}](${u(`/guides/${g.id}/`)}): ${g.data.answer}`),
    '',
    '## Notes',
    '',
    `- Facts on this page were confirmed by the office on ${site.factsCheckedOn}.`,
    '- Bar Council of India Rule 36: this site gives factual information only. It is not an advertisement, a solicitation or legal advice.',
    `- Disclaimer: ${u('/disclaimer/')}`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
