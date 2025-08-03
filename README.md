# PlayIO Today - H5游戏聚合站 MVP

一个基于 Next.js + TypeScript 构建的 HTML5 游戏聚合平台，支持以组件化方式快速扩展游戏列表与详情页，并内置 Walkthrough 嵌入与广告位封装。

## 🚀 快速开始

1. 安装依赖
   ```bash
   npm install
   ```
2. 本地开发
   ```bash
   npm run dev
   ```
3. 打开浏览器访问 http://localhost:3000

## 📁 目录结构（与重构后的核心相关）

- src/
  - app/
    - page.tsx               // 首页：使用 GameList 展示所有游戏
    - game/[slug]/page.tsx   // 游戏详情：渲染游戏 iframe；按需嵌入 Walkthrough
    - layout.tsx             // 根布局：统一 Header / Footer
  - components/
    - GameCard.tsx           // 单个游戏卡片
    - GameList.tsx           // 游戏网格列表（复用 GameCard）
    - WalkthroughEmbed.tsx   // 通用 Walkthrough 嵌入组件（外部 script）
    - AdSlot.tsx             // 广告插槽（建议从环境变量读取 tag）
    - Header.tsx / Footer.tsx
    - StructuredData.tsx
  - data/
    - games.ts               // Game 接口与示例数据（slug/title/url/description/hasWalkthrough/walkthroughGameId/thumbnail）
- public/
  - games/                   // 静态游戏资源（例如 /games/stack/index.html）
- .env.local.example         // 示例环境变量（NEXT_PUBLIC_AD_TAG）
- tsconfig.json              // 已配置别名 "@/..." 映射到 "src/*"

## 🔗 别名导入

已在 ['tsconfig.json](tsconfig.json:1) 配置：
- baseUrl: "."
- paths: { "@/*": ["./src/*"] }

内部导入使用 '@/...'，例如：
- import GameList from '@/components/GameList'
- import { games } from '@/data/games'

## ⚡️ 如何快速添加新游戏

步骤 1：准备静态文件
- 将游戏 HTML5 入口（index.html）放到 public/games/your-slug/index.html
- 可选：添加缩略图 public/games/your-slug/icon.png

步骤 2：在 ['src/data/games.ts](src/data/games.ts:1) 中新增一条 Game
- Game 接口字段：
  - slug: string            // URL 标识（唯一），如 'stack'
  - title: string           // 展示名称
  - url: string             // 入口路径，如 '/games/stack/index.html'
  - description?: string    // 可选描述
  - hasWalkthrough: boolean // 是否存在 Walkthrough（攻略/演示）
  - walkthroughGameId?: string // Walkthrough 的 gameid（hasWalkthrough=true 时可配置）
  - thumbnail?: string      // 可选缩略图路径（建议 public/games/slug/icon.png）
- 示例：
  ```ts
  export const games: Game[] = [
    {
      id: 'stack',
      slug: 'stack',
      title: 'Stack',
      url: '/games/stack/index.html',
      description: 'Stack blocks as high as you can in this fast-paced arcade game.',
      hasWalkthrough: false,
      thumbnail: '/games/stack/icon.png'
    },
    {
      slug: 'your-slug',
      title: 'Your Game',
      url: '/games/your-slug/index.html',
      description: 'Optional description...',
      hasWalkthrough: true,
      walkthroughGameId: 'external-walkthrough-id',
      thumbnail: '/games/your-slug/icon.png'
    }
  ]
  ```

步骤 3：本地验证
```bash
npm run dev
```
- 首页应展示新游戏卡片（来自 ['src/components/GameList.tsx](src/components/GameList.tsx:1)）
- 点击卡片跳转 /game/your-slug，详情页 iframe 读取 game.url 并正常加载
- 如 hasWalkthrough=true 且配置了 walkthroughGameId，可按需在详情页加入 WalkthroughEmbed（见下节）

步骤 4：提交与部署
```bash
git add .
git commit -m "feat: add new game your-slug"
git push
```
- 使用 Vercel 的话会自动触发构建与部署

## 🧩 Walkthrough 嵌入

组件：['src/components/WalkthroughEmbed.tsx](src/components/WalkthroughEmbed.tsx:1)
- Props:
  - gameid: string
  - width?: number | string
  - height?: number | string
  - color?: string
  - showAds?: boolean
- 组件会在客户端注入外部脚本（目前示例 URL 为占位：https://example.com/walkthrough-sdk.js），请替换为真实地址并按提供的 API 初始化

在 ['src/app/game/[slug]/page.tsx](src/app/game/[slug]/page.tsx:1) 中按需渲染：
```tsx
{game.hasWalkthrough && game.walkthroughGameId && (
  <section className="mt-10">
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Walkthrough</h2>
    <WalkthroughEmbed
      gameid={game.walkthroughGameId}
      width="100%"
      height={360}
      color="#2563eb"
      showAds={true}
      className="border rounded-md overflow-hidden"
    />
  </section>
)}
```

## 📺 广告位配置（建议）

组件：['src/components/AdSlot.tsx](src/components/AdSlot.tsx:1)
- 建议从环境变量读取广告 tag：process.env.NEXT_PUBLIC_AD_TAG
- 若未配置则显示占位，便于本地开发

环境变量示例：['.env.local.example](.env.local.example:1)
```env
NEXT_PUBLIC_AD_TAG=your-ad-tag
```
将其复制为 .env.local 并填写真实值（.env.local 默认不会提交到 Git）

## 🔎 SEO 结构化数据（可选）

组件：['src/components/StructuredData.tsx](src/components/StructuredData.tsx:1)
- 可用于输出 JSON-LD（游戏、面包屑等）
- 按需调用 generateGameSchema / generateBreadcrumbSchema

## 🤝 贡献与规范

- TypeScript 严格模式
- 导入路径统一使用 '@/...'
- 优先复用通用组件：GameList、GameCard、WalkthroughEmbed、AdSlot 等
- PR 请描述清晰变更内容，必要时附截图或录屏

## 📄 许可证

MIT License - 详见 ['LICENSE](LICENSE:1)
