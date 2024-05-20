import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://carloscol-in.github.io',
  base: 'coder-or-chef',
  integrations: [tailwind()]
});