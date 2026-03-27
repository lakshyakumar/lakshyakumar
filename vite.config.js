import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/lakshyakumar/', // GitHub Pages base path – update to '/' if using username.github.io
})
