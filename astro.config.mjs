import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  site: 'https://emporionaturales.com.br',
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()]
  }
});
