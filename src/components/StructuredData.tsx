import React from 'react'

type StructuredDataProps = {
  data: Record<string, any>
}

/**
 * Minimal JSON-LD output component
 */
export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

/**
 * Generate JSON-LD for a single Game
 */
export function generateGameSchema(game: {
  title: string
  description: string
  thumbnail: string
  gameUrl: string
  category: string
  rating: number
  plays: number
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: game.title,
    description: game.description,
    image: game.thumbnail,
    url: game.gameUrl,
    genre: game.category,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: game.rating,
      ratingCount: Math.max(1, Math.round(game.plays / 20)),
    },
  }
}

/**
 * Generate JSON-LD for Breadcrumbs
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}