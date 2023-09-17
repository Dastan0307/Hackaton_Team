import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';  

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({ include: /\.(js|jsx|ts|tsx)$/})
  ],
  // resolve: {
  //   alias: {
  //     // Устанавливаем псевдоним для модуля "react-slick"
  //     'react-slick': path.resolve(__dirname, 'node_modules/react-slick'),
  //   },
  // },

})
