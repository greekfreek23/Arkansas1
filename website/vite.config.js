import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/ARKPLUMBING/',
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
    port: 3000,
    allowedHosts: [
      'd9b7c193-bf09-45a5-af62-6f94275b93b2-00-2nvule3d6s500.riker.replit.dev',
      '5e0c8b32-2387-44d4-8a10-ad9c2c64da62-00-2tdv56eew62up.janeway.replit.dev',
      '1bd1199d-c6ba-4c85-bb9b-878784de2253-00-1ygiei9p54ysg.spock.replit.dev',
      '5da850b0-bf0e-454c-8b72-0e3664d09a9a-00-3cdz79u4b993t.janeway.replit.dev'
    ]
  }
});