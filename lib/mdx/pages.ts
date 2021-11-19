import { join } from 'path'
import { readFileSync } from 'fs'
import { bundler } from '@lib/utils'

export async function getAboutPage() {
  // Getting content from file
  const source = readFileSync(join(process.cwd(), 'content', `about.mdx`), 'utf-8')
  return await bundler(source, 'about')
}