import type { InferGetStaticPropsType } from 'next'

import { getPaths, getWorkBySlug } from '@lib/mdx/work'
import BaseLayout from '@layouts/BaseLayout'
import WorkPageLayout from '@layouts/WorkPage'

export default function WorkPage({ page }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <WorkPageLayout {...page} />
  )
}

export async function getStaticProps({ params }) {
  const page = await getWorkBySlug(params.slug)

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