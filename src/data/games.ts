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
    url: '/games/stack/index.html',
    description: 'Stack blocks as high as you can in this fast-paced arcade game.',
    hasWalkthrough: false,
    thumbnail: '/games/stack/icon.png'
  },
  // 在此添加更多游戏
]
