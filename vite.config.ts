import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, 'src/pages')
      },
      {
        find: '@ui',
        replacement: path.resolve(__dirname, 'src/ui')
      },
      {
        find: '@component',
        replacement: path.resolve(__dirname, 'src/components')
      },
      {
        find: '@shared',
        replacement: path.resolve(__dirname, 'src/shared')
      },
      {
        find: '@error',
        replacement: path.resolve(__dirname, 'src/errors')
      },
      {
        find: '@nots',
        replacement: path.resolve(__dirname, 'src/notifications')
      },
      {
        find: '@assets',
        replacement: path.resolve(__dirname, 'src/assets')
      },
      {
        find: '@utils',
        replacement: path.resolve(__dirname, 'src/utils')
      },
      {
        find: '@hooks',
        replacement: path.resolve(__dirname, 'src/hooks')
      }
    ]
  },
  server: {
    host: true
  }
})
