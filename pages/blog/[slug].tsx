import type { InferGetStaticPropsType } from 'next'
import { getPostBySlug } from '@lib/mdx/posts'
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
  return {
    paths: [
      { params: { slug: 'como-he-construido-mi-sitio-web'} }
    ],
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
