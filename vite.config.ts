import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: '/cars-oil-guide/',
  root: "client",
  base: "/cars-oil-guide/",
  plugins: [react()],
  server: { allowedHosts: true },
  build: { outDir: "../dist", emptyOutDir: true },
});
