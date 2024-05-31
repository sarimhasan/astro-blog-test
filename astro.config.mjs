import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.astro-test-sarim.netlify.app',
  integrations: [preact()],
});
