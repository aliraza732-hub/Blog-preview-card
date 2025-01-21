import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Blog-preview-card/', // Replace with your repository name
  plugins: [react()],
})
