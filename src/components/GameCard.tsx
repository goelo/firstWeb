import Link from 'next/link'
import Image from 'next/image'
import { type Game } from '@/data/games'

interface GameCardProps {
  game: Game
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <Link href={`/game/${game.slug}`} className="group">
      <div className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-all duration-200 overflow-hidden">
        <div className="relative aspect-video bg-gray-100">
          {game.thumbnail ? (
            <Image
              src={game.thumbnail}
              alt={game.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-200"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              No Thumbnail
            </div>
          )}
          <div className="absolute top-2 left-2">
            <span className="px-2 py-1 bg-white bg-opacity-90 text-xs font-medium text-gray-700 rounded">
              {game.slug}
            </span>
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-1">
            {game.title}
          </h3>
          {game.description && (
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {game.description}
            </p>
          )}
          {game.hasWalkthrough && (
            <span className="inline-block text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 rounded px-2 py-0.5">
              Walkthrough Available
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
