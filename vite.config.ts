import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  test: {},
  build: {
    lib: {
      entry: './src/index',
      name: 'telHighlight',
      formats: ['es', 'cjs', 'iife'],
      fileName: 'index',
    },
  },
  plugins: [vue()],
})
