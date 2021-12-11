import '@styles/global.css'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { KBarProvider } from 'kbar'
import { FileText, Home, Box, User, Tool, AtSign, Twitter, GitHub, Linkedin } from 'react-feather'
import PlausibleProvider from 'next-plausible'

import KBarMenu from '@components/KBarMenu'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => JSX.Element
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter()
  const getLayout = Component.getLayout ?? ((page) => page)

  // Actions
  const initialActions = [
    {
      id: 'homeAction',
      name: 'Pagina de inicio',
      shortcut: ['h'],
      keywords: 'back',
      icon: <Home width={16} height={16} />,
      perform: () => router.push('/'),
      section: 'Navegación',
    },
    {
      id: 'blogAction',
      name: 'Blog',
      shortcut: ['g'],
      icon: <FileText width={16} height={16} />,
      perform: () => router.push('/blog/'),
      section: 'Navegación',
    },
    {
      id: 'workAction',
      name: 'Mis trabajos y proyectos',
      shortcut: ['w'],
      icon: <Box width={16} height={16} />,
      perform: () => router.push('/work/'),
      section: 'Navegación',
    },
    {
      id: 'aboutAction',
      name: 'Sobre mī',
      shortcut: ['s'],
      icon: <User width={16} height={16} />,
      perform: () => router.push('/sobre-mi/'),
      section: 'Navegación',
    },
    {
      id: 'usesAction',
      name: '¿Qué uso?',
      shortcut: ['q'],
      icon: <Tool width={16} height={16} />,
      perform: () => router.push('/que-uso/'),
      section: 'Navegación',
    },
    {
      id: 'contactoAction',
      name: 'Ponte en contacto',
      shortcut: ['s'],
      icon: <AtSign width={16} height={16} />,
      perform: () => router.push('/contacto/'),
      section: 'Navegación',
    },
    {
      id: 'github',
      name: 'Github',
      shortcut: ['f', 'g'],
      keywords: 'go-github',
      section: 'Redes Sociales',
      perform: () => (window.open('https://github.com/coderdiaz', '_blank')),
      icon: <GitHub width={16} height={16} />,
    },
    {
      id: 'twitter',
      name: 'Twitter',
      shortcut: ['f', 't'],
      keywords: 'go-twitter',
      section: 'Redes Sociales',
      perform: () => (window.open('https://twitter.com/coderdiaz', '_blank')),
      icon: <Twitter width={16} height={16} />,
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      shortcut: ['f', 'l'],
      keywords: 'go-linkedin',
      section: 'Redes Sociales',
      perform: () => (window.open('https://linkedin.com/in/coderdiaz', '_blank')),
      icon: <Linkedin width={16} height={16} />,
    },
  ]
  return (
    <>
      <PlausibleProvider domain="coderdiaz.me">
        <KBarProvider actions={initialActions}>
          <KBarMenu />
          { getLayout(<Component {...pageProps} />) }
        </KBarProvider>
      </PlausibleProvider>
    </>
  )
}

export default MyApp;
