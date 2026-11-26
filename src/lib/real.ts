// A value still wrapped in [square brackets] is an unconfirmed placeholder.
// Pages render only confirmed values, so the site can be live while some
// details are still pending.
export const real = (s: string | undefined): s is string => !!s && !s.includes('[');
