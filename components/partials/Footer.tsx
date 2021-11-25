import Link from 'next/link'
import useSWR from 'swr'
import { Headphones, GitHub, Twitter } from 'react-feather'

import fetcher from '@lib/fetcher'
import Flag from '@components/Flag'
import Container from '@components/partials/Container'
import Isotype from '@components/partials/Isotype'

export default function Footer() {
  const { data } = useSWR('/api/now-playing', fetcher);

  return (
    <footer>
      <Container className="max-w-screen-lg">
        <div className="flex flex-col space-y-6 py-4">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start space-y-6 md:space-y-0">
            <div className="flex items-center space-x-3">
              <Headphones className="w-5 h-5 text-green-600" />
              <div className="inline-block text-gray-600 text-sm">
                {data?.songUrl ? <span>{data.title}</span> : <span>Nada sonando</span>} — {data?.artist ?? 'Spotify'}
              </div>
            </div>
            <div className="flex">
              <div className="text-gray-600 text-sm flex items-center space-x-2">
                <span className="inline-block">Desde 2015. Hecho en México</span>
                <Flag className="rounded-sm" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <section className="bg-gray-900 text-gray-300 mt-8 md:mt-4 py-10 md:py-8">
        <Container className="max-w-screen-lg">
          <div className="relative">
            <div className="relative flex justify-center">
              <span className="absolute -top-14 md:-top-12 bg-gray-900 p-2 text-gray-500 rounded-full">
                <Isotype className="w-6 h-6" />
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-between">
            <div className="block text-sm leading-none">
              Hecho con Next.js, MDX, Vercel y TailwindCSS
            </div>
            <div className="relative">
              <nav className="hidden md:inline-block">
                <ul className="flex items-center space-x-6">
                  <li>
                    <Link href="/uses/">
                      <a>Uses</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/work/">
                      <a>Proyectos</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact/">
                      <a>Contacto</a>
                    </Link>
                  </li>
                  <li>
                    <div className="w-1 h-1 rounded-full bg-gray-900" />
                  </li>
                  <li>
                    <a className="hover:text-orange-600" rel="noreferrer" href="https://github.com/coderdiaz/" target="_blank">
                      <GitHub className="w-5 h-5" />
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-orange-600" rel="noreferrer" href="https://twitter.com/coderdiaz/" target="_blank">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </Container>
      </section>
    </footer>
  )
}