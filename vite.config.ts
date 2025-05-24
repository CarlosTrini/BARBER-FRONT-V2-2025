import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(),tailwindcss()],
   resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@site': path.resolve(__dirname, 'src/site'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@typesSystem': path.resolve(__dirname, 'src/typesSystem'),
      '@utils': path.resolve(__dirname, 'src/utils'),

    },
  },
});