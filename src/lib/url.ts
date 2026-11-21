// Prefix an internal path with the deploy base so links work both on the
// github.io preview (/nammakongu-law/) and the custom domain (/).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path = '/') => {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
};

export const absolute = (path: string, site: URL | undefined) =>
  new URL(url(path), site ?? 'https://nammakongu.me').toString();
