import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://edgein.netlify.app',
  trailingSlash: 'always',
  output: 'static',
  integrations: [sitemap()],
  adapter: netlify(),
  alias: {
    '@': './src'
  },
});


