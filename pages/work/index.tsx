import Image from 'next/image'
import { ArrowUpRight } from 'react-feather'
import { ArrowNarrowRightIcon } from '@heroicons/react/solid'
import type { InferGetStaticPropsType } from 'next'

import Container from '@components/partials/Container'
import { getProjects } from '@lib/mdx/projects'
import BaseLayout from '@layouts/BaseLayout'
import CustomLink from '@components/CustomLink'
import PostWithImage from '@components/PostWithImage'
import Meta from '@components/partials/Meta'

export default function WorkIndexPage({ projects }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [firstProject, ...restProjects] = projects

  return (
    <>
      <Meta meta={{
        title: 'Proyectos — Javier Diaz',
        description: 'Estos son algunos de los proyectos que he construído o colaborado, aquí te comparto un poco sobre el proceso y decisiones que tome a lo largo del desarrollo',
      }} />
      <section className="pt-8 md:pt-20">
        <Container className="max-w-4xl border-b border-gray-200">
          <h1 className="font-bold text-4xl md:text-5xl leading-tight mb-2">Proyectos.</h1>
          <p className="leading-7 text-xl text-gray-600 mb-6 md:mb-16">Estos son algunos de los proyectos que he construído o en los que he colaborado.</p>
          <div className="grid lg:grid-cols-9 gap-5 mb-16">
            <div className="lg:col-span-5 flex flex-col space-y-5">
              <div className="flex flex-col space-y-2">
                <CustomLink href={firstProject.frontmatter.href}>
                  <h3 className="font-bold text-2xl">{firstProject.frontmatter.title}</h3>
                </CustomLink>
                <div className="flex space-x-2">
                  {firstProject.frontmatter.tech.map((item, i: number) => (
                    <span key={i} className="bg-gray-200 text-sm px-3 py-1 rounded-md">{item}</span>
                  ))}
                </div>
              </div>
              <p className="leading-7 text-gray-800">{firstProject.frontmatter.excerpt}</p>
              <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
                <CustomLink className="py-5 px-6 flex justify-center md:justify-start items-center space-x-3 font-semibold text-white bg-gradient-to-tr from-rose-600 to-orange-600 hover:to-orange-500 rounded-lg" href={`/work/${firstProject.frontmatter.slug}`}>
                  <span>Leer caso de estudio</span>
                  <ArrowNarrowRightIcon className="w-6 h-6" />
                </CustomLink>
                {firstProject.frontmatter.links[0]?.href ? <a href={firstProject.frontmatter.links[0].href} target="_blank" className="py-5 px-6 flex justify-center md:justify-start items-center space-x-3 font-semibold bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg">
                  <span>Ver en vivo</span>
                  <ArrowUpRight className="w-6 h-6" />
                </a> : null}
              </div>
            </div>
            <div className="hidden md:inline-block lg:col-span-4 relative w-full h-64 md:h-96 lg:h-full">
              <Image
                className="w-full h-full rounded-lg"
                src={firstProject.frontmatter.images[0]}
                layout="fill"
                objectFit="cover"
                objectPosition="left" />
            </div>
          </div>
        </Container>
        <section className="py-14">
          <Container className="max-w-4xl">
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
              {restProjects.map((project, index: number) => 
                <PostWithImage
                  title={project.frontmatter.title}
                  summary={project.frontmatter.excerpt}
                  thumbnail={project.frontmatter.image}
                  href={`/work/${project.frontmatter.slug}`}
                  key={index} />
              )}
            </div>
          </Container>
        </section>
      </section>
    </>
  )
}

export async function getStaticProps() {
  const projects = await getProjects()

  return {
    props: {
      projects,
    },
  }
}

WorkIndexPage.getLayout = (page: React.ReactElement) => {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  )
}