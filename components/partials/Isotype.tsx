type Props = {
  className?: string
}

export default function Isotype({ className }: Props) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 22 26">
      <path
        strokeLinecap="round"
        strokeWidth="1.68"
        d="M1 15.941c0 1 .308 1.979.885 2.81a5.213 5.213 0 002.356 1.864c.96.383 2.015.483 3.034.288a5.315 5.315 0 002.688-1.385c.734-.707 1.437-1.5 1.437-2.59v-3.113s0 0 0 0V1" />
      <path
        strokeLinecap="round"
        strokeWidth="1.68"
        d="M11.4 6.6a9.2 9.2 0 110 18.4" />
    </svg>
  )
}