import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
<<<<<<< HEAD
  base: "/umang-portfolio/"
=======
  base: '/umang-portfolio',
>>>>>>> 7e10ba07f40afc52ac1973da283a769bb433bde1
})
