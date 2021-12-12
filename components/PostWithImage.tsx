import Image from 'next/image'
import CustomLink from '@components/CustomLink'

type Props = {
  title: string
  summary: string
  thumbnail: string
  href?: string
}

export default function PostWithImage({ title, summary, thumbnail, href }: Props) {
  return (
    <CustomLink href={href}>
      <div className="flex flex-col space-y-3">
        <div className="relative">
          <Image
            className="w-full h-full rounded-lg"
            width={976/2}
            height={580/2}
            src={thumbnail} />
        </div>
        <div className="flex flex-col space-y-1">
          <h3 className="font-semibold md:text-lg">{title}</h3>
          <p className="leading-7 text-gray-700">{summary}</p>
        </div>
      </div>
    </CustomLink>
  )
}