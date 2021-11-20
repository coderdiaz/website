import Image from 'next/image'
import type { InferGetStaticPropsType } from 'next'

import Container from '@components/partials/Container'
import { getPosts } from '@lib/mdx/posts'
import BaseLayout from '@layouts/BaseLayout'
import CustomLink from '@components/CustomLink'
import PostWithImage from '@components/PostWithImage'

export default function WritingIndexPage() {
  return (
    <>
      <section className="pt-8 md:pt-20">
        <Container className="max-w-screen-lg border-b border-gray-200">
          <h1 className="font-bold text-4xl md:text-5xl leading-tight mb-6 md:mb-16">Blog.</h1>
        </Container>
      </section>
    </>
  )
}

export async function getStaticProps({ params }) {
  const projects = await getPosts()

  return {
    props: {
      projects,
    },
  }
}

WritingIndexPage.getLayout = (page: React.ReactElement) => {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  )
}