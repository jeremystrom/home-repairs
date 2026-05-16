// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://jeremystrom.github.io',
  base: '/home-repairs',
  vite: {
    plugins: [tailwindcss()],
  },
});
