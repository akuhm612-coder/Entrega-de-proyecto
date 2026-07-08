import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

const repoName = 'Entrega-de-proyecto'

// https://vite.dev/config/
export default defineConfig({
  base: `/${repoName}/`,
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
  },
})
