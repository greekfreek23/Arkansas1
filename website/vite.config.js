
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/Arkansas1/',
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@fortawesome': path.resolve(__dirname, './node_modules/@fortawesome')
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  }
});
