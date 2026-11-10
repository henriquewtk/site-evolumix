// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// TODO: trocar pelo domínio definitivo antes de publicar (ex.: https://www.evolumix.com.br).
// Também pode ser definido na Vercel pela variável de ambiente SITE_URL.
const site = process.env.SITE_URL ?? 'https://evolumix.vercel.app';

export default defineConfig({
  site,
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
