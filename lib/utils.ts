import readingTime from 'reading-time'
import { bundleMDX } from 'mdx-bundler'
import type { BundlerResult } from '@lib/types'

export async function bundler(source: string, slug: string): Promise<BundlerResult> {
  const { code, frontmatter } = await bundleMDX(source, {
    xdmOptions(options) {
      options.remarkPlugins = [...(options?.remarkPlugins ?? [])];
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
      ]
      return options
    }
  })

  return {
    code,
    frontmatter: {
      wordCount: source.split(/\s+/gu).length,
      readingTime: readingTime(source),
      slug: slug.replace('.mdx', ''),
      excerpt: truncate(frontmatter.summary, 180),
      ...frontmatter,
    },
  }
}

function truncate(input: string, size: number) {
  if (input.length > size) {
     return input.substring(0, size) + '...'
  }
  return input
};