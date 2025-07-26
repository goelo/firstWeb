import { MetadataRoute } from 'next'
import { games } from '@/data/games'
import { articles } from '@/data/articles'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://playio-today.vercel.app'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
  ]

  // Game pages
  const gamePages = games.map((game) => ({
    url: `${baseUrl}/game/${game.slug}`,
    lastModified: new Date(game.dateAdded),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Article pages
  const articlePages = articles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Category pages
  const categories = ['action', 'puzzle', 'strategy', 'sports', 'racing', 'adventure', 'arcade', 'idle']
  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/category/${category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [
    ...staticPages,
    ...gamePages,
    ...articlePages,
    ...categoryPages,
  ]
}
