import Image from 'next/image'
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import { ArrowUpRight } from 'react-feather'

import type { PageProps } from '@lib/types'
import components from '@components/MDXComponents'
import Container from '@components/partials/Container'

type Props = {} & PageProps

const WorkPageLayout = ({ code, frontmatter }: Props) => {
  const Component = useMemo(() => getMDXComponent(code), [code])

  return (
    <>
      <section className="pt-8 pb-14 md:py-14">
        <Container className="max-w-3xl">
          <article>
            <h1 className="font-bold text-3xl md:text-4xl leading-tight mb-4">{frontmatter.title}</h1>
            <div className="flex space-x-4 items-center text-gray-700 mb-4 md:mb-5">
              <time dateTime="" className="inline-block">Noviembre 19, 2021</time>
              <div className="w-1 h-1 rounded-full bg-gray-900" />
              <span className="inline-block">{Math.ceil(frontmatter.readingTime.time/1000/60)} min. de lectura</span>
            </div>
            <p className="leading-loose mb-6 md:mb-10">{frontmatter.summary}</p>
            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-20 mb-6 md:mb-10">
              <div className="flex flex-col space-y-2">
                <span className="inline-block font-semibold uppercase text-sm tracking-widest text-gray-500">Project Type</span>
                <nav>
                  <ul className="flex flex-col space-y-2">
                    { frontmatter.type.map((item: string) => <li>{item}</li>) }
                  </ul>
                </nav>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="inline-block font-semibold uppercase text-sm tracking-widest text-gray-500">Technology Stack</span>
                <nav>
                  <ul className="flex flex-col space-y-2">
                    { frontmatter.tech.map((item: string) => <li>{item}</li>) }
                  </ul>
                </nav>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="inline-block font-semibold uppercase text-sm tracking-widest text-gray-500">Live Preview</span>
                { frontmatter.links.map((item: { label: string, href: string }) => <a href={item.href} className="text-rose-500 font-medium mb-6" target="_blank" rel="noopener noreferrer">
                  <span className="inline-flex space-x-3 items-center">
                    {item.label} <ArrowUpRight className="ml-1 w-5 h-5" />
                  </span>
                </a>) }
              </div>
            </div>
            <div className="relative lg:-mx-10 mb-6 md:mb-10">
              <Image
                className="w-full h-full rounded-lg"
                width={976}
                height={580}
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

export default WorkPageLayout
