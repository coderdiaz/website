type Props = {
  title: string
  summary: string
}

export default function Post({ title, summary }: Props) {
  return (
    <div className="flex flex-col space-y-1">
      <h3 className="font-bold md:text-lg">{title}</h3>
      <p className="leading-relaxed text-gray-700">{summary}</p>
    </div>
  )
}