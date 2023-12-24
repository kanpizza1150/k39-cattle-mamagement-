import react from "@vitejs/plugin-react-swc"
import million from "million/compiler"
import path from "path"
import { defineConfig } from "vite"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [million.vite({ auto: true }), react()],
  define: {
    global: {},
    process: {
      env: {},
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      parse: path.resolve(__dirname, "./node_modules/parse/dist/parse.min.js"),
    },
  },
})
