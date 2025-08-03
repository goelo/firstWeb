import Link from 'next/link'

/**
 * MVP Header - 精简版
 * 只保留品牌logo和简短tagline，移除搜索和分类功能以简化UI
 * 当游戏数量增加时可以重新启用这些功能
 */
export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center mb-2">
            <div className="text-3xl md:text-4xl font-bold text-primary-600">
              Play I/O
            </div>
          </Link>
          {/* Tagline */}
          <p className="text-sm text-slate-600 text-center">
            Play HTML5 games today. No download. Free. Unblocked.
          </p>
        </div>
      </div>
    </header>
  )
}
