import { join } from 'path'
import { readdirSync } from 'fs'
import { bundler } from '@lib/utils'

type PathDefinition = {
  params: {
    slug: string
  }
}

export async function getPostBySlug(slug: string) {
  // Getting fullpath to filename
  const filePath = join(process.cwd(), 'content/posts', `${slug}.mdx`)
  return await bundler(filePath, slug)
}

export async function getPosts(size?: number) {
  const postsDirectoryContent = join(process.cwd(), 'content/posts')
  let slugs = readdirSync(postsDirectoryContent)

  if (size) {
    slugs = slugs.slice(0, size)
  }

  return await Promise.all(slugs.map(async slug => {
    // Getting fullpath to filename
    const postFullpath = join(postsDirectoryContent, slug)
    return await bundler(postFullpath, slug)
  }))
}

export function getPaths() {
  const slugs = readdirSync(join(process.cwd(), 'content/posts'))

  return slugs.map<PathDefinition>(slug => ({
    params: {
      slug: slug.replace('.mdx', '')
    }
  }))
}