import Footer from "./Footer";
import Header from "./Header";
import Head from "./Head";

const Layout = ({ children }) => <>
  <Head />
  <Header />
  <main>
    {children}
  </main>
  <Footer />
</>;

export default Layout;