import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  site: 'https://emporio-natural-lp.pages.dev',
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()]
  }
});
