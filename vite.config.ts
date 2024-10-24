// vite.config.ts
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { configureTerser } from './config/vite'

export const viteConfig = defineConfig(({ mode }) => {
  const isProd = mode === 'production'

  return {
    plugins: [vue(), vueJsx()],
    build: {
      minify: isProd ? 'terser' : false,
      cssMinify: isProd ? 'esbuild' : false,
      sourcemap: isProd ? false : 'inline',
      terserOptions: isProd ? configureTerser() : undefined
    },
    base: '/',
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    }
  }
})

export default viteConfig
