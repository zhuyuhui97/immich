import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import dotenv from 'dotenv';

dotenv.config();

process.env.PUBLIC_IMMICH_BUY_HOST = process.env.PUBLIC_IMMICH_BUY_HOST || 'https://buy.immich.app';
process.env.PUBLIC_IMMICH_PAY_HOST = process.env.PUBLIC_IMMICH_PAY_HOST || 'https://pay.futo.org';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    alias: {
      $lib: 'src/lib',
      '$lib/*': 'src/lib/*',
      '@test-data': 'src/test-data',
    },
    paths: {
      base:'',
      relative: true,
    },
    env: {
      privatePrefix: "IMMICH_",
    },
  },
};

export default config;
