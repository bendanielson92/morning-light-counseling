// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://morninglightcounselingservices.com',
  adapter: vercel({ webAnalytics: { enabled: true } }),
  integrations: [react(), markdoc(), keystatic(), sitemap({
    filter: (page) =>
      !page.includes('/keystatic') &&
      !page.includes('/api/') &&
      !page.includes('/thank-you'),
  })],
  redirects: {
    '/contact-us': { destination: '/contact', status: 301 },
    // Old WordPress artifacts
    '/sitemap_index.xml': { destination: '/sitemap-index.xml', status: 301 },
    '/feed': { destination: '/', status: 301 },
    // Retired design preview
    '/home-b': { destination: '/', status: 301 },
  },
});
