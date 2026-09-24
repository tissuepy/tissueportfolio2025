import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: parseInt(process.env.PORT) || 5173,
    strictPort: true,
    fs: {
      allow: ['..', '/Users/nitishg/Documents/GitHub/tissueportfolio2025'],
    },
  },
})
