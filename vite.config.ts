import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import path from "path";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin(),
    svgr({
      svgrOptions: {
        plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
        svgoConfig: {
          plugins: [
            {
              name: "preset-default",
              params: {
                overrides: {
                  removeViewBox: false,
                },
              },
            },
          ],
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@app": path.resolve(__dirname, "./src/app"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@widgets": path.resolve(__dirname, "./src/widgets"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@images": path.resolve(__dirname, "./src/shared/assets/images"),
      "@icons": path.resolve(__dirname, "./src/shared/assets/icons"),
      "@api": path.resolve(__dirname, "./src/shared/api"),
      "@config": path.resolve(__dirname, "./src/shared/config"),
      "@model": path.resolve(__dirname, "./src/shared/model"),
      "@styles": path.resolve(__dirname, "./src/shared/styles"),
      "@types": path.resolve(__dirname, "./src/shared/types"),
      "@ui": path.resolve(__dirname, "./src/shared/ui"),
      "@lib": path.resolve(__dirname, "./src/shared/lib"),
    },
  },
});
