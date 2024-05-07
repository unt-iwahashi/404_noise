import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  outDir: './docs/',
  publicDir: './public/',
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: () => {
            return 'assets/js/entry.[hash].js';
          },
          assetFileNames: () => {
            return 'assets/[ext]/asset-[name].[hash][extname]';
          },
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "src/styles/global.scss";',
        },
      },
    },
  },
  server: {
    port: 8080,
    open: '/',
    host: true,
  },
});
