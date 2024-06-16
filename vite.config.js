import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://alexmajewski.github.io/cg-resources/",
  plugins: [react()],
})
