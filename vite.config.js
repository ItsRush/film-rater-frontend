import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'https://film-rater-backend.onrender.com',
        changeOrigin: true,
        secure: true, // Recommended for HTTPS backend
        rewrite: (path) => path.replace(/^\/api/, ''),
        // Optional timeout settings
        timeout: 5000
      }
    },
    // Optional: Better development server configuration
    port: 3001,
    strictPort: true,
    host: true,
    open: true // Automatically open browser
  },
  // Optional: Build optimization
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true // Useful for debugging
  }
});