import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const toGHPages = false;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: toGHPages ? '/lfz-final-project/' : undefined,
  server: {
    proxy: {
      '/api': 'http://localhost:8080',
    },
  },
});
