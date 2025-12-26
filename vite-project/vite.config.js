import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Das ist der wichtigste Teil für v4

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})