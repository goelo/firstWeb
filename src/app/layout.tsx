import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PlayIO Today - Play HTML5 Games Instantly',
  description: 'Play HTML5 games instantly. No download. Free. Unblocked. Discover thousands of games across all categories.',
  keywords: 'HTML5 games, online games, free games, unblocked games, browser games, instant play',
  authors: [{ name: 'PlayIO Today' }],
  creator: 'PlayIO Today',
  publisher: 'PlayIO Today',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://playio-today.vercel.app',
    siteName: 'PlayIO Today',
    title: 'PlayIO Today - Play HTML5 Games Instantly',
    description: 'Play HTML5 games instantly. No download. Free. Unblocked.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PlayIO Today - Play HTML5 Games Instantly',
    description: 'Play HTML5 games instantly. No download. Free. Unblocked.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `,
          }}
        />

        {/* Meta tags for SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="canonical" href="https://playio-today.vercel.app" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
