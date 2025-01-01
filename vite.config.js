import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import fs from 'fs-extra'

// Plugin to copy libs folder
const copyLibsPlugin = {
  name: 'copy-libs',
  // Use closeBundle instead of buildEnd to ensure it runs after the build is complete
  closeBundle: async () => {
    const srcLibsPath = resolve(__dirname, 'libs')
    const distLibsPath = resolve(__dirname, 'dist/libs')
    
    try {
      // Ensure source directory exists
      if (!fs.existsSync(srcLibsPath)) {
        console.error('Source libs directory does not exist:', srcLibsPath)
        return
      }

      // Create dist directory if it doesn't exist
      await fs.ensureDir(distLibsPath)
      
      // Copy the libs directory to dist
      await fs.copy(srcLibsPath, distLibsPath)
      console.log('Successfully copied libs folder to dist')
    } catch (err) {
      console.error('Error copying libs folder:', err)
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), copyLibsPlugin],
  base: '',
  build: {
    outDir: 'dist',
  }
}) 