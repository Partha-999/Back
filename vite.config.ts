import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Back/', // This should match your GitHub repo name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
