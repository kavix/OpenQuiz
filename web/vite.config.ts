import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

const projectRoot = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [svelte()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    proxy: {
      '/healthz': 'http://localhost:8080'
    }
  },
  build: {
    outDir: resolve(projectRoot, '../internal/web/dist'),
    emptyOutDir: true,
    sourcemap: false
  }
});
