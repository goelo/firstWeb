/**
 * src/app/game/[slug]/page.tsx
 * Next.js app router: params is async-like, must await before using.
 */
import { notFound } from 'next/navigation'
import { games, type Game } from '@/data/games'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return games.map((g: Game) => ({ slug: g.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const game = games.find((g: Game) => g.slug === slug)
  return {
    title: game ? `${game.title} | Play I/O Today` : 'Game Not Found',
  }
}

export default async function GamePage({ params }: PageProps) {
  const { slug } = await params
  const game = games.find((g: Game) => g.slug === slug)
  if (!game) notFound()

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">{game.title}</h1>
      <div className="aspect-video border rounded-lg overflow-hidden bg-black">
        <iframe
          src={game.url}
          title={game.title}
          className="w-full h-full"
          allowFullScreen
        />
      </div>
      {game.description && (
        <p className="mt-6 text-gray-700">{game.description}</p>
      )}
    </main>
  )
}
