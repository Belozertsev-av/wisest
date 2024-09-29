import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    supportFile: 'tests/cypress/support/e2e.{js,jsx,ts,tsx}',
    specPattern: 'tests/cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:4173'
  }
})
