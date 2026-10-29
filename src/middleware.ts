// Platzhalter sichtbar machen: Text in [[doppelten eckigen Klammern]] in den
// Inhaltsdateien erscheint auf der Seite gelb markiert. So sieht der Kunde beim
// Prüfen sofort, wo noch Angaben fehlen. Ohne [[...]] ändert sich nichts.
import { defineMiddleware } from 'astro:middleware';

const mark = (html: string) =>
  html
    .split(/(<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<[^>]+>)/)
    .map((part) => (part.startsWith('<') ? part : part.replace(/\[\[([\s\S]*?)\]\]/g, '<mark class="ph">$1</mark>')))
    .join('');

export const onRequest = defineMiddleware(async (_ctx, next) => {
  const res = await next();
  const type = res.headers.get('content-type') || '';
  if (!type.includes('text/html')) return res;
  const html = await res.text();
  if (!html.includes('[[')) return new Response(html, res);
  return new Response(mark(html), { status: res.status, headers: res.headers });
});
