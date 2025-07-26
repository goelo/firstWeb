import GameCard from '@/components/GameCard'
import ArticleCard from '@/components/ArticleCard'
import AdSlot from '@/components/AdSlot'
import StructuredData, { generateWebsiteSchema, generateOrganizationSchema } from '@/components/StructuredData'
import { games } from '@/data/games'
import { articles } from '@/data/articles'

export default function Home() {
  const featuredGames = games.slice(0, 8)
  const latestArticles = articles.slice(0, 3)

  return (
    <>
      <StructuredData data={generateWebsiteSchema()} />
      <StructuredData data={generateOrganizationSchema()} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Play HTML5 Games Instantly
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          No download. Free. Unblocked. Discover thousands of games across all categories.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm">
            🎮 Instant Play
          </span>
          <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm">
            📱 Mobile Friendly
          </span>
          <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm">
            🆓 100% Free
          </span>
          <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm">
            🚫 No Ads in Games
          </span>
        </div>
      </section>

      {/* Featured Games */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Featured Games</h2>
          <button className="text-primary-600 hover:text-primary-700 font-medium">
            View All →
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      {/* Ad Slot */}
      <section className="mb-12">
        <AdSlot
          id="home-banner"
          size="banner"
          placeholder="Advertisement Space"
          className="rounded-lg"
        />
      </section>

      {/* Latest Articles */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
          <button className="text-primary-600 hover:text-primary-700 font-medium">
            View All →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Action', icon: '⚔️', count: 150 },
            { name: 'Puzzle', icon: '🧩', count: 120 },
            { name: 'Strategy', icon: '🎯', count: 80 },
            { name: 'Sports', icon: '⚽', count: 60 },
            { name: 'Racing', icon: '🏎️', count: 45 },
            { name: 'Adventure', icon: '🗺️', count: 70 },
            { name: 'Arcade', icon: '🕹️', count: 90 },
            { name: 'Idle', icon: '⏰', count: 35 },
          ].map((category) => (
            <div
              key={category.name}
              className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow cursor-pointer border"
            >
              <div className="text-3xl mb-2">{category.icon}</div>
              <h3 className="font-semibold text-gray-900">{category.name}</h3>
              <p className="text-sm text-gray-600">{category.count} games</p>
            </div>
          ))}
        </div>
      </section>
      </div>
    </>
  )
}
