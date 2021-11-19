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
      slug,
      ...frontmatter,
    },
  }
}