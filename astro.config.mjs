import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  site: 'https://emporio-natural-lp.pages.dev',
  compressHTML: true,
  server: {
    host: true,
    allowedHosts: ['4321-irpkw6id88r37ird4xl6i-e2bff22f.us5.manus.computer']
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
