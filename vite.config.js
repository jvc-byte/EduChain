import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
  },
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    port: 5173,
  },
})
