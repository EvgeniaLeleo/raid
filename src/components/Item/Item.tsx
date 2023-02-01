import { FC } from 'react'
import { Link } from 'react-router-dom'

import style from './style.module.css'

type Props = { itemName: string }

export const Item: FC<Props> = ({ itemName }) => {
  const lowerCaseName = itemName.toLowerCase()

  return (
    <Link
      to={{ pathname: '/single.html', search: `?s=${lowerCaseName}` }}
      className={style.item}
    >
      {itemName}
    </Link>
  )
}
