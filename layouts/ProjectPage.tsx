import Image from 'next/image'
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import { ArrowUpRight } from 'react-feather'

import type { PageProps } from '@lib/types'
import components from '@components/MDXComponents'
import Container from '@components/partials/Container'
import Meta from '@components/partials/Meta'
import { showDate } from '@lib/date'

type Props = {} & PageProps

const ProjectPageLayout = ({ code, frontmatter }: Props) => {
  const Component = useMemo(() => getMDXComponent(code), [code])

  return (
    <>
      <Meta meta={{
        title: frontmatter.meta.title,
        description: frontmatter.meta.description,
        image: frontmatter.meta.image,
      }} />
      <section className="pt-8 pb-14 md:py-14">
        <Container className="max-w-3xl">
          <article>
            <h1 className="font-bold text-3xl md:text-4xl leading-tight mb-4">{frontmatter.title}</h1>
            <div className="hidden md:flex space-x-4 items-center text-gray-700 mb-4 md:mb-5">
              <time
                dateTime={showDate(frontmatter.published).iso}
                className="inline-block">{showDate(frontmatter.published, 'LLLL dd, yyyy').formatted}</time>
              <div className="w-1 h-1 rounded-full bg-gray-900" />
              <span className="inline-block">{Math.ceil(frontmatter.readingTime.time/1000/60)} min. de lectura</span>
            </div>
            <div className="flex md:hidden space-x-4 items-center text-gray-600 mb-4 md:mb-5 text-sm">
              <time
                dateTime={showDate(frontmatter.published).iso}
                className="inline-block">{showDate(frontmatter.published, 'MMM dd, yyyy').formatted}</time>
              <div className="w-1 h-1 rounded-full bg-gray-900" />
              <span className="inline-block">{Math.ceil(frontmatter.readingTime.time/1000/60)} min. de lectura</span>
            </div>
            <p className="leading-loose mb-6 md:mb-10">{frontmatter.summary}</p>
            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-20 mb-6 md:mb-10">
              <div className="flex flex-col space-y-2">
                <span className="inline-block font-semibold uppercase text-sm tracking-widest text-gray-500">Tipo de proyecto</span>
                <nav>
                  <ul className="flex flex-col space-y-2">
                    { frontmatter.type.map((item: string, index: number) => <li key={index}>{item}</li>) }
                  </ul>
                </nav>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="inline-block font-semibold uppercase text-sm tracking-widest text-gray-500">Stack Tecnológico</span>
                <nav>
                  <ul className="flex flex-col space-y-2">
                    { frontmatter.tech.map((item: string, index: string) => <li key={index}>{item}</li>) }
                  </ul>
                </nav>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="inline-block font-semibold uppercase text-sm tracking-widest text-gray-500">Enlaces</span>
                <div className="flex">
                  { frontmatter.links.map((item: { label: string, href: string }, index: number) => <a key={index} href={item.href} className="bg-clip-text text-transparent bg-gradient-to-br from-rose-700 to-orange-700 font-medium mb-6 items-center shadow-link" target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>) }
                </div>
              </div>
            </div>
            <div className="relative lg:-mx-10 mb-6 md:mb-10">
              <Image
                className="w-full h-full rounded-lg"
                width={784}
                height={472}
                src={frontmatter.images[0]} />
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

export default ProjectPageLayout
