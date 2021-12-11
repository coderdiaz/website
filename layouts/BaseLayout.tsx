import Image from 'next/image'

import Background from '@assets/images/background.png'
import Container from '@components/partials/Container'
import Footer from '@components/partials/Footer'
import Header from '@components/partials/Header'

type LayoutProps = {
  children?: React.ReactNode
} 

export default function BaseLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div className="absolute -z-1 -top-14 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
        <div className="w-[108rem] flex-none flex justify-end opacity-80 mr-[-24rem]">
          <Image className="w-[71.75rem] flex-none max-w-none" src={Background} />
        </div>
      </div>
      <main className="relative">
        {children}
      </main>
      <Footer />
    </>
  )
}