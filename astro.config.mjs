import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://appellemoipizza.github.io',
  output: 'static',
  trailingSlash: 'never',
  integrations: [sitemap()]
});
