# Claire Portfolio | 王映熹

> AI Agent Development & Evaluation — 个人作品集网站

## Preview

白色底色 + 天蓝主色调，明媚清爽的个人展示站。  
灵感来源: [tamalsen.dev](https://tamalsen.dev/)，保留 `//` 代码注释风格导航和时间线布局，内容和色系完全定制。

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 15 (App Router, React 19) |
| Styling | Tailwind CSS 3.4 |
| Language | TypeScript (strict) |
| Icons | Lucide React |
| Fonts | Inter + JetBrains Mono |
| Deployment | Cloudflare Pages (static export) |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production (static export)
npm run build

# Preview production build
npx serve out
```

## Project Structure

```
yingxi-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Tailwind directives + utilities
│   │   ├── layout.tsx           # Root layout (fonts, metadata)
│   │   └── page.tsx             # Main page (assembles sections)
│   ├── components/
│   │   ├── Navigation.tsx       # Sticky nav with // style links
│   │   ├── HeroSection.tsx      # Name + title + CTA
│   │   ├── ExpertiseSection.tsx # 3 expertise cards
│   │   ├── ProjectsSection.tsx  # Project grid (expandable)
│   │   ├── ExperienceSection.tsx# Timeline layout
│   │   ├── ContactSection.tsx   # Email + social links
│   │   └── Footer.tsx           # Copyright + tech info
│   ├── lib/                     # Utility functions
│   └── types/                   # TypeScript interfaces
├── public/
│   └── images/                  # Static assets
├── docs/
│   └── plan.md                  # Architecture & roadmap
├── next.config.ts               # Static export config
├── tailwind.config.ts           # Custom colors + fonts
└── package.json
```

## Sections

1. **Hero** — 姓名 + 头衔 + 简介 + CTA 按钮
2. **Expertise** — AI Agent 开发、AI 评测、RAG 系统与 AI 数据合成
3. **Work** — 工作与学习项目
4. **Community Contributions** — 已合并的开源社区贡献
5. **Vibe Coding** — AI 辅助开发作品
6. **Papers** — 论文与学术成果

## Design Decisions

- **白色底 + 天蓝主色**: 明媚、清爽、专业
- **代码注释风格导航 (`//`)**: 体现技术背景
- **简约内容**: 当前只展示核心信息，后续逐步扩展
- **Static Export**: 适合 Cloudflare Pages 部署，零服务端成本
- **响应式**: Mobile-first，全屏幕适配

## Deployment (Cloudflare Pages)

```bash
# Build
npm run build

# Output directory: out/
# Deploy to Cloudflare Pages:
# 1. Connect GitHub repo
# 2. Build command: npm run build
# 3. Output directory: out
```

## Roadmap

- [ ] 生成 GPT-image-2 视觉素材（头像、项目封面）
- [ ] 添加暗色模式切换
- [ ] 接入博客/文章区域
- [ ] SEO 优化（OG images, sitemap）
- [ ] 添加页面加载动画
- [ ] 国际化（中/英切换）

## License

Personal use. All content &copy; 2025 王映熹.
