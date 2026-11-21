// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL / BASE_PATH come from the deploy workflow. With a custom domain the
// site is served from "/"; on the github.io preview it lives under the repo name.
const site = process.env.SITE_URL || 'https://nammakongu.me';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en-IN', ta: 'ta-IN' } },
    }),
  ],
});
