import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify/functions';

export default defineConfig({
  site: 'https://example.com',
  trailingSlash: 'always',
  output: 'server',
  integrations: [sitemap()],
  adapter: netlify(),
  alias: {
    '@': './src'
  },
});


