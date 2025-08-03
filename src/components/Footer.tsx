import Link from 'next/link'

/**
 * MVP Footer - 精简版
 * 只保留核心的法务链接和联系方式，移除冗余的导航链接
 */
export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* 单列布局，简化结构 */}
        <div className="flex flex-col items-center space-y-4">
          {/* Brand */}
          <Link href="/" className="text-xl font-bold text-primary-600">
            PlayIO Today
          </Link>

          {/* 简短tagline */}
          <p className="text-gray-600 text-sm text-center">
            Play HTML5 games instantly. No download. Free. Unblocked.
          </p>

          {/* 核心链接 - 水平排列 */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/" className="text-gray-600 hover:text-primary-600">
              Home
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-primary-600">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-primary-600">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary-600">
              Contact
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-xs text-center">
            © 2025 PlayIO Today. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
