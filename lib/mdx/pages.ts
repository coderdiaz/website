import { join } from 'path'
import { bundler } from '@lib/utils'

export async function getAboutPage() {
  // Getting content from file
  const filePath = join(process.cwd(), 'content', `about.mdx`)
  return await bundler(filePath, 'about')
}

export async function getUsesPage() {
  // Getting content from file
  const filePath = join(process.cwd(), 'content', `uses.mdx`)
  return await bundler(filePath, 'uses')
}