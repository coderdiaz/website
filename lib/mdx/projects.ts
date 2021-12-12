import { join } from 'path'
import { readdirSync, readFileSync } from 'fs'
import { bundler } from '@lib/utils'

export async function getProjectBySlug(slug: string) {
  // Getting fullpath to filename
  const filePath = join(process.cwd(), 'content/projects', `${slug}.mdx`)
  return await bundler(filePath, slug)
}

export async function getProjects() {
  const slugs = readdirSync(join(process.cwd(), 'content/projects'))

  return await Promise.all(slugs.map(async slug => {
    // Getting fullpath to filename
    const filePath = join(process.cwd(), 'content/projects', slug)
    return await bundler(filePath, slug)
  }))
}

export function getPaths() {
  const slugs = readdirSync(join(process.cwd(), 'content/projects'))

  return slugs.map(slug => ({
    params: {
      slug: slug.replace('.mdx', ''),
    },
  }))
}