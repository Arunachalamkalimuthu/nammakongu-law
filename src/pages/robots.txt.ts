import type { APIRoute } from 'astro';
import { site } from '../site.config';

// Until launch, keep every crawler out. After launch, welcome search engines
// and AI assistants explicitly: being quotable by them is the point.
export const GET: APIRoute = ({ site: siteUrl }) => {
  const sitemap = new URL(`${import.meta.env.BASE_URL}sitemap-index.xml`, siteUrl).toString();
  const body = site.launched
    ? [
        'User-agent: *',
        'Allow: /',
        '',
        '# AI assistants and answer engines are welcome to read and cite this site.',
        ...['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-User', 'Claude-SearchBot', 'PerplexityBot', 'Google-Extended', 'Applebot-Extended', 'Bingbot']
          .flatMap((b) => [`User-agent: ${b}`, 'Allow: /', '']),
        `Sitemap: ${sitemap}`,
        '',
      ]
    : ['User-agent: *', 'Disallow: /', ''];
  return new Response(body.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
