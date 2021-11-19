import Image from 'next/image'
import { PaperAirplaneIcon } from '@heroicons/react/outline'
import { Twitter } from 'react-feather'
import { RoughNotation } from 'react-rough-notation'

import Container from '@components/partials/Container'
import Avatar from '@assets/images/avatar.png'
import Video from '@components/Video'
import PostWithImage from '@components/PostWithImage'
import Post from '@components/Post'
import WorkPost from '@components/WorkPost'

export default function HomePageLayout() {
  return (
    <>
      <section className="py-5 mb-4 md:mb-6 lg:mb-11">
        <Container className="max-w-screen-lg">
          <div className="mb-3 md:mb-6">
            <Image
              className="rounded-full"
              src={Avatar}
              width={56}
              height={56}
              alt="Avatar de Javier Diaz" />
          </div>
          <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-3 md:mb-6">Hey! Soy Javier.</h1>
          <div className="flex flex-col space-y-1 md:space-y-3 md:mr-24 lg:mr-48 mb-4 md:mb-6">
            <p className="leading-relaxed md:text-lg">
              Un <span className="font-semibold text-rose-700">ingeniero de software</span> que diseña y enseña en Ciudad de México.
            </p>
            <p className="leading-relaxed md:text-lg">Interesado en <RoughNotation type="highlight" show={true} color="#C7D2FE">sistemas de diseño</RoughNotation>, jamstack y experiencia de <RoughNotation type="highlight" show={true} color="#FDE68A">usuario/dev</RoughNotation>. Me fascina crear herramientas que sean user-friendly, simples y encantadoras. Trabajo como Engineering Manager en <span className="font-semibold">Bedu</span> — con un enfoque en mejorar nuestro ecosistema ed-tech y la entrega de proyectos de software. Mi objetivo principal es crear <RoughNotation type="highlight" show={true} color="#BAE6FD">experiencias</RoughNotation> web rápidas, simples y accesibles.</p>
            <p className="leading-relaxed md:text-lg">Estoy disponible para <RoughNotation type="highlight" show={true} color="#A7F3D0">freelance</RoughNotation> y abierto a nuevos retos.</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
            <a href="mailto: hey@coderdiaz.me" className="py-5 px-6 flex items-center space-x-3 font-semibold text-white bg-rose-600 hover:bg-rose-500 rounded-lg">
              <PaperAirplaneIcon className="w-5 h-5" />
              <span>Ponte en contacto</span>
            </a>
            <a href="https://twitter.com/coderdiaz/" target="_blank" rel="noopener noreferrer" className="py-5 px-6 flex items-center space-x-3 font-semibold text-gray-900 bg-gray-100 hover:bg-gray-200 md:bg-transparent md:hover:bg-gray-100 rounded-lg">
              <Twitter className="w-5 h-5" />
              <span>Sígueme</span>
            </a>
          </div>
        </Container>
        <section className="py-6 md:py-8 lg:py-11">
          <Container className="max-w-screen-lg">
            <div className="flex flex-col space-y-1 mb-4 md:mb-6">
              <h2 className="text-2xl font-bold">Vídeos Destacados</h2>
              <p className="leading-relaxed text-gray-500">Vídeos sobre lo que estoy construyendo y aprendiendo</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Video
                title="Rediseñando mi portafolio con Figma | Parte 1"
                summary="Acompañame en esta experiencia rediseñando mi portafolio web, donde además de darle una sacudida a mi sitio actual podrás ver como realizo el diseño."
                thumbnail="/static/images/thumbs/redisenando-mi-sitio-web-con-figma-thumb.png" />
              <Video
                title="Diseñando una aplicación de viajes en Figma"
                summary="Crea una aplicación de viajes en Figma, en este vídeo te cuento sobre el proceso que llevo acabo para diseñar aplicaciones."
                thumbnail="/static/images/thumbs/disenando-una-aplicacion-de-viajes-thumb.png" />
            </div>
          </Container>
        </section>
        <section className="py-11">
          <Container className="max-w-screen-lg">
            <div className="flex flex-col space-y-1 mb-4 md:mb-6">
              <h2 className="text-2xl font-bold">Publicaciones Destacadas</h2>
              <p className="leading-7 text-gray-500">Reflexiones sobre lo que estoy construyendo y aprendiendo</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <PostWithImage
                title="Como he construído mi sitio web"
                summary="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis facere repudiandae esse iure! Deleniti, nostrum natus. Laborum, consequuntur."
                thumbnail="/static/images/como-he-construido-mi-sitio-web.jpg"
                href="/blog/como-he-construido-mi-sitio-web/" />
              <div className="flex flex-col space-y-7 border-t md:border-t-0 md:border-l border-gray-200 pt-5 md:pt-0 md:pl-8">
                <Post
                  title="Verifying Your Shopify Webhooks in Next.js APIs"
                  summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto animi esse libero officia temporibus" />
                <Post
                  title="Verifying Your Shopify Webhooks in Next.js APIs"
                  summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto animi esse libero officia temporibus" />
                <Post
                  title="Verifying Your Shopify Webhooks in Next.js APIs"
                  summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto animi esse libero officia temporibus" />
                <Post
                  title="Verifying Your Shopify Webhooks in Next.js APIs"
                  summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto animi esse libero officia temporibus" />
              </div>
            </div>
          </Container>
        </section>
        <section className="pt-11 pb-4">
          <Container className="max-w-screen-lg">
            <div className="flex flex-col space-y-1 mb-4 md:mb-6">
              <h2 className="text-2xl font-bold">Último Proyecto</h2>
              <p className="leading-relaxed text-gray-500">Algunas cosas que he construido, échale un vistazo a mi trabajo</p>
            </div>
            <div className="relative">
              <WorkPost
                title="Performance: Expanish.com"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, tempore tempora, dolorum aut excepturi quibusdam pariatur tenetur voluptates aperiam inventore."
                href="/work/performance-expanish-com/"
                thumbnail="/static/images/website-expanish-com.png"
                tech={['Next.js', 'Prismic', 'TailwindCSS']} />
            </div>
          </Container>
        </section>
      </section>
    </>
  )
}
