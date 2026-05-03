import { configDefaults, defineConfig } from "vitest/config";
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // @ を src フォルダの絶対パスに解決する
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
    },
    exclude: [...configDefaults.exclude, "packages/template/*"],
    // browser: {
    //   enabled: true,
    //   provider: playwright(),
    //   instances: [{ browser: "chromium" }],
    // },
  },
});
