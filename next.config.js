/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    mdxRs: true,
  },
  images: {
    domains: ['img.gamemonetize.com', 'img.gamedistribution.com', 'images.crazygames.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = withMDX(nextConfig)
