import Link from 'next/link'
import Image from 'next/image'
import { Game } from '@/data/games'

interface GameCardProps {
  game: Game
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <Link href={`/game/${game.slug}`} className="group">
      <div className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-all duration-200 overflow-hidden">
        {/* Game Thumbnail */}
        <div className="relative aspect-video bg-gray-100">
          <Image
            src={game.thumbnail}
            alt={game.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-200"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
            <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <svg className="w-6 h-6 text-primary-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
          
          {/* Category Badge */}
          <div className="absolute top-2 left-2">
            <span className="px-2 py-1 bg-white bg-opacity-90 text-xs font-medium text-gray-700 rounded">
              {game.category}
            </span>
          </div>
        </div>

        {/* Game Info */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-1">
            {game.title}
          </h3>
          
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {game.description}
          </p>
          
          {/* Game Stats */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center space-x-3">
              {/* Rating */}
              <div className="flex items-center">
                <svg className="w-3 h-3 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>{game.rating}</span>
              </div>
              
              {/* Play Count */}
              <div className="flex items-center">
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{game.plays.toLocaleString()}</span>
              </div>
            </div>
            
            {/* Date Added */}
            <span className="text-gray-400">
              {new Date(game.dateAdded).toLocaleDateString()}
            </span>
          </div>
          
          {/* Tags */}
          {game.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1">
              {game.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded"
                >
                  {tag}
                </span>
              ))}
              {game.tags.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded">
                  +{game.tags.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
