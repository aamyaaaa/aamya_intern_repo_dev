// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 👇 this is the important part
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
  },
});
