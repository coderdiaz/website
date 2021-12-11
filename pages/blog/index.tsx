import Image from 'next/image'
import type { InferGetStaticPropsType } from 'next'

import Container from '@components/partials/Container'
import { getPosts } from '@lib/mdx/posts'
import BaseLayout from '@layouts/BaseLayout'
import CustomLink from '@components/CustomLink'
import PostWithImage from '@components/PostWithImage'
import Meta from '@components/partials/Meta'
import { showDate } from '@lib/date'

export default function WritingIndexPage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [post, ...otherPosts] = posts
  return (
    <>
      <Meta meta={{
        title: 'Blog — Javier Diaz',
        description: 'Notas y reflexiones sobre lo que estoy construyendo y aprendiendo',
      }} />
      <section className="pt-8 md:pt-20">
        <Container className="max-w-4xl border-b border-gray-200">
          <h1 className="font-extrabold text-4xl md:text-5xl leading-tight mb-2">Blog.</h1>
          <p className="leading-7 text-xl text-gray-600 mb-6 md:mb-16">Notas y reflexiones sobre lo que estoy construyendo y aprendiendo</p>
          <div className="grid md:grid-cols-2 gap-5 items-center pb-14">
            <div className="flex flex-col space-y-3">
              <CustomLink href={`/blog/${post.frontmatter.slug}`}>
                <h2 className="font-semibold text-3xl leading-tight">{post.frontmatter.title}</h2>
              </CustomLink>
              <div className="flex space-x-4 items-center text-gray-700">
                <time
                  dateTime={showDate(post.frontmatter.published).iso}
                  className="inline-block">{showDate(post.frontmatter.published).formatted}</time>
                <div className="w-1 h-1 rounded-full bg-gray-900" />
                <span className="inline-block">{Math.ceil(post.frontmatter.readingTime.time/1000/60)} min. de lectura</span>
              </div>
              <p className="leading-relaxed text-gray-800">{post.frontmatter.excerpt}</p>
            </div>
            <div className="relative w-full h-72 md:h-full xl:h-72">
              <CustomLink href={`/blog/${post.frontmatter.slug}`}>
                <Image
                  className="rounded-lg"
                  layout="fill"
                  objectFit="cover"
                  src={post.frontmatter.image} />
              </CustomLink>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-14">
        <Container className="max-w-4xl">
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
            {otherPosts.map((post, index: number) => 
              <PostWithImage
                title={post.frontmatter.title}
                summary={post.frontmatter.excerpt}
                thumbnail={post.frontmatter.image}
                href={`/blog/${post.frontmatter.slug}`}
                key={index} />
            )}
          </div>
        </Container>
      </section>
    </>
  )
}

export async function getStaticProps() {
  const posts = await getPosts()

  return {
    props: {
      posts,
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