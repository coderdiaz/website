import { join } from 'path'
import { readdirSync, readFileSync } from 'fs'
import { bundler } from '@lib/utils'

type PathDefinition = {
  params: {
    slug: string
  }
}

export async function getPostBySlug(slug: string) {
  // Getting fullpath to filename
  const postsContentDirectory = join(process.cwd(), 'content/posts', `${slug}.mdx`)

  // Getting content from file
  const source = readFileSync(postsContentDirectory, 'utf-8')
  return await bundler(source, slug)
}

export function getPaths() {
  const slugs = readdirSync(join(process.cwd(), 'content/posts'))

  return slugs.map(slug => ({
    params: {
      slug: slug.replace('.mdx', '')
    }
  }))
}