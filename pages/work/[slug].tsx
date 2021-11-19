import type { InferGetStaticPropsType } from 'next'

import { getPaths, getProjectBySlug } from '@lib/mdx/projects'
import BaseLayout from '@layouts/BaseLayout'
import WorkPageLayout from '@layouts/WorkPage'

export default function WorkPage({ page }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <WorkPageLayout {...page} />
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

WorkPage.getLayout = (page: React.ReactElement) => {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  )
}