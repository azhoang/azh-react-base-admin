import path from "path";
import react from "@vitejs/plugin-react";
import basicSsl from "@vitejs/plugin-basic-ssl";
import { PluginOption, defineConfig, loadEnv } from "vite";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const isProduction = mode === "production";
  const plugins: PluginOption[] = [react()];
  if (process.env.VITE_HTTPS === "true") {
    plugins.push(basicSsl());
  }
  return defineConfig({
    plugins,
    server: {
      port: Number(process.env.VITE_PORT) || 3000,
    },
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    },
    define: {
      "process.env": process.env,
    },
    build: {
      chunkSizeWarningLimit: 500,
      rollupOptions: {
        output: {
          ...(isProduction && { chunkFileNames: `assets/[hash].js` }),
          sourcemap: !isProduction,
        },
      },
    },
  });
};
