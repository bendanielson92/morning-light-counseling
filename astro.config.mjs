// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://morninglightcounselingservices.com',
  adapter: vercel(),
  integrations: [react(), markdoc(), keystatic(), sitemap({
    filter: (page) =>
      !page.includes('/keystatic') &&
      !page.includes('/api/') &&
      !page.includes('/thank-you'),
  })],
  redirects: {
    '/contact-us': { destination: '/contact', status: 301 },
  },
});
