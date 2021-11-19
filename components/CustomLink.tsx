import Link from 'next/link'
import type { CommonProps } from '@lib/types'

type Props = {
  href?: string
} & CommonProps

export default function CustomLink(props: Props) {
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