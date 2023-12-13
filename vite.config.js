import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target:
          process.env.NODE_ENV === 'production'
            ? `http://0.0.0.0:${process.env.PORT}`
            : 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
})
