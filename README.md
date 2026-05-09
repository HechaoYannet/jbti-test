# 🎭 JBTI 抽象人格测试

全网最梗、最抽象、最好笑的人格测试！发现你内心深处的**米小子**、**伪人**、**奶龙**或**魔丸**！

## ✨ 特性

- **30+ 抽象问题**：从职场迷惑行为到网络冲浪哲学
- **9种抽象人格**：米小子、伪人、奶龙、魔丸、抽象大师、梗王、尬帝、混沌之神、均衡の憨憨
- **全网最梗**：融汇大量网络烂梗，测试过程比结果还好笑
- **精美UI**：现代化设计，响应式布局，流畅动画
- **完全免费**：开源项目，无需注册，直接开测

## 🚀 快速开始

### 本地开发

```bash
# 克隆项目
git clone https://github.com/yourusername/jbti-test.git
cd jbti-test

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

### 构建生产版本

```bash
# 构建项目
npm run build

# 预览构建结果
npm run preview
```

## 🌐 部署

### 当前默认：Vercel

1. 在 Vercel 导入本仓库
2. Framework 选择 `Vite`
3. Build Command 使用 `npm run build`
4. Output Directory 使用 `dist`

### 一键切换部署目标

```bash
# 切换为 Vercel（默认）
npm run switch:vercel

# 切换为 GitHub Pages
npm run switch:github-pages
```

切换后会自动更新：

- `.deploy-target`（控制 Vite 的 base 路径）
- GitHub Pages workflow 开关（`deploy.yml` 与 `deploy.github-pages.yml.disabled`）

### GitHub Pages（切换后可用）

1. 运行 `npm run switch:github-pages`
2. 提交并推送切换结果
3. 在仓库设置中启用 GitHub Pages Actions 部署
4. 访问 `https://你的用户名.github.io/jbti-test`

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/jbti-test)

## 🎨 技术栈

- **前端框架**：React 18 + TypeScript
- **构建工具**：Vite
- **样式方案**：Tailwind CSS
- **图标库**：Lucide React
- **代码质量**：ESLint + TypeScript

## 📊 人格类型

| 人格类型 | 描述 | 特征 |
|---------|------|------|
| 🍚 米小子 | 对米饭有着近乎宗教般的虔诚 | 认为世间万物皆可拌饭 |
| 🎭 伪人 | 高度进化的社交表演艺术家 | 能在各种场合完美伪装 |
| 🐉 奶龙 | 外表软萌，内心住着一只中二龙 | 喜欢用最可爱的语气说最抽象的话 |
| 🔮 魔丸 | 表面佛系，内心混沌 | 看似与世无争，实则暗藏搞事之心 |
| 🌀 抽象大师 | 活在第五维度的思想家 | 能用最离谱的比喻解释最简单的事情 |
| 🤣 梗王 | 行走的梗百科 | 能用梗完成所有日常交流 |
| 😅 尬帝 | 尴尬制造机 | 能用一句话让全场沉默 |
| 🌪️ 混沌之神 | 秩序的破坏者，混乱的创造者 | 认为人生就应该像抽卡 |
| ⚖️ 均衡の憨憨 | 所有维度都处于微妙平衡 | 在离谱和靠谱之间反复横跳 |

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## ⚠️ 免责声明

本测试仅供娱乐，结果不代表真实人格特征。如有雷同，纯属你也是个抽象带师。

JBTI™ - Just Be Totally Interesting (才怪)
