import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import lessonContent from "./plugins/lessonContent";

export default defineConfig({
  plugins: [lessonContent(), react()],
  base: "./",
  // The lazily-loaded search index is ~550 kB raw but ~40 kB gzipped; only the main chunk needs the default budget.
  build: { chunkSizeWarningLimit: 600 },
});
