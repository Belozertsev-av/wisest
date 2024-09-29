import { fileURLToPath } from 'node:url'
import { defineConfig, configDefaults, ConfigEnv } from 'vitest/config'
import { viteConfig } from './vite.config'

export default defineConfig({
  ...viteConfig({ mode: 'test' } as ConfigEnv),
  test: {
    environment: 'jsdom',
    exclude: [...configDefaults.exclude, 'e2e/**'],
    root: fileURLToPath(new URL('./', import.meta.url))
  }
})
