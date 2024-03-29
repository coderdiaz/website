import Image from 'next/image'
import { ArrowNarrowRightIcon, MailIcon } from '@heroicons/react/solid'
import { Twitter } from 'react-feather'
import { RoughNotationGroup } from 'react-rough-notation'
import { useKBar } from 'kbar'

import { useIsFontReady } from '@lib/useIsFontReady'
import { RainbowHighlight } from '@components/RainbowHighlight'
import Container from '@components/partials/Container'
import Avatar from '@assets/images/avatar.png'
import Video from '@components/Video'
import PostWithImage from '@components/PostWithImage'
import Post from '@components/Post'
import WorkPost from '@components/WorkPost'
import CustomLink from '@components/CustomLink'
import Meta from '@components/partials/Meta'
import type { BundlerResult, Frontmatter } from '@lib/types'

type Props = {
  work: Frontmatter
  posts: BundlerResult[]
}

export default function HomePageLayout({ work, posts }: Props) {
  const { query } = useKBar()
  const [post, ...otherPosts] = posts
  const isFontReady = useIsFontReady()

  return (
    <>
      <Meta />
      <section className="relative py-5 mb-4 md:mb-6 lg:mb-11">
        <Container className="max-w-screen-lg">
          <div className="mb-1">
            <Image
              className="rounded-full"
              src={Avatar}
              width={64}
              height={64}
              quality={100}
              alt="Avatar de Javier Diaz"
              priority />
          </div>
          <RoughNotationGroup show={isFontReady}>
            <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-3 md:mb-4">Hey! Soy Javier.</h1>
            <div className="flex flex-col space-y-1 md:space-y-3 md:mr-24 lg:mr-48 mb-4 md:mb-6 text-gray-700">
              <p className="leading-relaxed md:text-lg">
                Soy un <span className="text-transparent bg-clip-text bg-gradient-to-tr from-rose-700 to-orange-700 hover:to-orange-500">ingeniero de software</span>, creador y aspirante a diseñador UX/UI que construye productos digitales y vive en Ciudad de México.
              </p>
              <p className="leading-relaxed md:text-lg">
                Interesado en <RainbowHighlight color="#cffafe">sistemas de diseño</RainbowHighlight>, jamstack y experiencia de <RainbowHighlight color="#fef3c7">usuario/dev</RainbowHighlight>. Me encanta crear productos digitales que sean amigables con el usuario, simples y visualmente atractivos. Mi objetivo es crear <RainbowHighlight color="#ffe4e6">experiencias</RainbowHighlight> web rápidas, simples y accesibles.
              </p>
              <p className="leading-relaxed md:text-lg">Estoy disponible para <RainbowHighlight color="#e0e7ff">freelance</RainbowHighlight> y abierto a nuevos retos.</p>
            </div>
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 mb-4 md:mb-6">
              <a href="mailto: hey@coderdiaz.dev" className="py-5 px-6 flex items-center space-x-3 font-semibold text-white bg-gradient-to-tr from-rose-600 to-orange-600 hover:to-orange-500 rounded-lg">
                <MailIcon className="w-5 h-5" />
                <span>Ponte en contacto</span>
              </a>
              <a href="https://twitter.com/coderdiaz/" target="_blank" rel="noopener noreferrer" className="py-5 px-6 flex items-center space-x-3 font-semibold text-gray-900 hover:text-black bg-gray-100 hover:bg-gray-200 md:bg-transparent md:hover:bg-gray-100 rounded-lg">
                <Twitter className="w-5 h-5" />
                <span>Sígueme en twitter</span>
              </a>
            </div>
            <div className="text-gray-700 hidden lg:block">
              Utiliza <button onClick={query.toggle} style={{ opacity: 1 }} className="inline bg-white text-gray-600 hover:text-gray-700 text-sm leading-5 py-0.5 px-1.5 border border-gray-400 hover:border-gray-500 rounded-md"><kbd className="font-sans no-underline">⌘</kbd> <kbd className="font-sans">K</kbd></button> para una mejor experiencia
            </div>
          </RoughNotationGroup>
        </Container>
        <section className="py-6 md:py-8 lg:pt-20 lg:pb-11">
          <Container className="max-w-screen-lg">
            <div className="flex flex-col space-y-0 mb-4 md:mb-6">
              <h2 className="text-2xl font-semibold">Vídeos Destacados</h2>
              <p className="leading-relaxed text-gray-700">Mira lo que estoy construyendo y aprendiendo en Youtube</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-4 md:mb-6">
              <Video
                title="Rediseñando mi portafolio con Figma | Parte 1"
                summary="En este vídeo, aprenderás junto conmigo a crear tu portafolio usando Figma, donde además te compartiré algunos tips y consideraciones al momento de decidir como diseñarlo."
                thumbnail="/static/images/thumbs/redisenando-mi-sitio-web-con-figma-thumb.png"
                href="https://www.youtube.com/watch?v=vjfUbGmtdaE" />
              <Video
                title="No eres tú, soy yo: Diseñadores & Developers"
                summary="¿Te haz preguntado cómo es que los developers y diseñadores trabajan en conjunto? o ¿Alguna vez haz escuchado acerca de la guerra interminable entre ellos? En este vídeo te contamos."
                thumbnail="/static/images/thumbs/dimeloencodigo-thumbnail-devspace-003.jpeg"
                href="https://www.youtube.com/watch?v=woZSVCRIQfo" />
            </div>
            <a href="https://www.youtube.com/channel/UCMcn-dkjGbCCdnos9416ZhQ" className="inline-flex items-center space-x-1 font-semibold" target="_blank">
              <span>Ver todos los vídeos</span>
              <ArrowNarrowRightIcon className="w-5 h-5" />
            </a>
          </Container>
        </section>
        <section className="py-11">
          <Container className="max-w-screen-lg">
            <div className="flex flex-col space-y-0 mb-4 md:mb-6">
              <h2 className="text-2xl font-semibold">Publicaciones Destacadas</h2>
              <p className="leading-7 text-gray-700">Notas y reflexiones sobre lo que estoy construyendo y aprendiendo</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <PostWithImage
                title={post.frontmatter.title}
                summary={post.frontmatter.excerpt}
                thumbnail={post.frontmatter.image}
                href={`/blog/${post.frontmatter.slug}`} />
              <div className="flex flex-col space-y-7 border-t md:border-t-0 md:border-l border-gray-200 pt-5 md:pt-0 md:pl-8">
                { otherPosts.map((post, index) => (
                  <Post
                    key={index}
                    title={post.frontmatter.title}
                    href={`/blog/${post.frontmatter.slug}`}
                    summary={post.frontmatter.excerpt} />)
                ) }
              </div>
            </div>
            <CustomLink href="/blog/" className="hidden items-center space-x-1 font-semibold text-lg hover:text-orange-700">
              <span>Ver todos las notas</span>
              <ArrowNarrowRightIcon className="w-5 h-5" />
            </CustomLink>
          </Container>
        </section>
        <section className="pt-11 pb-4">
          <Container className="max-w-screen-lg">
            <div className="flex flex-col space-y-0 mb-4 md:mb-6">
              <h2 className="text-2xl font-semibold">Último Proyecto</h2>
              <p className="leading-relaxed text-gray-700">Algunas cosas que he construido, échale un vistazo a mi trabajo</p>
            </div>
            <div className="relative">
              <WorkPost
                title={work.title}
                description={work.excerpt}
                href={`/work/${work.slug}`}
                link={work.links?.[0].href}
                thumbnail={work.images[0]}
                tech={work.tech} />
            </div>
          </Container>
        </section>
      </section>
    </>
  )
}
