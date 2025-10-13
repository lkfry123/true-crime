import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://example.com',
  trailingSlash: 'always',
  output: 'static',
  integrations: [sitemap()],
  adapter: netlify(),
  alias: {
    '@': './src'
  },
});


