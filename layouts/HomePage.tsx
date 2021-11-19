import Image from 'next/image'
import { PaperAirplaneIcon } from '@heroicons/react/outline'
import { Twitter } from 'react-feather'
import { RoughNotation } from 'react-rough-notation'

import Container from '@components/partials/Container'
import Avatar from '@assets/images/avatar.png'

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
      </section>
    </>
  )
}
