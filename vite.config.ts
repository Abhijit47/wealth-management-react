import { reactRouter } from '@react-router/dev/vite';
// import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
// ↓ add this
import netlifyReactRouter from '@netlify/vite-plugin-react-router';

export default defineConfig({
  plugins: [
    // tailwindcss(),
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    reactRouter(),
    tsconfigPaths(),
    netlifyReactRouter(), // ← add this
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './app'),
    },
  },
});
