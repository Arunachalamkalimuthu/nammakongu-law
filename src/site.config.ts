// Every fact about the firm lives here. Edit this file, push to main, and the
// site rebuilds. Anything wrapped in [square brackets] is a placeholder that
// must be replaced with real details before `launched` is set to true.
//
// Bar Council of India Rule 36 allows an advocate's website to state only:
// name, address, telephone, email, enrolment details, professional and
// academic qualifications, and areas of practice. Do not add testimonials,
// case outcomes, success rates, fee offers, or "best/top/leading" claims.

export type Advocate = {
  slug: string;
  name: string;
  nameTa: string;
  role: string; // e.g. "Advocate", "Senior Advocate", "Founding Partner"
  enrolment: string; // e.g. "MS/1234/2010" (Bar Council of Tamil Nadu & Puducherry)
  enrolledYear: string;
  qualifications: string[];
  courts: string[];
  practiceAreas: string[]; // slugs from practiceAreas below
  languages: string[];
  bio: string; // factual: education, enrolment, courts, areas. No self-praise.
  photo?: string; // e.g. '/advocates/name.jpg' in public/advocates/, square, at least 400px
};

export type Office = {
  label: string;
  labelTa: string;
  street: string;
  locality: string;
  city: string;
  district: string;
  state: string;
  postalCode: string;
  country: string;
  geo: { lat: number; lng: number };
  mapUrl: string;
};

export type PracticeArea = {
  slug: string;
  name: string;
  nameTa: string;
  summary: string;
  matters: string[];
  guides: string[]; // slugs of guides in src/content/guides
};

export const site = {
  // false = the whole site carries noindex and robots.txt blocks crawlers.
  // Flip to true only once every [placeholder] below is real.
  launched: false,

  name: 'Kongu Law Associates',
  nameTa: 'கொங்கு லா அசோசியேட்ஸ்', // [confirm the Tamil name on the letterhead]
  shortName: 'Kongu Law',
  description:
    'Kongu Law Associates is an advocates’ office in Tiruppur, Tamil Nadu, handling civil, property, family, criminal, cheque bounce and commercial matters before the district courts and the Madras High Court.',
  descriptionTa:
    'கொங்கு லா அசோசியேட்ஸ் — திருப்பூரில் சிவில், சொத்து, குடும்ப, குற்றவியல், காசோலை மோசடி மற்றும் வணிக வழக்குகளைக் கையாளும் வழக்கறிஞர் அலுவலகம்.',

  phone: '+91 98422 02114',
  whatsapp: '919842202114', // digits only, with country code
  email: 'contact@nammakongu.me', // [replace if different]

  // Main office. Spelling follows the letterhead ("Thenampalayam").
  officeLabel: 'Tiruppur office',
  officeLabelTa: 'திருப்பூர் அலுவலகம்',
  address: {
    street: 'No. 2-C, DRG Apartments, Kamaraj Road Cross Street',
    locality: 'Thenampalayam',
    city: 'Tiruppur',
    district: 'Tiruppur',
    state: 'Tamil Nadu',
    postalCode: '641604',
    country: 'IN',
  },
  // Decimal coordinates of the office, used by search engines and maps.
  // Exact pin of the office's Google Maps link (DRG Apartments).
  geo: { lat: 11.0867471, lng: 77.3474544 },
  mapUrl: 'https://maps.app.goo.gl/NdvAjSwT9XjrDYcs7',

  // Other places of practice, shown beside the main office.
  otherOffices: [
    {
      label: 'Chennai chamber, Madras High Court',
      labelTa: 'சென்னை உயர் நீதிமன்ற அலுவலகம்',
      street: 'Chamber No. 183, New Additional Law Chambers, High Court Buildings',
      locality: "Madras High Court Campus, Parry's Corner, George Town",
      city: 'Chennai',
      district: 'Chennai',
      state: 'Tamil Nadu',
      postalCode: '600104',
      country: 'IN',
      // Exact pin of the Madras High Court from the office's Google Maps link.
      geo: { lat: 13.0856293, lng: 80.2882667 },
      mapUrl: 'https://maps.app.goo.gl/4uyeym3q71QtquGu7',
    },
  ] as Office[],

  hours: [
    { days: 'Monday to Sunday', daysTa: 'திங்கள் முதல் ஞாயிறு வரை', opens: '09:00', closes: '21:00' },
  ],
  hoursSchema: [
    {
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '21:00',
    },
  ],

  // Towns and courts the associates regularly appear in. Keep this factual.
  areaServed: ['Tiruppur', 'Coimbatore', 'Erode', 'Salem', 'Namakkal', 'Karur'],
  courts: [
    'Madras High Court',
    '[Principal District Court, Tiruppur]',
    '[Family Court, Tiruppur]',
    '[Judicial Magistrate Courts, Tiruppur]',
  ],

  // Public profiles that confirm who the firm is (Google Business Profile,
  // LinkedIn, Bar association listing). Search engines and AI assistants use
  // these to tie the site to the real firm.
  sameAs: [] as string[],
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: 'civil-and-property',
    name: 'Civil and property',
    nameTa: 'சிவில் மற்றும் சொத்து',
    summary:
      'Title disputes, partition between family members, injunctions, and checking land documents before a purchase.',
    matters: [
      'Partition suits between heirs and co-owners',
      'Suits for declaration of title and permanent injunction',
      'Title verification before buying land or a house: EC, patta, chitta, FMB and parent documents',
      'Drafting and registering sale deeds, settlement deeds, gift deeds and wills',
      'Patta transfer and revenue record corrections',
      'Landlord and tenant disputes under the Tamil Nadu Regulation of Rights and Responsibilities of Landlords and Tenants Act, 2017',
    ],
    guides: ['land-title-check-tamil-nadu'],
  },
  {
    slug: 'family-and-matrimonial',
    name: 'Family and matrimonial',
    nameTa: 'குடும்பம் மற்றும் திருமணம்',
    summary:
      'Divorce, maintenance, custody of children and domestic violence cases before the family courts.',
    matters: [
      'Divorce by mutual consent and contested divorce',
      'Maintenance claims for spouse, children and parents',
      'Custody and guardianship of children',
      'Protection orders under the Protection of Women from Domestic Violence Act, 2005',
      'Restitution of conjugal rights and judicial separation',
      'Marriage registration and related documentation',
    ],
    guides: ['mutual-consent-divorce'],
  },
  {
    slug: 'criminal',
    name: 'Criminal',
    nameTa: 'குற்றவியல்',
    summary:
      'Bail, anticipatory bail, defence at trial and complaints to the police and magistrate under the new criminal laws.',
    matters: [
      'Regular and anticipatory bail',
      'Defence at trial under the Bharatiya Nyaya Sanhita, 2023',
      'Private complaints and petitions when the police do not register an FIR',
      'Quashing petitions before the Madras High Court',
      'Victim representation',
    ],
    guides: ['police-refuse-fir'],
  },
  {
    slug: 'cheque-bounce-and-recovery',
    name: 'Cheque bounce and money recovery',
    nameTa: 'காசோலை மோசடி மற்றும் பணம் மீட்பு',
    summary:
      'Section 138 cheque bounce cases, legal notices and recovery suits for traders, lenders and businesses.',
    matters: [
      'Statutory notices and complaints under Section 138 of the Negotiable Instruments Act, 1881',
      'Defending cheque bounce complaints',
      'Summary suits and money recovery suits',
      'Recovery of unpaid invoices for textile, yarn and garment trade',
    ],
    guides: ['cheque-bounce-section-138'],
  },
  {
    slug: 'commercial-and-contracts',
    name: 'Commercial and contracts',
    nameTa: 'வணிகம் மற்றும் ஒப்பந்தங்கள்',
    summary:
      'Drafting and reviewing business agreements, partnership matters and commercial disputes.',
    matters: [
      'Partnership deeds, LLP and company documentation',
      'Supply, job-work and distribution agreements',
      'Commercial suits before the commercial courts',
      'Arbitration and mediation',
    ],
    guides: ['cheque-bounce-section-138'],
  },
  {
    slug: 'consumer',
    name: 'Consumer disputes',
    nameTa: 'நுகர்வோர் வழக்குகள்',
    summary:
      'Complaints before the District Consumer Disputes Redressal Commission for defective goods, deficient service and insurance claims.',
    matters: [
      'Complaints under the Consumer Protection Act, 2019',
      'Insurance claim repudiation',
      'Builder and real estate delays',
      'Banking and service deficiencies',
    ],
    guides: [],
  },
];

// [replace] One entry per advocate. Placeholders are marked; the site shows
// them as-is until replaced.
export const advocates: Advocate[] = [
  {
    slug: 'p-kalimuthu',
    name: 'P. Kalimuthu',
    nameTa: '[initial]. காளிமுத்து',
    role: 'Founding advocate',
    enrolment: '[Enrolment no.]',
    enrolledYear: '1992', // practising since 1992
    qualifications: ['B.L.'],
    courts: ['[Principal District Court, Tiruppur]', 'Madras High Court'],
    // [confirm] all six areas while he is the only advocate
    practiceAreas: ['civil-and-property', 'family-and-matrimonial', 'criminal', 'cheque-bounce-and-recovery', 'commercial-and-contracts', 'consumer'],
    languages: ['Tamil', 'English'],
    bio: '[Factual profile: law college and year, enrolment with the Bar Council of Tamil Nadu and Puducherry, courts regularly appeared in, areas of practice.]',
  },
];

export const practiceBySlug = (slug: string) => practiceAreas.find((p) => p.slug === slug);
