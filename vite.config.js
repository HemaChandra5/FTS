import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // IMPORTANT: repo name is exactly "FTS"
  // App will be served from https://hemachandra5.github.io/FTS/
  base: '/FTS/',
  build: {
    // Build into /docs so GitHub Pages can use main/docs
    outDir: 'docs',
  },
  server: {
    port: 5173,
  },
});