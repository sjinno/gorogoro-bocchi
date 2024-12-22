import { build, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import webExtension, { readJsonFile } from "vite-plugin-web-extension";

const browser = process.env.TARGET || "chrome";
const isFirefox = browser === "firefox";

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
      browser,
    }),
  ],
  build: {
    outDir: isFirefox ? "dist-firefox" : "dist",
    emptyOutDir: true,
  },
});
