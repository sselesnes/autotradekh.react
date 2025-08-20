import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
import react from "@vitejs/plugin-react";
// import svgr from "vite-plugin-svgr";
import legacy from "@vitejs/plugin-legacy";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  plugins: [
    react(),
    imagetools(),
    ViteImageOptimizer({
      // webp: { quality: 80 },
      png: { quality: 80 },
    }),
    legacy({
      targets: ["safari >= 13", "ios >= 13"], // Для Safari 13
      modernPolyfills: true, // Polyfills для сучасного бандлу
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"], // Для async/await
      renderLegacyChunks: true, // Генерувати legacy-бандли
    }),
  ],
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "https://temp.sselesnes.site/", // Adjust to your PHP server (e.g., Apache/Nginx)
  //       changeOrigin: true,
  //       rewrite: path => path.replace(/^\/api/, ""),
  //     },
  //     "/submit.php": {
  //       target: "https://temp.sselesnes.site/",
  //       changeOrigin: true,
  //     },
  //   },
  // },
  // build: {
  //   target: "es5",
  //   minify: "terser",
  //   terserOptions: {
  //     compress: {
  //       drop_console: true,
  //       drop_debugger: true,
  //       pure_funcs: ["console.info", "console.debug", "console.warn"],
  //       passes: 2,
  //     },
  //     mangle: true,
  //     format: { comments: false },
  //   },
  //   sourcemap: false,
  // },
});
