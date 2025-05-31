import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  server:{
    allowedHosts: ["5173-priyan-2004-cms-project2-ddi5efjifl.app.codeanywhere.com"],
  },

  plugins: [react(),tailwindcss()],
})
