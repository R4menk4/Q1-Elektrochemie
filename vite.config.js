import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Fuer GitHub Pages kann hier spaeter z. B. "/repo-name/" eingetragen werden.
  base: './',
});
