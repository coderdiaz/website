import Image from 'next/image'
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import { ArrowLeft } from 'react-feather'
import type { PageProps } from '@lib/types'
import components from '@components/MDXComponents';
import Container from '@components/partials/Container'

type Props = {} & PageProps;

const PostPageLayout = ({ code, frontmatter }: Props) => {
  const Component = useMemo(() => getMDXComponent(code), [code])

  return (
    <>
      <section className="pt-8 pb-14 md:py-14">
        <Container className="max-w-3xl">
          <a href="#" className="text-rose-500 flex space-x-3 items-center mb-6">
            <ArrowLeft className="w-5 h-5" />
            <span className="inline-block font-bold uppercase text-sm tracking-widest text-rose-600">Regresar</span>
          </a>
          <article>
            <h1 className="font-bold text-3xl md:text-4xl leading-tight mb-4 md:mb-5">{frontmatter.title}</h1>
            <div className="flex space-x-4 items-center text-gray-700 mb-4 md:mb-5">
              <time dateTime="" className="inline-block">Noviembre 18, 2021</time>
              <div className="w-1 h-1 rounded-full bg-gray-900" />
              <span className="inline-block">{Math.ceil(frontmatter.readingTime.time/1000/60)} min. de lectura</span>
            </div>
            <p className="leading-loose italic mb-6 md:mb-10">
              <span className="pr-2 uppercase text-sm tracking-widest not-italic font-bold text-rose-600">Quick Summary »</span> {frontmatter.summary}
            </p>
            <div className="relative lg:-mx-10 mb-6 md:mb-10">
              <Image
                className="w-full h-full rounded-lg"
                width={976}
                height={576}
                src={frontmatter.image} />
            </div>
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
