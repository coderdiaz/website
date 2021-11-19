import type { InferGetStaticPropsType } from 'next'

import { getProjectBySlug } from '@lib/mdx/projects'
import BaseLayout from '@layouts/BaseLayout'
import HomePageLayout from '@layouts/HomePage'

export default function IndexPage({ work }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <HomePageLayout latestWork={work} />
  )
}

export async function getStaticProps() {
  const { frontmatter } = await getProjectBySlug('performance-expanish-com') // Getting the featured project

  return {
    props: {
      work: frontmatter,
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
