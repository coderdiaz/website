import NextHead from "next/head";
import { useRouter } from "next/router";
import SiteMetadata from "@/seo.config";

interface IHeadProps {
  meta?: {
    title?: string;
    description?: string;
    keywords?: string[];
    image?: string;
  };
}

const Head = ({ meta = {} }: IHeadProps) => {
  const router = useRouter();
  const {
    title,
    description,
    keywords,
  } = SiteMetadata;

  return <NextHead>
    <meta charSet="UTF-8" />
    <title>{meta.title || title }</title>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="preconnect" href="https://www.google-analytics.com" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta content={meta.description || description} name="description" />
    <meta content={meta.keywords ? meta.keywords.join(',') : keywords.join(',')} name="keywords" />
    {/** OpenGraph Metadata */}
    <meta property="og:url" content={`https://coderdiaz.me${router.asPath}`} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={meta.title || title } />
    <meta property="og:title" content={meta.title || title } />
    <meta property="og:description" content={meta.description ||description } />
    {/** End OpenGraph Metadata */}
    {/** Twitter Metadata */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@coderdiaz" />
    <meta name="twitter:title" content={meta.title || title} />
    <meta name="twitter:description" content={meta.description || description} />
    {/** End Twitter Metadata */}
  </NextHead>
}

export default Head;