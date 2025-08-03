export interface Game {
  id?: string
  slug: string
  title: string
  url: string
  description?: string
  hasWalkthrough: boolean
  walkthroughGameId?: string
  thumbnail?: string
}

export const games: Game[] = [
  {
    id: '9mojqu02upm0qrpmlio7ngcgy4nweqtn',
    slug: 'Puzzle',
    title: 'Kitty Merge Tycoon',
    url: 'https://html5.gamemonetize.games/9mojqu02upm0qrpmlio7ngcgy4nweqtn/',
    description: 'Tap to merge matching kittens and unlock rarer, cuter breeds. Grow your collection into a legendary feline empire — simple to start, impossible to put down.',
    hasWalkthrough: true,
    walkthroughGameId: '9mojqu02upm0qrpmlio7ngcgy4nweqtn',
    thumbnail: '/games/stack/icon.jpg'
  },
  // 在此添加更多游戏
]
