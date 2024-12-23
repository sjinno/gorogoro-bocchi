import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import webExtension, { readJsonFile } from "vite-plugin-web-extension";

const target = process.env.TARGET || "chrome";
const isFirefox = target === "firefox";

function generateManifest() {
  const manifest = readJsonFile("src/manifest.json");
  const pkg = readJsonFile("package.json");
  return {
    name: pkg.name,
    description: pkg.description,
    version: pkg.version,
    ...manifest,
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    webExtension({
      manifest: generateManifest,
      browser: target,
    }),
  ],
  build: {
    outDir: isFirefox ? "dist-firefox" : "dist",
    emptyOutDir: true,
  },
  define: {
    __BROWSER__: JSON.stringify(target),
  },
});
