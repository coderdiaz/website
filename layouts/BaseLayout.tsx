import Footer from '@components/partials/Footer'
import Header from '@components/partials/Header'

type LayoutProps = {
  children?: React.ReactNode
} 

export default function BaseLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="relative">{children}</main>
      <Footer />
    </>
  )
}