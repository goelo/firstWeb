import { notFound } from 'next/navigation'
import { games } from '@/data/games'
import GameCard from '@/components/GameCard'
import type { Metadata } from 'next'

interface CategoryPageProps {
  params: Promise<{
    category: string
  }>
}

const categories = [
  'action', 'puzzle', 'strategy', 'sports', 'racing', 'adventure', 'arcade', 'idle'
]

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categoryParam } = await params
  const category = categoryParam.toLowerCase()
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1)
  
  if (!categories.includes(category)) {
    return {
      title: 'Category Not Found',
    }
  }

  return {
    title: `${categoryName} Games - Play Free Online | PlayIO Today`,
    description: `Play the best ${categoryName.toLowerCase()} games online for free. No download required. Instant play on any device.`,
    keywords: `${categoryName.toLowerCase()} games, online ${categoryName.toLowerCase()}, free ${categoryName.toLowerCase()} games, HTML5 ${categoryName.toLowerCase()}`,
  }
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }))
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categoryParam } = await params
  const category = categoryParam.toLowerCase()
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1)
  
  if (!categories.includes(category)) {
    notFound()
  }

  const categoryGames = games.filter(game => 
    game.category.toLowerCase() === category
  )

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'action': return '⚔️'
      case 'puzzle': return '🧩'
      case 'strategy': return '🎯'
      case 'sports': return '⚽'
      case 'racing': return '🏎️'
      case 'adventure': return '🗺️'
      case 'arcade': return '🕹️'
      case 'idle': return '⏰'
      default: return '🎮'
    }
  }

  const getCategoryDescription = (cat: string) => {
    switch (cat) {
      case 'action':
        return 'Fast-paced games that test your reflexes and skills. Battle enemies, overcome obstacles, and experience thrilling adventures.'
      case 'puzzle':
        return 'Challenge your mind with brain-teasing puzzles. From classic match-3 games to complex logic puzzles.'
      case 'strategy':
        return 'Plan your moves carefully in these strategic games. Build empires, command armies, and outsmart your opponents.'
      case 'sports':
        return 'Experience the thrill of sports without leaving your chair. Play football, basketball, tennis, and more.'
      case 'racing':
        return 'Feel the adrenaline rush of high-speed racing. Drive cars, bikes, and other vehicles in exciting races.'
      case 'adventure':
        return 'Embark on epic journeys and explore mysterious worlds. Discover treasures and uncover hidden secrets.'
      case 'arcade':
        return 'Classic arcade-style games that are easy to learn but hard to master. Perfect for quick gaming sessions.'
      case 'idle':
        return 'Relaxing games that progress even when you\'re not actively playing. Perfect for multitasking.'
      default:
        return 'Discover amazing games in this category.'
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li><a href="/" className="hover:text-primary-600">Home</a></li>
          <li>/</li>
          <li className="text-gray-900">{categoryName} Games</li>
        </ol>
      </nav>

      {/* Category Header */}
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">{getCategoryIcon(category)}</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {categoryName} Games
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
          {getCategoryDescription(category)}
        </p>
        <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
          <span>{categoryGames.length} games available</span>
          <span>•</span>
          <span>Free to play</span>
          <span>•</span>
          <span>No download required</span>
        </div>
      </div>

      {/* Games Grid */}
      {categoryGames.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categoryGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🎮</div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            No games found in this category
          </h2>
          <p className="text-gray-600 mb-6">
            We're working on adding more {categoryName.toLowerCase()} games. Check back soon!
          </p>
          <a
            href="/"
            className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Browse All Games
          </a>
        </div>
      )}

      {/* Other Categories */}
      <div className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Explore Other Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories
            .filter(cat => cat !== category)
            .map((cat) => {
              const catName = cat.charAt(0).toUpperCase() + cat.slice(1)
              const catGames = games.filter(game => game.category.toLowerCase() === cat)
              
              return (
                <a
                  key={cat}
                  href={`/category/${cat}`}
                  className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow text-center"
                >
                  <div className="text-3xl mb-2">{getCategoryIcon(cat)}</div>
                  <h3 className="font-semibold text-gray-900">{catName}</h3>
                  <p className="text-sm text-gray-600">{catGames.length} games</p>
                </a>
              )
            })}
        </div>
      </div>
    </div>
  )
}
