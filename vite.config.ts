import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

// Plain Vite + React SPA config. Static output in `dist/`, deployable
// anywhere that serves static files (Vercel, Netlify, Cloudflare Pages,
// GitHub Pages, etc.).
export default defineConfig({
  plugins: [react(), tailwindcss(), tsConfigPaths()],
});
