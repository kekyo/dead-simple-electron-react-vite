import { defineConfig } from 'vite'
import { rmSync } from 'node:fs'
import react from '@vitejs/plugin-react-swc'
import electron from 'vite-plugin-electron'
import renderer from 'vite-plugin-electron-renderer'

// https://vitejs.dev/config/
export default defineConfig(() => {
  rmSync("dist-electron", { recursive: true, force: true });
  return {
    plugins: [
      react(),
      electron({ entry: 'electron/main.ts' }),
      renderer()
    ]
  };
});
