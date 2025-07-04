import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // ou o caminho base do seu projeto, se necessário
  plugins: [react()],
})