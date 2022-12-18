import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [visualizer({})],
  build: {
    manifest: true,
    rollupOptions: {
      external: ["lit", "lodash-es"],
      output: {
        entryFileNames: "index.[hash].js",
        globals: {
          lit: "lit",
          lodashEs: "lodash-es",
        },
      },
    },
  },
});
