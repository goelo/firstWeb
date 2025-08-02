import { notFound } from 'next/navigation'
import { games } from '@/data/games'
import GameCard from '@/components/GameCard'
import AdSlot from '@/components/AdSlot'
import StructuredData, { generateGameSchema, generateBreadcrumbSchema } from '@/components/StructuredData'
import type { Metadata } from 'next'

interface GamePageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const { slug } = await params
  const game = games.find(g => g.slug === slug)
  
  if (!game) {
    return {
      title: 'Game Not Found',
    }
  }

  return {
    title: `${game.title} - Play Online Free | PlayIO Today`,
    description: game.description,
    keywords: `${game.title}, ${game.category}, HTML5 game, online game, free game`,
    openGraph: {
      title: `${game.title} - Play Online Free`,
      description: game.description,
      images: [game.thumbnail],
    },
  }
}

export async function generateStaticParams() {
  return games.map((game) => ({
    slug: game.slug,
  }))
}

export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params
  const game = games.find(g => g.slug === slug)
  
  if (!game) {
    notFound()
  }

  const relatedGames = games
    .filter(g => g.category === game.category && g.id !== game.id)
    .slice(0, 4)

  const breadcrumbItems = [
    { name: 'Home', url: 'https://playio-today.vercel.app' },
    { name: game.category, url: `https://playio-today.vercel.app/category/${game.category.toLowerCase()}` },
    { name: game.title, url: `https://playio-today.vercel.app/game/${game.slug}` }
  ]

  return (
    <>
      <StructuredData data={generateGameSchema(game)} />
      <StructuredData data={generateBreadcrumbSchema(breadcrumbItems)} />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li><a href="/" className="hover:text-primary-600">Home</a></li>
          <li>/</li>
          <li><a href={`/category/${game.category.toLowerCase()}`} className="hover:text-primary-600">{game.category}</a></li>
          <li>/</li>
          <li className="text-gray-900">{game.title}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Game Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {game.title}
          </h1>

          {/* Game Stats */}
          <div className="flex items-center space-x-6 mb-6 text-sm text-gray-600">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {game.rating}/5
            </span>
            <span>Category: {game.category}</span>
            <span>Plays: {game.plays.toLocaleString()}</span>
          </div>

          {/* Game Frame */}
          <div className="bg-gray-100 rounded-lg p-4 mb-6">
            <div className="aspect-video bg-white rounded-lg flex items-center justify-center">
              <iframe
                src={game.gameUrl}
                className="w-full h-full game-iframe"
                allowFullScreen
                title={game.title}
              />
            </div>
          </div>

          {/* Game Description */}
          <div className="bg-white rounded-lg p-6 shadow-sm border mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">About {game.title}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {game.description}
            </p>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How to Play</h3>
            <p className="text-gray-700 leading-relaxed">
              {game.instructions || `Use your mouse and keyboard to play ${game.title}. Follow the on-screen instructions to get started.`}
            </p>
          </div>

          {/* Related Games */}
          {relatedGames.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                More {game.category} Games
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedGames.map((relatedGame) => (
                  <GameCard key={relatedGame.id} game={relatedGame} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Ad Slot */}
          <div className="mb-6">
            <AdSlot
              id="game-sidebar"
              size="sidebar"
              placeholder="Advertisement"
              className="rounded-lg"
            />
          </div>

          {/* Game Info */}
          <div className="bg-white rounded-lg p-6 shadow-sm border mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">Game Info</h3>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-gray-600">Category:</dt>
                <dd className="text-gray-900">{game.category}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-600">Rating:</dt>
                <dd className="text-gray-900">{game.rating}/5</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-600">Plays:</dt>
                <dd className="text-gray-900">{game.plays.toLocaleString()}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-600">Added:</dt>
                <dd className="text-gray-900">{new Date(game.dateAdded).toLocaleDateString()}</dd>
              </div>
            </dl>
          </div>

          {/* Popular Games */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h3 className="font-semibold text-gray-900 mb-4">Popular Games</h3>
            <div className="space-y-3">
              {games.slice(0, 5).map((popularGame) => (
                <a
                  key={popularGame.id}
                  href={`/game/${popularGame.slug}`}
                  className="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded-lg transition-colors"
                >
                  <img
                    src={popularGame.thumbnail}
                    alt={popularGame.title}
                    className="w-12 h-12 rounded object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {popularGame.title}
                    </p>
                    <p className="text-xs text-gray-500">
                      {popularGame.plays.toLocaleString()} plays
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
