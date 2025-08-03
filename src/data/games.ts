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
    id: 'stack',
    slug: 'stack',
    title: 'Stack',
    url: 'https://html5.gamemonetize.games/9mojqu02upm0qrpmlio7ngcgy4nweqtn/',
    description: 'Stack blocks as high as you can in this fast-paced arcade game.',
    hasWalkthrough: true,
    walkthroughGameId: '9mojqu02upm0qrpmlio7ngcgy4nweqtn',
    thumbnail: '/games/stack/icon.jpg'
  },
  // 在此添加更多游戏
]
