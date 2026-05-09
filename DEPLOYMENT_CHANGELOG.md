# 部署迁移改动记录（GitHub Pages -> Vercel）

## 1) 默认部署目标调整

- 新增 `.deploy-target`，默认值为 `vercel`
- `vite.config.ts` 改为按部署目标动态设置 `base`：
  - `vercel` -> `/`
  - `github-pages` -> `/jbti-test/`
- 同时支持 `DEPLOY_TARGET` 环境变量覆盖

## 2) GitHub Pages Workflow 开关化

- 原 `.github/workflows/deploy.yml` 改名为：
  - `.github/workflows/deploy.github-pages.yml.disabled`
- 作用：默认关闭 GitHub Pages 自动发布，避免与 Vercel 双重发布冲突
- 在 workflow 的 build 步骤中增加：
  - `DEPLOY_TARGET: github-pages`

## 3) 一键切换脚本

- 新增 `scripts/switch-deploy.mjs`
- 新增命令：
  - `npm run switch:vercel`
  - `npm run switch:github-pages`
- 脚本行为：
  - 更新 `.deploy-target`
  - 按目标自动启用/禁用 GitHub Pages workflow

## 4) package.json 调整

- 删除 `homepage`（避免固定 GitHub Pages 路径）
- 删除 `deploy`（gh-pages 发布命令）
- 新增：
  - `deploy:vercel`
  - `switch:vercel`
  - `switch:github-pages`

## 5) README 更新

- 部署章节改为“默认 Vercel”
- 增加“一键切换部署目标”说明
- 明确切换影响文件与 GitHub Pages 恢复步骤
