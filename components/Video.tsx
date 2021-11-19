import Image from 'next/image'
import { PlayIcon } from '@heroicons/react/solid'

type Props = {
  title: string
  summary: string
  thumbnail: string
}

export default function Video({ title, summary, thumbnail }: Props) {
  return (
    <div className="flex flex-col space-y-4">
      <div className="relative">
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
      </div>
      <div className="flex flex-col space-y-1">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="leading-7 text-gray-700">{summary}</p>
      </div>
    </div>
  )
}