import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Back/', // Correct for GitHub Pages deployment
  build: {
    outDir: 'dist', // Ensure output goes to 'dist' folder
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
