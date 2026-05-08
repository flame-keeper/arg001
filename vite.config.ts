/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

import path from "path";
import react from "@vitejs/plugin-react";
import UnoCSS from "unocss/vite";

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [
    tanstackRouter({
      routesDirectory: "./src/react-app/routes",
      generatedRouteTree: "./src/react-app/routeTree.gen.ts",
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
    cloudflare(),
    UnoCSS(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
