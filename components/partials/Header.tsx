import Link from 'next/link'
import { Moon, GitHub, Twitter } from 'react-feather'

import Container from '@components/partials/Container'
import Isotype from '@components/partials/Isotype'

export default function Header() {
  return (
    <header className="py-8">
      <Container className="max-w-screen-lg">
        <div className="flex justify-between">
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
                  <Link href="/about">
                    <a>Acerca de</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <a>Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/work">
                    <a>Proyectos</a>
                  </Link>
                </li>
              </ul>
            </nav>
            <button className="outline-none hover:text-rose-600">
              <Moon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}