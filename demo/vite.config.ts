import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsxPlugin from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    commonjsOptions: {
      include: ["node_modules/**"],
    },
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
