import { defineConfig, loadEnv } from "vite";
import { domToCodePlugin } from 'dom-to-code/vite';
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode (development/production)
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: "/",
    plugins: [
      react(),
      env.MODE !== 'production' // Use `env.MODE` instead of `import.meta.env.MODE`
        ? domToCodePlugin({
            mode: 'react',
          })
        : undefined,
    ],
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      alias: {
        "@": new URL("./src/", import.meta.url).pathname,
        "@global": new URL("./src/global", import.meta.url).pathname,
        "@App": new URL("./src/App.tsx", import.meta.url).pathname,
        "@Assets": new URL("./src/assets/", import.meta.url).pathname,
        "@Utils": new URL("./src/utils/", import.meta.url).pathname,
        "@Store": new URL("./src/store/", import.meta.url).pathname,
        "@Schemas": new URL("./src/schemas/", import.meta.url).pathname,
        "@Hooks": new URL("./src/hooks/", import.meta.url).pathname,
        "@Api": new URL("./src/api/", import.meta.url).pathname,
        "@Services": new URL("./src/services/", import.meta.url).pathname,
        "@Constants": new URL("./src/constants/", import.meta.url).pathname,
        "@Queries": new URL("./src/api/queries/", import.meta.url).pathname,
        "@Routes": new URL("./src/routes/", import.meta.url).pathname,
        "@Views": new URL("./src/views/", import.meta.url).pathname,
        "@Components": new URL("./src/Components/", import.meta.url).pathname,
        "@Templates": new URL("./src/templates/", import.meta.url).pathname,
      },
    },
  };
});
