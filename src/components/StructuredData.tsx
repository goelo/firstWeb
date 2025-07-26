interface StructuredDataProps {
  data: any
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Helper functions to generate structured data
export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "PlayIO Today",
  "description": "Play HTML5 games instantly. No download. Free. Unblocked.",
  "url": "https://playio-today.vercel.app",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://playio-today.vercel.app/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
})

export const generateGameSchema = (game: any) => ({
  "@context": "https://schema.org",
  "@type": "Game",
  "name": game.title,
  "description": game.description,
  "url": `https://playio-today.vercel.app/game/${game.slug}`,
  "image": game.thumbnail,
  "genre": game.category,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": game.rating,
    "ratingCount": Math.floor(game.plays / 10),
    "bestRating": 5,
    "worstRating": 1
  },
  "interactionStatistic": {
    "@type": "InteractionCounter",
    "interactionType": "https://schema.org/PlayAction",
    "userInteractionCount": game.plays
  },
  "gamePlatform": "Web Browser",
  "applicationCategory": "Game",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
})

export const generateArticleSchema = (article: any) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.excerpt,
  "url": `https://playio-today.vercel.app/blog/${article.slug}`,
  "datePublished": article.publishedAt,
  "dateModified": article.publishedAt,
  "author": {
    "@type": "Organization",
    "name": "PlayIO Today",
    "url": "https://playio-today.vercel.app"
  },
  "publisher": {
    "@type": "Organization",
    "name": "PlayIO Today",
    "url": "https://playio-today.vercel.app",
    "logo": {
      "@type": "ImageObject",
      "url": "https://playio-today.vercel.app/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://playio-today.vercel.app/blog/${article.slug}`
  },
  "articleSection": article.category,
  "keywords": article.tags.join(", "),
  "wordCount": article.content.split(' ').length,
  "timeRequired": `PT${article.readTime}M`
})

export const generateBreadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
})

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "PlayIO Today",
  "description": "Play HTML5 games instantly. No download. Free. Unblocked.",
  "url": "https://playio-today.vercel.app",
  "logo": "https://playio-today.vercel.app/logo.png",
  "sameAs": [
    "https://twitter.com/playiotoday",
    "https://facebook.com/playiotoday"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "contact@playiotoday.com"
  }
})
