# Architecture & Development Plan

## 1. 项目定位

个人品牌宣传站，目标受众：
- 潜在雇主/合作伙伴
- 技术社区同行
- 对 AI 产品/vibe coding 感兴趣的人

核心诉求：**打开即觉得不错** — 清爽、专业、有辨识度。

## 2. 设计参考

灵感来源: [tamalsen.dev](https://tamalsen.dev/)

**保留元素:**
- `//` 代码注释风格的导航标签
- Single-page 滚动结构
- 时间线式工作经历
- 卡片式专业技能展示
- 极简 footer

**定制改动:**
- 色系: 原站深色 → 白色底 + 天蓝主色 (#38a3f4)
- 内容: 原站前端开发 → AI 产品 & 数据科学
- 简化: 去掉 testimonials、featured-in carousel
- 扩展点: 预留 vibe coding 作品区

## 3. 技术选型理由

| Decision | Reason |
|----------|--------|
| Next.js 15 | React 生态标准，SSG 支持好，未来可加 blog |
| Static Export | Cloudflare Pages 部署，无需服务端 |
| Tailwind CSS | 快速迭代，utility-first，响应式简单 |
| TypeScript | 类型安全，后期维护方便 |
| Lucide React | 轻量图标库，tree-shaking 友好 |
| Inter + JetBrains Mono | 现代感 + 代码感的字体组合 |

## 4. 色彩系统

```
Primary (天蓝):
  50:  #eff8ff   — 卡片背景 tint
  100: #dbeffe   — hover 状态
  200: #bee4fd   — border accent
  500: #38a3f4   — 主按钮、图标、tag
  600: #2286e9   — hover 状态

Accent (青绿，辅助):
  50:  #f0fdfa   — 渐变背景
  400: #2dd4bf   — 点缀

Neutral (灰色系):
  50:  #f9fafb   — section 背景交替
  100: #f3f4f6   — tag 背景
  400: #9ca3af   — 次级文字
  500: #6b7280   — 正文
  900: #111827   — 标题
```

## 5. 页面结构

```
┌─────────────────────────────────┐
│  Navigation (sticky, blur)       │
├─────────────────────────────────┤
│  Hero Section                    │
│  - 姓名 (中+英)                  │
│  - 头衔                          │
│  - 一句话简介                     │
│  - CTA: Get in Touch / Projects  │
├─────────────────────────────────┤
│  Expertise Section               │
│  - 3 cards (AI/LLM, Product, DS)│
├─────────────────────────────────┤
│  Projects Section (bg: gray-50)  │
│  - 4 cards (2x2 grid)           │
│  - "More coming soon" badge      │
├─────────────────────────────────┤
│  Experience Section              │
│  - Timeline (3 entries)          │
│  - 交替左右布局                   │
├─────────────────────────────────┤
│  Contact Section (bg: gray-50)   │
│  - Email CTA                     │
│  - Social icons                  │
├─────────────────────────────────┤
│  Footer                          │
└─────────────────────────────────┘
```

## 6. 组件设计

每个 section 是独立组件，数据内联（不走 API）：

- `Navigation.tsx` — client component (scroll listener)
- `HeroSection.tsx` — client component (animations)
- `ExpertiseSection.tsx` — server component
- `ProjectsSection.tsx` — server component
- `ExperienceSection.tsx` — server component
- `ContactSection.tsx` — server component
- `Footer.tsx` — server component

## 7. 动效策略

- **入场动画**: fade-in-up (hero 区域，CSS animation)
- **导航**: scroll > 50px 后加 blur + shadow
- **卡片**: hover 时 border 变色 + shadow 提升
- **时间线**: 节点用 primary 色圆点
- **Scroll indicator**: bounce 动画的箭头

## 8. 响应式断点

- Mobile: < 768px — 单列，导航收起
- Tablet: 768px-1024px — 2 列 grid
- Desktop: > 1024px — 3 列 grid + 时间线交替

## 9. 部署计划

**Phase 1 (当前):**
- Static export → Cloudflare Pages
- 自定义域名绑定

**Phase 2 (后续):**
- 添加 vibe coding 项目展示页
- GPT-image-2 生成项目封面和头像
- 可能迁移到 Vercel（如需要 ISR）

## 10. 迭代计划

### v1.0 (当前) — MVP
- [x] 基础 5 个 section
- [x] 白色清爽色系
- [x] 响应式布局
- [x] Static export 支持
- [x] README + plan 文档

### v1.1 — 视觉增强
- [ ] GPT-image-2 生成个人头像
- [ ] 项目卡片封面图
- [ ] 页面过渡动画 (intersection observer)

### v1.2 — 内容扩展
- [ ] Vibe coding 作品 showcase
- [ ] 技能标签动态展示
- [ ] 可能加入 blog 功能

### v2.0 — 完整站点
- [ ] 暗色模式
- [ ] 中英文切换
- [ ] 博客/文章区
- [ ] Analytics 接入
- [ ] Performance 优化 (lighthouse 100)
