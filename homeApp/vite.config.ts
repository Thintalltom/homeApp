import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app",
      remotes: {
        remoteApp : "https://altapp.vercel.app//assets/remoteEntries.js", // Expose this component
        designApp : "https://design-app-two.vercel.app/assets/remoteEntries.js", // Expose this component
      },
      shared: ["react", "react-dom"], // Share dependencies
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
