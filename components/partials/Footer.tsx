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
    <footer className="py-6 md:pt-14 md:pb-8">
      <Container className="max-w-screen-lg">
        <div className="flex flex-col space-y-6 py-4">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start space-y-6 md:space-y-0">
            <div className="flex items-center space-x-3">
              <Headphones className="w-5 h-5 text-emerald-700" />
              <div className="inline-block text-gray-700 text-sm">
                {data?.songUrl ? <span>{data.title}</span> : <span>Nada sonando</span>} — {data?.artist ?? 'Spotify'}
              </div>
            </div>
            <div className="flex">
              <div className="text-gray-700 text-sm flex items-center space-x-2">
                <span className="inline-block">Desde 2015. Hecho en México</span>
                <Flag className="rounded-sm" />
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-2 text-gray-500">
                <Isotype className="w-6 h-6" />
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-between">
            <div className="block text-sm leading-none">
              Hecho con <a className="after:content-['_↗'] font-semibold" href="https://nextjs.org/" target="_blank">Next.js</a>, <a className="after:content-['_↗'] font-semibold" href="https://mdxjs.com/" target="_blank">MDX</a>, <a className="after:content-['_↗'] font-semibold" href="https://tailwindcss.com/" target="_blank">TailwindCSS</a> y potenciado por <a className="after:content-['_↗'] font-semibold" href="https://vercel.com/" target="_blank">Vercel</a>.
            </div>
            <div className="relative">
              <nav className="hidden md:inline-block">
                <ul className="flex items-center space-x-6">
                  <li>
                    <Link href="/que-uso/">
                      <a>Uses</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/work/">
                      <a>Proyectos</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contacto/">
                      <a>Contacto</a>
                    </Link>
                  </li>
                  <li>
                    <div className="w-1 h-1 rounded-full bg-gray-900" />
                  </li>
                  <li>
                    <a className="hover:text-rose-700" rel="noreferrer" href="https://github.com/coderdiaz/" target="_blank">
                      <GitHub className="w-5 h-5" />
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-rose-700" rel="noreferrer" href="https://twitter.com/coderdiaz/" target="_blank">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}