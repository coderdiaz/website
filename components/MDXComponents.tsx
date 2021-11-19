import Image from 'next/image'
import type { ImageProps } from '@lib/types'
import CustomLink from './CustomLink'

const RoundedImage = (props: ImageProps) => {
  return <figure>
    <Image
      width={props.width}
      height={props.height}
      alt={props.alt} className="rounded-lg"
      src={props.src} />
    { props.caption ? <figcaption className="block text-center">{props.caption}</figcaption> : null }
  </figure>
}

const MDXComponents = {
  Image: RoundedImage,
  a: CustomLink,
}

export default MDXComponents
