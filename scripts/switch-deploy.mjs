import { existsSync, renameSync, rmSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '..')

const target = process.argv[2]
const validTargets = new Set(['vercel', 'github-pages'])

if (!validTargets.has(target)) {
  console.error('Usage: node scripts/switch-deploy.mjs <vercel|github-pages>')
  process.exit(1)
}

writeFileSync(resolve(repoRoot, '.deploy-target'), `${target}\n`, 'utf8')

const workflowDir = resolve(repoRoot, '.github/workflows')
const activeWorkflow = resolve(workflowDir, 'deploy.yml')
const disabledWorkflow = resolve(workflowDir, 'deploy.github-pages.yml.disabled')

if (target === 'vercel') {
  if (existsSync(activeWorkflow)) {
    if (existsSync(disabledWorkflow)) {
      rmSync(disabledWorkflow)
    }
    renameSync(activeWorkflow, disabledWorkflow)
  }
} else {
  if (existsSync(disabledWorkflow)) {
    if (existsSync(activeWorkflow)) {
      rmSync(activeWorkflow)
    }
    renameSync(disabledWorkflow, activeWorkflow)
  }
}

console.log(`Deployment target switched to: ${target}`)
