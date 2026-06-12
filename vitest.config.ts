import { configDefaults, defineConfig } from "vitest/config";
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
    },
    exclude: [...configDefaults.exclude, "packages/template/*"],
    projects: [
      {
        extends: true,
        test: {
          name: "react",
          include: ["src/react-app/**/*.test.{ts,tsx}"],
          environment: "jsdom",
        },
      },
      {
        extends: true,
        test: {
          name: "worker",
          include: ["src/worker/**/*.test.ts"],
          environment: "node",
        },
      },
    ],
  },
});
