import Link from 'next/link'
import Image from 'next/image'
import type { CommonProps, ImageProps } from '@lib/types'

type Props = {
  href?: string
} & CommonProps

const CustomLink = (props: Props) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    )
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

const RoundedImage = (props: ImageProps) => {
  return <figure>
    <Image
      width={props.width}
      height={props.height}
      alt={props.alt} className="rounded-lg"
      src={props.src} />
    <figcaption>{props.caption}</figcaption>
  </figure>
}

const MDXComponents = {
  Image: RoundedImage,
  a: CustomLink,
}

export default MDXComponents
