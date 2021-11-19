export type Frontmatter = {
  [key: string]: any
}

export type BundlerResult = {
  code: string
  frontmatter: Frontmatter
}

export type CommonProps = {
  className?: string
  children?: React.ReactNode
}

export type PageProps = {} & BundlerResult

export type ImageProps = {
  src: string
  alt?: string
  width: number
  height: number
  caption?: string
}
