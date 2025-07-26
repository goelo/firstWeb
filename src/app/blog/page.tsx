import ArticleCard from '@/components/ArticleCard'
import { articles } from '@/data/articles'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gaming Blog - Tips, Reviews & News | PlayIO Today',
  description: 'Read the latest gaming articles, tips, reviews, and news. Discover new games and improve your gaming skills.',
  keywords: 'gaming blog, game reviews, gaming tips, game news, HTML5 games',
}

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Gaming Blog</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover the latest gaming tips, reviews, and news. Stay updated with the best HTML5 games and gaming trends.
        </p>
      </div>

      {/* Featured Article */}
      {articles.length > 0 && (
        <div className="mb-12">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg p-8">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full mb-4">
                Featured
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                <a href={`/blog/${articles[0].slug}`} className="hover:text-primary-600">
                  {articles[0].title}
                </a>
              </h2>
              <p className="text-gray-700 mb-4 text-lg">
                {articles[0].excerpt}
              </p>
              <div className="flex items-center text-sm text-gray-600">
                <span>{new Date(articles[0].publishedAt).toLocaleDateString()}</span>
                <span className="mx-2">•</span>
                <span>{articles[0].readTime} min read</span>
                <span className="mx-2">•</span>
                <span className="px-2 py-1 bg-white rounded text-primary-600 font-medium">
                  {articles[0].category}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {articles.slice(1).map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {/* Categories */}
      <div className="bg-white rounded-lg p-8 shadow-sm border">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Reviews', count: 12, color: 'bg-blue-100 text-blue-800' },
            { name: 'Tips & Guides', count: 8, color: 'bg-green-100 text-green-800' },
            { name: 'News', count: 15, color: 'bg-purple-100 text-purple-800' },
            { name: 'Trending', count: 6, color: 'bg-red-100 text-red-800' },
          ].map((category) => (
            <a
              key={category.name}
              href={`/blog/category/${category.name.toLowerCase().replace(' & ', '-')}`}
              className="block p-4 rounded-lg border hover:shadow-md transition-shadow"
            >
              <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-2 ${category.color}`}>
                {category.count} articles
              </div>
              <h3 className="font-semibold text-gray-900">{category.name}</h3>
            </a>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="mt-12 bg-primary-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Get the latest gaming articles and news delivered to your inbox weekly.
        </p>
        <form className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}
