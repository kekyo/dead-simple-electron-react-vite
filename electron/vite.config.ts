import { defineConfig } from 'vite'
import { rmSync } from 'node:fs'
import react from '@vitejs/plugin-react-swc'
import electron from 'vite-plugin-electron'
import renderer from 'vite-plugin-electron-renderer'

// https://vitejs.dev/config/
export default defineConfig(({command}) => {
  rmSync('dist-electron', { recursive: true, force: true })

  const isServe = command === 'serve'
  const isBuild = command === 'build'

  return {
    plugins: [
      react(),
      electron([
        // Main-Process entry file of the Electron App.
        {
          entry: 'electron/main.ts',
          vite: {
            build: {
              sourcemap: isServe || !!process.env.VSCODE_DEBUG,
              minify: isBuild
            }
          }
        }
      ]),
      renderer()
    ]
  };
})
