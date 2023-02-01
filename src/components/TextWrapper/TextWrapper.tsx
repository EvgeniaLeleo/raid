import { FC, ReactNode } from 'react'

import style from './style.module.css'

type Props = {
  children: ReactNode
  minHeight?: string | number
}

export const TextWrapper: FC<Props> = ({ children, minHeight = '87px' }) => {
  return (
    <div className={style.textWrapper} style={{ minHeight: minHeight }}>
      {children}
    </div>
  )
}
