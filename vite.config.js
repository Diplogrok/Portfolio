// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: import.meta.env.VITE_APP_LOCAL ? "/" : "/Portfolio/",
  plugins: [react()],
  server: {
    host: true,
  },
});
