import type { InferGetStaticPropsType } from 'next'

import { getProjectBySlug } from '@lib/mdx/projects'
import BaseLayout from '@layouts/BaseLayout'
import HomePageLayout from '@layouts/HomePage'
import { getPosts } from '@lib/mdx/posts'

export default function IndexPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <HomePageLayout {...props} />
  )
}

export async function getStaticProps() {
  const { frontmatter } = await getProjectBySlug('mejorando-rendimiento-sitio-web-expanish-case-study') // Getting the featured project
  const posts = await getPosts(4)

  return {
    props: {
      work: frontmatter,
      posts,
    },
  }
}

IndexPage.getLayout = (page: React.ReactElement) => {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  )
}
