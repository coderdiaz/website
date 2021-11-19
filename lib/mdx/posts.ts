import { join } from 'path'
import { readFileSync } from 'fs'
import { bundler } from '@lib/utils'

export async function getPostBySlug(slug: string) {
  // Getting fullpath to filename
  const postsContentDirectory = join(process.cwd(), 'content/posts', `${slug}.mdx`)

  // Getting content from file
  const source = readFileSync(postsContentDirectory, 'utf-8')
  return await bundler(source, slug)
}
