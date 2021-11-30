import Image from 'next/image'
import { ArrowRight } from 'react-feather'
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
        title: 'Mis proyectos — Javier Diaz',
        description: 'Estos son algunos de los proyectos que he construído o colaborado, aquí te comparto un poco sobre el proceso y decisiones que tome a lo largo del desarrollo',
      }} />
      <section className="pt-8 md:pt-20">
        <Container className="max-w-screen-lg border-b border-gray-200">
          <h1 className="font-bold text-4xl md:text-5xl leading-tight mb-6 md:mb-16">Proyectos.</h1>
          <div className="grid md:grid-cols-12 gap-7 mb-14">
            <div className="md:col-span-5 lg:col-span-5 flex flex-col space-y-8 py-6">
              <div className="flex flex-col space-y-3">
                <CustomLink href={`/work/${firstProject.frontmatter.slug}`}>
                  <h2 className="font-bold text-2xl text-gray-900">{firstProject.frontmatter.title}</h2>
                </CustomLink>
                <p className="text-gray-700">{firstProject?.frontmatter.excerpt}</p>
                <div className="block md:hidden relative h-72">
                  <CustomLink href={`/work/${firstProject.frontmatter.slug}`}>
                    <Image
                      className="rounded-lg"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="top left"
                      src={firstProject.frontmatter.images[0]} />
                  </CustomLink>
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="font-bold inline-block uppercase text-sm tracking-widest text-gray-500">Stack Tecnológico</span>
                <span className="inline-block">{firstProject.frontmatter.tech.join(", ")}</span>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="font-bold inline-block uppercase text-sm tracking-widest text-gray-500">Tipo de proyecto</span>
                <span className="inline-block">{firstProject.frontmatter.type.join(", ")}</span>
              </div>
              <CustomLink href={`/work/${firstProject.frontmatter.slug}`} className="py-5 px-6 lg:w-72 flex items-center justify-center space-x-3 font-semibold text-white bg-gradient-to-tr from-rose-600 to-orange-600 rounded-lg">
                <span>Leer caso de estudio</span>
                <ArrowRight className="w-5 h-5" />
              </CustomLink>
            </div>
            <div className="hidden md:grid grid-cols-8 lg:grid-cols-10 gap-3 md:col-span-7 lg:col-span-7">
              <div className="relative col-span-8 md:col-span-10 row-span-2">
                <Image
                  className="rounded-md"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top left"
                  src={firstProject.frontmatter.images[0]} />
              </div>
              <div className="relative col-span-10 lg:col-span-5 row-span-2">
                <Image
                  className="rounded-md"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="left"
                  src={firstProject.frontmatter.images[1]} />
              </div>
              <div className="hidden lg:flex relative col-span-5 row-span-2">
                <Image
                  className="rounded-md"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="left"
                  src={firstProject.frontmatter.images[2]} />
              </div>
            </div>
          </div>
        </Container>
        <section className="py-14">
          <Container className="max-w-screen-lg">
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