import { join } from 'path'
import { readdirSync, readFileSync } from 'fs'
import { bundler } from '@lib/utils'

export async function getWorkBySlug(slug: string) {
  // Getting fullpath to filename
  const workContentDirectory = join(process.cwd(), 'content/projects', `${slug}.mdx`)

  // Getting content from file
  const source = readFileSync(workContentDirectory, 'utf-8')
  return await bundler(source, slug)
}

export function getPaths() {
  const slugs = readdirSync(join(process.cwd(), 'content/projects'))

  return slugs.map(slug => ({
    params: {
      slug: slug.replace('.mdx', '')
    }
  }))
}