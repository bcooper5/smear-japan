import { defineConfig } from 'vite';
import astro from '@astrojs/vite-plugin-astro';

export default defineConfig({
  plugins: [astro()],
  server: {
    allowedHosts: [
      'bcooperpublishing.com', // Allow your domain
      'localhost',            // Allow localhost for testing
      '127.0.0.1',           // Allow local IP
      'nginx'
    ],
    host: '0,0,0,0',
    port: 4321
  },
});