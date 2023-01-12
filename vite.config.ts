import { resolve } from 'path';
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsxPlugin from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    commonjsOptions: {
      include: ["node_modules/**"],
    },
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: "vue3-treeselect",
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        exports: "named",
      }
    }
  },
  optimizeDeps: {
    include: [],
  },
  esbuild: {
  },
  plugins: [
    vue(),
    vueJsxPlugin(),
  ],
  resolve: {
    alias: {
    },
  },
});
