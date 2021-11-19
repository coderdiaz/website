import type { InferGetStaticPropsType } from 'next'

import { getUsesPage } from '@lib/mdx/pages'
import BaseLayout from '@layouts/BaseLayout'
import SinglePageLayout from '@layouts/SinglePage'

export default function UsesPage({ page }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <SinglePageLayout {...page} />
  )
}

export async function getStaticProps() {
  const page = await getUsesPage()

  return {
    props: {
      page,
    },
  }
}

UsesPage.getLayout = (page: React.ReactElement) => {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  )
}