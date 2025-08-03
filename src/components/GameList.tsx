import { games as defaultGames, type Game } from '@/data/games'
import GameCard from '@/components/GameCard'

interface GameListProps {
  games?: Game[]
  className?: string
}

export default function GameList({ games = defaultGames, className = '' }: GameListProps) {
  return (
    <section className={`w-full ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <GameCard key={game.slug} game={game} />
        ))}
      </div>
    </section>
  )
}