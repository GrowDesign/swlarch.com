import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  server: {
    host: process.env.FIGMA_DEV_SERVER_HOST || "0.0.0.0",
    port: Number.parseInt(process.env.PORT || "8443", 10),
    strictPort: true,
    watch: {
      ignored: ["**/.figma/**"],
    },
  },
  preview: {
    host: process.env.FIGMA_DEV_SERVER_HOST || "0.0.0.0",
    port: Number.parseInt(process.env.PORT || "8443", 10),
  },
});
