import GameList from '@/components/GameList'

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">All Games</h1>
      <GameList />
    </main>
  )
}
