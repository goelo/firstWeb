export type Game = {
  id: string
  slug: string
  title: string
  description: string
  category: string
  rating: number
  plays: number
  thumbnail: string
  gameUrl: string
  dateAdded: string
  tags: string[]
  instructions?: string
}

export const games: Game[] = [
  {
    id: 'stack',
    slug: 'stack',
    title: 'Stack',
    description: 'Stack blocks as high as you can in this fast-paced arcade game.',
    category: 'Arcade',
    rating: 4.4,
    plays: 128450,
    thumbnail: '/games/stack/icon.png',
    gameUrl: '/games/stack/index.html',
    dateAdded: new Date('2024-06-01').toISOString(),
    tags: ['arcade', 'stack', 'reflex'],
    instructions: 'Tap/click to stack blocks perfectly. Time your taps to align the blocks.'
  }
]