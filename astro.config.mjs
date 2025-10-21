import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://edgein.netlify.app',
  trailingSlash: 'always',
  output: 'static',
  adapter: netlify(),
  alias: {
    '@': './src'
  },
});


