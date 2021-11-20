import { useMemo } from 'react'
import Image from 'next/image'
import { getMDXComponent } from 'mdx-bundler/client'

import Container from '@components/partials/Container'
import { PageProps } from '@lib/types'
import components from '@components/MDXComponents'

type Props = {} & PageProps

export default function SinglePage({ code, frontmatter }: Props) {
  const Component = useMemo(() => getMDXComponent(code), [code])

  return (
    <>
      <section className="pt-6 pb-4">
        <Container className="max-w-3xl">
          <div className="flex flex-col space-y-1 mb-8">
            <h1 className="text-5xl font-bold">{frontmatter.title}</h1>
            <p className="text-lg leading-7 text-gray-600">{frontmatter.summary}</p>
          </div>
          <div className="relative md:-mx-10">
            <Image
              className="rounded-lg"
              width={976}
              height={580}
              src={frontmatter.image} />
          </div>
        </Container>
      </section>
      <section className="py-4">
        <Container className="max-w-3xl">
          <div className="prose max-w-none">
            <Component
              components={{
                ...components,
              }} />
          </div>
        </Container>
      </section>
    </>
  )
}