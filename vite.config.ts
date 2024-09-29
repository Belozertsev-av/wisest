// vite.config.ts
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { configureTerser } from './config/vite'

export const viteConfig = defineConfig(({ mode }) => {
  const isProd = mode === 'production'
  const isTest = mode === 'test'

  const base = () => (isProd ? '/wisest' : isTest ? '/test/wisest' : '/dev/wisest')

  return {
    plugins: [vue(), vueJsx()],
    build: {
      minify: isProd ? 'terser' : false,
      cssMinify: isProd ? 'esbuild' : false,
      sourcemap: isProd ? false : 'inline',
      terserOptions: configureTerser(isProd)
    },
    base: base(),
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})

export default viteConfig
