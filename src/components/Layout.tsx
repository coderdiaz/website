import Footer from "./Footer";
import Header from "./Header";
import Head from "./Head";

const Layout = ({ children }) => <>
  <Head />
  <Header />
  <main className="py-2 overflow-x-hidden">
    {children}
  </main>
  <Footer />
</>;

export default Layout;