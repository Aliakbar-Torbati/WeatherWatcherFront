import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // Enable source maps
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        sw: 'public/firebase-messaging-sw.js'
      },
    }
    }
})
