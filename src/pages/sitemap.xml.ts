import type { APIRoute } from 'astro';
import { site } from '../data/site';

const pages = ['/', '/haushaltshilfe', '/senioren-wg', '/kontakt'];

export const GET: APIRoute = () => {
  const today = new Date().toISOString().slice(0, 10);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url><loc>${new URL(p, site.url).href.replace(/\/$/, p === '/' ? '/' : '')}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
