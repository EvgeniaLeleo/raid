import { FC, ReactNode } from 'react'

import style from './style.module.css'

type Props = {
  children: ReactNode
}

export const TextWrapper: FC<Props> = ({ children }) => {
  return <div className={style.textWrapper}>{children}</div>
}
