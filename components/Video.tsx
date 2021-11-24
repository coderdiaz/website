import Image from 'next/image'
import { PlayIcon } from '@heroicons/react/solid'

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
          <div className="bg-gray-800 bg-opacity-30 w-full h-full flex items-center justify-center absolute top-0 rounded-lg z-10">
            <div className="rounded-full p-1">
              <PlayIcon className="w-16 h-16 text-white" />
            </div>
          </div>
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
          <h3 className="text-lg font-bold">{title}</h3>
        </CustomLink>
        <p className="leading-7 text-gray-700">{summary}</p>
      </div>
    </div>
  )
}