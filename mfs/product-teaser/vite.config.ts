import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
    }),
    cssInjectedByJsPlugin(),
    visualizer({}),
  ],
  build: {
    manifest: true,
    minify: false,
    rollupOptions: {
      external: ["moment"],
      output: {
        globals: {
          moment: "moment",
        },
      },
    },
  },
});
