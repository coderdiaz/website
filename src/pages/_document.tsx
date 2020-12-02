import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import Banner from "@/components/Banner";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return await Document.getInitialProps(ctx);;
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="font-display leading-normal antialiased overflow-x-hidden">
          <script src="js/noflash.js" />
          <Banner />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;