import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vite handles UTF-8 by default, but we ensure proper encoding
  // All source files should be saved as UTF-8
})
