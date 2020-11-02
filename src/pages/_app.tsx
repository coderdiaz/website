import "@/assets/css/global.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Router from "next/router";
import withGa from "next-ga";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default withGa("UA-169353371-1", Router)(MyApp);
