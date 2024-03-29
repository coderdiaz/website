import Image from 'next/image'
import { ArrowUpRight } from 'react-feather'
import { ArrowNarrowRightIcon } from '@heroicons/react/solid'

import CustomLink from '@components/CustomLink'

type Props = {
  title: string
  tech: string[]
  description: string
  href?: string
  thumbnail: string
  link?: string
}

export default function WorkPost(props: Props) {
  return (
    <div className="grid lg:grid-cols-9 gap-5">
      <div className="lg:col-span-5 flex flex-col space-y-5">
        <div className="flex flex-col space-y-2">
          <CustomLink href={props.href}>
            <h3 className="font-semibold text-2xl">{props.title}</h3>
          </CustomLink>
          <div className="flex space-x-2">
            {props.tech.map((item, i: number) => (
              <span key={i} className="bg-gray-100 text-sm px-3 py-1 rounded-md">{item}</span>
            ))}
          </div>
        </div>
        <p className="leading-7 text-gray-700">{props.description}</p>
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
          <CustomLink className="py-5 px-6 flex justify-center md:justify-start items-center space-x-3 font-semibold text-white bg-gradient-to-tr from-rose-600 to-orange-600 hover:to-orange-500 rounded-lg" href={props.href}>
            <span>Leer caso de estudio</span>
            <ArrowNarrowRightIcon className="w-6 h-6" />
          </CustomLink>
          {props.link ? <a href={props.link} target="_blank" className="py-5 px-6 flex justify-center md:justify-start items-center space-x-3 font-semibold text-gray-900 bg-white md:bg-gray-100 hover:bg-gray-50 hover:text-black rounded-lg">
            <span>Ver en vivo</span>
            <ArrowUpRight className="w-6 h-6" />
          </a> : null}
        </div>
      </div>
      <div className="hidden md:inline-block lg:col-span-4 relative w-full h-64 md:h-96 lg:h-full">
        <Image
          className="w-full h-full rounded-lg"
          src={props.thumbnail}
          layout="fill"
          objectFit="cover"
          objectPosition="left" />
      </div>
    </div>
  )
}