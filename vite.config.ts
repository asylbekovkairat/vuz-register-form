import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),

      Entities: `${path.resolve(__dirname, "./src/entities/")}`,
      Pages: `${path.resolve(__dirname, "./src/pages/")}`,
      Shared: `${path.resolve(__dirname, "./src/shared/")}`,
      Providers: `${path.resolve(__dirname, "./src/app/providers/")}`,
    },
  },
  server: {
    port: 3000,
  },
});
