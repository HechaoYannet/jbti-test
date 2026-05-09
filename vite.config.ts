import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const configDir = fileURLToPath(new URL('.', import.meta.url))

const getDeployTarget = () => {
  const envTarget = process.env.DEPLOY_TARGET
  if (envTarget === 'github-pages' || envTarget === 'vercel') {
    return envTarget
  }

  try {
    const value = readFileSync(resolve(configDir, '.deploy-target'), 'utf8').trim()
    return value === 'github-pages' ? 'github-pages' : 'vercel'
  } catch {
    return 'vercel'
  }
}

const deployTarget = getDeployTarget()
const basePath = deployTarget === 'github-pages' ? '/jbti-test/' : '/'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: basePath,
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  server: {
    port: 3000,
    open: true,
  },
})
