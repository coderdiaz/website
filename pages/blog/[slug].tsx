import type { InferGetStaticPropsType } from 'next'

import { getPaths, getPostBySlug } from '@lib/mdx/posts'
import BaseLayout from '@layouts/BaseLayout'
import PostPageLayout from '@layouts/PostPage'

export default function PostPage({ page }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PostPageLayout {...page} />
  )
}

export async function getStaticProps({ params }) {
  const page = await getPostBySlug(params.slug)

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

PostPage.getLayout = (page: React.ReactElement) => {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  )
}
