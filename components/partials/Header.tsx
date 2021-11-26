import Link from 'next/link'
import { Moon, GitHub, Twitter } from 'react-feather'

import Container from '@components/partials/Container'
import Isotype from '@components/partials/Isotype'

export default function Header() {
  return (
    <header className="py-8">
      <Container className="relative max-w-screen-lg">
        <div className="relative z-10 flex justify-between">
          <Link href="/">
            <a>
              <Isotype className="w-7 h-7" />
            </a>
          </Link>
          <div className="flex space-x-10 items-center">
            <nav className="hidden md:inline-block">
              <ul className="flex items-center space-x-6">
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
                <li>
                  <div className="w-1 h-1 rounded-full bg-gray-900" />
                </li>
                <li>
                  <Link href="/about/">
                    <a>Acerca de</a>
                  </Link>
                </li>
                <li>
                  <Link href="/writing/">
                    <a>Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/work/">
                    <a>Proyectos</a>
                  </Link>
                </li>
              </ul>
            </nav>
            <button className="outline-none hover:text-orange-600">
              <Moon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Blobs */}
        <div className="absolute -top-16 z-0 -left-8 w-96 h-96 bg-yellow-200 rounded-full opacity-10 mix-blend-multiply filter blur-2xl animate-blob" />
        <div className="absolute -top-16 z-0 -right-8 w-96 h-96 bg-purple-500 rounded-full opacity-10 mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000" />
        <div className="absolute top-10 z-0 left-1/2 w-96 h-96 bg-pink-300 rounded-full opacity-10 mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000" />
      </Container>
    </header>
  );
}