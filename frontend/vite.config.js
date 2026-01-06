import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern'
      }
    }
  },
  server: {
    port: 5173,
    allowedHosts: ['med-query-assi.top'],
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true
      },
      '/uploads': {
        target: 'http://localhost:8000',
        changeOrigin: true
      }
    }
  }
})

