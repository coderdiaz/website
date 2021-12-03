import type { InferGetStaticPropsType } from 'next'

import { getAboutPage } from '@lib/mdx/pages'
import BaseLayout from '@layouts/BaseLayout'
import SinglePageLayout from '@layouts/SinglePage'

export default function AboutPage({ page }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <SinglePageLayout {...page} />
  )
}

export async function getStaticProps() {
  const page = await getAboutPage()

  return {
    props: {
      page,
    },
  }
}

AboutPage.getLayout = (page: React.ReactElement) => {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  )
}