import { games as defaultGames, type Game } from '@/data/games'
import GameCard from '@/components/GameCard'

interface GameListProps {
  games?: Game[]
  className?: string
}

export default function GameList({ games = defaultGames, className = '' }: GameListProps) {
  // 根据游戏数量调整布局
  const getGridClasses = () => {
    if (games.length === 1) {
      // 单个游戏：居中显示，限制最大宽度
      return "flex justify-center"
    } else if (games.length <= 3) {
      // 2-3个游戏：居中显示网格
      return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
    } else {
      // 4个或更多游戏：标准网格布局
      return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    }
  }

  return (
    <section className={`w-full ${className}`}>
      <div className={getGridClasses()}>
        {games.map((game) => (
          <div key={game.slug} className={games.length === 1 ? "w-full max-w-sm" : ""}>
            <GameCard game={game} />
          </div>
        ))}
      </div>
    </section>
  )
}