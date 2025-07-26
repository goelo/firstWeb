import Link from 'next/link'
import Image from 'next/image'

const MDXComponents = {
  h1: ({ children, ...props }: any) => (
    <h1 className="text-4xl font-bold text-gray-900 mb-6" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: any) => (
    <h2 className="text-3xl font-semibold text-gray-900 mt-8 mb-4" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: any) => (
    <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: any) => (
    <h4 className="text-xl font-semibold text-gray-900 mt-4 mb-2" {...props}>
      {children}
    </h4>
  ),
  p: ({ children, ...props }: any) => (
    <p className="text-gray-700 mb-4 leading-relaxed" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }: any) => (
    <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: any) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: any) => (
    <li className="mb-1" {...props}>
      {children}
    </li>
  ),
  a: ({ href, children, ...props }: any) => {
    const isExternal = href?.startsWith('http')
    
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 hover:text-primary-700 underline"
          {...props}
        >
          {children}
        </a>
      )
    }
    
    return (
      <Link href={href} className="text-primary-600 hover:text-primary-700 underline" {...props}>
        {children}
      </Link>
    )
  },
  img: ({ src, alt, ...props }: any) => (
    <div className="my-6">
      <Image
        src={src}
        alt={alt}
        width={800}
        height={400}
        className="rounded-lg shadow-md"
        {...props}
      />
    </div>
  ),
  blockquote: ({ children, ...props }: any) => (
    <blockquote className="border-l-4 border-primary-500 pl-4 my-6 italic text-gray-600" {...props}>
      {children}
    </blockquote>
  ),
  code: ({ children, ...props }: any) => (
    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800" {...props}>
      {children}
    </code>
  ),
  pre: ({ children, ...props }: any) => (
    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6" {...props}>
      {children}
    </pre>
  ),
  strong: ({ children, ...props }: any) => (
    <strong className="font-semibold text-gray-900" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }: any) => (
    <em className="italic" {...props}>
      {children}
    </em>
  ),
  hr: (props: any) => (
    <hr className="border-gray-300 my-8" {...props} />
  ),
  table: ({ children, ...props }: any) => (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full divide-y divide-gray-200" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }: any) => (
    <thead className="bg-gray-50" {...props}>
      {children}
    </thead>
  ),
  tbody: ({ children, ...props }: any) => (
    <tbody className="bg-white divide-y divide-gray-200" {...props}>
      {children}
    </tbody>
  ),
  th: ({ children, ...props }: any) => (
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }: any) => (
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900" {...props}>
      {children}
    </td>
  ),
}

export default MDXComponents
