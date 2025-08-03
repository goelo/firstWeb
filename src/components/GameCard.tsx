import Link from 'next/link'
import Image from 'next/image'
import { type Game } from '@/data/games'

interface GameCardProps {
  game: Game
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <Link href={`/game/${game.slug}`} className="group">
      <div className="bg-white rounded-lg shadow-sm border hover:shadow-lg transition-all duration-300 overflow-hidden hover:-translate-y-1">
        <div className="relative aspect-video bg-gray-100 overflow-hidden">
          {game.thumbnail ? (
            <Image
              src={game.thumbnail}
              alt={`${game.title} cover`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gradient-to-br from-gray-50 to-gray-100">
              <div className="text-center">
                <div className="text-2xl mb-2">🎮</div>
                <div className="text-sm">No Thumbnail</div>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <div className="absolute top-3 left-3 z-20">
            <span className="px-2 py-1 bg-white text-xs font-medium text-gray-700 rounded-md border border-white/20 transition-colors duration-300">
              {game.slug}
            </span>
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300 line-clamp-1 text-lg">
            {game.title}
          </h3>
          {game.description && (
            <p className="text-sm text-gray-600 mb-3 line-clamp-2 leading-relaxed">
              {game.description}
            </p>
          )}
          <div className="flex items-center justify-between mt-4">
            {game.hasWalkthrough && (
              <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-md border border-emerald-200">
                <span>▶</span>
                Walkthrough Available
              </span>
            )}
            <span className="text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Play →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
