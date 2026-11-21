// schema.org JSON-LD builders. Search engines use these for rich results and
// AI assistants use them to answer "who is this firm, where, and what do they
// handle" without guessing from prose.
import { site, practiceAreas, advocates, practiceBySlug, type Advocate } from '../site.config';
import { absolute } from './url';

type Site = URL | undefined;

export const firmId = (s: Site) => `${absolute('/', s)}#firm`;
const advocateId = (a: Advocate, s: Site) => `${absolute(`/advocates/${a.slug}/`, s)}#person`;

export function firmSchema(s: Site) {
  return {
    '@type': 'LegalService',
    '@id': firmId(s),
    name: site.name,
    alternateName: [site.nameTa, site.shortName],
    description: site.description,
    url: absolute('/', s),
    telephone: site.phone,
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${site.address.street}, ${site.address.locality}`,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    hasMap: site.mapUrl,
    openingHoursSpecification: site.hoursSchema.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      ...h,
    })),
    areaServed: site.areaServed.map((name) => ({ '@type': 'City', name })),
    knowsLanguage: ['ta', 'en'],
    knowsAbout: practiceAreas.map((p) => p.name),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Areas of practice',
      itemListElement: practiceAreas.map((p) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: p.name,
          description: p.summary,
          url: absolute(`/practice-areas/${p.slug}/`, s),
        },
      })),
    },
    employee: advocates.map((a) => ({ '@id': advocateId(a, s) })),
    ...(site.sameAs.length ? { sameAs: site.sameAs } : {}),
  };
}

export function personSchema(a: Advocate, s: Site) {
  return {
    '@type': 'Person',
    '@id': advocateId(a, s),
    name: a.name,
    alternateName: a.nameTa,
    jobTitle: a.role === 'Advocate' ? 'Advocate' : `${a.role}, Advocate`,
    url: absolute(`/advocates/${a.slug}/`, s),
    worksFor: { '@id': firmId(s) },
    knowsLanguage: a.languages,
    knowsAbout: a.practiceAreas.map((slug) => practiceBySlug(slug)?.name).filter(Boolean),
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Enrolment',
        name: `Enrolment ${a.enrolment}`,
        recognizedBy: {
          '@type': 'Organization',
          name: 'Bar Council of Tamil Nadu and Puducherry',
        },
      },
      ...a.qualifications.map((q) => ({
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: q,
      })),
    ],
  };
}

export function websiteSchema(s: Site) {
  return {
    '@type': 'WebSite',
    '@id': `${absolute('/', s)}#website`,
    url: absolute('/', s),
    name: site.name,
    inLanguage: ['en-IN', 'ta-IN'],
    publisher: { '@id': firmId(s) },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[], s: Site) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: absolute(it.path, s),
    })),
  };
}

export function articleSchema(
  a: {
    title: string;
    description: string;
    path: string;
    published: Date;
    updated: Date;
    reviewer?: Advocate;
  },
  s: Site,
) {
  return {
    '@type': 'Article',
    headline: a.title,
    description: a.description,
    url: absolute(a.path, s),
    mainEntityOfPage: absolute(a.path, s),
    datePublished: a.published.toISOString().slice(0, 10),
    dateModified: a.updated.toISOString().slice(0, 10),
    inLanguage: 'en-IN',
    author: a.reviewer ? { '@id': advocateId(a.reviewer, s) } : { '@id': firmId(s) },
    publisher: { '@id': firmId(s) },
    ...(a.reviewer ? { reviewedBy: { '@id': advocateId(a.reviewer, s) } } : {}),
  };
}

export function faqSchema(faq: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export const graph = (...nodes: object[]) => ({
  '@context': 'https://schema.org',
  '@graph': nodes,
});
