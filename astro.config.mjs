// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  outDir: '/var/www/astro-japan/dist', // Outputs the build package to 'root /var/www/astro-japan/dist'

  integrations: [react(), mdx()],

  vite: {
    plugins: [tailwindcss()]
  }
});