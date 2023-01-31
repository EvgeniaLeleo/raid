import { FC } from 'react'
import { Link } from 'react-router-dom'

import style from './style.module.css'

type Props = { itemName: string }

export const Item: FC<Props> = ({ itemName }) => {
  return (
    <Link to={`/single.html/${itemName}`} className={style.item}>
      {itemName}
    </Link>
  )
}
