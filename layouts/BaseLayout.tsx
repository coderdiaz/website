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
      <main className="relative">
        <Container className="hidden md:block relative max-w-screen-lg overflow-x-none opacity-90">
          {/* Blobs */}
          <div className="absolute -top-16 z-0 -left-8 w-20 h-20 md:w-96 md:h-96 bg-yellow-200 rounded-full opacity-10 mix-blend-multiply filter blur-2xl animate-blob" />
          <div className="absolute -top-16 z-0 -right-8 w-20 h-20 md:w-96 md:h-96 bg-purple-500 rounded-full opacity-10 mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000" />
          <div className="absolute top-10 -ml-48 z-0 left-1/2 w-20 h-20 md:w-96 md:h-96 bg-pink-300 rounded-full opacity-10 mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000" />
        </Container>
        {children}
      </main>
      <Footer />
    </>
  )
}