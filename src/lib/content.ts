import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesDirectory = path.join(process.cwd(), 'src/content/articles')

export interface ArticleFrontmatter {
  title: string
  excerpt: string
  category: string
  publishedAt: string
  readTime: number
  tags: string[]
}

export interface ArticleData extends ArticleFrontmatter {
  slug: string
  content: string
}

export function getAllArticles(): ArticleData[] {
  try {
    // Check if articles directory exists
    if (!fs.existsSync(articlesDirectory)) {
      return []
    }

    const fileNames = fs.readdirSync(articlesDirectory)
    const articles = fileNames
      .filter(name => name.endsWith('.mdx'))
      .map(name => {
        const slug = name.replace(/\.mdx$/, '')
        const fullPath = path.join(articlesDirectory, name)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        return {
          slug,
          content,
          ...(data as ArticleFrontmatter),
        }
      })
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

    return articles
  } catch (error) {
    console.error('Error reading articles:', error)
    return []
  }
}

export function getArticleBySlug(slug: string): ArticleData | null {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.mdx`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      content,
      ...(data as ArticleFrontmatter),
    }
  } catch (error) {
    console.error(`Error reading article ${slug}:`, error)
    return null
  }
}

export function getArticlesByCategory(category: string): ArticleData[] {
  const articles = getAllArticles()
  return articles.filter(article => 
    article.category.toLowerCase() === category.toLowerCase()
  )
}

export function getArticlesByTag(tag: string): ArticleData[] {
  const articles = getAllArticles()
  return articles.filter(article => 
    article.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  )
}

export function getAllCategories(): string[] {
  const articles = getAllArticles()
  const categories = new Set(articles.map(article => article.category))
  return Array.from(categories).sort()
}

export function getAllTags(): string[] {
  const articles = getAllArticles()
  const tags = new Set(articles.flatMap(article => article.tags))
  return Array.from(tags).sort()
}
