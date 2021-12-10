import clsx from 'clsx'
import type { CommonProps } from '@lib/types'

type Props = {} & CommonProps

export default function Container({ className, children }: Props) {
  return (
    <div className={clsx('px-4 sm:px-6 lg:px-8 mx-auto relative z-10', className)}>
      {children}
    </div>
  );
}
