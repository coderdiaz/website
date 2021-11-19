import type { InferGetStaticPropsType } from 'next'

import { getPaths, getProjectBySlug } from '@lib/mdx/projects'
import BaseLayout from '@layouts/BaseLayout'
import ProjectPageLayout from '@layouts/ProjectPage'

export default function ProjectPage({ page }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ProjectPageLayout {...page} />
  )
}

export async function getStaticProps({ params }) {
  const page = await getProjectBySlug(params.slug)

  return {
    props: {
      page,
    },
  }
}

export async function getStaticPaths() {
  const paths = getPaths()

  return {
    paths,
    fallback: false,
  }
}

ProjectPage.getLayout = (page: React.ReactElement) => {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  )
}