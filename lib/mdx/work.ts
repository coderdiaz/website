import { join } from 'path'
import { readFileSync } from 'fs'
import { bundler } from '@lib/utils'

export async function getWorkBySlug(slug: string) {
  // Getting fullpath to filename
  const workContentDirectory = join(process.cwd(), 'content/work', `${slug}.mdx`)

  // Getting content from file
  const source = readFileSync(workContentDirectory, 'utf-8')
  return await bundler(source, slug)
}
