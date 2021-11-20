import { join } from 'path'
import { readdirSync, readFileSync } from 'fs'
import { bundler } from '@lib/utils'

export async function getProjectBySlug(slug: string) {
  // Getting fullpath to filename
  const projectContentDirectory = join(process.cwd(), 'content/projects', `${slug}.mdx`)

  // Getting content from file
  const source = readFileSync(projectContentDirectory, 'utf-8')
  return await bundler(source, slug)
}

export async function getProjects() {
  const slugs = readdirSync(join(process.cwd(), 'content/projects'))

  return await Promise.all(slugs.map(async slug => {
    // Getting fullpath to filename
    const projectContentDirectory = join(process.cwd(), 'content/projects', slug)
    // Getting content from file
    const source = readFileSync(projectContentDirectory, 'utf-8')
    return await bundler(source, slug)
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