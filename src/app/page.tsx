import GameList from '@/components/GameList'

/**
 * MVP 首页（瘦身版）
 * - 目标：让用户快速「看 → 点 → 玩」，并为后续变现/引流留位
 * - 去除：冗余的分类 Chip、空的“Latest updates”、复杂导航/说明等
 * - 保留：品牌 + 简短 tagline、清晰的「All Games」列表
 */
export default function HomePage() {
  return (
    <>
      {/* Main: 核心内容区域 */}
      <main className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* 标题：尽量简洁，去掉“Latest updates”等未启用元素 */}
          <h1 className="text-2xl font-semibold text-slate-900 mb-6 text-center">All Games</h1>

          {/* 游戏列表（核心）：
             - 仅展示 GameCard 网格，点击即可跳转详情并开始游戏
             - Walkthrough 标识已在 Card 内部按数据条件显示
          */}
          <GameList />
        </div>
      </main>

      {/* Footer 提示：
          - 最小信任链（Privacy / Terms / Contact）在全局 Footer 组件中已有
          - 若需进一步瘦身，可在 Footer 中隐藏不必要条目（保留法务 & 联系方式）
      */}
    </>
  )
}
