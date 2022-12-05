import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  proxyTable: {
    '/v2': {
      target: 'https://newsapi.org/',
      changeOrigin: true,
      pathRewrite: {
        '^/v2': ''
      }
    }
  }
});
