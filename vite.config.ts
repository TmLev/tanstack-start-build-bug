import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

const ReactCompilerConfig = {
  target: "18", // '17' | '18' | '19'
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    port: 5173,
  },

  ssr: {
    noExternal: ["@mui/*"],
  },

  plugins: [
    tsConfigPaths(),
    tanstackStart({
      customViteReactPlugin: true,
      spa: {
        enabled: true,
      },
      target: "vercel",
    }),
    react({
      babel: {
        plugins: [
          "@babel/plugin-transform-explicit-resource-management",
          // ["babel-plugin-react-compiler", ReactCompilerConfig],
        ],
      },
    }),
  ],
}));
