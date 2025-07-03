import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
              algorithm: 'brotliCompress', // or 'gzip'
              ext: '.br', // or '.gz'
              verbose: true,
              disable: false,
            }),
  ],
  base: process.env.VITE_BASE_PATH || "/"
  // base: process.env.VITE_BASE_PATH || "/Nithinbharathi-portfolio"
})
