import Image from 'next/image'

import CustomLink from '@components/CustomLink'

type Props = {
  title: string
  summary: string
  thumbnail: string
  href?: string
}

export default function Video({ title, summary, thumbnail, href }: Props) {
  return (
    <div className="flex flex-col space-y-4">
      <div className="relative">
        <CustomLink href={href}>
          <div className="bg-gray-800 bg-opacity-20 w-full h-full flex items-center justify-center absolute top-0 rounded-lg z-10" />
          <Image
            className="w-full h-full rounded-lg"
            layout="responsive"
            width={976/2}
            height={580/2}
            src={thumbnail} />
        </CustomLink>
      </div>
      <div className="flex flex-col space-y-1">
        <CustomLink href={href}>
          <h3 className="text-lg font-semibold">{title}</h3>
        </CustomLink>
        <p className="leading-7 text-gray-600">{summary}</p>
      </div>
    </div>
  )
}