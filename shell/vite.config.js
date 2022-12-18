import { defineConfig } from "vite";
import { resolve } from 'path';
import vue from "@vitejs/plugin-vue";
import asyncImportMap from "./plugins/asyncImportMap";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    asyncImportMap({
      title: "T-SHOP",
      appId: 'app',
      entryCss: 'main.css',
      url: "http://localhost:3000/api/",
    })
  ],
  build: {
    target: "esnext",
    minify: false,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/main.ts'),
      },
      external: [
        "product-buy-box",
        "product-tile",
        "product-teaser",
        "shop-header",
        "shop-footer",
      ],
    },
  },
});
