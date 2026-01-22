import { defineConfig } from 'astro/config';
import image from '@astrojs/image';

export default defineConfig({
  integrations: [image({ service: 'sharp' })],
  experimental: {
    viewTransitions: true,
  },
});
