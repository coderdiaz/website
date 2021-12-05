import { Aperture, ArrowRight, Box, Columns, Dribbble, GitHub, Linkedin, MessageSquare, Twitter } from 'react-feather'

import Container from '@components/partials/Container'
import BaseLayout from '@layouts/BaseLayout'
import Meta from '@components/partials/Meta'

export default function HireMePage() {
  return (
    <>
      <Meta meta={{
        title: 'Comunícate conmigo — Javier Diaz',
        description: 'Hagamos tu idea posible juntos. Me complace responder a tus preguntas, colaborar o chatear si tengo la oportunidad'
      }} />
      <section className="pt-8 pb-14 md:py-14">
        <Container className="max-w-4xl">
          <div className="flex flex-col space-y-2 mb-6">
            <span className="inline-block font-semibold text-gray-600">Haz tu idea posible</span>
            <h1 className="text-5xl leading-snug font-bold">Comunícate conmigo.</h1>
            <p className="md:text-lg leading-relaxed text-gray-600">No dudes en comunicarte a través de cualquier medio que encuentres mejor. Me complace responder a tus preguntas, colaborar o chatear si tengo la oportunidad.</p>
          </div>
          <div className="relative mb-12">
            <div className="grid md:grid-cols-2 gap-5">
              <a href="https://twitter.com/coderdiaz/" target="_blank" rel="noreferer" className="flex space-x-4 bg-gray-50 hover:bg-orange-50 p-6 rounded-lg items-center transition ease-in">
                <div className="flex items-center align-center p-4 rounded-full text-blue-600">
                  <Twitter className="w-10 h-10" />
                </div>
                <div className="flex flex-shrink-0 flex-col">
                  <span className="inline-block md:text-lg font-semibold">Twitter</span>
                  <div className="flex space-x-2 items-center">
                    <span>Preguntame o escríbeme @</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </a>
              <a href="mailto: hey@coderdiaz.me" className="flex space-x-3 bg-gray-50 hover:bg-orange-50 p-6 rounded-lg items-center transition ease-in">
                <div className="flex items-center align-center p-4 rounded-full text-purple-600">
                  <MessageSquare className="w-10 h-10" />
                </div>
                <div className="flex flex-shrink-0 flex-col">
                  <span className="inline-block md:text-lg font-semibold">Correo Electrónico</span>
                  <div className="flex space-x-1 items-center">
                    <span>Envíame un correo</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </a>
              <a href="https://github.com/coderdiaz/" target="_blank" rel="noreferer" className="flex space-x-4 bg-gray-50 hover:bg-orange-50 p-6 rounded-lg items-center transition ease-in">
                <div className="flex items-center align-center p-4 rounded-full text-gray-800">
                  <GitHub className="w-10 h-10" />
                </div>
                <div className="flex flex-shrink-0 flex-col">
                  <span className="inline-block md:text-lg font-semibold">GitHub</span>
                  <div className="flex space-x-1 items-center">
                    <span>Ve mis proyectos y códigos</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </a>
              <a href="https://dribbble.com/coderdiaz/" target="_blank" rel="noreferer" className="flex space-x-4 bg-gray-50 hover:bg-orange-50 p-6 rounded-lg items-center transition ease-in">
                <div className="flex items-center align-center p-4 rounded-full text-rose-600">
                  <Dribbble className="w-10 h-10" />
                </div>
                <div className="flex flex-shrink-0 flex-col">
                  <span className="inline-block md:text-lg font-semibold">Dribbble</span>
                  <div className="flex space-x-1 items-center">
                    <span>Ve mis últimos diseños</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </a>
              <a href="https://linkedin.com/in/coderdiaz/" target="_blank" rel="noreferer" className="flex space-x-4 bg-gray-50 hover:bg-orange-50 p-6 rounded-lg items-center transition ease-in">
                <div className="flex items-center align-center p-4 rounded-full text-indigo-600">
                  <Linkedin className="w-10 h-10" />
                </div>
                <div className="flex flex-shrink-0 flex-col">
                  <span className="inline-block md:text-lg font-semibold">LinkedIn</span>
                  <div className="flex space-x-1 items-center">
                    <span>Conecta conmigo</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </a>
              <a href="https://vsco.co/coderdiaz/" target="_blank" rel="noreferer" className="flex space-x-4 bg-gray-50 hover:bg-orange-50 p-6 rounded-lg items-center transition ease-in">
                <div className="flex items-center align-center p-4 rounded-full text-gray-800">
                  <Aperture className="w-10 h-10" />
                </div>
                <div className="flex flex-shrink-0 flex-col">
                  <span className="inline-block md:text-lg font-semibold">VSCO</span>
                  <div className="flex space-x-1 items-center">
                    <span>Mis mejores fotografías</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="flex flex-col space-y-1 mb-4 md:mb-6">
              <h2 className="text-2xl font-bold">Como puedo ayudarte</h2>
              <p className="leading-relaxed text-gray-600">Estos son algunos de los servicios que puedo ofrecerte</p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="flex flex-col justify-between space-y-2 p-8 bg-gray-50 rounded-lg">
                <div className="flex flex-col space-y-2 mb-4">
                  <div className="relative mb-2">
                    <Box className="w-8 h-8 text-purple-600" />
                  </div>
                  <span className="inline-block text-xl font-semibold">Desarrollo de software</span>
                  <p className="leading-7 text-gray-700">Construyo increibles experiencias de software utilizando las mejores herramientas y tecnologías de acuerdo a tu producto.</p>
                </div>
                <a href="mailto: hey@coderdiaz.me" className="flex space-x-1 items-center uppercase font-semibold text-sm tracking-wider text-purple-600">
                  <span>Obtener cotización</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              <div className="flex flex-col justify-between space-y-2 p-8 bg-gray-50 rounded-lg">
                <div className="flex flex-col space-y-2 mb-4">
                  <div className="relative mb-2">
                  <Columns className="w-8 h-8 text-orange-500" />
                  </div>
                  <span className="inline-block text-xl font-semibold">Interfaces de usuario</span>
                  <p className="leading-7 text-gray-700">Desarrollo productos atractivos y amigables con el usuario, así como experiencias agradables que permitan a los usuarios alcanzar sus objetivos.</p>
                </div>
                <a href="https://dribbble.com/coderdiaz/" className="flex space-x-1 items-center uppercase font-semibold text-sm tracking-wider text-orange-600">
                  <span>Ir a Dribbble</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              <div className="flex flex-col md:col-span-2 space-y-2 p-8 bg-gray-50 rounded-lg">
                <div className="flex flex-col space-y-2 mb-4">
                  <div className="relative mb-2">
                    <Columns className="w-8 h-8 text-green-600" />
                  </div>
                  <span className="inline-block text-xl font-semibold">Mentorías + ADP List</span>
                  <p className="leading-7 text-gray-700">Cada persona tiene una historia y una meta. He aprendido un par de cosas durante mi carrera como ingeniero de software. Dejame ser tu mentor, puedo ayudarte a mejorar tus habilidades técnicas, de diseño de interfaces o acompañarte en tu búsqueda de empleo.</p>
                </div>
                <a href="https://adplist.org/mentors/javier-diaz" className="flex space-x-1 items-center uppercase font-semibold text-sm tracking-wider text-green-600">
                  <span>Agendar una mentoría</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

HireMePage.getLayout = (page: React.ReactElement) => {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  )
}
