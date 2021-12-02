import Image from 'next/image'
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

import type { PageProps } from '@lib/types'
import components from '@components/MDXComponents'
import Container from '@components/partials/Container'
import Avatar from '@assets/images/avatar.png'
import Meta from '@components/partials/Meta'
import { showDate } from '@lib/date'

type Props = {} & PageProps

const PostPageLayout = ({ code, frontmatter }: Props) => {
  const Component = useMemo(() => getMDXComponent(code), [code])

  return (
    <>
      <Meta meta={{
        title: frontmatter.meta.title,
        description: frontmatter.meta.description,
        image: frontmatter.meta.image,
      }} />
      <section className="pt-2 pb-14 md:py-14">
        <Container className="max-w-3xl">
          <article>
            <h1 className="font-bold text-3xl md:text-4xl leading-tight mb-4">{frontmatter.title}</h1>
            <div className="hidden md:flex justify-between">
              <div className="flex space-x-4 items-center text-gray-700 mb-6 md:mb-10">
                <div className="flex items-center space-x-2">
                  <Image width={24} height={24} src={Avatar} alt="Avatar de Javier Diaz" />
                  <span className="text-gray-800 font-medium">Javier Diaz</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-gray-900" />
                <time
                  dateTime={showDate(frontmatter.published).iso}
                  className="inline-block">{showDate(frontmatter.published).formatted}</time>
              </div>
              <span className="hidden md:inline-block">{Math.ceil(frontmatter.readingTime.time/1000/60)} min. de lectura</span>
            </div>
            <div className="flex md:hidden space-x-3 items-center mb-6">
              <div className="w-10 h-10 flex-shrink-0">
                <Image width={48} height={48} src={Avatar} alt="Avatar de Javier Diaz" />
              </div>
              <div className="flex flex-col">
                <span className="inline-block text-gray-800 font-medium">Javier Diaz</span>
                <div className="flex space-x-2 items-center text-sm text-gray-600">
                  <time
                    dateTime={showDate(frontmatter.published).iso}
                    className="inline-block">{showDate(frontmatter.published, 'MMM dd, yyyy').formatted}</time>
                  <div className="w-1 h-1 rounded-full bg-gray-900" />
                  <span className="inline-block">{Math.ceil(frontmatter.readingTime.time/1000/60)} min. de lectura</span>
                </div>
              </div>
            </div>
            <div className="relative lg:-mx-10 mb-6 md:mb-10">
              <Image
                className="w-full h-full rounded-lg"
                width={784}
                height={472}
                src={frontmatter.image} />
            </div>
            <p className="leading-loose italic mb-6 md:mb-10">
              <span className="pr-1 md:pr-2 uppercase text-sm tracking-widest not-italic font-bold bg-clip-text text-transparent bg-gradient-to-br from-rose-600 to-orange-600">Resumen »</span> {frontmatter.summary}
            </p>
            <div className="prose max-w-none">
              <Component components={{
                ...components
              }} />
            </div>
          </article>
        </Container>
      </section>
    </>
  )
}

export default PostPageLayout
