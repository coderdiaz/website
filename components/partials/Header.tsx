import Link from 'next/link'
import { Moon, GitHub, Twitter, Command } from 'react-feather'

import Container from '@components/partials/Container'
import Isotype from '@components/partials/Isotype'
import { useKBar } from 'kbar'

export default function Header() {
  const { query } = useKBar()
  return (
    <header className="py-8">
      <Container className="relative max-w-screen-lg">
        <div className="relative z-10 items-center flex justify-between">
          <Link href="/">
            <a>
              <Isotype className="w-7 h-7" />
            </a>
          </Link>
          <div className="flex space-x-10 items-center">
            <nav className="hidden md:inline-block">
              <ul className="flex items-center space-x-6">
                <li>
                  <a className="hover:text-rose-600" rel="noreferrer" href="https://github.com/coderdiaz/" target="_blank">
                    <GitHub className="w-5 h-5" />
                  </a>
                </li>
                <li>
                  <a className="hover:text-rose-600" rel="noreferrer" href="https://twitter.com/coderdiaz/" target="_blank">
                    <Twitter className="w-5 h-5" />
                  </a>
                </li>
                <li>
                  <div className="w-1 h-1 rounded-full bg-gray-900" />
                </li>
                <li>
                  <Link href="/sobre-mi/">
                    <a>Acerca de</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog/">
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
            <button className="md:hidden outline-none text-gray-600 hover:text-gray-900 p-2 hover:bg-gray-200 focus:bg-gray-200 rounded-lg" onClick={query.toggle}>
              <Command className="w-6 h-6" />
            </button>
            <button className="hidden outline-none hover:text-orange-600">
              <Moon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}