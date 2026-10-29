// @ts-check
import { defineConfig, envField } from 'astro/config';
import vercel from '@astrojs/vercel';

// Die Seiten werden statisch gebaut. Nur die Formular-Endpunkte unter
// src/pages/api/ laufen on demand (dort steht `export const prerender = false`).
export default defineConfig({
  site: 'https://anfrage.ihr-pflegestuetzpunkt.de',
  // URLs wie bei Onepage: /haushaltshilfe (ohne Schrägstrich am Ende)
  trailingSlash: 'never',
  adapter: vercel({
    imageService: false,
  }),
  image: {
    // Bilder werden beim Build in WebP und mehreren Größen erzeugt (sharp)
    responsiveStyles: false,
  },
  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
    },
  },
  devToolbar: { enabled: false },
});
