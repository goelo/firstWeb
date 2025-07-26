export interface Game {
  id: string
  title: string
  slug: string
  description: string
  instructions?: string
  thumbnail: string
  gameUrl: string
  category: string
  rating: number
  plays: number
  dateAdded: string
  tags: string[]
}

export const games: Game[] = [
  {
    id: '1',
    title: '2048 Pokemon',
    slug: '2048-pokemon',
    description: 'Combine Pokemon tiles to reach the legendary Pokemon! A fun twist on the classic 2048 game featuring your favorite Pokemon characters. Swipe to move tiles and combine identical Pokemon to evolve them into more powerful forms.',
    instructions: 'Use arrow keys or swipe to move tiles. Combine identical Pokemon to evolve them. Try to reach the legendary Pokemon!',
    thumbnail: 'https://img.gamemonetize.com/2048-pokemon/300x200.jpg',
    gameUrl: 'https://html5.gamemonetize.com/2048pokemon/',
    category: 'Puzzle',
    rating: 4.5,
    plays: 15420,
    dateAdded: '2025-01-15',
    tags: ['pokemon', '2048', 'puzzle', 'matching']
  },
  {
    id: '2',
    title: 'Subway Surfers Online',
    slug: 'subway-surfers-online',
    description: 'Run as far as you can in this endless running adventure! Dodge trains, collect coins, and unlock new characters in this exciting HTML5 version of the popular mobile game.',
    instructions: 'Use arrow keys to move left/right, jump, and slide. Collect coins and power-ups while avoiding obstacles.',
    thumbnail: 'https://img.gamemonetize.com/subway-surfers/300x200.jpg',
    gameUrl: 'https://html5.gamemonetize.com/subwaysurfers/',
    category: 'Action',
    rating: 4.7,
    plays: 28350,
    dateAdded: '2025-01-10',
    tags: ['running', 'endless', 'action', 'adventure']
  },
  {
    id: '3',
    title: 'Among Us Online',
    slug: 'among-us-online',
    description: 'Play the popular social deduction game online! Complete tasks while trying to identify the impostor among your crewmates. Perfect for playing with friends or meeting new players.',
    instructions: 'Complete tasks around the spaceship. Vote out suspicious players during meetings. Impostors must eliminate crewmates without being caught.',
    thumbnail: 'https://img.gamemonetize.com/among-us/300x200.jpg',
    gameUrl: 'https://html5.gamemonetize.com/amongus/',
    category: 'Strategy',
    rating: 4.6,
    plays: 32100,
    dateAdded: '2025-01-08',
    tags: ['multiplayer', 'social', 'strategy', 'deduction']
  },
  {
    id: '4',
    title: 'Slope Game',
    slug: 'slope-game',
    description: 'Control a ball rolling down a steep slope in this fast-paced 3D running game. Avoid obstacles and try to survive as long as possible while the speed increases!',
    instructions: 'Use A/D keys or left/right arrows to steer the ball. Avoid red blocks and falling off the edge. The game gets faster as you progress!',
    thumbnail: 'https://img.gamemonetize.com/slope/300x200.jpg',
    gameUrl: 'https://html5.gamemonetize.com/slope/',
    category: 'Arcade',
    rating: 4.4,
    plays: 19800,
    dateAdded: '2025-01-12',
    tags: ['3d', 'running', 'arcade', 'skill']
  },
  {
    id: '5',
    title: 'Cookie Clicker',
    slug: 'cookie-clicker',
    description: 'Click cookies to earn points and buy upgrades in this addictive idle game. Build your cookie empire with grandmas, farms, and factories to automate cookie production!',
    instructions: 'Click the big cookie to earn cookies. Buy upgrades and buildings to increase your cookie production rate. Unlock achievements and prestige levels!',
    thumbnail: 'https://img.gamemonetize.com/cookie-clicker/300x200.jpg',
    gameUrl: 'https://html5.gamemonetize.com/cookieclicker/',
    category: 'Idle',
    rating: 4.3,
    plays: 25600,
    dateAdded: '2025-01-05',
    tags: ['idle', 'clicker', 'incremental', 'cookies']
  },
  {
    id: '6',
    title: 'Tetris Classic',
    slug: 'tetris-classic',
    description: 'Play the timeless puzzle game that started it all! Arrange falling blocks to create complete lines and clear them from the board. How high can you score?',
    instructions: 'Use arrow keys to move and rotate falling pieces. Create complete horizontal lines to clear them. Game ends when pieces reach the top.',
    thumbnail: 'https://img.gamemonetize.com/tetris/300x200.jpg',
    gameUrl: 'https://html5.gamemonetize.com/tetris/',
    category: 'Puzzle',
    rating: 4.8,
    plays: 41200,
    dateAdded: '2025-01-01',
    tags: ['tetris', 'puzzle', 'classic', 'blocks']
  },
  {
    id: '7',
    title: 'Basketball Stars',
    slug: 'basketball-stars',
    description: 'Shoot hoops and become a basketball legend! Play against AI or challenge friends in this exciting basketball game with realistic physics and smooth controls.',
    instructions: 'Use mouse to aim and click to shoot. Time your shots perfectly to score. Play different game modes including tournament and quick match.',
    thumbnail: 'https://img.gamemonetize.com/basketball-stars/300x200.jpg',
    gameUrl: 'https://html5.gamemonetize.com/basketballstars/',
    category: 'Sports',
    rating: 4.2,
    plays: 18900,
    dateAdded: '2025-01-14',
    tags: ['basketball', 'sports', 'shooting', 'multiplayer']
  },
  {
    id: '8',
    title: 'Car Racing 3D',
    slug: 'car-racing-3d',
    description: 'Experience high-speed racing in stunning 3D graphics! Choose your car, customize it, and race through challenging tracks. Compete against other racers to become the champion!',
    instructions: 'Use WASD or arrow keys to control your car. Press Space for handbrake. Avoid crashes and finish first to win races and unlock new cars.',
    thumbnail: 'https://img.gamemonetize.com/car-racing-3d/300x200.jpg',
    gameUrl: 'https://html5.gamemonetize.com/carracing3d/',
    category: 'Racing',
    rating: 4.5,
    plays: 22300,
    dateAdded: '2025-01-11',
    tags: ['racing', '3d', 'cars', 'speed']
  }
]
